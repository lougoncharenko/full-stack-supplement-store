import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Banner() {

  return (
    <Paper
      sx={{
        height: 400,
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("https://absfuel.com/image/blog/sports-supplements.jpg")',
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src="https://theislandnow.com/wp-content/uploads/2023/01/istockphoto-501672820-612x612-1.jpg" alt="supplements" />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
        </Grid>
      </Grid>
    </Paper>
  );
}


export default Banner;