export default async function handler(req, res) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  // OPTIONS 요청 처리 (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // 원본 서버 URL
    const targetUrl = `http://13.209.157.48:8080${req.url}`;
    
    // 요청 헤더 복사 (중요한 헤더만)
    const headers = {
      'Content-Type': req.headers['content-type'] || 'application/json',
    };
    
    // Authorization 헤더가 있으면 복사
    if (req.headers.authorization) {
      headers['Authorization'] = req.headers.authorization;
    }
    
    // Cookie 헤더가 있으면 복사
    if (req.headers.cookie) {
      headers['Cookie'] = req.headers.cookie;
    }

    // 요청 옵션 설정
    const options = {
      method: req.method,
      headers,
    };

    // POST, PUT, PATCH 요청의 경우 body 포함
    if (['POST', 'PUT', 'PATCH'].includes(req.method) && req.body) {
      options.body = JSON.stringify(req.body);
    }

    // 원본 서버로 요청 전송
    const response = await fetch(targetUrl, options);
    
    // 응답 헤더 복사
    const responseHeaders = {};
    response.headers.forEach((value, key) => {
      // 중요한 헤더만 복사
      if (['content-type', 'authorization', 'set-cookie'].includes(key.toLowerCase())) {
        responseHeaders[key] = value;
      }
    });

    // 응답 데이터 가져오기
    const data = await response.text();
    
    // 응답 전송
    res.status(response.status);
    
    // 헤더 설정
    Object.entries(responseHeaders).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    
    res.send(data);
    
  } catch (error) {
    console.error('프록시 오류:', error);
    res.status(500).json({ error: '프록시 서버 오류' });
  }
}
