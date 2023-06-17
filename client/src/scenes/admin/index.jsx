import React from 'react';
import { Box } from '@mui/material';
import LoadingScene from 'components/LoadingScene';

const index = () => {
  return (
    <Box sx={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh" 
    }}>
      <LoadingScene />
    </Box>
  );
}

export default index;
