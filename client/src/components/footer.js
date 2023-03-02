import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ContactForm from './contact';

function Copyright() {
  return (
    <Typography variant="body2" 
    color="text.secondary" 
    align="left">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Elite Fitness Plus
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Footer() {
  return (
    <section className='footer-container'>
    <ContactForm />
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography
          variant="h4"
          align="left"
          color="text.secondary"
          component="p"
        >
          Contact us: 
        </Typography>
        <Typography
          variant="h6"
          align="left"
          color="text.secondary"
          component="p"
        >
          14351 Southern Street 
        </Typography>
        <Typography
          variant="h6"
          align="left"
          color="text.secondary"
          component="p"
        >
          Los Angeles, California 
        </Typography>
        <Typography
          variant="h6"
          align="left"
          color="text.secondary"
          component="p"
        >
          Phone: +444-390-8951
        </Typography>
        <Typography
          variant="h6"
          align="left"
          color="text.secondary"
          component="p"
        >
          Email: info@elitefitness.com
        </Typography>
        
        <Copyright />
      </Box>
      {/* End footer */}
      </section>

  );
}