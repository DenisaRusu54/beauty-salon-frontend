import React from 'react';
import { Container, Box, Typography, Grid, Divider, Link, Avatar } from '@mui/material';

// Importă imaginile
import aboutus1 from '../assets/aboutus1.jpg';
import aboutus3 from '../assets/aboutus3.jpeg';
import background3 from '../assets/background3.jpg';
import aboutus4 from '../assets/aboutus4.jpg';
import Denisa from '../assets/Denisa.jpg';
import mada from '../assets/mada.jpg';

const AboutUs = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <img src={aboutus1} alt="" style={{ width: '100%', height: 'auto' }} />
      </Box>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" gutterBottom>Povestea noastră</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body1" gutterBottom>
          M&D Beauty Lab a luat naștere din visul a două prietene pasionate de frumusețe și artă, Mădălina și Denisa. După ani de zile de experiență în domeniu și multe conversații pline de entuziasm, au decis să își unească forțele și să creeze un spațiu dedicat rafinamentului și îngrijirii personale.
          Cu o viziune comună și un angajament față de calitate, Mădălina și Denisa au deschis M&D Beauty Lab, un salon unde fiecare detaliu este atent gândit pentru a oferi clienților o experiență de neuitat. Fie că este vorba de hair, make-up sau nails, echipa noastră de profesioniști este dedicată să vă ajute să vă descoperiți și să vă exprimați frumusețea unică. La M&D Beauty Lab, transformăm visele în realitate!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={aboutus3} alt="" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <img src={background3} alt="" style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" gutterBottom>Misiunea</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body1" gutterBottom>
          La M&D Beauty Lab, misiunea noastră este să oferim servicii de înaltă calitate în domeniul hair, make-up și nails, asigurându-ne că fiecare client se simte unic și răsfățat. Ne dedicăm să aducem frumusețea interioară la suprafață prin profesionalism, inovație și atenție la detalii.
        </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" gutterBottom>Viziunea</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body1" gutterBottom>
          Ne dorim să devenim etalonul de excelență în industria de beauty, fiind recunoscuți pentru creativitate, eleganță și profesionalism. Viziunea noastră este să creăm o comunitate de clienți loiali, care aleg M&D Beauty Lab pentru că știu că aici găsesc nu doar servicii excepționale, ci și o experiență de neuitat.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={aboutus4} alt="" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Avatar src={Denisa} alt="Denisa"  sx={{ width: 120, height: 120, mx: 'auto' }} />
          <Typography variant="h5" align="center" gutterBottom>Denisa</Typography>
          <Typography variant="body1" align="center" gutterBottom>
          Denisa - Expert Make-up Artist
          Cu o experiență de peste 10 ani în industria frumuseții, Denisa este make-up artistul principal al salonului nostru, dar și una dintre fondatoarele salonului. De la machiaje de zi elegante și naturale, până la look-uri de seară sofisticate și glamour, Denisa știe să scoată în evidență cele mai frumoase trăsături ale fiecărei cliente. Își găsește inspirația în ultimele tendințe din domeniu și se asigură că fiecare clientă pleacă din salon cu un zâmbet pe buze și un look de invidiat.
          </Typography>
          <Typography align="center">
            <Link href="https://europa.eu/europass/eportfolio/screen/share/3ffedf88-f997-42a6-947d-b415ddc80247?lang=en" target="_blank" rel="noopener">View CV</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Avatar src={mada} alt="Mădălina"  sx={{ width: 120, height: 120, mx: 'auto' }} />
          <Typography variant="h5" align="center" gutterBottom>Mădălina</Typography>
          <Typography variant="body1" align="center" gutterBottom>
          Mădălina - Specialist în Îngrijirea Unghiilor și Coafuri
          Mădălina este expertul nostru în îngrijirea unghiilor și hairstyling, având o experiență vastă în oferirea celor mai moderne și rafinate servicii de manichiură, pedichiură și coafuri. Cu o atenție deosebită la detalii și o pasiune pentru perfecțiune, Mădălina se asigură că fiecare vizită la M&D BEAUTY LAB este o experiență de neuitat. Fie că este vorba de o manichiură clasică sau de o coafură complexă, Mădălina își pune amprenta artistică pe fiecare serviciu oferit.
          </Typography>
          <Typography align="center">
            <Link href="https://cdn.fbsbx.com/v/t59.2708-21/418248275_2722262727927230_7648841962070380632_n.pdf/Manilici-Ma%CC%86da%CC%86lina-cv.pdf?_nc_cat=100&ccb=1-7&_nc_sid=2b0e22&_nc_ohc=MZqDFbzEKQMQ7kNvgEa6ReF&_nc_ht=cdn.fbsbx.com&oh=03_Q7cD1QEQIL1GMQrsbxtGe3zshorTBfGlDEln5oqM6-ea_5tgpw&oe=6695A265&dl=1" target="_blank" rel="noopener">View CV</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
