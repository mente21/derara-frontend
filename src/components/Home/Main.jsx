import React, { lazy, Suspense } from "react";
import Carousel from "./carousel";

// Lazy-load everything below the hero fold
const OurHistory = lazy(() => import("./OurHistory"));
const CoffeeOrigins = lazy(() => import("./CoffeeOrigins"));
const Productroll = lazy(() => import("./Productroll"));
const Certifications = lazy(() => import("./Certifications"));
const ContactUsPage = lazy(() => import("../../pages/ContactUsPage"));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-24">
    <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

const Main = () => {
  return (
    <>
      <Carousel />
      <Suspense fallback={<SectionFallback />}>
        <OurHistory />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CoffeeOrigins />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Productroll />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Certifications />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ContactUsPage />
      </Suspense>
    </>
  );
};

export default Main;
