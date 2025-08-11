// src/pages/Home.jsx

import Loader from '../components/common/Loader';
import HeroSlider from '../components/common/HeroSlider';
import WelcomeSection from '../components/home/WelcomeSection';
import EventsAndDarshan from '../components/home/EventsAndDarshan';
import GalleryPreview from '../components/home/GalleryPreview';
import Testimonials from '../components/home/Testimonials';
import QuickLinks from '../components/common/QuickLinks';
import Announcements from '../components/common/AnnouncementBar';

function Home() {
  
  return (
    <>
      {/* Loader: Optional global or page-specific */}
      <Loader />

      <HeroSlider />
      <WelcomeSection />
      <EventsAndDarshan />
      <GalleryPreview />
      <Testimonials />
      <QuickLinks />
      <Announcements />
    </>
  );
}

export default Home;
