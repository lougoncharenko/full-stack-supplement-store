import React from 'react';
import { Typography, Stack} from '@mui/material';

export default function DetailCard({supplementDetail}) {
    const { image, product_name, cost, description} = supplementDetail;

    return(
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={image} alt={product_name} loading="lazy" className="detail-image" height="500px" width="500px"/>
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
          <Typography sx={{ fontSize: { lg: '50px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
            {product_name}
          </Typography>
          <Typography>
            ${cost}
          </Typography>
          <Typography sx={{ fontSize: { lg: '18px', xs: '10px' } }} color="#4F4C4C">
          {description}
          </Typography>
          <button
           onClick={() => {
            console.log(product_name)
            console.log(image)
            console.log(cost)
            const newSupplement = {
              product_name: product_name,
              image: image,
              cost: cost,
            }
            fetch('http://localhost:3001/create', {
            method: "POST",
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSupplement)
          })
          .then(response => response.json()) 
          .then(json => console.log(json));
          console.log("added to the cart")
          }}
        
          >
            Add item to cart
          </button>
        </Stack>
      </Stack>
    )
}