import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import { Link } from 'react-router-dom';

const GuardiansOfPrespa = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full text-green-700 mb-4">
            <BookOpen size={20} className="mr-2" />
            <span className="text-sm font-bold uppercase tracking-wider">Our Stories</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 tracking-tight">
            Guardians of Prespa
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the voices of Prespa. From sustainable farming to youth-led conservation, 
            these are the stories of the people protecting our ancient ecosystem.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl">
              {/* Image Container */}
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 hover:bg-green-700 text-white border-none px-3 py-1 shadow-lg">
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Content Container */}
              <CardHeader className="pt-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="text-green-600" />
                  <span>{post.date}</span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-green-800 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-8">
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-green-700 font-bold border-b-2 border-transparent hover:border-green-700 transition-all group/link"
                >
                  Read the full story
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Decorative Note */}
        <div className="mt-20 pt-10 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest font-semibold">
            ECTER Bitola - Documenting Change in Prespa
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuardiansOfPrespa;
