import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

const Home = () => {
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
  