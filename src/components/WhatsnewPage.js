import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Box, styled } from '@mui/material';
import news1 from '../assets/news1.jpg';


const news = [
  
  {
    title: 'Ofertă Specială de Vară: 20% Reducere la Serviciile de Manichiură',
    date: '5 Iulie 2024',
    content: 'Profitați de oferta noastră specială de vară și beneficiați de 20% reducere la toate serviciile de manichiură până la sfârșitul lunii august!',
  },
  {
    title: 'Workshop de Machiaj cu Experta noastră, Ana Popescu',
    date: '25 Iunie 2024',
    content: 'Înscrieți-vă la workshopul nostru de machiaj, unde experta noastră Ana Popescu vă va învăța tehnici de machiaj de zi și de seară. Locuri limitate!',
  },
  {
    title: 'Transformări Spectaculoase: Povestea Clientei Noastre, Maria',
    date: '15 Iunie 2024',
    content: 'Maria a venit la noi pentru o schimbare de look completă. Vedeți transformarea spectaculoasă și citiți povestea ei inspiratoare.',
  },
];

const NewsCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: 8,
  boxShadow: theme.shadows[3],
  '&:hover': {
    boxShadow: theme.shadows[6],
  },
}));

const NewsPage = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          color: '#fff',
          mb: 4,
        }}
      >
        <img
          src={news1}
          alt="News Background"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '600px',
            objectFit: 'cover',
            borderRadius: 8,
          }}
        />
        <Typography
          variant="h3"
          component="div"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
          }}
        >
          What's New
        </Typography>
      </Box>
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {news.map((item, index) => (
          <Grid item xs={12} key={index}>
            <NewsCard>
              <CardContent>
                <Typography variant="subtitle" component="div" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="#FF69B4" gutterBottom>
                  {item.date}
                </Typography>
                <Typography variant="body1">
                  {item.content}
                </Typography>
              </CardContent>
            </NewsCard>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Container>
  );
};

export default NewsPage;
