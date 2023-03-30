import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import data from '../data/benefits.json'


const theme = createTheme();

export default function Benefits() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="m">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              The 8 Best Muscle-Building Supplements
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            A popular category of dietary supplements are workout supplements, which are typically taken before 
            (‘pre-workout’) or after exercising (‘post-workout’), and are sold in a variety of forms from pills 
            to powders and ready-to-drink shakes. 

            Many weightlifting supplements being sold as the “best supplements for muscle growth” will do little to help you reach your health and fitness goals.
            To claim that you absolutely need supplements to build muscle is absolute garbage. Do you need supplements? No. But can they help? Absoultely! Below
            is a list of 8 supplements that can help you build muscle faster and maintain muscles as you continue to train and workout. 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"   
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {data.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '5.25%',
                    }}
                    image={card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}