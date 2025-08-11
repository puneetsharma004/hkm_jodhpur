import { motion } from 'framer-motion';
import DonationsPageHeader from '../components/donations/DonationPageHeader';
import WhyDonate from '../components/donations/WhyDonate';
import SevaOptions from '../components/donations/SevaOptions';
import CurrentCampaigns from '../components/donations/CurrentCampaigns';
import HowToDonate from '../components/donations/HowToDonate';
import DonationForm from '../components/donations/DonationsForm';
import TaxBenefits from '../components/donations/TaxBenefits';
import DonorTestimonials from '../components/donations/DonorTestimonials';
import DonationsCallToAction from '../components/donations/DonationsCallToAction';


export default function Donations() {
  return (
    <div className="bg-black">
      <DonationsPageHeader />
      <WhyDonate />
      <SevaOptions />
      <CurrentCampaigns />
      <HowToDonate />
      <DonationForm />
      <TaxBenefits />
      <DonorTestimonials />
      <DonationsCallToAction />
    </div>
  );
}
