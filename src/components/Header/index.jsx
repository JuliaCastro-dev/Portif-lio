import React from 'react';
import { HeaderContainer, Nav, SubTitle, Title, Box } from './styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
const Header = () => {
  return (
    <HeaderContainer>
      <Box>
        <Title>Julia.Dev</Title>
        <SubTitle>Software Engineer</SubTitle>
      </Box>

      <Nav>
        <li>
          <LinkedInIcon fontSize='large' />
          <a href="#">Linkedin</a>
        </li>
        <li>
          <GitHubIcon fontSize='large' />
          <a href="#">Github</a>
        </li>
        <li>
          <ForwardToInboxIcon fontSize='large' />
          <a href="#">E-mail</a>
        </li>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
