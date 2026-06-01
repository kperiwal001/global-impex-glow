import spices from "@/assets/cat-spices.jpg";
import tea from "@/assets/cat-tea.jpg";
import pulses from "@/assets/cat-pulses.jpg";
import snacks from "@/assets/cat-snacks.jpg";
import instant from "@/assets/cat-instant.jpg";
import cosmetics from "@/assets/cat-cosmetics.jpg";
import beverages from "@/assets/cat-beverages.jpg";
import pickles from "@/assets/cat-pickles.jpg";
import copper from "@/assets/cat-copper.jpg";
import pooja from "@/assets/cat-pooja.jpg";

export const company = {
  name: "Golden Impex Private Limited",
  short: "Golden Impex",
  tagline: "Global Sourcing Partner for Indian FMCG Products",
  email: "info@goldenimpex.co",
  phone: "+91 94605 10363",
  phoneRaw: "919460510363",
  location: "Jaipur, Rajasthan, India",
  domain: "goldenimpex.co",
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  image: string;
  brands?: string[];
  items?: string[];
  intro: string;
  body: string[];
  packaging: string;
  faqs: { q: string; a: string }[];
};

export const categories: Category[] = [
  {
    slug: "indian-spices",
    name: "Indian Spices",
    short: "Authentic whole and ground spices from India's top brands.",
    image: spices,
    brands: ["MDH", "Everest", "Catch", "Badshah", "Eastern", "Aachi", "Ramdev", "Shan", "Suhana", "Goldiee"],
    intro:
      "Export-grade Indian spices sourced directly from authorized distributors of MDH, Everest and Catch — supplied in retail packs and bulk for international supermarkets and ethnic grocery chains.",
    body: [
      "India is the world's largest producer and exporter of spices, and Golden Impex is your single source for premium branded masalas. We supply turmeric, red chilli, coriander, cumin, garam masala, biryani masala, sambhar masala, chaat masala and 100+ SKUs across MDH, Everest and Catch.",
      "Every consignment is inspected for moisture, packaging integrity, batch codes and shelf life so that it lands on supermarket shelves in Australia, the UAE, the USA, Canada, the UK and Europe in perfect condition.",
    ],
    packaging:
      "Available in 50g, 100g, 200g, 500g consumer packs and 1kg–25kg bulk packs. Cartons palletized to FCL or LCL with export-grade strapping and shrink wrap.",
    faqs: [
      { q: "What is the minimum order quantity for spices?", a: "We accept mixed pallet orders starting from 500 kg and full FCL orders of 20 ft and 40 ft containers." },
      { q: "Do you supply private label spices?", a: "Yes. We offer private labelling with custom packaging, language-specific artwork and FSSAI / FDA compliant labelling." },
      { q: "What is the shelf life of exported spices?", a: "Standard shelf life is 18–24 months from the date of manufacture." },
    ],
  },
  {
    slug: "tea-coffee",
    name: "Tea & Coffee",
    short: "Premium Indian tea and coffee brands for global supermarkets and HoReCa.",
    image: tea,
    brands: ["Tata Tea", "Taj Mahal", "Wagh Bakri", "Red Label", "Society Tea", "Brooke Bond", "Lipton", "Girnar", "Bru Coffee", "Nescafé India"],
    intro:
      "Export Tata Tea, Taj Mahal, Wagh Bakri and Red Label in loose leaf, dust, tea bags and instant variants for international buyers and supermarket chains.",
    body: [
      "Indian tea is among the most loved hot beverages worldwide. We export Assam CTC, Darjeeling, masala chai, cardamom tea, ginger tea and instant chai pre-mixes from India's most trusted brands.",
      "Cold-chain logistics, moisture-resistant packaging and timely documentation make Golden Impex a preferred tea export partner for retailers in the UK, USA, Australia and the Gulf.",
    ],
    packaging:
      "100g, 250g, 500g, 1kg consumer packs and 25 kg bulk sacks. Tea bags in cartons of 25, 50 and 100.",
    faqs: [
      { q: "Can you export tea bags and loose tea together?", a: "Yes — we consolidate mixed SKUs in a single container for our buyers." },
      { q: "Do you ship to UK and Europe?", a: "Yes, with full EU labelling, allergen disclosure and country of origin compliance." },
      { q: "Is private labelled tea available?", a: "Yes, with origin-blend customization, bag style and box design." },
    ],
  },
  {
    slug: "pulses-food-grains",
    name: "Pulses & Food Grains",
    short: "Lentils, chickpeas, beans and food grains in bulk.",
    image: pulses,
    items: ["Toor Dal", "Moong Dal", "Chana Dal", "Urad Dal", "Kabuli Chana", "Rajma", "Basmati Rice"],
    intro:
      "Bulk pulses and food grains from India — toor dal, moong, chana, urad, kabuli chana, rajma, basmati rice and more — supplied in retail and wholesale packs.",
    body: [
      "We work with cleaning, sortex-grading and milling units across Maharashtra, Madhya Pradesh and Rajasthan to deliver consistent quality on every shipment.",
      "All pulses are machine-cleaned, polished where required, fumigated and packed in food-grade bags for export with phytosanitary certification.",
    ],
    packaging:
      "500g, 1kg, 5kg consumer packs and 25kg / 50kg PP bags for HoReCa and wholesale.",
    faqs: [
      { q: "Do you provide phytosanitary certificates?", a: "Yes, every export consignment is accompanied by phytosanitary and fumigation certificates." },
      { q: "Can you supply organic pulses?", a: "Yes, organic certified pulses are available on request with USDA / EU organic certification." },
      { q: "What is your delivery timeline?", a: "Typically 18–25 days from order confirmation depending on destination port." },
    ],
  },
  {
    slug: "snacks-namkeen",
    name: "Snacks & Namkeen",
    short: "Branded Indian snacks and ready-to-eat namkeen.",
    image: snacks,
    brands: ["Haldiram's", "Bikaji", "Bikano", "Balaji", "Lay's India", "Kurkure", "Parle", "Britannia", "Sunfeast", "Too Yumm", "Garden", "Anand"],
    intro:
      "Export Indian namkeen, bhujia, mixtures, chips, papad and ready-to-eat snacks from Haldiram's, Bikaji, Bikano and Balaji for ethnic grocery stores, supermarkets and e-commerce sellers worldwide.",
    body: [
      "We supply more than 200 SKUs of Indian snacks across crunchy mixtures, sweet snacks, savory bhujia and modern Indian chips.",
      "Nitrogen-flushed packaging, pallet-friendly cartons and cold-chain support for chocolate-coated SKUs ensure your shelf-life and quality are protected end-to-end.",
    ],
    packaging:
      "20g, 40g, 100g, 200g, 400g, 1kg packs in master cartons of 24 / 36 / 48 pieces.",
    faqs: [
      { q: "Do snacks meet US FDA labelling?", a: "Yes, ingredient declarations, allergen statements and nutrition panels are USDA / FDA compliant." },
      { q: "Do you supply Jain / no-onion-no-garlic variants?", a: "Yes, specific Jain variants from Haldiram's and Bikaji are available." },
      { q: "Can you mix snack brands in one container?", a: "Yes, our mixed-container model is designed for ethnic stores." },
    ],
  },
  {
    slug: "instant-foods",
    name: "Instant Foods",
    short: "Maggi, MTR, Ching's and ready-to-cook Indian meals.",
    image: instant,
    brands: ["Maggi", "MTR", "Ching's", "Gits", "Kohinoor", "Knorr", "Tasty Bite", "ITC Aashirvaad", "Patanjali", "Haldiram's RTE", "Yippee"],
    intro:
      "Ready-to-eat and ready-to-cook Indian meals, instant noodles, gravies, pastes, breakfast mixes and dessert mixes from Maggi, MTR, Ching's and Gits.",
    body: [
      "From masala noodles and Hakka stir-fry to upma, poha, gulab jamun mix and instant biryani — we supply the full instant foods range that international consumers love.",
      "Long shelf life, retort pouches and tetra packs make this category ideal for FCL container orders.",
    ],
    packaging:
      "Sachets, retort pouches, tetra packs and printed cartons sized for international retail.",
    faqs: [
      { q: "Do you supply MTR ready-to-eat in retort pouches?", a: "Yes, with 18–24 months shelf life and no refrigeration required." },
      { q: "What's the lead time?", a: "Most instant food SKUs ship within 15–20 days of order confirmation." },
      { q: "Are your products vegan-marked where applicable?", a: "Yes, where MRP packs carry vegan / vegetarian marks, the export pack matches." },
    ],
  },
  {
    slug: "cosmetics-personal-care",
    name: "Cosmetics & Personal Care",
    short: "Indian beauty, skincare, haircare and personal grooming.",
    image: cosmetics,
    brands: ["VLCC", "Himalaya", "Mamaearth", "Fogg", "Patanjali", "Dabur", "Lakmé", "Biotique", "Forest Essentials", "Khadi Natural", "Vicco", "Lotus Herbals", "Park Avenue", "Wow Skin Science", "Plum"],
    intro:
      "Authentic Indian cosmetics, herbal skincare, ayurvedic haircare and personal grooming from VLCC, Himalaya, Mamaearth, Fogg, Patanjali and Dabur.",
    body: [
      "India's herbal and ayurvedic beauty industry has gone global. We supply face washes, creams, shampoos, deodorants, oils, soaps and supplements for beauty importers and pharmacies across the world.",
      "All cosmetic exports come with batch certificates, ingredient lists, GMP documentation and country-specific labelling.",
    ],
    packaging:
      "Individual retail packs in master cartons. Fragile items are bubble-wrapped and corner-protected.",
    faqs: [
      { q: "Are products approved for sale in the GCC and EU?", a: "Yes, the SKUs we export are screened for regulatory compliance per destination market." },
      { q: "Do you supply MSDS for cosmetics?", a: "Yes, Material Safety Data Sheets are provided for all cosmetic SKUs." },
      { q: "Can you arrange private label skincare?", a: "Yes, private label and contract manufacturing options are available." },
    ],
  },
  {
    slug: "beverages-juices",
    name: "Beverages & Juices",
    short: "Juices, soft drinks, energy drinks and traditional beverages.",
    image: beverages,
    brands: ["Real", "Pepsi", "Coca-Cola", "Jeeru", "Paper Boat", "Frooti", "Maaza", "Slice", "Appy Fizz", "Rooh Afza", "Rasna", "B Natural", "Tropicana India"],
    intro:
      "Export Real fruit juices, Pepsi, Coca-Cola, Jeeru, Paper Boat ethnic drinks and other Indian beverages in tetra packs, PET bottles and cans.",
    body: [
      "From mango juice and mixed-fruit nectars to traditional jeera, jal-jeera and aam panna — we supply the most loved Indian beverages to ethnic grocery stores and supermarket chains worldwide.",
      "Temperature-controlled shipping for premium PET and glass-bottled SKUs ensures shelf-perfect arrival.",
    ],
    packaging:
      "Tetra packs (200ml, 1L), PET bottles (500ml, 1L), aluminium cans (250ml) in master cartons.",
    faqs: [
      { q: "Do you ship glass bottle beverages?", a: "Yes, with extra crating and pallet protection to prevent breakage." },
      { q: "Are sugar-free variants available?", a: "Yes, sugar-free and reduced-sugar SKUs are available across most brands." },
      { q: "Can you supply traditional drinks like jal jeera?", a: "Yes, both ready-to-drink and powder formats." },
    ],
  },
  {
    slug: "pickles-condiments",
    name: "Pickles & Condiments",
    short: "Mother's Recipe, Nilons and authentic Indian pickles.",
    image: pickles,
    brands: ["Mother's Recipe", "Nilons", "Priya", "Patak's", "Pachranga", "Bedekar", "Tops", "Ramdev Pickles", "Pravin", "Druk", "Kissan"],
    intro:
      "Indian mango pickle, mixed pickle, lime pickle, chili pickle, chutneys, pastes and cooking sauces from Mother's Recipe, Nilons, Priya and Patak's.",
    body: [
      "Authentic Indian pickles travel well and have a long shelf life — perfect for ethnic supermarkets in the USA, UK, Canada, UAE, Australia and Africa.",
      "Glass jars are individually shrink-wrapped, palletized and corner-cushioned for safe international transit.",
    ],
    packaging:
      "200g, 400g, 800g, 1kg glass jars and PET jars in master cartons of 12 / 24.",
    faqs: [
      { q: "Is shelf life affected by export?", a: "No — our cold and dry storage ensures 18–24 months of shelf life from manufacture." },
      { q: "Do you ship to Africa?", a: "Yes, we have buyers across Kenya, Nigeria, South Africa, Tanzania and Mauritius." },
      { q: "Can you supply chutneys in retail packs?", a: "Yes, both single-serve sachets and family packs are available." },
    ],
  },
  {
    slug: "copper-utensils",
    name: "Copper Utensils",
    short: "Copper bottles, glasses, jugs and traditional kitchenware.",
    image: copper,
    items: ["Copper Bottles", "Copper Glasses", "Copper Jugs", "Copper Plates", "Copper Cookware"],
    intro:
      "Premium copper bottles, glasses, jugs and kitchenware crafted in India — supplied to wellness retailers, gift shops and lifestyle brands worldwide.",
    body: [
      "Copperware from Moradabad and Jaipur is renowned globally for its craftsmanship. We supply hammered, embossed and matte-finished copperware in modern and traditional designs.",
      "Each piece is lacquer-coated for tarnish resistance and individually boxed for retail display.",
    ],
    packaging:
      "Individual retail-ready boxes inside master cartons of 12 / 24 pieces.",
    faqs: [
      { q: "Is the copper food-grade?", a: "Yes, all our copper utensils are food-grade pure copper, free of nickel and lead." },
      { q: "Can you provide custom engraving?", a: "Yes, custom logos and engraving for private label and gifting orders." },
      { q: "Do you supply matching gift sets?", a: "Yes, bottle + glass + tray gift sets are popular with our wellness buyers." },
    ],
  },
  {
    slug: "pooja-items",
    name: "Pooja Items",
    short: "Incense, religious products and pooja accessories.",
    image: pooja,
    items: ["Incense Sticks", "Dhoop", "Brass Diyas", "Idols", "Pooja Thali", "Camphor"],
    intro:
      "Incense sticks, dhoop, brass diyas, idols, pooja thalis, camphor and complete pooja kits exported to temples, religious stores and ethnic retailers globally.",
    body: [
      "Sourced from authentic manufacturers across Bangalore, Ahmedabad and Jaipur, our pooja items meet the demand of the global Indian diaspora.",
      "Fragrance-locked packing for incense and bubble-wrapping for brass items ensure premium arrival quality.",
    ],
    packaging:
      "Sachets, gift boxes, master cartons of 24 / 50 / 100 pieces.",
    faqs: [
      { q: "Do you supply Cycle brand incense?", a: "Yes, Cycle, Zed Black, Mangaldeep and Hem are all available." },
      { q: "Can you ship brass idols safely?", a: "Yes, with custom foam crating and double-walled cartons." },
      { q: "Do you offer complete pooja kits?", a: "Yes, ready-to-retail festival kits are available year-round." },
    ],
  },
];

export const seoPages = [
  {
    slug: "fmcg-exporter-india",
    title: "FMCG Exporter in India",
    description: "Leading FMCG exporter in India supplying branded grocery, spices, tea, cosmetics and beverages to global buyers, supermarkets and distributors.",
    h1: "FMCG Exporter in India",
    keywords: ["FMCG Exporter India", "Indian FMCG Export Company", "FMCG Supplier India"],
  },
  {
    slug: "indian-grocery-exporter",
    title: "Indian Grocery Exporter",
    description: "Trusted Indian grocery exporter supplying authentic FMCG and grocery brands to importers, supermarkets and ethnic stores across the world.",
    h1: "Indian Grocery Exporter",
    keywords: ["Indian Grocery Exporter", "Grocery Exporter India", "Indian Grocery Supplier"],
  },
  {
    slug: "export-indian-tea",
    title: "Export Indian Tea",
    description: "Export Tata Tea, Taj Mahal, Wagh Bakri and Red Label from India in bulk and retail packs with full export documentation.",
    h1: "Export Indian Tea Worldwide",
    keywords: ["Export Indian Tea", "Tata Tea Exporter", "Indian Tea Supplier"],
  },
  {
    slug: "export-indian-spices",
    title: "Export Indian Spices",
    description: "Export MDH, Everest and Catch Indian spices in retail and bulk packs to supermarkets and ethnic grocery stores globally.",
    h1: "Export Indian Spices",
    keywords: ["Export Indian Spices", "MDH Spices Exporter", "Everest Spices Exporter"],
  },
  {
    slug: "export-indian-snacks",
    title: "Export Indian Snacks",
    description: "Bulk Indian snacks and namkeen exporter — Haldiram's, Bikaji, Bikano, Balaji — for international supermarkets and ethnic retail.",
    h1: "Export Indian Snacks & Namkeen",
    keywords: ["Export Indian Snacks", "Namkeen Exporter India", "Indian Snack Supplier"],
  },
  {
    slug: "export-cosmetics-from-india",
    title: "Export Cosmetics from India",
    description: "Export VLCC, Himalaya, Mamaearth, Fogg and Dabur cosmetics from India with country-specific labelling and full compliance.",
    h1: "Export Cosmetics from India",
    keywords: ["Export Cosmetics from India", "Indian Cosmetics Exporter", "Indian Beauty Exporter"],
  },
  {
    slug: "export-pickles-from-india",
    title: "Export Pickles from India",
    description: "Export Mother's Recipe and Nilons Indian pickles, chutneys and condiments in glass jars and PET packs to global ethnic markets.",
    h1: "Export Pickles from India",
    keywords: ["Export Pickles from India", "Indian Pickle Exporter", "Pickle Supplier India"],
  },
  {
    slug: "export-beverages-from-india",
    title: "Export Beverages from India",
    description: "Export Real, Pepsi, Coca-Cola, Jeeru and Paper Boat Indian beverages in tetra packs, PET bottles and cans globally.",
    h1: "Export Beverages from India",
    keywords: ["Export Indian Beverages", "Indian Juice Exporter", "Beverage Supplier India"],
  },
  {
    slug: "private-label-fmcg",
    title: "Private Label FMCG Solutions",
    description: "Private label FMCG manufacturing and packaging solutions from India — spices, snacks, tea, cosmetics and grocery under your brand.",
    h1: "Private Label FMCG Solutions from India",
    keywords: ["Private Label FMCG India", "Private Label Manufacturer India", "Contract Packaging India"],
  },
  {
    slug: "mixed-grocery-container",
    title: "Mixed Grocery Container Supplier",
    description: "Consolidated mixed grocery container shipments combining multiple Indian FMCG categories in one FCL for distributors and ethnic stores.",
    h1: "Mixed Grocery Container Solutions",
    keywords: ["Mixed Grocery Container", "Consolidated FMCG Container", "Mixed FCL Indian Grocery"],
  },
  {
    slug: "bulk-fcl-container-supply",
    title: "Bulk FCL Container Supply",
    description: "Full Container Load (FCL) Indian FMCG sourcing and supply for large importers, supermarket chains and distributors worldwide.",
    h1: "Bulk FCL Container Supply",
    keywords: ["Bulk FCL FMCG", "Full Container Indian Grocery", "FCL Exporter India"],
  },
];

export const blogPosts = [
  {
    slug: "how-to-import-fmcg-products-from-india",
    title: "How to Import FMCG Products from India: A Step-by-Step Guide",
    excerpt: "A practical guide for importers covering supplier selection, documentation, shipping and compliance when importing Indian FMCG products.",
    date: "2026-04-12",
  },
  {
    slug: "top-indian-fmcg-brands-in-demand",
    title: "Top Indian FMCG Brands in Demand Worldwide in 2026",
    excerpt: "The Indian FMCG brands ethnic stores and supermarket chains are stocking the most — from MDH and Tata Tea to Mamaearth and Haldiram's.",
    date: "2026-03-28",
  },
  {
    slug: "complete-guide-importing-indian-tea",
    title: "Complete Guide to Importing Indian Tea",
    excerpt: "Everything you need to know to source Indian tea — varieties, packaging, certifications and the best brands to import.",
    date: "2026-03-10",
  },
  {
    slug: "best-indian-spice-brands-for-importers",
    title: "Best Indian Spice Brands for Importers",
    excerpt: "A buyer's guide to the most exported Indian spice brands — MDH, Everest, Catch — and which SKUs sell best in different markets.",
    date: "2026-02-22",
  },
  {
    slug: "private-labelling-fmcg-india",
    title: "Private Labelling FMCG Products from India",
    excerpt: "How private label sourcing from India works — minimum quantities, lead times, packaging, design and regulatory considerations.",
    date: "2026-02-04",
  },
  {
    slug: "mixed-grocery-containers-explained",
    title: "Mixed Grocery Containers Explained",
    excerpt: "Consolidated containers are how smart importers stock variety without high MOQs. Here's how mixed grocery containers work.",
    date: "2026-01-18",
  },
  {
    slug: "how-to-source-fmcg-products-from-india",
    title: "How to Source FMCG Products from India",
    excerpt: "The complete sourcing playbook for distributors and wholesalers entering the Indian FMCG export market.",
    date: "2026-01-05",
  },
];

import featBasmati from "@/assets/feat-basmati.jpg";
import featGhee from "@/assets/feat-ghee.jpg";
import featSweets from "@/assets/feat-sweets.jpg";
import featPapad from "@/assets/feat-papad.jpg";
import featAyurveda from "@/assets/feat-ayurveda.jpg";
import featConfectionery from "@/assets/feat-confectionery.jpg";

export type FeaturedProduct = {
  name: string;
  brand: string;
  category: string;
  image: string;
  tag?: string;
};

export const featuredProducts: FeaturedProduct[] = [
  { name: "Premium Basmati Rice", brand: "India Gate · Daawat · Kohinoor", category: "Grains", image: featBasmati, tag: "Bestseller" },
  { name: "Pure Cow Ghee", brand: "Amul · Patanjali · Anik", category: "Dairy", image: featGhee, tag: "Export Grade" },
  { name: "Indian Mithai & Sweets", brand: "Haldiram's · Bikano", category: "Sweets", image: featSweets, tag: "Festive" },
  { name: "Papad & Wafers", brand: "Lijjat · Bikaji · Anand", category: "Snacks", image: featPapad },
  { name: "Ayurvedic Supplements", brand: "Dabur · Patanjali · Himalaya", category: "Wellness", image: featAyurveda, tag: "Trending" },
  { name: "Chocolates & Confectionery", brand: "Cadbury · Nestlé · Amul", category: "Confectionery", image: featConfectionery },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  country: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Patel",
    role: "Procurement Director",
    company: "Patel Brothers Supermarket",
    country: "Chicago, USA",
    quote:
      "Golden Impex has been our trusted Indian FMCG partner for three years. Their mixed-container model and on-time documentation are flawless — every shipment lands shelf-ready.",
    rating: 5,
  },
  {
    name: "Amir Al-Mansouri",
    role: "Managing Partner",
    company: "Gulf Grocery Trading LLC",
    country: "Dubai, UAE",
    quote:
      "Authentic brands, transparent pricing and zero compromise on shelf life. Golden Impex consistently delivers premium Indian grocery that our customers demand.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "Spice Route Imports",
    country: "Melbourne, Australia",
    quote:
      "From MDH spices to Tata Tea and Haldiram's snacks — every FCL container arrives perfectly packed. Their export team responds within hours, not days.",
    rating: 5,
  },
  {
    name: "James O'Connor",
    role: "Category Manager",
    company: "Eastern Foods UK",
    country: "London, United Kingdom",
    quote:
      "Their private-label capability transformed our store-brand line. Quality matches the leading Indian brands at significantly better margins.",
    rating: 5,
  },
  {
    name: "Kwame Asante",
    role: "Director",
    company: "Asante Wholesale Ltd",
    country: "Lagos, Nigeria",
    quote:
      "Reliable, professional and genuinely competitive. Golden Impex is the only Indian sourcing partner we recommend across West Africa.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Buyer",
    company: "Continental Asian Foods",
    country: "Toronto, Canada",
    quote:
      "Documentation, fumigation certificates, FDA labelling — every detail handled. Working with Golden Impex feels like having an export desk in India.",
    rating: 5,
  },
];

import licenseFssai from "@/assets/license-fssai.jpg";
import licenseIec from "@/assets/license-iec.jpg";
import licenseApeda from "@/assets/license-apeda.jpg";
import licenseIso from "@/assets/license-iso.jpg";

export type License = {
  code: string;
  name: string;
  description: string;
  image: string;
};

export const licenses: License[] = [
  {
    code: "FSSAI",
    name: "Food Safety License",
    description: "Issued by Food Safety & Standards Authority of India — certifying compliance with food safety regulations.",
    image: licenseFssai,
  },
  {
    code: "IEC",
    name: "Import Export Code",
    description: "Issued by DGFT, Ministry of Commerce — authorizing all cross-border trade operations.",
    image: licenseIec,
  },
  {
    code: "APEDA",
    name: "Agricultural & Processed Food Exports",
    description: "Registered with APEDA for the export of processed food products from India.",
    image: licenseApeda,
  },
  {
    code: "ISO 9001",
    name: "Quality Management System",
    description: "International certification for quality management across sourcing, packing and export operations.",
    image: licenseIso,
  },
];
