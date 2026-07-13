// ============================================================
// TOÀN BỘ NỘI DUNG PORTFOLIO NẰM Ở FILE NÀY.
// Muốn sửa chữ, thêm/bớt project, đổi link PDF — chỉ cần sửa ở đây.
//
// pdfUrl: dán link Google Drive / Dropbox của file PDF vào đây
// (để "" nếu chưa có — card sẽ không click được nhưng vẫn hiển thị).
// cover: ảnh thumbnail nằm trong public/covers/
// ============================================================

export const profile = {
  name: "Quynh Chi",
  role: "Digital Marketing Intern",
  school: "Foreign Trade University",
  location: "Ho Chi Minh City, Vietnam",
  email: "pnqchi49@gmail.com",
  phone: "+84 564 335 379",
  linkedin: "https://www.linkedin.com/in/pnqchi/",
  portrait: "/images/quynh-chi-portrait.jpg",
  headline: "Hi, Welcome to Quynh Chi’s area",
  intro: [
    "I’m an Integrated Marketing Communication junior at Foreign Trade University, currently taking my very first steps into the marketing world.",
    "If I'm being completely honest, my journey started simply because I loved designing slides back in high school. But as I dove deeper into marketing at university, I realized it is so much more than just pretty presentations. It’s a fascinating mix of creative ideas, data points, and understanding the “why” behind the everyday content that catches our eyes.",
    "While there is still so much left for me to discover, I'm genuinely excited to embrace this learning journey. My goal is simple: to one day create those “wow” campaigns - the exact kind that left me in awe whenever I analyzed major brands in my college lectures.",
  ],
};

export type Internship = {
  role: string;
  org: string;
  period: string;
  url?: string;
  client?: string;
  note?: string;
  bullets: string[];
};

export const internshipIntro =
  "Practical, on-the-ground experiences where I applied strategic frameworks to real-world performance tracking and influencer operations.";

export const internships: Internship[] = [
  {
    role: "E-Commerce Intern",
    org: "Halocom",
    period: "Apr 2026 - Jun 2026",
    client: "Client: HYGIENE (I.P.One - Thailand)",
    note: "Thailand's #1 Most Chosen fabric care brand under leading Thai FMCG company I.P. One.",
    bullets: [
      "Managed end-to-end TikTok Shop operations and analytics for 200+ SKUs, generating over 12B VND total GMV/month (TikTok Shop: 4B+ VND/month).",
      "Built Excel sales dashboards tracking weekly revenue, sell-through rates, and OOS projections to support stock replenishment planning.",
      "Led coordination with Social Elite for the 6.6 Mega Live, achieving 105M+ VND revenue; delivered Weekly Accounting and Performance Reports.",
    ],
  },
  {
    role: "Influencer Outreach Freelancer",
    org: "Brand Digging Club",
    period: "Apr 2026 - Present",
    url: "https://branddiggingclub.com/",
    note: "Global marketing community (~800+ members) focused on beauty and creator economy strategy, publishing a monthly CMI magazine in South Korea.",
    bullets: [
      "Researched and profiled affiliate creators across US, Singapore, Korea, and MENA; authored market intelligence trends for the monthly magazine.",
      "Produced structured pre-meeting briefs covering brand affinity, positioning, and content metrics for brands like Medicube, Dr. Melaxin, and Celimax.",
      "Converted 20+ creator discovery sessions into confirmed partnership discussions within the first 2 months.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  objective: string;
  steps: string[];
  conclusion: string;
  cover: string;
  pdfUrl: string;
};

export const academicIntro =
  "These are what I have done during my studies at Foreign Trade University—mainly multi-channel IMC projects alongside excellent teammates, turning theoretical frameworks into hands-on strategies across thousands of unforgettable memories.";

export const academicProjects: Project[] = [
  {
    title: "IMC Plan — O'Food",
    description:
      "Developed a comprehensive Integrated Marketing Communication plan targeting Gen Z consumers, blending digital content, experiential activations, and social proof to position O'Food as a vibrant, everyday culinary staple.",
    objective:
      "To bridge convenience, taste, and emotional connection across Moms and Gen Z, shifting the brand from a functional utility to an inspiring daily meal companion.",
    steps: [
      "Targeted 'The Caring Gatekeeper' (Moms 31-45) facing the tension of balancing healthy meals with Gen Z's trendy cravings.",
      "Developed the \"Every Spin is a Win\" Zalo Mini App Lucky Draw to gamify meal planning.",
      "Executed O2O Food Truck Stunts at high-traffic modern trade hubs for sensory engagement.",
      "Amplified via Mega Brand Festivals on TikTok Shop and high-value BOGO stockpile deals.",
    ],
    conclusion:
      "Successfully positioned O'Food to own the emotional space of enjoyable everyday meals, turning daily meal planning into a rewarding experience for both mothers and youths.",
    cover: "/covers/imc-project-o-food-01.jpg",
    pdfUrl:
      "https://drive.google.com/file/d/1AHhG6xwwAF0-nAhRX2YwPp3uMPMKrYLw/view?usp=drive_link",
  },
  {
    title: "Creative Advertising — Danisa",
    description:
      "Co-created a seasonal creative campaign focusing on emotional storytelling, visual hierarchy, and precise target audience profiling to redefine premium gifting traditions across digital touchpoints.",
    objective:
      "To redefine premium gifting traditions during the festive season by focusing on deep emotional storytelling.",
    steps: [
      "Transformed the traditional Danisa tin container into a powerful \"emotional memory capsule\".",
      "Profiled specific target audiences to tailor digital touchpoints.",
      "Crafted the \"Chỉ cần May là có Tết\" narrative to bridge generational gaps during Tet reunions.",
    ],
    conclusion:
      "Brands achieve cultural permanence when they shift from simple commodities to active catalysts for sharing emotional truths.",
    cover: "/covers/creative-advertising-danisa-01.jpg",
    pdfUrl:
      "https://drive.google.com/file/d/1B3qd-eFkm7NsofrAraf4wqSPH6BvPUsm/view?usp=drive_link",
  },
  {
    title: "Content Marketing Strategy — Lifebuoy",
    description:
      "Crafted a digital-first content narrative centering on public health awareness, utilizing empathetic hooks and interactive social media rollouts to keep the brand top-of-mind.",
    objective:
      "To shift the post-trip negative perception of Gen Z (regarding skin issues) to ensure a complete and fulfilling travel experience, highlighting specific skin solutions.",
    steps: [
      "Developed the \"When Bad Skin Feels Good\" concept, turning post-trip skin issues into a \"Badge of Honor\" celebrating a journey lived to the fullest.",
      "Triggered engagement via Lifebuoy x Spotify \"Travel Sparks\" playlists.",
      "Amplified through viral clips, UGC Challenges (\"The Badge of Travel\"), and a physical Pop-up store (\"Celebrate your journey\").",
    ],
    conclusion:
      "By reframing an imperfect post-travel mark into a celebrated memory, the brand successfully becomes an end-to-end emotional and functional travel companion.",
    cover: "/covers/content-marketing-lifebuoy-01.jpg",
    pdfUrl:
      "https://drive.google.com/file/d/1uueCxN0t4uvn2qRd8j6P_b_7klRm7ttl/view?usp=drive_link",
  },
  {
    title: "Trade Marketing — Chin-Su Nam Ngư",
    description:
      "Designed a localized route-to-market strategy and POSM activation concepts, bridging consumer marketing campaigns with on-the-ground channel performance and retailer engagement.",
    objective:
      "To achieve +10% sales growth for Chin-Su Cá Cơm Biển Đông 365 in Hypermarkets by increasing shopper conversion and reinforcing premium equity.",
    steps: [
      "CATCH: Interrupted habitual purchasing via high-impact shelf communication, premium packaging, and exclusive bundle advantages.",
      "CONNECT: Educated shoppers by deploying \"Sensory & Occasion\" tasting stations to translate technical claims (40°N, 365 days) into taste experiences.",
      "CONVERT: Closed the sale by introducing \"Single-Bottle Premium Gift\" packaging to overcome final price hesitations.",
    ],
    conclusion:
      "Hypermarkets function as experiential retail environments, making them the optimal channel to drive trial and trade-up behavior in traditionally routine categories.",
    cover: "/covers/trade-marketing-chinsu-nam-ngu-01.jpg",
    pdfUrl:
      "https://drive.google.com/file/d/1lpUihjrqUgul13JJjV1Ag9xS701qpYqd/view?usp=drive_link",
  },
  {
    title: "IMC Strategy Overview — Phê La",
    description:
      "Analyzed consumer behavior models and local coffee culture to draft a structured IMC overview, highlighting unique positioning (\"Nốt Hương Đặc Sản\") through tailored community messaging.",
    objective:
      "To highlight Phê La's unique brand positioning within the highly competitive local coffee culture.",
    steps: [
      "Deconstructed regional behavioral trends regarding local specialty tea and coffee consumption.",
      "Developed a structured IMC framework focused on the \"Nốt Hương Đặc Sản\" proposition.",
      "Tailored community messaging to build authentic brand advocacy among local connoisseurs.",
    ],
    conclusion:
      "Deep consumer behavior analysis allows for hyper-localized messaging that genuinely resonates with specialized community cultures.",
    cover: "/covers/imc-overview-phe-la-01.jpg",
    pdfUrl:
      "https://drive.google.com/file/d/1qhSWTEZvh0ND1G2ivDn8N752XnUm4M0I/view?usp=drive_link",
  },
  {
    title: "Multimedia Comms — Canva",
    description:
      "Executed a design-driven advocacy campaign bridging visual storytelling with systemic policy reform.",
    objective:
      "To mobilize public support among young Filipino citizens to eliminate the outdated \"marry-your-rapist\" law, demonstrating the power of design for social impact.",
    steps: [
      "Partnered strategically with the Philippine Commission on Women (PCW) to translate design activism into formal legislative proposals.",
      "Launched the \"Till Death Sentence do us part\" short film, exposing the contradiction between societal values and legal realities.",
      "Executed the \"Voices heard\" DOOH billboard campaign driving mass petition signatures, alongside an interactive exhibition.",
    ],
    conclusion:
      "Transforming visual advocacy into structured policy action creates a powerful, tangible connection between digital platforms and real-world societal change.",
    cover: "/covers/multimedia-communications-canva-affinity-01.jpg",
    pdfUrl:
      "https://drive.google.com/file/d/165eNzeoUgTYTW5ZKSdFwazY2kBdhcyOH/view?usp=drive_link",
  },
  {
    title: "Principles of Marketing — Budweiser",
    description:
      "Conducted a fundamental STP analysis and marketing mix evaluation, exploring global brand management adaptations within the dynamic Vietnamese beverage market.",
    objective:
      "To capture market share by addressing the \"Gym Rat Paradox\"—the tension between strict fitness regimes and the deep social need to enjoy beverages.",
    steps: [
      "Identified target audience: Gym-goers aged 25-30 seeking healthier options.",
      "Innovated product: Introduced Low-Alcoholic Beer with Chia Seeds (\"Chia with Bud, Gains don't flood\").",
      "Deployed multi-stage IMC: Viral TikTok clips (\"Chia Up\"), \"Personal Fuel & Flow\" consultations, and \"Sweat & Sip\" events at major gyms.",
    ],
    conclusion:
      "Pioneering a wellness-oriented beer option successfully mitigates health concerns while maintaining the brand's core offering of refreshment and social connection.",
    cover: "/covers/principles-of-marketing-budweiser-01.jpg",
    pdfUrl:
      "https://drive.google.com/file/d/15anKiJn6rZCqQYWVx8c0NuCjnJolTYKJ/view?usp=drive_link",
  },
  {
    title: "Public Relations — H&M",
    description:
      "Structured a corporate PR and crisis communication simulation focused on sustainability, community trust, and transparent brand dialogue to foster positive long-term stakeholder engagement.",
    objective:
      "To rebuild H&M’s legitimacy in the Chinese market through a context-sensitive, relationship-oriented PR approach following the Xinjiang cotton controversy.",
    steps: [
      "Improved geopolitical awareness to prevent timing misjudgments and reduce early responsibility attribution.",
      "Restored narrative control via \"Acknowledgement Resistance\" to show the decision as CSR compliance, not political positioning.",
      "Executed Action Amplification by highlighting collaborations with local suppliers and reinforcing commitment to the Chinese market.",
    ],
    conclusion:
      "Realigning responsibility attribution and strengthening local partnerships successfully stabilizes market behavior and restores emotional legitimacy.",
    cover: "/covers/public-relations-hm-01.jpg",
    pdfUrl:
      "https://drive.google.com/file/d/1w2vCK1rhHJEj1RxsPwzfqY8pY6S_jjLp/view?usp=drive_link",
  },
];

export const personalIntro =
  "With a mindset to learn more, experience more, and deeply understand market dynamics, I constantly challenge myself through hands-on competitions and creator-driven campaigns.";

export const personalProjects: Project[] = [
  {
    title: "OMO Capsule — Bản Lĩnh Marketer",
    description:
      "Developed a winning pitch to trade-up consumers from liquid detergent to premium capsules.",
    objective:
      "To reframe the laundry experience and give consumers a compelling reason to trade up to premium capsule formats.",
    steps: [
      "Targeted \"The Overextended\" (22-28 young adults) facing weekend mental load and chore paralysis.",
      "Conceptualized \"Bật Mode Giặt Dễ\", positioning the OMO capsule as the effortless \"first move\" that kick-starts the wider clean-up cycle.",
      "Deployed a 3-phase rollout: SPARK (TikTok filter game & Teasers), IGNITE (Hero iTVC with Dino Vu & Quynh Anh Shyn), and SUSTAIN (Mega Livestreams & Gift Bundles).",
    ],
    conclusion:
      "Removing mental friction from the very first step accelerates routine completion, shifting the product from a functional commodity to an emotional investment.",
    cover: "/covers/business-case-ban-linh-marketer-omo-01.jpg",
    pdfUrl:
      "https://drive.google.com/file/d/1ZsgBqy0cRncyBa_WaTgrkrJQHJu_Ol57/view?usp=drive_link",
  },
  {
    title: "Digital Creator Activation — BABÉ",
    description:
      "Conceptualized experience logic and interactive touchpoints for \"The Running Babe\" outdoor activation zone, translating clinical skincare benefits into engaging, lifestyle-focused consumer experiences.",
    objective:
      "To seamlessly translate complex clinical skincare benefits into highly accessible, lifestyle-driven experiences for young creators and consumers.",
    steps: [
      "Designed interactive physical touchpoints that gamified the skincare education process.",
      "Mapped out user-journeys for \"The Running Babe\" outdoor activation.",
      "Integrated social-sharing mechanisms to amplify clinical claims through authentic lifestyle content.",
    ],
    conclusion:
      "Bridging scientific efficacy with engaging physical activations creates deeper, more memorable brand advocacy among digitally native audiences.",
    cover: "/covers/business-case-digital-creatory-babe-laboratories-01.jpg",
    pdfUrl:
      "https://drive.google.com/file/d/1tA7d67JlMVX2Oaj2zIp62-VVNC7wuVcu/view?usp=drive_link",
  },
  {
    title: "Z-Marketer Challenge — Derma Angel",
    description:
      "Developed a digital launch proposal featuring micro-influencer strategies and community-led content blueprints to capture acne-care market share among sporty shoppers.",
    objective:
      "To capture a highly specific acne-care market segment (sporty shoppers) by utilizing targeted, community-led digital blueprints.",
    steps: [
      "Identified hyper-niche micro-influencers aligned with active, sporty lifestyles.",
      "Engineered a localized digital rollout strategy centered around peer-to-peer trust.",
      "Drafted community-led content guidelines to ensure authentic brand integration within fitness narratives.",
    ],
    conclusion:
      "Niche audience penetration relies heavily on the credibility of micro-communities rather than mass-market broadcast messaging.",
    cover: "/covers/business-case-z-marketers-derma-angel-01.jpg",
    pdfUrl:
      "https://drive.google.com/file/d/1WHS4tSKsU3C3u3RKi8tqmKYWQ1C7yXJM/view?usp=drive_link",
  },
  {
    title: "L'Oréal Brandstorm 2026",
    description:
      "Collaborated in a high-intensity environment to pitch a tech-driven beauty innovation, especially for the Luxe Division.",
    objective:
      "To innovate within the Luxe Fragrance market by shifting from a traditional brand-led story to a radically customer-centric, personalized narrative.",
    steps: [
      "Conceptualized \"No-Scent Fragrance\" — an innovation designed to be a foundation that uplifts the human's natural skin-scent.",
      "Integrated a Biosensor Patch to interact with internal skin biology (pH, moisture, sebum) to categorize skin-scent types.",
      "Developed an ecosystem connecting users to expert communities for ultimate fragrance personalization.",
    ],
    conclusion:
      "Reframing legacy through ultimate personalization allows a brand to leave the spotlight, letting the consumer become the main character.",
    cover: "/covers/business-case-l-oreal-brandstorm-1.jpg",
    pdfUrl:
      "https://drive.google.com/file/d/1vsr6MmQdE45h7rFgFrcSVpXhBHsQK_8k/view?usp=drive_link",
  },
];

export const connectIntro =
  "I'm always eager to learn, ask questions, and collaborate. Feel free to reach out to me through any of the channels below!";

export const summaryColumns = [
  {
    heading: "Personal Reflections",
    body: [
      "Putting this portfolio together made me realize how much I’ve grown. It’s a mix of university milestones, teamwork, and real-world trials.",
      "These projects shaped who I am today: not only a real marketer-to-be who loves creative storytelling but always looks for the data and logic to back it up.",
    ],
  },
  {
    heading: "Key Knowledge & Skills",
    body: [
      "Through these experiences, I’ve learned how to look at a campaign from start to finish. I’ve practiced breaking down a brand’s positioning and planning multi-channel IMC rollouts.",
      "Beyond the strategy, I’ve gained hands-on experience working with data, learning how to track performance metrics and use data-driven insights to evaluate campaign effectiveness.",
    ],
  },
  {
    heading: "Highlights & Challenges",
    body: [
      "What I’m most proud of is always trying to deliver the best as I could, as if I was bringing value to myself.",
      "The biggest challenge? I am still actively working on becoming more sensitive to data in general. I’ve come to realize that data is truly the backbone of everything in marketing, and learning how to anchor big creative concepts into measurable data is a journey I'm fully committed to.",
    ],
  },
];
