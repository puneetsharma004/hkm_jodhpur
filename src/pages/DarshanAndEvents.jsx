import { motion } from 'framer-motion';
import EventsPageHeader from '../components/events/PageHeader';
import VirtualDarshan from '../components/events/VirtualDarshan';
import DailyDarshanTimings from '../components/events/DailyDarshanTimings';
import MajorFestivals from '../components/events/MajorFestival';
import SpecialPrograms from '../components/events/SpecialPrograms';
import EventsCalendar from '../components/events/EventsCalendar';
import PrasadamAndSeva from '../components/events/PrasadamAndSeva';
import EventsCallToAction from '../components/events/EventsCallToAction';


export default function DarshanAndEvents() {
  return (
    <div className="bg-black">
      <EventsPageHeader />
      <VirtualDarshan />
      <DailyDarshanTimings />
      <EventsCalendar />
      <MajorFestivals />
      <SpecialPrograms />
      <PrasadamAndSeva />
      <EventsCallToAction />
    </div>
  );
}
