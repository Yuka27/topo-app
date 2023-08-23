
import { SessionItem } from '../types/types';
import Session from './Session';

interface SesionListPage {
    sessions: SessionItem[]
}

const SessionList: React.FC<SesionListPage> = ({ sessions }) => <div>{sessions?.sort( (a, b) => {
    if (parseInt(a.time.startTime) < parseInt(b.time.startTime)) return -1;
    if (a.location > b.location) return 1;
    return -1;
    }).map(session => <Session key={session.id} session={session}/>)}</div>;
  
export default SessionList; 
  