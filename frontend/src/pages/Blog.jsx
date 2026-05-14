import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import { Link } from 'react-router-dom';

const GuardiansOfPrespa = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Restored to match your other pages */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80" 
            alt="Prespa Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Guardians of Prespa
          </h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto leading-relaxed">
            Stories and voices from the local community protecting our natural heritage.
          </p>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader className="pt-6">
                <div className="flex items-center gap-2 text-sm text-green-700 mb-2">
                  <Badge variant="secondary" className="bg-green-50 text-green-700 border-none">
                    {post.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-gray-500">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-green-700 font-bold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={18} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Note: The "Stay Updated" / Subscribe section has been completely removed from here */}
      </div>
    </div>
  );
};

export default GuardiansOfPrespa;
