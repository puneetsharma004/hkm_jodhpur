
import PageHeader from '../components/about/PageHeader';
import TempleHistory from '../components/about/TempleHistory';
import MissionVision from '../components/about/MissionVision';
import SpiritualLineage from '../components/about/SpiritualLineage';
import TempleArchitecture from '../components/about/TempleArchitecture';
import CulturalImportance from '../components/about/CulturalImportance';
import CallToAction from '../components/about/CallToAction';

export default function About() {
  return (
    <div className="bg-black">
      <PageHeader />
      <TempleHistory />
      <MissionVision />
      <SpiritualLineage />
      <TempleArchitecture />
      <CulturalImportance />
      <CallToAction />
    </div>
  );
}
