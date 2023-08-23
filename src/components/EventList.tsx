import { ScheduleItem } from '../types/types';
import Event from './Event';

interface EventListPage {
    events: ScheduleItem[]
}

const EventList: React.FC<EventListPage> = ({ events }) => <div>{events?.map(event => <Event key={event.name} event={event}/>)}</div>;
  
export default EventList;
  