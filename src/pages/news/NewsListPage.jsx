import styled from 'styled-components';
import Header from '../../components/common/Header';
import SearchBar from '../../components/common/SearchBar';
import NewsDetailList from '../../components/news/list/NewsDetailList';

const NewsListPage = () => {
    return (
        <PageContainer>
            <Header content='news' />
            <ContentContainer>
                <SearchBar bgColor="transparent" />
                <NewsDetailList />
            </ContentContainer>
        </PageContainer>
    );
}

export default NewsListPage;

const PageContainer = styled.div`
    min-height: 100vh;
    padding: 0 26px 42px 26px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
`;