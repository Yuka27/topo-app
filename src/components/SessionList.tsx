
import { SessionItem } from '../types/types';
import Session from './Session';

interface SesionListPage {
    sessions: SessionItem[]
}

const SessionList: React.FC<SesionListPage> = ({ sessions }) => <div>{sessions?.map(session => <Session key={session.id} session={session}/>)}</div>;
  
export default SessionList;
  