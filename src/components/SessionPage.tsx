import { useEffect, useState } from "react";
import { Schedule } from "../types/types";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import SessionList from "./SessionList";
import CasinoIcon from '@mui/icons-material/Casino';
import { grey } from "@mui/material/colors";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface SessionPageProps {
  data?: Schedule
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
         {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SessionPage: React.FC<SessionPageProps> = ({data}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Typography color={grey[50]} variant="h5" sx={{marginTop: 2, marginLeft: 4}}><CasinoIcon /> Sesje RPG</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 2 }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Czwartek" {...a11yProps(0)} />
          <Tab label="Piątek" {...a11yProps(1)} />
          <Tab label="Sobota" {...a11yProps(2)} />
        </Tabs>
        </Box>
      <CustomTabPanel value={value} index={0}>
        {data && data.thursday && <SessionList sessions={data.thursday.sessionList} />}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {data && data.friday && <SessionList sessions={data.friday.sessionList} />}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {data && data.saturday && <SessionList sessions={data.saturday.sessionList} />}
      </CustomTabPanel>
    </Box>
    );
};
  
export default SessionPage;
  