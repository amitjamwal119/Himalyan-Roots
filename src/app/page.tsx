import ExperiencesPreview from "./home/sections/ExperiencesPreview";
import GalleryPreview from "./home/sections/GalleryPreview";
import Hero from "./home/sections/hero";
import RoomsPreview from "./home/sections/RoomsPreview";
import Services from "./home/sections/services";
import SpecialOffers from "./home/sections/SpecialOffers";
import Testimonials from "./home/sections/Testimonials";
import MainLayout from "./main-layout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Services />
        <RoomsPreview />
        <ExperiencesPreview />
        <GalleryPreview />
        <SpecialOffers />
        <Testimonials />
      </MainLayout>
    </>
  );
}
