import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Box, styled } from '@mui/material';
import nails2 from '../assets/nails2.jpg';
import mdbeautylab from '../assets/mdbeautylab.mp4';

const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
  borderRadius: 8,
  overflow: 'hidden',
}));

const BannerImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxHeight: '400px',
  objectFit: 'cover',
  borderRadius: 8,
}));

const VideoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(6),
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: 8,
  boxShadow: theme.shadows[3],
  '&:hover': {
    boxShadow: theme.shadows[6],
  },
}));

const categories = [
  {
    name: 'Manichiură',
    services: [
      { name: 'Manichiură simplă/lac clasic/lac semipermanent/Apex', price: '70/90/110/120 lei' },
      { name: 'Gel pe unghia naturală', price: '130 lei' },
      { name: 'Constucție unghii cu gel/acrygel', price: '150-160 lei' },
      { name: 'întreținere unghii cu gel', price: '130-140 lei' },
      { name: 'Manichiură gel super SLIM', price: '180 lei' },
      { name: 'Manichiură SPA', price: '+50 lei' },
      { name: 'Mască hidratare mâini', price: '40 lei' },
      { name: 'Tratament unghii naturale', price: '+25 lei' },
      { name: 'Manichiură bărbați', price: '70 lei' },
      { name: 'îndepărtare gel', price: '40 lei' },
      { name: 'Îndepărtare lac semipermanent', price: '30 lei' },
      { name: 'Reparație unghie cu gel/lac semipermanent', price: '15/10 lei pe unghie' },
      { name: 'Schimbare formă', price: '10 lei ' },
    ],
  },
  {
    name: 'Pedichiură',
    services: [
      { name: 'Pedichiură simplă/lac clasic/lac semipermanent', price: '80/100/120 lei' },
      { name: 'Pedichiură bărbați', price: '90 lei' },
      { name: 'Pedichiură SPA', price: '+60 lei' },
      { name: 'Tratament călcâie', price: '+30 lei' },
    ],
  },
  {
    name: 'Nail Art',
    services: [
      { name: 'French/babyboomer', price: '+30 lei' },
      { name: 'Design gel/folie', price: '5-25 lei' },
      { name: 'Stamping design/pigmenți/sclipici', price: '5 lei/unghie' },
    ],
  },
];

const Category = ({ category }) => (
  <Box mb={4}>
    <Typography variant="h5" gutterBottom>
      {category.name}
    </Typography>
    <Grid container spacing={2}>
      {category.services.map((service, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <ServiceCard>
            <CardContent>
            <Card sx={{ backgroundColor: '#333', color: '#FF69B4', marginBottom: '10px' }}>
              <Typography variant="subtitle" component="div">
                {service.name}
              </Typography>
              <Typography variant="subtitle2" color="white">
                {service.price}
              </Typography>
              </Card>
            </CardContent>
          </ServiceCard>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const NailsPage = () => {
  return (
    <Container maxWidth="md">
      <BannerContainer>
        <BannerImage src={nails2} alt="Nails Banner" />
      </BannerContainer>

      <VideoContainer>
        <video width="100%" controls>
          <source src={mdbeautylab} type="video/mp4" />
          Browser-ul tău nu suportă tag-ul video.
        </video>
      </VideoContainer>

      <Typography variant="h4" align="center" gutterBottom>
        Price List
      </Typography>

      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </Container>
  );
};

export default NailsPage;
