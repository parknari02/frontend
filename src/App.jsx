import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import NewsPage from './pages/News/NewsPage';
import AgoraPage from './pages/agora/AgoraPage';
import TrendPage from './pages/trend/TrendPage';
import MyPage from './pages/my/MyPage';
import NewsListPage from './pages/News/NewsListPage';
import NewsDetailPage from './pages/News/NewsDetailPage';
import AgoraCreatePage from './pages/agora/AgoraCreatePage';
import AgoraChatPage from './pages/agora/AgoraChatPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path='/agora' element={<AgoraPage />} />
          <Route path='/trend' element={<TrendPage />} />
          <Route path='/my' element={<MyPage />} />
          <Route path='/news-list' element={<NewsListPage />} />
          <Route path='/news-detail' element={<NewsDetailPage />} />
          <Route path='/agora/create' element={<AgoraCreatePage />} />
          <Route path='/agora/chat/:agoraId' element={<AgoraChatPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
