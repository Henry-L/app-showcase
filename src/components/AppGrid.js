import React from 'react';
import styled from '@emotion/styled';
import AppCard from './AppCard';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Divider = styled.div`
  margin: 40px 0;
  padding: 0;
  border-bottom: 1px solid #d9d9d9;
  position: relative;

  &::after {
    content: 'Test Apps';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: #fafafa;
    padding: 0 16px;
    color: #999;
    font-size: 14px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin: 32px 0;
  }
`;

function AppGrid({ apps, onAppClick }) {
  const realApps = apps.filter(app => !app.isTest);
  const testApps = apps.filter(app => app.isTest);

  return (
    <Container>
      <GridContainer>
        {realApps.map((app) => (
          <AppCard 
            key={app.id} 
            app={app} 
            onClick={onAppClick} 
          />
        ))}
      </GridContainer>

      {testApps.length > 0 && (
        <>
          <Divider />
          <GridContainer>
            {testApps.map((app) => (
              <AppCard 
                key={app.id} 
                app={app} 
                onClick={onAppClick} 
              />
            ))}
          </GridContainer>
        </>
      )}
    </Container>
  );
}

export default AppGrid;

