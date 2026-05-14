import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import { Link } from 'react-router-dom';

const GradiansOfPrespa = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Blur and Color Overlay */}
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80" 
            alt="Prespa Landscape" 
            className="w-full h-full object-cover"
          />
          {/* The "Blurred and Colored" Layer */}
          <div className="absolute inset-0 bg-green-900/60 backdrop-blur-[2px] mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Gradians of Prespa
          </h1>
          <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto leading-relaxed font-light">
            Documenting the stories and community efforts 
            preserving the heart of our region.
          </p>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <CardHeader className="pt-8">
                <div className="flex items-center gap-3 text-sm mb-3">
                  <Badge className="bg-green-100 text-green-800 border-none px-3 py-1">
                    {post.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-gray-400">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-10">
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-green-700 font-bold hover:gap-4 transition-all"
                >
                  Read Full Story <ArrowRight size={20} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note: The 'Stay Updated' section has been completely removed */}
      </div>
    </div>
  );
};

export default GradiansOfPrespa;
