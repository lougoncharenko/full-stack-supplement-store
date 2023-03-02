import React from "react";
import { Typography, Stack, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Cart({cartItems}) {
    console.log(cartItems)
    return (
        <section>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
        {cartItems.map((item, key) => (
            <Grid item key={key} xs={12} sm={6} md={4}>
                <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
                <img src={item.image} alt={item.product_name} loading="lazy" className="detail-image" height="500px" width="500px"/>
                <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                  <Typography sx={{ fontSize: { lg: '50px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
                    {item.product_name}
                  </Typography>
                  <Typography>
                    {item.cost}
                  </Typography>
                  <Typography>
                    Total Price: ${(item.cost* 1.12).toFixed(2)}
                  </Typography>
                  <Link to={`/checkout`}>
                        <button 
                        > Checkout
                        </button>
                    </Link>
                </Stack>
              </Stack>
            </Grid> ))}
        </Grid>
        </Container>
        </section>
    );

}