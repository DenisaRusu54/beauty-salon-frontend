import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Box, styled } from '@mui/material';
import makeup3 from '../assets/makeup3.jpg';
import makeup from '../assets/makeup.mp4';

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
  marginBottom: theme.spacing(4),
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: 8,
  boxShadow: theme.shadows[3],
  '&:hover': {
    boxShadow: theme.shadows[6],
  },
}));

const services = [
  { name: 'Machiaj de zi', price: '200 lei' },
  { name: 'Machiaj de seară', price: '250 lei' },
  { name: 'Machiaj de mireasă', price: '350-400 lei' },
  { name: 'Machiaj de eveniment', price: '300 lei' },
];

const MakeupPage = () => {
  return (
    <Container maxWidth="md">
<BannerContainer>
<BannerImage src={makeup3} alt="Makeup Banner" />
</BannerContainer>

     <VideoContainer>
        <video width="100%" controls>
          <source src={makeup} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>

      <Typography variant="h4" align="center" gutterBottom>
        Price List
      </Typography>

      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <ServiceCard>
              <CardContent>
                <Card sx={{ backgroundColor: '#333', color: '#FF69B4', marginBottom: '10px' }}>
                  <Typography variant="subtitle1" component="div">
                    {service.name}
                  </Typography>
                  <Typography variant="body2" color='white'>
                    {service.price}
                  </Typography>
                </Card>
              </CardContent>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MakeupPage;