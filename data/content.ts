// ============================================================
// TOÀN BỘ NỘI DUNG PORTFOLIO NẰM Ở FILE NÀY.
// Muốn sửa chữ, thêm/bớt project, đổi link PDF — chỉ cần sửa ở đây.
//
// pdfUrl: dán link Google Drive / Dropbox của file PDF vào đây
// (để "" nếu chưa có — nút "View deck" sẽ tự ẩn).
// ============================================================

export const profile = {
  name: "Quỳnh Chi",
  firstName: "Chi",
  role: "Integrated Marketing Communications",
  school: "Foreign Trade University",
  location: "Hanoi, Vietnam",
  // ⬇️ Thay bằng email thật của bạn
  email: "your.email@example.com",
  // Để "" nếu không dùng — icon sẽ tự ẩn
  linkedin: "",
  facebook: "",
  behance: "",
  headline: "Turning complex inputs into clear, compelling narratives.",
  intro: [
    "An Integrated Marketing senior at Foreign Trade University who thrives at the intersection of consumer insights, data-driven strategy, and structured communication. My passion lies in transforming complex inputs — whether technical product features, raw data, or corporate briefs — into clear, compelling, and user-centric narratives.",
    "With a strong foundation in multi-channel IMC planning and corporate communications, I approach marketing not just through a creative lens, but through a logical structure. I enjoy bridging the gap between cross-functional teams and external stakeholders, ensuring that every pitch, internal asset, or product deck carries a consistent visual hierarchy and a clear value proposition. As I step into the professional space, I look forward to driving high-impact engagement within corporate and B2B communication landscapes.",
  ],
  strengths: [
    "Multi-channel IMC Planning",
    "Consumer Insights",
    "Corporate & B2B Communications",
    "Data-driven Strategy",
    "Content & Storytelling",
    "Stakeholder Management",
    "Visual Hierarchy & Deck Design",
  ],
};

export type Project = {
  title: string;
  brand: string;
  category: string;
  description: string;
  cover: string;
  tags: string[];
  pdfUrl: string;
};

export const academicIntro =
  "Multi-channel IMC projects built during my studies at Foreign Trade University alongside excellent teammates — turning theoretical frameworks into hands-on strategies across thousands of unforgettable memories.";

export const academicProjects: Project[] = [
  {
    title: "IMC Plan",
    brand: "O'Food",
    category: "IMC Project",
    description:
      "A comprehensive Integrated Marketing Communication plan targeting Gen Z consumers — blending digital content, experiential activations, and social proof to position O'Food as a vibrant, everyday culinary staple.",
    cover: "/covers/imc-project-o-food-01.jpg",
    tags: ["IMC Planning", "Gen Z", "F&B"],
    pdfUrl: "",
  },
  {
    title: "Creative Advertising",
    brand: "Danisa",
    category: "Creative Campaign",
    description:
      "A seasonal creative campaign built on emotional storytelling, visual hierarchy, and precise audience profiling to redefine premium gifting traditions across digital touchpoints.",
    cover: "/covers/creative-advertising-danisa-01.jpg",
    tags: ["Storytelling", "Seasonal Campaign"],
    pdfUrl: "",
  },
  {
    title: "IMC Strategy Overview",
    brand: "Phê La",
    category: "IMC Strategy",
    description:
      "Analysed consumer behaviour models and local coffee culture to draft a structured IMC overview — spotlighting the unique “Nốt Hương Đặc Sản” positioning through tailored community messaging.",
    cover: "/covers/imc-overview-phe-la-01.jpg",
    tags: ["Consumer Behaviour", "Positioning"],
    pdfUrl: "",
  },
  {
    title: "Public Relations",
    brand: "H&M",
    category: "PR & Crisis Comms",
    description:
      "A corporate PR and crisis-communication simulation centred on sustainability, community trust, and transparent brand dialogue to foster positive long-term stakeholder engagement.",
    cover: "/covers/public-relations-hm-01.jpg",
    tags: ["Corporate PR", "Sustainability"],
    pdfUrl: "",
  },
  {
    title: "Trade Marketing",
    brand: "Chin-Su Nam Ngư",
    category: "Trade Marketing",
    description:
      "A localised route-to-market strategy with point-of-sale (POSM) activation concepts — bridging consumer marketing campaigns with on-the-ground channel performance and retailer engagement.",
    cover: "/covers/trade-marketing-chinsu-nam-ngu-01.jpg",
    tags: ["Route-to-Market", "POSM"],
    pdfUrl: "",
  },
  {
    title: "Content Marketing",
    brand: "Lifebuoy",
    category: "Content Strategy",
    description:
      "A digital-first content narrative centring on public-health awareness — utilising empathetic hooks and interactive social media rollouts to keep the brand top-of-mind.",
    cover: "/covers/content-marketing-lifebuoy-01.jpg",
    tags: ["Digital Content", "Social Media"],
    pdfUrl: "",
  },
  {
    title: "Principles of Marketing",
    brand: "Budweiser",
    category: "Marketing Fundamentals",
    description:
      "A fundamental STP (Segmentation, Targeting, Positioning) analysis and marketing-mix evaluation, exploring global brand management adaptations within Vietnam's dynamic beverage market.",
    cover: "/covers/principles-of-marketing-budweiser-01.jpg",
    tags: ["STP", "Marketing Mix"],
    pdfUrl: "",
  },
  {
    // ✏️ Mô tả này do AI viết từ tên file — bạn hãy chỉnh lại cho đúng
    title: "Multimedia Communications",
    brand: "Canva × Affinity",
    category: "Visual Design",
    description:
      "Multimedia communications coursework — designing and producing visual brand assets end-to-end with Canva and Affinity, from concept to polished deliverables.",
    cover: "/covers/multimedia-communications-canva-affinity-01.jpg",
    tags: ["Visual Design", "Multimedia"],
    pdfUrl: "",
  },
];

export const personalIntro =
  "With a mindset to learn more, experience more, and deeply understand market dynamics, I constantly challenge myself through hands-on competitions and creator-driven campaigns.";

export const personalProjects: Project[] = [
  {
    title: "Digital Creator Activation",
    brand: "BABÉ Laboratories",
    category: "Digital Creatory",
    description:
      "Conceptualised the experience logic and interactive touchpoints for “The Running Babe” outdoor activation zone — translating clinical skincare benefits into engaging, lifestyle-focused consumer experiences.",
    cover: "/covers/business-case-digital-creatory-babe-laboratories-01.jpg",
    tags: ["Brand Activation", "Skincare"],
    pdfUrl: "",
  },
  {
    title: "Z-Marketer Challenge",
    brand: "Derma Angel",
    category: "Business Case",
    description:
      "A digital launch proposal featuring micro-influencer strategies and community-led content blueprints to capture acne-care market share among sporty shoppers.",
    cover: "/covers/business-case-z-marketers-derma-angel-01.jpg",
    tags: ["Influencer Marketing", "Launch Strategy"],
    pdfUrl: "",
  },
  {
    title: "L'Oréal Brandstorm 2026",
    brand: "L'Oréal Luxe",
    category: "Global Competition",
    description:
      "Collaborated in a high-intensity environment to pitch a tech-driven beauty innovation, tailored especially for the Luxe Division.",
    cover: "/covers/business-case-l-oreal-brandstorm-1.jpg",
    tags: ["Beauty Tech", "Innovation Pitch"],
    pdfUrl: "",
  },
  {
    // ✏️ Mô tả này do AI viết từ tên file — bạn hãy chỉnh lại cho đúng
    title: "Bản Lĩnh Marketer",
    brand: "OMO",
    category: "Business Case",
    description:
      "A business-case competition entry crafting an end-to-end marketing solution for OMO — from consumer insight to activation concept — for the Bản Lĩnh Marketer challenge.",
    cover: "/covers/business-case-ban-linh-marketer-omo-01.jpg",
    tags: ["Business Case", "FMCG"],
    pdfUrl: "",
  },
];

export type Experience = {
  role: string;
  org: string;
  summary: string;
};

export const experiences: Experience[] = [
  {
    role: "E-Commerce Intern",
    org: "Halocom",
    summary:
      "Supported multi-channel digital performance monitoring, gathered cross-platform data inputs, and assisted in compiling GMV reports, AOV calculations, and client-facing performance presentation decks.",
  },
  {
    role: "Influencer Outreach",
    org: "Brand Digging Club",
    summary:
      "Managed end-to-end communication and tracking for brand campaigns, negotiated creative briefs with content creators, and synthesised feedback to ensure seamless brand–influencer alignment.",
  },
];
