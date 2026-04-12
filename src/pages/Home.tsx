import { useState } from 'react';
import Hero from '@/sections/Hero';
import PackagesPreview from '@/sections/PackagesPreview';
import RentalsPreview from '@/sections/RentalsPreview';
import WhyChooseUs from '@/sections/WhyChooseUs';
import GalleryPreview from '@/sections/GalleryPreview';
import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';
import CTA from '@/sections/CTA';
import PackageFormModal from '@/components/PackageFormModal';
import type { Package } from '@/data/packages';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleChoosePackage = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Hero />
      <PackagesPreview onChoosePackage={handleChoosePackage} />
      <RentalsPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <FAQ />
      <CTA />
      
      <PackageFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
    </main>
  );
}
