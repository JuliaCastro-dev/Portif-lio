import * as React from 'react';
import { HomeContainer } from "./styles"
import {Tabs, Box, Tab, Typography} from '@mui/material';

export function Home() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return ( 
    <HomeContainer>
      <Typography variant='h2'>Julia Castro</Typography>
      <Typography variant='h5'>Software Engineer</Typography>
      <Typography variant='h4'>Me conheça</Typography>
      <Box sx={{ width: '100%', position:'relative' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab value="About" label="Item One" />
        <Tab value="training" label="Item Two" />
        <Tab value="Experiences" label="Item Three" />
      </Tabs>
    </Box>

    <Typography variant='h4'>Habilidades</Typography>

    <Typography variant='h4'>Projetos</Typography>

    </HomeContainer>
  )
}