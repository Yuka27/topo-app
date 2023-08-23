import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState, useEffect } from 'react';

const Home = () => {
  const [installPromptEvent, setInstallPromptEvent] = useState();
  const [appInstalled, setAppInstalled] = useState(false);
  useEffect(() => {
    // @ts-expect-error
    const beforeInstallPromptHandler = event => {
      event.preventDefault();
      setInstallPromptEvent(event);
    };
    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    return () => window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
  }, []);
  
  useEffect(() => {
    // @ts-expect-error
    const appInstalledHandler = event => {
      setAppInstalled(event);
    };

    window.addEventListener('appinstalled', appInstalledHandler);
    return () => window.removeEventListener('appinstalled', appInstalledHandler);
  }, []);
  
  return <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
  <Typography color={grey[50]} variant="h5" sx={{marginTop: 2, marginLeft: 4}}> Najważniejsze informacje</Typography>
  <img src="./kwadrat.png" loading="lazy" style={{maxWidth: '100vw', margin: '20px 0'}}/>
  <Typography color={grey[50]} variant="h6" sx={{marginTop: 2, marginLeft: 4}}> Gdyby coś się działo dzwoń do:</Typography>
  <Typography color={grey[50]} variant="body2" sx={{marginTop: 2, marginLeft: 4}}>KLAUDIA JEZIORSKA: 737 357 717</Typography>
  <Typography color={grey[50]} variant="body2" sx={{marginTop: 2, marginLeft: 4}}>KONRAD MŁODZIK: 792 050 226</Typography>
  <Typography color={grey[50]} variant="body2" sx={{marginTop: 2, marginLeft: 4}}>WOJCIECH PIEPER: 666 884 263</Typography>
  <Typography color={grey[50]} variant="body2" sx={{marginTop: 2, marginLeft: 4}}>ARTUR WOŹNIAK: 695 324 539</Typography>
  </Box>
};
  
export default Home;
  