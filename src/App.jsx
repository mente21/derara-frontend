import React, { lazy, Suspense } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import RouteLoadingWrapper from "./components/common/RouteLoadingWrapper";
import FloatingContact from "./components/common/FloatingContact";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/common/ScrollToTop";

// Lazy-load all pages — only downloaded when the user navigates to them
const HomePage = lazy(() => import("./pages/HomePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ServicesPage = lazy(() => import("./pages/Services/Service"));
const LearnMore = lazy(() => import("./pages/Services/LearnMore"));
const Blogs = lazy(() => import("./pages/Blogs/Blog"));
const BlogDetail = lazy(() => import("./pages/Blogs/BlogDetail"));
const AboutPage = lazy(() => import("./pages/About/About"));
const Products = lazy(() => import("./pages/products/Products"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));

const App = () => {
  const location = useLocation();

  return (
    <ThemeProvider>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-black">
              <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <RouteLoadingWrapper>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:serviceSlug" element={<LearnMore />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </RouteLoadingWrapper>
          </Suspense>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </ThemeProvider>
  );
};

export default App;
