import React from 'react';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import Header from './components/Header';
import AppGrid from './components/AppGrid';
import AppFooter from './components/Footer';
import { apps } from './data/apps';

const { Content } = Layout;

// Styled Components
const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: #fafafa;
`;

const StyledContent = styled(Content)`
  padding: 80px 24px 60px;

  @media (max-width: 768px) {
    padding: 60px 16px 40px;
  }

  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  const handleAppClick = (url) => {
    window.location.href = url;
  };

  return (
    <StyledLayout>
      <StyledContent>
        <ContentWrapper>
          <Header />
          <AppGrid apps={apps} onAppClick={handleAppClick} />
        </ContentWrapper>
      </StyledContent>
      <AppFooter />
    </StyledLayout>
  );
}

export default App;

