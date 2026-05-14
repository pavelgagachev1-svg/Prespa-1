// 1. SITE INFO & NAVIGATION DATA
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

export const mission = "We aim to empower and connect local people—especially youth, women, and elderly—through arts, knowledge, creativity, and sustainable practices.";

export const activities = [
  { id: 1, title: "Eco-Agriculture", description: "Sustainable farming practices.", icon: "Sprout" },
  { id: 2, title: "Youth Programs", description: "Engaging the next generation.", icon: "Users" },
  { id: 3, title: "Lake Protection", description: "Preserving the ecosystem.", icon: "Droplet" }
];

// 2. MISSING EXPORTS (This fixes the 'artGallery' and 'community' errors)
export const artGallery = [
  { id: 1, title: "Lake Reflections", category: "Photography", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80" },
  { id: 2, title: "Harvest Colors", category: "Painting", image: "https://images.unsplash.com/photo-1594236053912-70650965e6ea?auto=format&fit=crop&q=80" }
];

export const communityStories = [
  { id: 1, name: "Local Farmer", role: "Agriculture", quote: "Sustainability is the future of Prespa.", image: "https://images.unsplash.com/photo-1594236053912-70650965e6ea?w=400" }
];

export const libraryResources = [
  { id: 1, title: "Eco-Guide", type: "PDF", description: "How to protect the lake." }
];

// 3. BLOG POSTS (Text from Prespa story.docx)
export const blogPosts = [
  {
    id: "youth-workshop",
    title: "Youth Workshop Brings New Hope to Resen",
    date: "March 15, 2025",
    category: "Success Stories",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80",
    content: `Twenty-five young people from the Prespa region gathered in Resen for a three-day workshop focused on sustainable agriculture and environmental protection. Organized by local volunteers and educators, the event introduced participants to modern farming methods, eco-friendly practices, and business opportunities connected to agriculture.

Through training sessions and field visits, participants learned about organic farming, smart irrigation, and local product marketing. Many young attendees said the workshop changed their perspective on farming and inspired them to stay involved in their community.`
  },
  {
    id: "water-quality",
    title: "Water Quality Improving: Community Efforts Pay Off",
    date: "March 10, 2025",
    category: "Environmental",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80",
    content: `Recent environmental measurements around Lake Prespa show encouraging signs of improved water quality following months of conservation efforts. Experts reported reduced pollution levels and healthier conditions in several monitored areas.

The progress is largely connected to reduced pesticide use, community cleanup campaigns, and increased environmental awareness among local residents and farmers.`
  },
  {
    id: "apple-harvest",
    title: "Organic Apple Harvest Exceeds Expectations",
    date: "March 5, 2025",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1594236053912-70650965e6ea?auto=format&fit=crop&q=80",
    content: `Organic apple farmers in the Prespa region are celebrating a highly successful harvest season after switching to sustainable farming methods. Producers reported strong yields, healthier orchards, and growing demand for locally grown organic apples.`
  },
  {
    id: "protect-lake",
    title: "10 Simple Ways to Protect Lake Prespa",
    date: "February 28, 2025",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1635341543888-251f045610ec?auto=format&fit=crop&q=80",
    content: `Environmental organizations are encouraging residents and visitors to help protect Lake Prespa through small everyday actions:

1. Reduce plastic use by using reusable bags and bottles.
2. Always throw trash in proper bins.
3. Use eco-friendly cleaning products.
4. Save water whenever possible.
5. Support local organic farmers.
6. Join community cleanup events.
7. Protect animals and natural habitats.
8. Teach others about environmental protection.
9. Travel responsibly and avoid littering.
10. Support local environmental projects.`
  }
];
