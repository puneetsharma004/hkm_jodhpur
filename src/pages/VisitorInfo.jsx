import { motion } from 'framer-motion';
import VisitorInfoPageHeader from '../components/visitors/VisitorInfoPageHeader';
import LocationAndMap from '../components/visitors/LocationAndMap';
import HowToReach from '../components/visitors/HowToReach';
import TempleTimings from '../components/visitors/TempleTimings';
import AartiSchedule from '../components/visitors/AartiSchedule';
import DressCodeEtiquette from '../components/visitors/DressCodeEtiquette';
import Accommodation from '../components/visitors/Accommodation';
import Facilities from '../components/visitors/Facilities';
import TipsForVisitors from '../components/visitors/TipsForVisitors';
import VisitorContact from '../components/visitors/VisitorContact';
import VisitorInfoCallToAction from '../components/visitors/VisitorInfoCallToAction';


export default function VisitorInfo() {
  return (
    <div className="bg-black">
      <VisitorInfoPageHeader />
      <LocationAndMap />
      <HowToReach />
      <TempleTimings />
      <AartiSchedule />
      <DressCodeEtiquette />
      <Accommodation />
      <Facilities />
      <TipsForVisitors />
      <VisitorContact />
      <VisitorInfoCallToAction />
    </div>
  );
}
