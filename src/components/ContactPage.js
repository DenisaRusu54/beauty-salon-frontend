import React from 'react';
import { Container, Typography, Box, Grid, TextField, Button, IconButton, Card, CardContent } from '@mui/material';
import { Facebook, Instagram, Email, Phone, LocationOn } from '@mui/icons-material';
import GoogleMapReact from 'google-map-react';
import conctactus1 from '../assets/conctactus1.jpg'; 


const ContactPage = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 47.1733, 
      lng: 27.5744, 
    },
    zoom: 14,
  };

  return (
    <Box>
      <Box
        sx={{ width: '100%',
          height: '300px', 
          backgroundImage: `url(${conctactus1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        />
        <Container maxWidth="md" sx={{ mt: 10 }}>
        <Typography variant="body1" sx={{ color: 'white', textAlign: 'center' }}>
        Suntem aici pentru a vă putea ajuta să vă simțiți și să arătați minunat! Pentru orice întrebări sau pentru a vă programa, nu ezitați să ne contactați. Vă așteptăm cu drag la M&D Beauty Lab!
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: 5, p: 12, mt: -10 }}>
        <Grid container spacing={9}>
          <Grid item xs={12} md={6}>
            <Box component="form" noValidate autoComplete="off"> 
              <TextField
                fullWidth
                label="Nume"
                name="nume"
                variant="outlined"
                margin="normal"
            
                sx={{ backgroundColor: 'pink', borderRadius: 1 }}
              />
              <TextField
                fullWidth
                label="Prenume"
                name="prenume"
                variant="outlined"
                margin="normal"
                
                sx={{ backgroundColor: 'pink', borderRadius: 1 }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                margin="normal"
    
                sx={{ backgroundColor: 'pink', borderRadius: 1 }}
                />
              <TextField
                fullWidth
                label="Mesaj"
                name="mesaj"
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
                
                sx={{ backgroundColor: 'pink', borderRadius: 1 }}
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Trimite
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card sx={{ backgroundColor: 'transparent', color: 'white' }}>
              <CardContent>
                <Typography variant="subtitle" gutterBottom>
                  Informații de contact
                </Typography>
                <Typography>
                  <Email /> mdbeautylab9@gmail.com
                </Typography>
                <Typography>
                  <Phone /> 0756 899 900
                </Typography>
                <Typography>
                  <LocationOn /> Iași, Copou, Bulevardul Carol I
                </Typography>
                <Box mt={2}>
                  <IconButton
                    component="a"
                    href="https://www.facebook.com/profile.php?id=61562617402400"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'pink' }}
                  >
                    <Facebook />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://www.instagram.com/mdbeauty_lab?igsh=eHU0bjg5cW5xa2No"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'pink' }}
                  >
                    <Instagram />
                  </IconButton>
                </Box>
                <Typography variant="subtitle" gutterBottom sx={{ mt: 2 }}>
                  Program
                </Typography>
                <Typography>
                  Luni - Vineri: 9:00 - 19:00
                </Typography>
                <Typography>
                  Sâmbătă: 10:00 - 16:00
                </Typography>
                <Typography>
                  Duminică: Închis
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={4} height="400px">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyASnzqYKiBjk3LIujNOFKITFgj7HOBVUnc' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent lat={47.1733} lng={27.5744} text="Salonul nostru" />
          </GoogleMapReact>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;

