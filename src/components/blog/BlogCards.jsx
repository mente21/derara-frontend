import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlogCards = ({ blogs }) => {
  // Normalize: handle both hardcoded and backend formats, bringing in category/author/date
  const finalPosts = (blogs || []).map((post) => ({
    id: post.id || post._id,
    title: post.title,
    description: post.description,
    imgSrc: post.image || post.imgSrc || post.smallImgSrc,
    href: `/blog/${post.id || post._id}`,
    category: post.category || "News",
    author: post.author || "Derara Team",
    date: post.date || "Recent",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = finalPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(finalPosts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const element = document.getElementById("blog-cards-container");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (finalPosts.length === 0) return null;

  return (
    <div id="blog-cards-container" className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 mx-auto">
      {/* Title Area */}
      <div className="text-center mb-16 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-widest flex flex-col items-center leading-none -space-y-1 md:-space-y-2 mb-6"
            style={{ fontFamily: '"Orbitron", sans-serif' }}
          >
            <span className="text-[#D62828]">THIS WEEK</span>
            <span className="text-black dark:text-white">HOT</span>
            <span className="text-[#D62828]">NEWS</span>
          </h2>

          <p
            className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Stay updated with trending insights, fresh stories, and top Ethiopian coffee highlights.
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-12 bg-[#D62828] rounded-full"></div>
            <div className="h-1.5 w-8 bg-gray-300 dark:bg-white rounded-full"></div>
          </div>
        </motion.div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <AnimatePresence mode="popLayout">
          {currentPosts.map((post, index) => (
            <motion.a
              href={post.href}
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block relative rounded-3xl overflow-hidden bg-white dark:bg-[#0f0f0f] border border-gray-100 dark:border-white/5 shadow-md hover:shadow-2xl dark:shadow-none transition-all duration-300"
            >
              {/* Colorful Animated Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D62828] via-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white dark:bg-[#0f0f0f] rounded-3xl"></div>
              </div>

              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden rounded-t-3xl z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img
                  className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                  src={post.imgSrc}
                  alt={post.title}
                />
                {/* Category Badge */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="px-4 py-1.5 text-xs font-bold tracking-wider text-white bg-[#D62828]/90 backdrop-blur-md rounded-full shadow-lg uppercase">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 relative z-10 bg-white dark:bg-[#0f0f0f] rounded-b-3xl">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4 font-semibold uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D62828] to-orange-500" />
                  <span>{post.author}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 leading-snug group-hover:text-[#D62828] transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 leading-relaxed mb-8">
                  {post.description}
                </p>

                {/* Read More Button */}
                <div className="mt-4">
                  <div className="inline-flex items-center px-6 py-2.5 rounded-full font-bold text-sm tracking-widest uppercase text-white bg-[#D62828] relative overflow-hidden group/btn shadow-md hover:shadow-lg transition-all duration-300">
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 via-[#D62828] to-yellow-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <span className="relative flex items-center z-10">
                      Read Article
                      <svg
                        className="ml-2 w-5 h-5 transform transition-transform duration-500 group-hover/btn:translate-x-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center items-center gap-3">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`p-3 rounded-2xl transition-all duration-300 flex items-center justify-center ${currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-white/5 dark:text-gray-600"
                : "bg-white text-gray-700 hover:text-[#D62828] shadow-md dark:bg-[#1a1a1a] dark:text-white dark:hover:text-[#D62828] border border-transparent hover:border-[#D62828]"
              }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`w-12 h-12 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center ${currentPage === number
                    ? "bg-[#D62828] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:border-[#D62828] border border-transparent shadow-md dark:bg-[#1a1a1a] dark:text-gray-300 hover:text-[#D62828]"
                  }`}
              >
                {number}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`p-3 rounded-2xl transition-all duration-300 flex items-center justify-center ${currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-white/5 dark:text-gray-600"
                : "bg-white text-gray-700 hover:text-[#D62828] shadow-md dark:bg-[#1a1a1a] dark:text-white dark:hover:text-[#D62828] border border-transparent hover:border-[#D62828]"
              }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCards;
