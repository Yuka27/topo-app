import { ScheduleItem } from '../types/types';
import Event from './Event';

interface EventListPage {
    events: ScheduleItem[]
}

const EventList: React.FC<EventListPage> = ({ events }) => <div>{events?.map((event, index) => <Event key={event.name + index} event={event}/>)}</div>;
  
export default EventList;
  