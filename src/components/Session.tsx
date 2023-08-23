import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FaceIcon from '@mui/icons-material/Face';
import PlaceIcon from '@mui/icons-material/Place';
import { ScheduleItem, SessionItem } from '../types/types';
import SchoolIcon from '@mui/icons-material/School';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WidgetsIcon from '@mui/icons-material/Widgets';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SpaIcon from '@mui/icons-material/Spa';
import CasinoIcon from '@mui/icons-material/Casino';
import GroupsIcon from '@mui/icons-material/Groups';
import { Box, Chip } from '@mui/material';
import { deepOrange, cyan, lightGreen, grey, purple } from "@mui/material/colors";

interface SessionPage {
  session: SessionItem
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const Expand = (props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
}

const Session: React.FC<SessionPage> = ({ session }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const typeConfiguration = {
    'Prelekcja': {
        icon: <SchoolIcon color='success' />,
        label: 'Prelekcja'
    },
    'Panel Dyskusyjny': {
        icon: <QuestionAnswerIcon color='success'/>,
        label: 'Panel Dyskusyjny'
    },
    'Warsztaty': {
        icon: <WidgetsIcon color='success' />,
        label: 'Warsztaty'
    },
    'Inne': {
        icon: <QuestionMarkIcon color='success'/>,
        label: 'Inne'
    },
    'Konkurs': {
        icon: <EmojiEventsIcon color='success'/>,
        label: 'Konkurs'
    },
  }  

  return (
    <Card sx={{marginBottom: 1, borderRadius: 3}} 
    onClick={handleExpandClick}>
      <CardHeader
        sx={{position: 'relative'}}
        title={<Typography sx={{marginRight: 5}} variant="h5">{session.isBegginerFriendly && <SpaIcon color='success'/>} {session.name}</Typography>}
        subheader={<Box>
          <Typography variant="h6" color="text.secondary" sx={{marginTop: 1, marginBottom: 1}}>{session.time?.startTime} {session.time?.endTime && `- ${session.time?.endTime}`}</Typography>
          {session.mg && <Chip label={session.mg} sx={{marginTop: 1, marginBottom: 1, marginRight: 1, height: 'auto', '& .MuiChip-label': { display: 'block', whiteSpace: 'normal'} }} />}
          {session.system && <Chip variant="outlined" icon={<CasinoIcon />} label={session.system} sx={{marginTop: 1, marginBottom: 1, marginRight: 1, paddingLeft: 0.5, height: 'auto', '& .MuiChip-label': { display: 'block', whiteSpace: 'normal'}}}/>}
          {session.players && <Chip variant="outlined" icon={<GroupsIcon />} label={session.players} sx={{marginTop: 1, marginBottom: 1, marginRight: 1, paddingLeft: 0.5}}/>}
          {session.location && <Chip variant="outlined" icon={<PlaceIcon color='error'/>} label={`Namiot ${session.location}`} sx={{marginTop: 1, marginBottom: 1, marginRight: 1, paddingLeft: 0.5}}/>}
          {!session.outsideCompetition && <Chip variant="outlined" color="warning" label="Złote Topory" sx={{marginTop: 1, marginBottom: 1, marginRight: 1, paddingLeft: 0.5}}/>}
          {session.minAge && <Chip  variant="outlined" color='error' label={typeof session.minAge === 'number' ? `${session.minAge}+` : '???'} sx={{marginTop: 1, marginBottom: 1, marginRight: 1, paddingLeft: 0.5}}/>}
          {session.isBegginerFriendly && <Chip variant="outlined" icon={<SpaIcon color='success'/>} label="Sesja odpowiednia dla początkujuących" sx={{marginTop: 1, marginBottom: 1, marginRight: 1, paddingLeft: 0.5, height: 'auto', '& .MuiChip-label': { display: 'block', whiteSpace: 'normal'}}}/>}
        </Box>}
        action={session.desc &&
          <Expand
            expand={expanded}
            aria-expanded={expanded}
            aria-label="pokaż opis"
            sx={{position: 'absolute', top: 4, right: 4}}
          >
            {expanded ? <ExpandLessIcon sx={{width: 32, height: 32, color: grey[500]}}/> :
            <ExpandMoreIcon sx={{width: 32, height: 32, color: grey[500]}}/>}
          </Expand>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {typeof session.minAge == 'string' && <>
          <Typography color={deepOrange[200]}>
            Notka odnośnie minimalnego wieku graczy
          </Typography>
          <Typography sx={{marginBottom: 1}}>
            {session.minAge}
          </Typography>
          {!session.begginerFriendlyDesc &&<Typography color={deepOrange[200]}>
            Opis sesji
          </Typography>}
          </>}
          {session.begginerFriendlyDesc && <>
          <Typography color={deepOrange[200]}>
            Czy sesja jest odpowiednia dla początkujących graczy?
          </Typography>
          <Typography sx={{marginBottom: 1}}>
            {session.begginerFriendlyDesc}
          </Typography>
          <Typography color={deepOrange[200]}>
            Opis sesji
          </Typography>
          </>}
          <Typography sx={{marginBottom: 1}}>
            {session.desc}
          </Typography>
          {session.outsideCompetition && <Typography color={deepOrange[200]} sx={{marginBottom: 1}}>
            Ta sesja nie bierze udziału w konkursie Złote Topory
          </Typography>}
          {session.triggers?.length && session.triggers.map(trigger => <Chip key={trigger} variant="outlined" color='error' label={trigger} sx={{marginTop: 1, marginBottom: 1, marginRight: 1, paddingLeft: 0.5}}/>)}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Session;
