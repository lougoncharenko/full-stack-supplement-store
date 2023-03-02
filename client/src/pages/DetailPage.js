import React from "react";
import DetailCard from "../components/DetailCard";
import { Box } from '@mui/material';

export default function DetailPage({supplementDetail, onAdd}) {
    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
          <DetailCard supplementDetail={supplementDetail} onAdd={onAdd}/>
        </Box>
      );

}