import React from 'react';
import styled from '@emotion/styled';
import AppCard from './AppCard';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0;
  }
`;

function AppGrid({ apps, onAppClick }) {
  return (
    <GridContainer>
      {apps.map((app) => (
        <AppCard 
          key={app.id} 
          app={app} 
          onClick={onAppClick} 
        />
      ))}
    </GridContainer>
  );
}

export default AppGrid;

