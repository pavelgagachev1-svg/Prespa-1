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

export const mission = "We aim to empower and connect local people—especially youth, women, and elderly—through arts, knowledge, creativity, and sustainable practices that protect Lake Prespa and revive eco-friendly apple trees growing.";

// 2. CORE ACTIVITIES
export const activities = [
  { id: 1, title: "Eco-Agriculture Workshops", description: "Learn sustainable farming practices that protect Lake Prespa while maintaining productive apple orchards.", icon: "Sprout" },
  { id: 2, title: "Youth Programs", description: "Engaging young people through environmental education, leadership training, and community projects.", icon: "Users" },
  { id: 3, title: "Art & Culture Events", description: "Celebrating Prespa's diverse heritage through artistic expression and cultural festivals.", icon: "Palette" },
  { id: 4, title: "Lake Protection Actions", description: "Direct conservation efforts including clean-up campaigns and biodiversity monitoring.", icon: "Droplet" },
  { id: 5, title: "Library Programs", description: "Access to learning materials and digital resources that empower community members.", icon: "BookOpen" }
];

// 3. COMMUNITY STORIES
export const communityStories = [
  { id: 1, name: "Gjorgi Dimitrov", role: "Apple Farmer", quote: "Switching to organic methods not only improved my soil but gave me hope that my children might return to farm this land.", image: "/images/image1.jpeg" },
  { id: 2, name: "Elena Petrova", role: "Youth Leader", quote: "Through these programs, I discovered my passion for environmental conservation and decided to stay in Prespa.", image: "/images/image2.jpeg" },
  { id: 3, name: "Ismail Ramadani", role: "Elder & Storyteller", quote: "I remember when the lake was fuller. Now I share these memories so youth understand what we must preserve.", image: "/images/image3.jpeg" },
  { id: 4, name: "Marija Angelova", role: "Women Entrepreneur", quote: "Starting my eco-tourism business helped me create jobs for other women while showcasing Prespa's beauty.", image: "/images/image4.jpeg" }
];

// 4. ART GALLERY
export const artGallery = [
  { id: 1, title: "Lake Reflections", artist: "Ana Stojanovic", type: "Photography", image: "/images/image1.jpeg" },
  { id: 2, title: "Mountain Majesty", artist: "Dimitri Kostov", type: "Photography", image: "/images/image2.jpeg" },
  { id: 3, title: "Apple Blossoms", artist: "Local Youth Collective", type: "Eco-Art", image: "/images/image3.jpeg" },
  { id: 4, title: "Wetland Wonders", artist: "Sofia Dimova", type: "Photography", image: "/images/image4.jpeg" }
];

// 5. POEMS
export const poems = [
  { id: 1, title: "Whispers of Prespa", author: "Anonymous Youth", text: "In the mirror of ancient waters,\nMountains stand as silent guards..." },
  { id: 2, title: "Return to Roots", author: "Elena M.", text: "They said the youth would leave and never come back,\nBut in the soil, in the lake, in the mountain track..." }
];

// 6. BLOG POSTS
export const blogPosts = [
  { id: "youth-workshop", title: "Youth Workshop Brings New Hope", date: "March 15, 2025", category: "Success Stories", image: "/images/image1.jpeg", content: "Twenty-five young people gathered in Resen..." },
  { id: "water-quality", title: "Water Quality Improving", date: "March 10, 2025", category: "Environmental", image: "/images/image2.jpeg", content: "Recent environmental measurements show signs of improved water quality..." }
];

// 7. LIBRARY RESOURCES (WITH CONTENT FOR REDIRECTS)
export const libraryResources = [
  {
    id: 1,
    title: "Sustainable Apple Cultivation Guide",
    type: "PDF Document",
    description: "Comprehensive guide to organic apple farming in the Prespa region",
    icon: "FileText",
    content: `
      SUSTAINABLE APPLE CULTIVATION GUIDE
      Organic Farming Practices for the Prespa Region

      EXECUTIVE SUMMARY
      This guide provides a step-by-step approach to transitioning from conventional to organic apple farming. It prioritizes soil health, water efficiency, and biodiversity.

      SOIL PREPARATION & PLANTING
      - Soil Testing: Test pH levels annually (Optimal: 6.0 - 7.0).
      - Composting: Apply 10 tons of organic compost per hectare in early spring.
      - Planting Density: Maintain 4m x 5m spacing for air circulation.

      INTEGRATED PEST MANAGEMENT (IPM)
      - Natural Predators: Encourage ladybugs and lacewings.
      - Traps: Use sticky yellow traps and pheromone disruption for Codling Moth.
      - Spray Schedule: Neem oil (Dormant) and Potassium bicarbonate (Growing).

      HARVEST & STORAGE
      - Harvest Window: Mid-September to mid-October.
      - Storage: Keep at 1°C with 90-95% humidity.
    `
  },
  {
    id: 2,
    title: "Lake Prespa Biodiversity Report",
    type: "Research Paper",
    description: "Detailed analysis of flora and fauna in the Prespa ecosystem",
    icon: "FileText",
    content: `
      LAKE PRESPA BIODIVERSITY REPORT
      A 5-Year Quantitative Analysis (2020-2025)
      Author: Dr. Elena Markovska

      ABSTRACT
      This paper evaluates the biodiversity index focusing on water level fluctuations and species richness.

      RESULTS
      - Bird Population: Dalmatian pelicans stabilized at 1,500 breeding pairs (4% increase).
      - Flora: Submerged macrophytes declined by 12% in areas with high turbidity.
      - Fish: Endemic trout breeding success dropped by 30% in shallow water zones.

      CONCLUSION
      Immediate implementation of 15m wide riparian buffer zones is recommended to filter sediment.
    `
  },
  {
    id: 3,
    title: "Water Conservation Techniques",
    type: "Interactive Guide",
    description: "Practical methods for efficient water use in agriculture",
    icon: "Droplets",
    content: `
      WATER CONSERVATION TECHNIQUES
      Goal: Reduce agricultural water usage by 30%.

      STEP 1: SOIL TYPE
      - Sand: Use hydrogel soil conditioners.
      - Clay: Use furrow irrigation.
      - Loam: Drip irrigation recommended.

      STEP 2: INFRASTRUCTURE
      - Drip System: 95% efficiency.
      - Sprinkler: 50-70% efficiency (40% loss in high wind).

      STEP 3: MULCHING
      Apply 5cm of organic straw around tree bases to reduce soil evaporation by up to 70%.

      STEP 4: MONITOR MOISTURE
      - Wet (80-100%): Do not irrigate.
      - Slightly Dry (50-79%): Irrigate for 1 hour.
      - Very Dry (<50%): Critical alarm; irrigate for 3 hours.
    `
  }
];

// 8. PARTNERS
export const partners = [
  { name: "PONT - Prespa Ohrid Nature Trust", website: "https://www.pont.org" },
  { name: "Society for Prespa", website: "https://www.spp.gr" },
  { name: "Macedonian Ecological Society", website: "https://www.mes.org.mk" }
];
