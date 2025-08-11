import { motion } from 'framer-motion';
import GalleryPageHeader from '../components/gallery/GalleryPageHeader';
import PhotoGallery from '../components/gallery/PhotoGallery';
import VideoGallery from '../components/gallery/VideoGallery';
import FeaturedMoments from '../components/gallery/FeaturedMoments';
import SocialMediaFeed from '../components/gallery/SocialMediaFeed';
import GalleryCallToAction from '../components/gallery/GalleryCallToAction';


export default function Gallery() {
  return (
    <div className="bg-black">
      <GalleryPageHeader />
      <PhotoGallery />
      <VideoGallery />
      <FeaturedMoments />
      <SocialMediaFeed />
      <GalleryCallToAction />
    </div>
  );
}
