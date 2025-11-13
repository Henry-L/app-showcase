import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import titleImage from '../images/handwritten_title.png';

const { Paragraph } = Typography;

const IntroSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
  padding: 0 24px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    padding: 0 16px;
  }
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const TitleImage = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }

  @media (max-width: 480px) {
    max-width: 280px;
  }
`;

const ExpandButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: all 0.3s ease;
  border-radius: 4px;

  &:hover {
    background: #f5f5f5;
    color: #000;
  }

  .anticon {
    transition: transform 0.3s ease;
  }

  &.expanded .anticon {
    transform: rotate(180deg);
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 6px;
  }
`;

const DescriptionSection = styled.div`
  max-width: 800px;
  margin: 24px auto 0;
  padding: 24px;
  background: #f9f9f9;
  border-radius: 12px;
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const MainDescription = styled(Paragraph)`
  font-size: 16px !important;
  color: rgba(0, 0, 0, 0.7) !important;
  margin-bottom: 0 !important;
  line-height: 1.7 !important;
  text-align: left !important;

  @media (max-width: 480px) {
    font-size: 15px !important;
  }
`;

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <IntroSection>
      <TitleSection>
        <TitleImage 
          src={titleImage} 
          alt="Henry's App Showcase" 
          onClick={toggleExpanded}
        />
        <ExpandButton 
          className={isExpanded ? 'expanded' : ''}
          onClick={toggleExpanded}
          aria-label="Toggle description"
        >
          <DownOutlined />
        </ExpandButton>
      </TitleSection>
      
      {isExpanded && (
        <DescriptionSection>
          <MainDescription>
            I'm currently on parental leave and have set myself a challenge: create one application a day using AI. 
            Between playing with my daughter and the necessary contact naps, time is limited—but I'm using every 
            available moment to deepen my understanding of AI-assisted development, the GCP environment, and 
            programming languages I haven't worked with much before.
          </MainDescription>
          <MainDescription style={{ marginTop: 16 }}>
            Each app here represents a day's work—whatever I can build and ship by end of day. Some will be simple, 
            others more ambitious, but all are learning experiences.
          </MainDescription>
        </DescriptionSection>
      )}
    </IntroSection>
  );
}

export default Header;

