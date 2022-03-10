import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const onClick = (e) =>{
  window.location = 'mailto:danielolaoladeinde@gmail.com'
}

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, <br/>
        I am Inuoluwadunsimi
      </SectionTitle>
      <SectionText>
        I am a react based front-end developer constantly learning and evolving with the aim of going full stack in the MERN stack, I am very ambitious and purpose driven.
      </SectionText>
      <Button onClick={onClick}> Hire me!</Button>
    </LeftSection>
  </Section>
);

export default Hero;