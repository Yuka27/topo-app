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
import { ScheduleItem } from '../types/types';
import SchoolIcon from '@mui/icons-material/School';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WidgetsIcon from '@mui/icons-material/Widgets';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ForestIcon from '@mui/icons-material/Forest';
import { Box, Chip } from '@mui/material';
import { deepOrange, cyan, lightGreen, grey, purple } from "@mui/material/colors";

interface EventPage {
  event: ScheduleItem
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const Expand = (props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
}

const Event: React.FC<EventPage> = ({ event }) => {
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
    'LARP': {
        icon: <ForestIcon color='success'/>,
        label: 'LARP'
    },
  }  

  return (
    <Card sx={{marginBottom: 1, borderRadius: 3}} 
    onClick={handleExpandClick}>
      <CardHeader
        sx={{position: 'relative'}}
        title={<Typography sx={{marginRight: 5}} variant="h5">{event.type && typeConfiguration[event.type]?.icon} {event.name}</Typography>}
        subheader={<Box>
          <Typography variant="h6" color="text.secondary" sx={{marginTop: 1, marginBottom: 1}}>{event.time.startTime} {event.time.endTime && `- ${event.time.endTime}`}</Typography>
          {event.author && <Chip label={event.author} sx={{marginTop: 1, marginBottom: 1, marginRight: 1}} />}
          {event.location && <Chip  variant="outlined" icon={<PlaceIcon color='error'/>} label={event.location} sx={{marginTop: 1, marginBottom: 1, marginRight: 1, paddingLeft: 0.5}}/>}
          {event.type && <Chip icon={typeConfiguration[event.type].icon} variant="outlined" label={typeConfiguration[event.type].label} sx={{marginTop: 1, marginBottom: 1, paddingLeft: 1}} />}
        </Box>}
        action={event.desc &&
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
          <Typography>
            {event.desc}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Event;
