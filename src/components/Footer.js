import React from 'react';
import styled from '@emotion/styled';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Paragraph } = Typography;

const StyledFooter = styled(Footer)`
  text-align: center;
  background: transparent;
  padding: 24px;
  border-top: 1px solid #f0f0f0;
`;

function AppFooter() {
  return (
    <StyledFooter>
      <Paragraph type="secondary" style={{ margin: 0 }}>
        Built with React + Firebase Hosting
      </Paragraph>
    </StyledFooter>
  );
}

export default AppFooter;

