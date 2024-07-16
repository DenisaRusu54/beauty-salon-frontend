
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardHeader, CardContent } from '@mui/material';
import hair3 from '../assets/hair3.jpg';
import hairvideo from '../assets/hairvideo.mp4';

const servicesData = [
  {
    category: 'Tuns/Tratament/Spălat',
    subcategories: [
      { name: 'Tuns', prices: ['Tuns păr scurt: 90 lei', 'Tuns păr mediu: 100 lei', 'Tuns păr lung: 130+ lei'] },
      { name: 'Tratament Davines', prices: ['160 lei'] },
      { name: 'Tratament K18', prices: ['150 lei'] },
      { name: 'Tratament reconstrucție Milkshake', prices: ['160-200 lei'] },
      { name: 'Tratament NI acid hialuronic', prices: ['200 lei'] },
      { name: 'Spălat păr', prices: ['40 lei'] },
    ],
  },
  {
    category: 'Coafat',
    subcategories: [
      { name: 'Coafat bucle scurt/mediu/lung', prices: ['90-150 lei'] },
      { name: 'Coafat ocazie', prices: ['150-350 lei'] },
      { name: 'Coafat mireasă', prices: ['250-400 lei'] },
    ],
  },
  {
    category: 'Extensii',
    subcategories: [
      { name: 'Montat extensii tape-in/micro-ring/clip-on', prices: ['5 lei sandwich/5 lei bucata/30 lei'] },
      { name: 'Demontat extensii', prices: ['100 lei'] },
    ],
  },
  {
    category: 'Vopsit (manoperă)',
    subcategories: [
      { name: 'Vopsit rădăcină scurt/mediu/lung', prices: ['80/90/100 lei'] },
      { name: 'Vopsit ombre', prices: ['150-250 lei'] },
      { name: 'Vopsit Balayage', prices: ['200-300 lei'] },
      { name: 'Vopsit Highlights', prices: ['180-300 lei'] },
      { name: 'Vopsit baby lights', prices: ['200-300 lei'] },
    ],
  },
];

const ServiceCategory = ({ category, subcategories }) => (
  <Card sx={{ backgroundColor: '#333', color: '#FF69B4', marginBottom: '20px' }}>
    <CardHeader title={category} />
    <CardContent>
      <Grid container spacing={2}>
        {subcategories.map((subcategory, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <ServiceSubcategory {...subcategory} />
          </Grid>
        ))}
      </Grid>
    </CardContent>
  </Card>
);

const ServiceSubcategory = ({ name, prices }) => (
  <Card sx={{ backgroundColor: '#666', color: 'white', marginBottom: '10px' }}>
    <CardHeader title={name} />
    <CardContent>
      <ul>
        {prices.map((price, index) => (
          <li key={index}>
            <Typography>{price}</Typography>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const HairPage = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${hair3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h3" gutterBottom>
            Price List
          </Typography>
        </Container>
      </Box>
      
      <Container maxWidth="md">
        <Box sx={{ marginTop: 4 }}>
          <video width="100%" controls>
            <source src={hairvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        
        <Box sx={{ marginTop: 4 }}>
          {servicesData.map((service, index) => (
            <ServiceCategory key={index} {...service} />
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default HairPage
