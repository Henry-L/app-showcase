import React from 'react';
import styled from '@emotion/styled';
import { Card, Typography, Space, Tag } from 'antd';

const { Title, Paragraph } = Typography;

const StyledCard = styled(Card)`
  border-radius: 8px;
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid #e8e8e8;
  background: white;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardTop = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const AppIcon = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 24px;
  }
`;

const CardText = styled.div`
  flex: 1;
  min-width: 0;
`;

const CardTags = styled.div`
  padding-left: 0;
`;

function AppCard({ app, onClick }) {
  return (
    <StyledCard
      hoverable
      onClick={() => onClick(app.url)}
      style={{ borderLeft: `4px solid ${app.color}` }}
    >
      <CardContent>
        <CardTop>
          <AppIcon style={{ 
            color: app.color,
            backgroundColor: `${app.color}15`
          }}>
            {app.icon}
          </AppIcon>
          <CardText>
            <Title level={4} style={{ marginBottom: 4, marginTop: 0 }}>
              {app.title}
            </Title>
            <Paragraph type="secondary" style={{ marginBottom: 0, fontSize: '14px' }}>
              {app.description}
            </Paragraph>
          </CardText>
        </CardTop>
        <CardTags>
          <Space wrap>
            {app.tags.map((tag) => (
              <Tag key={tag}>
                {tag}
              </Tag>
            ))}
          </Space>
        </CardTags>
      </CardContent>
    </StyledCard>
  );
}

export default AppCard;

