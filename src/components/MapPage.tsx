import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import PlaceIcon from '@mui/icons-material/Place';
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const MapPage: React.FC = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
    <Typography color={grey[50]} variant="h5" sx={{marginTop: 2, marginLeft: 4}}><PlaceIcon /> Mapa konwentu</Typography>
       <img src="./Mapa.png" loading="lazy" style={{maxWidth: '100vw'}}/>
    </Box>
  );
};
  
export default MapPage;
  