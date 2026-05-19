import React, { useState } from "react";
import { X, Mail, ChevronLeft, Send, CheckCircle, MapPin, Award, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/constants";

const getProductMeta = (region, name) => {
  const normalized = region.toLowerCase();
  if (normalized.includes("yirgacheffe")) {
    return { altitude: "1,900m - 2,200m", sca: "88+", acidity: "Bright Citrus", body: "Light & Tea-like" };
  } else if (normalized.includes("sidama")) {
    return { altitude: "1,700m - 2,000m", sca: "86.5+", acidity: "Stone Fruit", body: "Medium & Smooth" };
  } else if (normalized.includes("guji")) {
    return { altitude: "1,800m - 2,100m", sca: "87.5+", acidity: "Tropical Fruit", body: "Creamy & Full" };
  } else if (normalized.includes("harar")) {
    return { altitude: "1,400m - 2,000m", sca: "86+", acidity: "Winey & Spicy", body: "Bold & Heavy" };
  } else if (normalized.includes("limu")) {
    return { altitude: "1,600m - 1,900m", sca: "85.5+", acidity: "Soft Citrus", body: "Smooth & Balanced" };
  }
  return { altitude: "1,500m - 1,800m", sca: "85+", acidity: "Balanced", body: "Medium" };
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // idle | submitting | success
  const [formData, setFormData] = useState({ name: "", email: "", address: "", company: "", message: "" });

  const coffeeProducts = PRODUCTS.filter((p) => p.isVisible !== false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setShowForm(false);
    setFormStatus("idle");
    setFormData({ name: "", email: "", address: "", company: "", message: `I'm interested in receiving a sample of the ${product.region} ${product.type || ""}.` });
  };

  return (
    <div className="relative min-h-screen bg-[#FDFCF8] dark:bg-[#0a0a0a] text-gray-900 dark:text-white selection:bg-red-500/30 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none transform-gpu overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-200/40 dark:bg-orange-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-200/40 dark:bg-red-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-green-200/40 dark:bg-green-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 md:px-20 text-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="text-red-500 font-bold tracking-[0.2em] text-sm uppercase animate-fade-in-up">
            Our Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight drop-shadow-2xl">
            Ethiopia's Finest <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Green Coffee
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Sourced exclusively from the renowned high-altitude regions of Ethiopia. Each bean tells a story of
            heritage, soil, and sunlight.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="relative z-10 py-10 px-4 md:px-10 lg:px-20 max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {coffeeProducts.map((product) => {
            const meta = getProductMeta(product.region, product.name);
            return (
              <div
                key={product.id}
                className="group relative bg-[#F4EDE4] dark:bg-[#141210] rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full border border-black/5 dark:border-white/5"
              >
                {/* Framed Image Container */}
                <div className="aspect-[4/3] m-4 mb-0 rounded-[2rem] overflow-hidden relative bg-black/5 dark:bg-white/5">
                  <img
                    src={product.image}
                    alt={product.region}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Floating Tag */}
                  {product.tag && (
                    <div className={`absolute top-4 left-4 backdrop-blur-md text-white text-[9px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full z-10 shadow-md border ${
                      product.tag === "Best Seller" ? "bg-red-500/20 border-red-500/40 text-red-300 shadow-red-500/10" :
                      product.tag === "Top Rated" ? "bg-amber-500/20 border-amber-500/40 text-amber-300 shadow-amber-500/10" :
                      product.tag === "New Arrival" ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-emerald-500/10" :
                      "bg-purple-500/20 border-purple-500/40 text-purple-300 shadow-purple-500/10"
                    }`}>
                      <span className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-current animate-pulse" />
                        {product.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Block */}
                <div className="p-6 pt-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Process Type Badge */}
                    <p className="text-red-600 dark:text-red-400 font-extrabold tracking-[0.15em] uppercase text-[10px] flex items-center gap-2">
                      <span className="w-1.5 h-[1.5px] bg-red-600 dark:bg-red-400" />
                      {product.type}
                    </p>

                    {/* Title */}
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white leading-tight font-serif group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                      {product.name}
                    </h2>

                    {/* Short Description */}
                    <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed font-normal line-clamp-3">
                      {product.short_desc}
                    </p>


                    {/* Flavor Profile Tags */}
                    <div className="flex flex-wrap gap-1.5 pb-2">
                      {product.profile?.split(", ").map((flavor, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white/60 dark:bg-white/5 backdrop-blur-sm text-gray-800 dark:text-white/80 text-[10px] font-bold rounded-lg border border-black/5 dark:border-white/10"
                        >
                          {flavor}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inquiry Button */}
                  <button
                    type="button"
                    onClick={() => openProduct(product)}
                    className="w-full mt-5 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-600 to-rose-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:from-red-700 hover:to-rose-600 transition-all duration-300 shadow-[0_4px_12px_rgba(220,38,38,0.15)] hover:shadow-[0_8px_20px_rgba(220,38,38,0.3)] active:scale-[0.98] transform active:translate-y-0"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-32 px-6 text-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-red-500/5 -skew-y-3 transform origin-bottom-right" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Ready to Experience the Origin?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400">
            Contact our sourcing team for current harvest availability, sample requests, and shipping logistics.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-red-600 rounded-full hover:bg-red-700 hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
          >
            Contact Our Sourcing Team
          </Link>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProduct(null)}
          />

          <div className="relative bg-white dark:bg-slate-900 rounded-[2rem] w-full max-w-6xl h-[85vh] shadow-2xl flex flex-col md:flex-row overflow-hidden">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/3 relative h-64 md:h-full">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.region}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r" />
              <div className="absolute bottom-6 left-6 text-white md:hidden">
                <h3 className="text-3xl font-bold">{selectedProduct.region}</h3>
                <p className="opacity-90">{selectedProduct.type}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-2/3 p-8 md:p-12 bg-white dark:bg-[#0d0d0d] overflow-y-auto relative">
              {!showForm ? (
                (() => {
                  const meta = getProductMeta(selectedProduct.region, selectedProduct.name);
                  return (
                    <div className="flex flex-col h-full space-y-6">
                      <div className="hidden md:block">
                        <h3 className="text-4xl font-black text-gray-900 dark:text-white font-serif">{selectedProduct.region}</h3>
                        <p className="text-xl text-amber-600 font-bold tracking-wider mt-1">{selectedProduct.type}</p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-extrabold text-gray-900 dark:text-white">About this Coffee</h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base font-medium">
                          {selectedProduct.long_desc}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-gray-100 dark:border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-extrabold text-gray-400 uppercase block tracking-wider">Elevation</span>
                            <span className="text-xs font-black text-gray-800 dark:text-gray-200">{meta.altitude}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                            <Award className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-extrabold text-gray-400 uppercase block tracking-wider">Cupping Score</span>
                            <span className="text-xs font-black text-gray-800 dark:text-gray-200">{meta.sca}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                            <Flame className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-extrabold text-gray-400 uppercase block tracking-wider">Acidity Profile</span>
                            <span className="text-xs font-black text-gray-800 dark:text-gray-200">{meta.acidity}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <span className="text-xs font-extrabold text-gray-400 uppercase tracking-wider block">Flavor Notes</span>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.profile.split(", ").map((flavor, i) => (
                            <span
                              key={i}
                              className="px-3.5 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-lg"
                            >
                              {flavor}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-2 mt-auto">
                        <button
                          type="button"
                          onClick={() => setShowForm(true)}
                          className="flex-1 flex items-center justify-center gap-2 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 hover:shadow-[0_10px_30px_rgba(220,38,38,0.4)] hover:-translate-y-1 transition-all duration-300 shadow-xl"
                        >
                          <Mail className="w-5 h-5" />
                          Submit Request
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedProduct(null)}
                          className="px-8 py-4 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <button
                      onClick={() => setShowForm(false)}
                      className="p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </button>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Inquire about {selectedProduct.region}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>

                  {formStatus === "success" ? (
                    <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
                      <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Request Sent!</h4>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                          Thanks for your interest in our {selectedProduct.region}. Our sourcing team will reach out
                          shortly.
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="mt-4 px-8 py-3 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-200"
                      >
                        Close Window
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="flex-grow flex flex-col space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Name</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-[#1B4D3E]/50 outline-none transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-[#1B4D3E]/50 outline-none transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Address</label>
                          <input
                            type="text"
                            required
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-[#1B4D3E]/50 outline-none transition-all"
                            placeholder="Shipping address"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Company <span className="opacity-50">(Opt)</span>
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-[#1B4D3E]/50 outline-none transition-all"
                            placeholder="Business name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 flex-grow">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                          required
                          rows="4"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-[#1B4D3E]/50 outline-none transition-all resize-none h-full min-h-[120px]"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="w-full py-4 mt-auto bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 hover:-translate-y-1 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formStatus === "submitting" ? (
                          "Sending Request..."
                        ) : (
                          <>
                            Send Request <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
