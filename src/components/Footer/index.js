import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SocialLinks = styled.div`
  a {
    color: #fff;
    margin-right: 20px;
  }

  a:hover {
    color: #eee;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com/KangaZero" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
        <a href="https://facebook.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} />
        </a>
      </SocialLinks>
      <p>Copyright {new Date().getFullYear()}</p>
    </FooterContainer>
  );
}

export default Footer;