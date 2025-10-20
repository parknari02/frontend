import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import ListItem from "../../components/common/ListItem";
import styled from 'styled-components';
import { useState, useRef, useCallback } from 'react';
import SearchBar from "../../components/common/SearchBar";
import TrendAnalysisCard from "../../components/trend/TrendAnalysisCard";
import { useEffect } from 'react';
import api from "../../api/api";

const TrendPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('이슈');
  const categories = ['이슈', '경제', 'IT/과학', '문화', '정치', '사회', '글로벌'];
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const observer = useRef();

  // 카테고리 매핑
  const categoryMapping = {
    '이슈': 'ETC',
    '경제': 'ECONOMY',
    'IT/과학': 'IT',
    '문화': 'CULTURE',
    '정치': 'POLITICS',
    '사회': 'SOCIETY',
    '글로벌': 'GLOBAL',
  };

  //POLITICS, ECONOMY, SOCIETY, CULTURE, IT, GLOBAL, ETC

  const formatDate = (publishDate) => {
    if (!publishDate || publishDate.length < 5) return '';
    const [year, month, day, hour, minute] = publishDate;
    const now = new Date();
    const articleDate = new Date(year, month - 1, day, hour, minute);
    const diffMs = now - articleDate;
    const diffMinutes = Math.floor(diffMs / (1000 * 60));

    if (diffMinutes < 60) {
      return `${diffMinutes}분 전`;
    } else if (diffMinutes < 1440) {
      return `${Math.floor(diffMinutes / 60)}시간 전`;
    } else {
      return `${Math.floor(diffMinutes / 1440)}일 전`;
    }
  };

  const cleanText = (text) => {
    if (!text) return '';
    return text
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&nbsp;/g, ' ');
  };

  const getTrendData = useCallback(async (pageNum = 1, reset = false) => {
    try {
      console.log("getTrendData 시작 - page:", pageNum, "reset:", reset);
      setLoading(true);
      const categoryParam = categoryMapping[selectedCategory];
      const params = {
        page: pageNum,
        size: 10,
        ...(categoryParam && { category: categoryParam })
      };

      console.log("API 요청 파라미터:", params);
      const res = await api.get("/api/articles", { params });
      console.log("API 응답:", res.data);

      if (res.data.isSuccess) {
        const newArticles = res.data.response.articleList;
        console.log("새로운 기사들:", newArticles);
        if (reset) {
          setArticles(newArticles);
        } else {
          setArticles(prev => [...prev, ...newArticles]);
        }
        setHasMore(newArticles.length === 10);
      }
    } catch (err) {
      console.error("API 요청 실패:", err);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);

  const getTrendStats = async () => {
    try {
      console.log("getTrendStats 시작");
      const res = await api.get("/api/stats/trend");
      console.log("getTrendStats 성공:", res.data);
    } catch (err) {
      console.error("getTrendStats 실패:", err);
    }
  }


  useEffect(() => {
    getTrendData(1, true);
    getTrendStats();
  }, []);

  // 무한 스크롤을 위한 마지막 요소 참조
  const lastArticleElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        const nextPage = page + 1;
        setPage(nextPage);
        getTrendData(nextPage, false);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore, page, getTrendData]);

  // 카테고리 변경 시 데이터 리셋
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(1);
    setHasMore(true);
    getTrendData(1, true);
  };

  useEffect(() => {
    getTrendData(1, true);
  }, [getTrendData]);

  return (
    <PageContainer>
      <Header content="trend" />
      <SearchBar />
      <CategorySection>
        <CategoryButtons>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              active={selectedCategory === category}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryButtons>
      </CategorySection>
      <ContentSection>
        <IssueKeywordCard>
          <CardTitle>이슈 키워드</CardTitle>
          <KeywordIcon>☔</KeywordIcon>
          <KeywordText>폭우</KeywordText>
        </IssueKeywordCard>
        <TrendAnalysisCard
          title="트렌드 분석"
          label="지표"
          data={[8, 12, 18, 28, 22]} // 원하는 데이터 값 전달
        />
      </ContentSection>
      <ListCard>
        {loading ? (
          <LoadingText>기사를 불러오는 중...</LoadingText>
        ) : articles.length === 0 ? (
          <EmptyText>기사가 없습니다.</EmptyText>
        ) : (
          articles.map((article, index) => (
            <ListItem
              key={article.id}
              id={article.id}
              category={selectedCategory}
              title={cleanText(article.title)}
              time={formatDate(article.publishDate)}
              isLast={index === articles.length - 1}
              ref={index === articles.length - 1 ? lastArticleElementRef : null}
            />
          ))
        )}
      </ListCard>
      <Footer />
    </PageContainer>
  );
};

export default TrendPage;

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0 26px 120px 26px;
  background: linear-gradient(180deg, rgba(6, 6, 250, 0) 0%, rgba(22, 6, 250, 0.2) 100%), #FFFFFF;
`;

const CategorySection = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CategoryButtons = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const CategoryButton = styled.button`
  background: ${props => props.active ? '#8484FF' : 'white'};
  color: ${props => props.active ? 'white' : '#8484FF'};
  border: 0.5px solid #8484FF;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
`;

const ContentSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const IssueKeywordCard = styled.div`
  flex: 1;
  aspect-ratio: 1;
  background: white;
  border-radius: 22px;
  padding: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
`;


const CardTitle = styled.h3`
  font-size: 12px;
  font-weight: 500;
  color: #666;
`;

const KeywordIcon = styled.div`
  font-size: 52px;
  margin-top: 14px;
  margin-bottom: 4px;
`;

const KeywordText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #888;
`;

const AnalysisLabel = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 8px;
  opacity: 0.8;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const ListCard = styled.div`
  margin-top: 24px;
  padding: 8px 28px;  
  border-radius: 22px;
  background: #FFF;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.10);
`;

const LoadingText = styled.div`
  text-align: center;
  color: #999;
  font-size: 14px;
  padding: 20px;
`;

const EmptyText = styled.div`
  text-align: center;
  color: #999;
  font-size: 14px;
  padding: 20px;
`;