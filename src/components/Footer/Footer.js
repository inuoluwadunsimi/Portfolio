import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
           <LinkItem href='tel:=+2348130403790'>+2348130403790</LinkItem>
        
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
           <LinkItem href='mailto:contact@danielolaoladeinde@gmail.com'>danielolaoladeinde@gmail.com</LinkItem>
        
        </LinkColumn>
      
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Changing the world one project after the other</Slogan>
        </CompanyContainer>
        <SocialContainer>
          
        
          <SocialIcons  href="https://github.com/inuoluwadunsimi">
             <AiFillGithub  size='3rem'/>
           </SocialIcons>
         <SocialIcons  href="https://www.linkedin.com/in/inuoluwadunsimi-ola-oladeinde-1318b621a/">
           <AiFillLinkedin  size='3rem'/>
           </SocialIcons>
        <SocialIcons  href="https://twitter.com/inuoluwadunsiml">
         <AiFillTwitterCircle  size='3rem'/>
        </SocialIcons>
        </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
