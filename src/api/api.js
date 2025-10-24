import axios from "axios";

// 환경별 API URL 설정
const getBaseURL = () => {
  // 환경변수가 설정되어 있으면 사용
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // 프로덕션 환경에서는 Vercel 프록시 사용
  if (import.meta.env.PROD) {
    return ""; // 빈 문자열로 설정하면 현재 도메인 사용
  }
  
  // 개발 환경에서는 직접 HTTP 서버 사용
  return "http://13.209.157.48:8080";
};

const BASE_URL = getBaseURL();

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let isRefreshing = false;
let refreshSubscribers = [];

function onRefreshed(newToken) {
  refreshSubscribers.forEach((callback) => callback(newToken));
  refreshSubscribers = [];
}

function addRefreshSubscriber(callback) {
  refreshSubscribers.push(callback);
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if ((error.response?.status === 401  )&& !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber((newToken) => {
            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
            resolve(api(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await axios.post(`${BASE_URL}/api/reissue`, {}, { withCredentials: true });
        const newAccessToken = res.headers["authorization"]?.replace("Bearer ", "");

        if (newAccessToken) {
          localStorage.setItem("accessToken", newAccessToken);
          api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
          onRefreshed(newAccessToken);
        }

        return api(originalRequest);
      } catch (refreshError) {
        console.error("🔴 토큰 재발급 실패:", refreshError);
        localStorage.clear();
        window.location.href = "/signin";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;