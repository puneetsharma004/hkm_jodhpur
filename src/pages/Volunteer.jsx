import { motion } from 'framer-motion';
import VolunteerPageHeader from '../components/volunteer/VolunteerPageHeader';
import WhyVolunteer from '../components/volunteer/WhyVolunteer';
import VolunteerOpportunities from '../components/volunteer/VolunteerOpportunities';
import VolunteerStories from '../components/volunteer/VolunteerStories';
import HowToJoin from '../components/volunteer/HowToJoin';
import VolunteerRegistrationForm from '../components/volunteer/VolunteerRegistrationForm';
import VolunteerCallToAction from '../components/volunteer/VolunteerCallToAction';


export default function Volunteer() {
  return (
    <div className="bg-black">
      <VolunteerPageHeader />
      <WhyVolunteer />
      <VolunteerOpportunities />
      <VolunteerStories />
      <HowToJoin />
      <VolunteerRegistrationForm />
      <VolunteerCallToAction />
    </div>
  );
}
