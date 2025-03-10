import React, { useState } from 'react';
import blogsData from './Blog-components/Blogs.json'; // Import JSON file
import Navbar from '../Home/Home-components/nav-bar';

function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogsData.length / blogsPerPage);

  return (<>
        <Navbar />
         <div className="flex flex-col min-h-screen overflow-hidden p-5">
      <main className="mt-20">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-lg p-5 rounded-lg transition-transform transform hover:scale-105 duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-indigo-500 rounded-md mb-4 w-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">Image</span>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900">{blog.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{blog.date} · {blog.readTime} min read</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                currentPage === i + 1
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main></div></>

  );
}

export default Blogs;
