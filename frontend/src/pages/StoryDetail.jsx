import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/mockData';

const StoryDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <h2 className="text-2xl font-semibold text-gray-600">Story not found.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-[400px] object-cover rounded-3xl shadow-lg mb-10"
        />
        <span className="text-green-600 font-bold uppercase tracking-widest text-sm">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
          {post.title}
        </h1>
        <p className="text-gray-500 mb-8 border-b pb-8">{post.date}</p>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
