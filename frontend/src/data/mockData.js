// 1. SITE & MISSION DATA
export const siteInfo = {
  name: "Pearl of Prespa",
  tagline: "Preserving Nature. Empowering Youth. Reviving Prespa.",
  contact: {
    organization: "ECTER Bitola",
    address: "Sotir Brbevski 35",
    website: "www.ecter.org",
    email: "ecterbt@gmail.com"
  },
  social: {
    facebook: "https://www.facebook.com/ECTER.Bitola",
    instagram: "https://www.instagram.com/ecter_bitola"
  }
};

export const mission = "We aim to empower and connect local people through arts, knowledge, creativity, and sustainable practices.";

// 2. PAGE DATA (Fixes 'poems', 'artGallery', etc.)
export const activities = [
  { id: 1, title: "Eco-Agriculture", description: "Sustainable farming practices.", icon: "Sprout" },
  { id: 2, title: "Youth Programs", description: "Engaging the next generation.", icon: "Users" }
];

export const artGallery = [
  { id: 1, title: "Lake Reflections", category: "Photography", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800" }
];

export const communityStories = [
  { id: 1, name: "Local Farmer", role: "Agriculture", quote: "Sustainability is the future." }
];

// THIS SECTION FIXES THE CURRENT ERROR
export const poems = [
  { id: 1, title: "Echoes of Prespa", author: "Local Artist", content: "The waters whisper stories of old..." }
];

export const libraryResources = [
  { id: 1, title: "Prespa Guide", type: "PDF" }
];

// 3. BLOG POSTS (Text from Prespa story.docx)
export const blogPosts = [
  {
    id: "youth-workshop",
    title: "Youth Workshop Brings New Hope to Resen",
    date: "March 15, 2025",
    category: "Success Stories",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    content: `Twenty-five young people from the Prespa region gathered in Resen for a three-day workshop focused on sustainable agriculture and environmental protection. Organized by local volunteers and educators, the event introduced participants to modern farming methods, eco-friendly practices, and business opportunities connected to agriculture.`
  },
  {
    id: "water-quality",
    title: "Water Quality Improving: Community Efforts Pay Off",
    date: "March 10, 2025",
    category: "Environmental",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800",
    content: `Recent environmental measurements around Lake Prespa show encouraging signs of improved water quality following months of conservation efforts. The progress is largely connected to reduced pesticide use and community cleanup campaigns.`
  },
  {
    id: "apple-harvest",
    title: "Organic Apple Harvest Exceeds Expectations",
    date: "March 5, 2025",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1594236053912-70650965e6ea?w=800",
    content: `Organic apple farmers in the Prespa region are celebrating a highly successful harvest season after switching to sustainable farming methods. Producers reported strong yields and healthier orchards.`
  },
  {
    id: "protect-lake",
    title: "10 Simple Ways to Protect Lake Prespa",
    date: "February 28, 2025",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1635341543888-251f045610ec?w=800",
    content: `Help protect Lake Prespa: 1. Reduce plastic use. 2. Use proper trash bins. 3. Save water. 4. Support organic farmers. 5. Join cleanups.`
  }
];
