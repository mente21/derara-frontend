// ============================================================
// constants.js — Static data for the Derara frontend.
// Replaces all API calls to the backend.
// ============================================================

// ----------------------------------------------------------
// CONTACT INFO (replaces /ops/contact-info)
// ----------------------------------------------------------
export const CONTACT_INFO = {
  phone: "+251 984 00 87 75",
  email: "derarabusiness53@gmail.com",
  address: "Akaki-Kality Sub-City, Woreda 13, Tullu Dimtu",
  city: "Addis Ababa",
  country: "Ethiopia",
  socials: [
    { platform: "LinkedIn", url: "#" },
    { platform: "Instagram", url: "#" },
    { platform: "Twitter", url: "#" },
    { platform: "Facebook", url: "#" },
    { platform: "Telegram", url: "#" },
    { platform: "WhatsApp", url: "#" },
  ],
};

// ----------------------------------------------------------
// OUR HISTORY (replaces /ops/history)
// ----------------------------------------------------------
export const HISTORY_DATA = [
  {
    title: "Ethiopian Roots",
    description:
      "Born in the heart of Addis Ababa, Derara was founded with a singular mission: to honor Ethiopia's coffee heritage. We started by building direct relationships with local farmers to ensure every bean tells the story of its origin.",
    icon: "Flag",
    image: "localfarmers.png",
    order: 0,
  },
  {
    title: "Local Excellence",
    description:
      "By implementing sustainable export practices and innovative processing methods, we've set new benchmarks for quality in Ethiopia. Our foundation is built on empowering our community and perfecting our craft.",
    icon: "Award",
    image: "excellence.jpg",
    order: 1,
  },
  {
    title: "Global Vision",
    description:
      "Our journey is just beginning. With plans to establish presence in major global hubs like Dubai and London, we are committed to being the premier bridge between Ethiopian soil and the international stage.",
    icon: "TrendingUp",
    image: "globalvision.png",
    order: 2,
  },
];

// ----------------------------------------------------------
// CERTIFICATES (replaces /ops/certificates)
// ----------------------------------------------------------
import cert1 from "../assets/certeficate1.png";
import cert2 from "../assets/certeficate2.png";
import cert3 from "../assets/certeficate3.png";
import cert4 from "../assets/certeficate4.png";
import cert5 from "../assets/certeficate5.png";

export const CERTIFICATES = [
  {
    id: "c1",
    title: "ISO 9001:2015 Quality Management",
    description: "Certified for maintaining international quality management standards across all operations.",
    image: cert1,
    isVisible: true,
  },
  {
    id: "c2",
    title: "Organic Export Certification",
    description: "Recognized for our commitment to organic and sustainable coffee farming practices.",
    image: cert2,
    isVisible: true,
  },
  {
    id: "c3",
    title: "Ethiopian Coffee & Tea Authority",
    description: "Fully licensed and accredited by the Ethiopian Coffee & Tea Authority for export.",
    image: cert3,
    isVisible: true,
  },
  {
    id: "c4",
    title: "Fair Trade Certification",
    description: "Ensuring above-market returns to smallholder farmers through ethical trade practices.",
    image: cert4,
    isVisible: true,
  },
  {
    id: "c5",
    title: "SCA Member — Specialty Coffee Association",
    description: "Proud member of the global specialty coffee community upholding the highest standards.",
    image: cert5,
    isVisible: true,
  },
];

// ----------------------------------------------------------
// TESTIMONIALS (replaces /ops/testimonials)
// ----------------------------------------------------------
export const TESTIMONIALS = [
  {
    id: "t1",
    feedback:
      "Derara's Yirgacheffe lot was the most floral, complex green coffee we've sourced in a decade. Exceptional traceability and seamless logistics.",
    name: "Hans Gruber",
    role: "Head Buyer",
    company: "Vienna Roasters GmbH",
    image: "https://i.pravatar.cc/150?img=11",
    isVisible: true,
  },
  {
    id: "t2",
    feedback:
      "Working with Derara transformed our supply chain. Their Guji Natural is now the cornerstone of our flagship espresso blend. Highly recommend.",
    name: "Sophie Laurent",
    role: "Procurement Director",
    company: "Café de Paris SAS",
    image: "https://i.pravatar.cc/150?img=47",
    isVisible: true,
  },
  {
    id: "t3",
    feedback:
      "Incredible consistency batch after batch. The Sidama Washed exceeded our SCA cupping score expectations by two points. Truly world-class.",
    name: "James Okafor",
    role: "Q-Grader & Founder",
    company: "Lagos Specialty Coffee Co.",
    image: "https://i.pravatar.cc/150?img=68",
    isVisible: true,
  },
  {
    id: "t4",
    feedback:
      "Derara's communication and documentation are impeccable. They make international green coffee procurement feel effortless.",
    name: "Yuki Tanaka",
    role: "Import Manager",
    company: "Tokyo Bean Trade Ltd.",
    image: "https://i.pravatar.cc/150?img=32",
    isVisible: true,
  },
  {
    id: "t5",
    feedback:
      "From sample approval to container delivery, Derara is the benchmark for professional Ethiopian green coffee export.",
    name: "Carlos Mendes",
    role: "Co-Founder",
    company: "São Paulo Specialty Roasters",
    image: "https://i.pravatar.cc/150?img=59",
    isVisible: true,
  },
];

// ----------------------------------------------------------
// PRODUCTS (replaces /ops/products)
// ----------------------------------------------------------
import yirgachafenatural from "../assets/yirgachafenatural.png";
import yirgachafeWashed from "../assets/yirgachafeWashed.png";
import sidamaWashed from "../assets/sidamaWashed.png";
import sidamaImage from "../assets/sidamma.jpg";
import limuWashed from "../assets/limuWashed.png";
import gujiImage from "../assets/guji.jpg";
import gujiNatural from "../assets/gujiNatural.png";
import harrarImage from "../assets/harrar.jpg";

export const PRODUCTS = [
  {
    id: "p1",
    name: "Yirgacheffe Natural",
    region: "Yirgacheffe",
    type: "Natural Process",
    image: yirgachafenatural,
    short_desc:
      "Intensely aromatic with blueberry, jasmine, and tropical fruit notes. A world-renowned natural-process classic from the birthplace of coffee.",
    long_desc:
      "Our Yirgacheffe Natural is sourced exclusively from smallholder farmers in the Gedeo Zone at elevations above 1,900 meters. The natural (dry) process preserves the fruit's sweetness, creating an exceptional cup with pronounced blueberry, jasmine, and tropical sweetness. Perfect for filter and pour-over brewing methods.",
    profile: "Blueberry, Jasmine, Tropical Fruit, Bergamot",
    rating: 5,
    tag: "Best Seller",
    isFeatured: true,
    isVisible: true,
  },
  {
    id: "p2",
    name: "Yirgacheffe Washed",
    region: "Yirgacheffe",
    type: "Washed Process",
    image: yirgachafeWashed,
    short_desc:
      "Crystal-clear floral and citrus expression. The washed process delivers a pristine, high-clarity cup prized by specialty roasters worldwide.",
    long_desc:
      "Fully washed to highlight the terroir of the Yirgacheffe region. This lot presents a bright, clean profile with vivid lemon citrus, delicate peach, and jasmine floral notes. The high altitude and meticulous washing station processing produce a cup of remarkable elegance and transparency.",
    profile: "Lemon Citrus, Peach, Jasmine, Clean Sweetness",
    rating: 5,
    tag: "Top Rated",
    isFeatured: true,
    isVisible: true,
  },
  {
    id: "p3",
    name: "Sidama Washed",
    region: "Sidama",
    type: "Washed Process",
    image: sidamaWashed,
    short_desc:
      "A beautifully balanced cup with stone fruit brightness and chocolate undertones — ideal for espresso and milk-based drinks.",
    long_desc:
      "Our Sidama Washed is sourced from cooperative washing stations in the SNNPR region at 1,700–2,000m elevation. The careful fermentation and washing process yields a balanced, complex cup with notes of apricot, herbal tea, and a smooth chocolate finish. A versatile choice for both filter and espresso applications.",
    profile: "Apricot, Herbal Tea, Dark Chocolate, Citrus Zest",
    rating: 5,
    isFeatured: true,
    isVisible: true,
  },
  {
    id: "p4",
    name: "Sidama Natural",
    region: "Sidama",
    type: "Natural Process",
    image: sidamaImage,
    short_desc:
      "Rich and full-bodied with strawberry jam and wine-like complexity. A premium natural lot that captivates with every sip.",
    long_desc:
      "This Sidama Natural lot is sun-dried on raised African beds for 25–30 days, developing an extraordinary sweetness and complexity. Expect a full-bodied cup with notes of strawberry, red wine, and dark berries. Ideal for roasters seeking a distinctive natural lot with consistent quality.",
    profile: "Strawberry Jam, Red Wine, Dark Berry, Full Body",
    rating: 5,
    isVisible: true,
  },
  {
    id: "p5",
    name: "Limu Washed",
    region: "Limu",
    type: "Washed Process",
    image: limuWashed,
    short_desc:
      "A rare, gentle cup from the western highlands — mild acidity, soft spice, and a wine-like finish that lingers.",
    long_desc:
      "Limu is one of Ethiopia's lesser-known but highly prized growing regions. This washed lot from the Jimma Zone presents a uniquely mild, low-acid profile with subtle spice, wine-like character, and a smooth, clean finish. An excellent choice for espresso blending or single-origin filter.",
    profile: "Mild Spice, Winey, Soft Citrus, Smooth Finish",
    rating: 4,
    isVisible: true,
  },
  {
    id: "p6",
    name: "Guji Natural",
    region: "Guji",
    type: "Natural Process",
    image: gujiNatural,
    short_desc:
      "Bold tropical fruit and red berry sweetness with rich chocolate undertones. Guji's finest natural expression.",
    long_desc:
      "Sourced from the Guji zone in the Oromia Region at altitudes of 1,800–2,200m, this natural lot is a showcase of Ethiopia's diverse terroir. Extended drying on raised beds produces intense tropical fruit sweetness, ripe red berry, and a decadent chocolate finish. A crowd-pleasing lot for adventurous roasters.",
    profile: "Tropical Fruit, Red Berry, Dark Chocolate, Rich Body",
    rating: 5,
    tag: "New Arrival",
    isFeatured: true,
    isVisible: true,
  },
  {
    id: "p7",
    name: "Guji Washed",
    region: "Guji",
    type: "Washed Process",
    image: gujiImage,
    short_desc:
      "A clean, elegant expression of the Guji terroir with bright acidity and stone fruit complexity.",
    long_desc:
      "Our Guji Washed lot showcases the precision possible when Ethiopian terroir meets meticulous processing. The fully washed method reveals bright citrus, stone fruit, and a floral complexity unique to the Guji zone. Excellent for specialty filter applications and pour-over enthusiasts.",
    profile: "Stone Fruit, Bright Citrus, Floral, Clean",
    rating: 4,
    isVisible: true,
  },
  {
    id: "p8",
    name: "Harar Longberry",
    region: "Harrar",
    type: "Natural Process (Dry)",
    image: harrarImage,
    short_desc:
      "Ethiopia's most distinctive wild coffee — bold winey acidity, intense blueberry, and ancient sun-dried character.",
    long_desc:
      "The Harar region in Eastern Ethiopia produces one of the world's most distinctive and sought-after coffees. The ancient dry-process tradition creates an unmistakable cup with wild, winey acidity, intense blueberry and dark fruit notes, and a characteristic spice finish. A true heritage coffee for connoisseurs.",
    profile: "Wild Berry, Blueberry, Winey Acidity, Spice, Bold",
    rating: 5,
    tag: "Heritage Lot",
    isFeatured: true,
    isVisible: true,
  },
];

// ----------------------------------------------------------
// BLOG POSTS (replaces /ops/blogs + static blogPosts from assets.js)
// ----------------------------------------------------------
export const BLOG_POSTS = [
  {
    id: "b1",
    title: "Ethiopia Achieves Record US$2.65 Billion in Coffee Exports",
    description: "The 2024/2025 fiscal year marks a historic milestone for Ethiopian coffee, generating unprecedented revenue.",
    content: "Ethiopia's coffee sector experienced a historic performance during the 2024/2025 fiscal year, achieving a record-breaking US$2.65 billion in coffee export earnings. The country exported approximately 470,000 tonnes (or about 7 million 60-kg bags) of coffee. This performance accounted for over 40% of the nation's total agricultural export earnings, underscoring coffee's critical role in the Ethiopian economy.",
    image: "/news/news-1.jpg",
    category: "Export & Economy",
    author: "Mentesnot D.",
    date: "May 15, 2026",
    createdAt: "2026-05-15T09:00:00Z",
  },
  {
    id: "b2",
    title: "New Foreign Exchange Reforms Boost Coffee Export Competitiveness",
    description: "The transition to a market-based foreign exchange rate system is empowering local farmers and exporters.",
    content: "The adoption of a market-based foreign exchange rate system in Ethiopia has significantly improved export competitiveness for the 2024/2025 season. Additionally, recent policy reforms allowing producers with sufficient land to export directly have helped farmers capture a larger share of the value, streamlining the supply chain and encouraging higher quality production.",
    image: "/news/news-2.jpg",
    category: "Policy & Trade",
    author: "Mentesnot D.",
    date: "May 10, 2026",
    createdAt: "2026-05-10T09:00:00Z",
  },
  {
    id: "b3",
    title: "'Green Legacy' Initiative Increases National Coffee Production",
    description: "Ethiopia's massive tree-planting program is successfully rejuvenating aging coffee farms.",
    content: "National programs, most notably the 'Green Legacy' tree-planting initiative, have played a vital role in boosting overall coffee production capacity. By focusing on the rejuvenation of aging coffee trees and expanding shaded farming areas, Ethiopia is ensuring the long-term sustainability and volume growth necessary to meet surging global demand.",
    image: "/news/news-3.jpg",
    category: "Sustainability",
    author: "Mentesnot D.",
    date: "May 05, 2026",
    createdAt: "2026-05-05T09:00:00Z",
  },
  {
    id: "b4",
    title: "Strategic Shift Towards Value-Added Coffee Exports",
    description: "Ethiopia is moving beyond raw bean exports to increase local processing and roasting.",
    content: "There is an ongoing strategic shift in Ethiopia toward increasing the export of value-added (processed and roasted) coffee rather than relying solely on raw green bean exports. The government is actively working to modernize the sector and invest in local processing facilities, aiming to capture more revenue and create local jobs within the coffee value chain.",
    image: "/news/news-4.jpg",
    category: "Market Strategy",
    author: "Mentesnot D.",
    date: "April 28, 2026",
    createdAt: "2026-04-28T09:00:00Z",
  },
  {
    id: "b5",
    title: "Securing Intellectual Property for Famous Coffee Origins",
    description: "Efforts to protect the Sidama, Yirgacheffe, and Harar brands are expanding globally.",
    content: "To maximize the value of its world-renowned coffee regions, the Ethiopian government and coffee boards are intensifying efforts to protect the intellectual property of famous origins such as Sidama, Yirgacheffe, and Harar. Securing these trademarks in international markets ensures that Ethiopian farmers receive premium prices for their unique, terroir-driven coffees.",
    image: "/news/news-5.jpg",
    category: "Global Market",
    author: "Mentesnot D.",
    date: "April 20, 2026",
    createdAt: "2026-04-20T09:00:00Z",
  },
  {
    id: "b6",
    title: "Saudi Arabia and Germany Lead as Top Importers of Ethiopian Coffee",
    description: "A look at the key global markets driving the record-breaking 2024/2025 export season.",
    content: "Ethiopia’s primary coffee export markets have shown robust demand in the 2024/2025 fiscal year. Saudi Arabia, Germany, and the United States remain the top destinations, with Belgium, South Korea, and Japan also representing significant market shares. Strong diplomatic and trade relations continue to bolster these vital export channels.",
    image: "/news/news-6.jpg",
    category: "Export Destinations",
    author: "Mentesnot D.",
    date: "April 15, 2026",
    createdAt: "2026-04-15T09:00:00Z",
  },
  {
    id: "b7",
    title: "Optimistic Outlook: 2025/2026 Production Expected to Hit 11.6 Million Bags",
    description: "Projections indicate another record-breaking harvest for the upcoming coffee season.",
    content: "Projections for the 2025/2026 marketing year remain highly optimistic. Output is expected to reach record levels, with agricultural estimates forecasting approximately 11.6 million 60-kg bags (roughly 694,000 metric tons). This anticipated growth is driven by favorable weather conditions and the maturation of newly planted coffee trees.",
    image: "/news/news-7.jpg",
    category: "Agriculture Forecast",
    author: "Mentesnot D.",
    date: "April 08, 2026",
    createdAt: "2026-04-08T09:00:00Z",
  },
  {
    id: "b8",
    title: "Ethiopia Aims to Become World’s Second-Largest Exporter by 2033",
    description: "The government outlines an ambitious $3 billion target to reshape the global coffee hierarchy.",
    content: "The Ethiopian government has set ambitious long-term goals for the coffee sector. By 2033, Ethiopia aims to become the world’s second-largest coffee exporter, trailing only Brazil. The immediate target is to increase annual export volumes to over 600,000 tonnes and consistently secure over US$3 billion in annual export earnings.",
    image: "/news/news-8.jpg",
    category: "Industry Goals",
    author: "Mentesnot D.",
    date: "April 02, 2026",
    createdAt: "2026-04-02T09:00:00Z",
  },
  {
    id: "b9",
    title: "Addressing Climate Vulnerability in Ethiopian Coffee Farming",
    description: "How the sector is adapting to changing weather patterns to protect the future of Arabica.",
    content: "Despite record growth, the Ethiopian coffee sector continues to face significant challenges related to climate vulnerability. Changing rainfall patterns and rising temperatures threaten traditional growing regions. In response, research institutions and farmers are collaborating on climate-smart agricultural practices and developing drought-resistant coffee varietals.",
    image: "/news/news-9.jpg",
    category: "Climate & Agriculture",
    author: "Mentesnot D.",
    date: "March 25, 2026",
    createdAt: "2026-03-25T09:00:00Z",
  },
  {
    id: "b10",
    title: "New Infrastructure Projects to Streamline Coffee Logistics",
    description: "Investments in transportation and processing are reducing export lead times.",
    content: "To support the rapid growth in export volumes, significant investments are being made in Ethiopia's agricultural infrastructure. Improvements in rural road networks, the expansion of modern dry mills, and enhanced logistical operations at the Port of Djibouti are critically reducing lead times and ensuring coffee reaches international markets faster.",
    image: "/news/news-10.jpg",
    category: "Infrastructure",
    author: "Mentesnot D.",
    date: "March 18, 2026",
    createdAt: "2026-03-18T09:00:00Z",
  },
  {
    id: "b11",
    title: "Expansion of Organic and Fair Trade Certifications",
    description: "Meeting the global demand for ethically sourced and environmentally friendly coffee.",
    content: "Recognizing the premium placed on sustainable products in Western markets, Ethiopian cooperatives are rapidly expanding their Organic and Fair Trade certifications. These accreditations not only promote environmentally friendly farming practices but also guarantee above-market returns to the smallholder farmers who form the backbone of the industry.",
    image: "/news/news-11.jpg",
    category: "Sustainability",
    author: "Mentesnot D.",
    date: "March 10, 2026",
    createdAt: "2026-03-10T09:00:00Z",
  },
  {
    id: "b12",
    title: "Ethiopia's Booming Domestic Coffee Consumption",
    description: "A unique characteristic of Ethiopia: consuming half of what it produces.",
    content: "Unlike many other coffee-producing nations, Ethiopia has a vibrant domestic coffee culture, consuming approximately half of its total production. The domestic market continues to grow, driven by urbanization and a deep-rooted cultural affinity for the traditional coffee ceremony, making local consumption a stabilizing force for the industry.",
    image: "/news/news-12.jpg",
    category: "Domestic Market",
    author: "Mentesnot D.",
    date: "March 01, 2026",
    createdAt: "2026-03-01T09:00:00Z",
  }
];

// ----------------------------------------------------------
// GALLERY (replaces /ops/gallery)
// ----------------------------------------------------------
export const GALLERY_ITEMS = [
  // PROCESSING (10 items)
  { id: "g1", title: "Processing Image 1", description: "Morning activity at the cooperative washing station.", category: "Processing", image: "/gallery/processing-1.jpg" },
  { id: "g2", title: "Processing Image 2", description: "Natural-process cherries drying on traditional beds.", category: "Processing", image: "/gallery/processing-2.jpg" },
  { id: "g3", title: "Processing Image 3", description: "Precision hulling and density-sorting.", category: "Processing", image: "/gallery/processing-3.jpg" },
  { id: "g4", title: "Processing Image 4", description: "Washing and fermentation tanks.", category: "Processing", image: "/gallery/processing-4.jpg" },
  { id: "g5", title: "Processing Image 5", description: "Sun-drying process over 25 days.", category: "Processing", image: "/gallery/processing-5.jpg" },
  { id: "g6", title: "Processing Image 6", description: "Final preparation before milling.", category: "Processing", image: "/gallery/processing-6.jpg" },
  { id: "g7", title: "Processing Image 7", description: "Sorting and grading by size and density.", category: "Processing", image: "/gallery/processing-7.jpg" },
  { id: "g8", title: "Processing Image 8", description: "Quality control sampling at the mill.", category: "Processing", image: "/gallery/processing-8.jpg" },
  { id: "g9", title: "Processing Image 9", description: "Bagging processed coffee beans.", category: "Processing", image: "/gallery/processing-9.jpg" },
  { id: "g10", title: "Processing Image 10", description: "Final inspecting and packaging.", category: "Processing", image: "/gallery/processing-10.jpg" },

  // QUALITY (11 items)
  { id: "g11", title: "Quality Image 1", description: "Q-Graders conducting rigorous cupping evaluation.", category: "Quality", image: "/gallery/quality-1.jpg" },
  { id: "g12", title: "Quality Image 2", description: "Hand-sorting green coffee for zero defects.", category: "Quality", image: "/gallery/quality-2.jpg" },
  { id: "g13", title: "Quality Image 3", description: "Moisture content testing.", category: "Quality", image: "/gallery/quality-3.jpg" },
  { id: "g14", title: "Quality Image 4", description: "Sample roasting lab.", category: "Quality", image: "/gallery/quality-4.jpg" },
  { id: "g15", title: "Quality Image 5", description: "Screen size grading equipment.", category: "Quality", image: "/gallery/quality-5.jpg" },
  { id: "g16", title: "Quality Image 6", description: "Final quality inspection.", category: "Quality", image: "/gallery/quality-6.jpg" },
  { id: "g17", title: "Quality Image 7", description: "Density sorting and color grading.", category: "Quality", image: "/gallery/quality-7.jpg" },
  { id: "g18", title: "Quality Image 8", description: "Laboratory testing equipment.", category: "Quality", image: "/gallery/quality-8.jpg" },
  { id: "g19", title: "Quality Image 9", description: "Premium grade classification.", category: "Quality", image: "/gallery/quality-9.jpg" },
  { id: "g20", title: "Quality Image 10", description: "Defect identification and removal.", category: "Quality", image: "/gallery/quality-10.jpg" },
  { id: "g21", title: "Quality Image 11", description: "Final quality certification.", category: "Quality", image: "/gallery/quality-11.jpg" },

  // ORIGIN (4 items)
  { id: "g22", title: "Sidama", description: "Wild Arabica trees in their natural forest habitat.", category: "Origin", image: "/gallery/origin-1.jpg" },
  { id: "g23", title: "Guji Region", description: "The breathtaking highland terrain of Guji.", category: "Origin", image: "/gallery/origin-2.jpg" },
  { id: "g24", title: "Limu", description: "Rich coffee heritage from the Limu region.", category: "Origin", image: "/gallery/origin-3.jpg" },
  { id: "g25", title: "Yirgacheffe", description: "Lush green hills of Yirgacheffe.", category: "Origin", image: "/gallery/origin-4.jpg" },

];

