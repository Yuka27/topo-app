
import { SessionItem } from '../types/types';
import Session from './Session';

interface SesionListPage {
    sessions: SessionItem[]
}

const SessionList: React.FC<SesionListPage> = ({ sessions }) => <div>{sessions?.sort((a, b) => (a.location < b.location) && (a.time.startTime < b.time.startTime) ? -1 : 1).map(session => <Session key={session.id} session={session}/>)}</div>;
  
export default SessionList;
  