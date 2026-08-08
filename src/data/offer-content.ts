// ============================================================
// Shared offer content — Viral VFX Vault
// Single source of truth for welcome.astro and offer.astro (the
// post-optin thank-you page and the direct-link offer page). Edit
// copy here and both pages update automatically.
//
// index.astro (the homepage) keeps its own copy of this same
// content rather than importing from here — see AGENTS.md/CLAUDE.md
// note left in that file if this ever needs unifying too.
// ============================================================

export const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "What's included", href: "#included" },
  { label: "Pricing", href: "#checkout" },
  { label: "FAQ", href: "#faq" },
];

// --- HERO ---
export const heroHeadline =
  'Learn to <span class="text-brand-500">edit viral content</span> with just your phone';
export const heroSubheadline =
  "A step-by-step course that turns your iPhone into a scroll-stopping content machine, so you can grow your following, land brand deals, and finally make content people can't scroll past.";
export const heroBullets = [
  "Mobile-only editing, no expensive gear",
  "Reverse-engineer any viral effect you see",
  "A growing vault of trending FX tutorials",
  "Real feedback inside a private creator community",
];

// Real background stats on Colin (the instructor) - swap if you'd rather
// lead with course-level numbers once you have them.
export const proofStats = [
  { value: "100K+", label: "IG followers grown in 90 days" },
  { value: "10+", label: "years creating video content" },
  { value: "5", label: "core mobile editing tools taught" },
  { value: "$0", label: "extra gear required" },
];

// --- PROBLEM ---
export const problems = [
  "You put real effort into a video and it barely gets any views.",
  "You've tried every trend, sound, and hashtag - nothing sticks.",
  "You're not sure what to create next that'll actually grab attention.",
  "You keep watching other creators blow up while you're stuck in the same lane.",
];

// --- SOLUTION ---
export const steps = [
  { title: "Learn proven viral video structures", desc: "See exactly how top-performing videos are built, so you're never guessing what to post." },
  { title: "Master the 5 core mobile editing tools", desc: "A handful of tools make up most of the effects you see going viral - learn them once, use them everywhere." },
  { title: "Plug into a growing FX vault", desc: "Step-by-step breakdowns of trending effects, so you always know exactly what to create next." },
];

// --- STUDENT WINS (rotating, result-led) ---
export const studentWins = [
  {
    result: "Two videos, 100K+ and 250K+ views",
    quote: "Colin really does a phenomenal job breaking down step by step how to create such eye catching VFX content straight from my phone. Both videos have over 100k and over 250k views.",
    name: "Ursulline",
    meta: "Lifestyle content creator",
    image: "/images/testimonials/ursulline.jpg",
  },
  {
    result: "From frustrated to finally creative",
    quote: "Before these last few sessions with Colin, editing videos was a source of constant frustration for me. He had a way of demystifying a lot of the basics in iPhone editing that really opened the floodgates of creativity for me.",
    name: "Chris",
    meta: "Portland, OR · @chiduly",
    image: "/images/testimonials/chris.jpg",
  },
  {
    result: "New FX skills, views up right away",
    quote: "Working with Colin has been game-changing. Not only did I learn editing and FX shortcuts, but he showed me exactly how to use them to boost my views right away.",
    name: "Ali",
    meta: "@yog.ali",
    image: "/images/testimonials/ali.jpg",
  },
  {
    result: "Felt like 1-on-1 mentorship, not just a course",
    quote: "Colin's workshop wasn't just another course - it felt like sitting down with a mentor who genuinely cares about your success. I've taken so many courses before, always chasing that 'magic formula,' but this was different. Colin's approach was so in-depth, it felt like a 1-on-1 coaching session. He didn't just teach; he connected.",
    name: "Walter Cañas",
    meta: "Independent freelancer",
    image: "/images/testimonials/walter.jpg",
  },
];

// --- WHAT YOU GET ---
// Placeholder perceived values below (no current bonuses/pricing tiers to draw on) -
// confirm or adjust these before launch.
export const deliverables = [
  { title: "Core video editing lessons", desc: "Everything you need to master creative, scroll-stopping editing on your phone - from the basics to advanced technique.", value: "$197" },
  { title: "Step-by-step VFX tutorials", desc: "Follow-along tutorials that walk you from idea, to shooting, to a finished, postable effect.", value: "$197" },
  { title: "The Viral Effect Vault", desc: "A growing, sortable library of trending effects, each with its own step-by-step breakdown - never run out of ideas.", value: "$97" },
  { title: "Private creator community", desc: "Share your work, get feedback, and stay accountable alongside other ambitious creators.", value: "$97" },
];

// --- OUTCOMES ---
export const outcomes = [
  { before: "Hours per video, weak views", after: "Efficient edits that actually convert" },
  { before: "Guessing what to post next", after: "A repeatable system for viral-ready content" },
  { before: "Watching everyone else blow up", after: "Building your own following, on your terms" },
  { before: "Complicated, expensive software", after: "Everything shot and edited on your phone" },
];

// --- WHO IT'S FOR ---
export const forYou = [
  "You're a creator, business owner, or professional showcasing a skill and you're stuck on growth.",
  "You've got the content experience but not the editing chops to make it pop.",
  "You want to stand out from the crowd instead of blending in.",
  "You're happy shooting and editing everything on your phone.",
  "You're ready to learn a repeatable process, not just chase one lucky post.",
];
export const notForYou = [
  "You want someone else to edit your videos for you.",
  "You're not making content at all right now.",
  "You need a full production / camera-and-software workflow.",
  "You're looking for a guaranteed-overnight-virality gimmick.",
  "You're not willing to put in the reps to build the skill.",
];

// --- TESTIMONIALS GRID ---
export const wins = [
  { quote: "Colin was super helpful! I'm not new to CapCut, but just one session has already drastically improved my editing. I highly recommend getting coached by Colin if you want to level up your editing skills!", name: "Stacey", role: "@pink.vegan", result: "1 session, real jump", image: "/images/testimonials/stacey.jpg" },
  { quote: "This course is FIRE. I've got so many ideas flying thru my head! Colin explains the steps and tips so thoroughly!", name: "Alex A", role: "Aspiring content creator", result: "Ideas unlocked", image: "/images/testimonials/alex-a.jpg" },
  { quote: "Colin meticulously walked me through the process and opened my eyes to strategies that would improve my content across all platforms.", name: "Craig", role: "Houston, TX · @iamtheblazerking", result: "Growth across platforms", image: "/images/testimonials/craig.jpg" },
  { quote: "What I like most about this course is how practical and actionable it is. Colin breaks everything down into clear, step-by-step instructions, making it easy to follow and implement. This has been a game-changer for me!", name: "Helen Minh", role: "Content creator", result: "Time saved, audience noticed", image: "/images/testimonials/helen.jpg" },
  { quote: "Thank you so much for your course. It was exactly what I was looking for - quick, efficient. I already had a good knowledge of CapCut but your course helped me learn so much more within a short period.", name: "Franziska Ehret", role: "Social media coach", result: "New CapCut skills, fast", image: "/images/testimonials/franziska.jpg" },
  { quote: "Colin is an amazing soul who goes out beyond to help you get what works for you and does not quit until he goes all out to make sure it works.", name: "Inam", role: "Actor", result: "Goes above and beyond", image: "/images/testimonials/inam.jpg" },
];

// --- CHECKOUT (one-time) ---
export const checkoutDeliverables = deliverables.map((d) => ({ label: d.title, value: d.value }));
export const checkoutOptions = [
  { label: "One-time payment", price: "$150", note: "Lifetime access, pay once", featured: true },
];

// --- ABOUT ---
// role: "Founder, Viral Editing Academy" refers to the parent brand/company,
// not the product - left as-is.
export const about = {
  name: "Colin Pomeroy",
  role: "Founder, Viral Editing Academy",
  bio: "I'm a video creator with 10+ years of experience. After years of trial and error making content that got zero traction, I discovered how to use mobile VFX and creative editing to consistently capture attention - growing to 100K+ Instagram followers and landing brand deals, all from my phone. Viral Editing Academy is the exact system I use, taught step-by-step.",
  image: "/images/about-colin.jpg",
};

// --- FAQ ---
export const faqs = [
  { q: "What if I have zero editing or social media experience?", a: "No problem. The course is built to take you from zero editing experience to creating scroll-stopping videos, through step-by-step, easy-to-follow lessons." },
  { q: "Will this work for my niche or type of content?", a: "Yes. The techniques are effect and editing skills, not niche-specific tricks - they work whether you're a creator, a business owner, or a professional showcasing a skill." },
  { q: "What's included?", a: "Core video editing lessons, step-by-step VFX tutorials, the Viral Effect Vault, and private creator community access." },
  { q: "How quickly will I see results?", a: "That depends on how much you practice and post. Most students start creating polished effects within their first few days of working through the lessons." },
  { q: "Do I need expensive gear or editing software?", a: "No. All you need is your phone and a free app (CapCut). An inexpensive tripod is recommended, and gear suggestions are included in the course." },
  { q: "How do I get started?", a: "Click any \"Enroll now\" button on this page to check out - you'll get instant access." },
  { q: "How long do I have access?", a: "Lifetime access to the course and the private community, including all future updates. Go at your own pace." },
];

// --- SECTION HEADINGS, EYEBROWS & CTAs (all editable copy lives here too) ---
export const pageTitle = "Viral VFX Vault";
export const ctaLabel = "Enroll now - $150"; // shared by nav, hero, final CTA + sticky bar

export const heroEyebrow = "Viral VFX Vault";
export const heroSecondaryLabel = "See how it works";
export const heroTrustLabel = "Backed by real student results";

export const problemEyebrow = "The problem";
export const problemHeading = "Effort isn't the problem. Your edits are.";

export const solutionEyebrow = "How it works";
export const solutionHeading = "A repeatable system, not a lucky post";
export const solutionSub =
  "Viral videos aren't random. The creators who go viral on repeat use a system - here's the one you'll learn.";

export const winsEyebrow = "Student wins";
export const winsHeading = "Results from real students";
export const winsSub = "Real creators, real edits, real results - built with the same system you're getting.";

export const includedEyebrow = "Everything included";
export const includedHeading = "Here's exactly what you get";

export const outcomesEyebrow = "What changes";
export const outcomesHeading = "From stuck to scroll-stopping";

export const whoEyebrow = "Who it's for";
export const whoHeading = "Read this before you enroll";
export const forYouTitle = "This is for you if";
export const notForYouTitle = "This isn't for you if";

export const testimonialsEyebrow = "Real results";
export const testimonialsHeading = "What students are saying";

export const checkoutEyebrow = "Your checkout";
export const checkoutTitle = "Enroll in Viral VFX Vault";
export const checkoutTotalValue = "$588";
export const checkoutBadges = ["Lifetime access", "Instant access", "Learn at your own pace"];

export const aboutEyebrow = "About";
export const aboutHeading = `Hi, I'm ${about.name}`;

export const faqEyebrow = "Questions";
export const faqHeading = "Frequently asked questions";

export const finalCtaHeading = "Turn your phone into a scroll-stopping content machine";
export const finalCtaSub =
  "Enroll in Viral VFX Vault and start creating edits that get attention, grow your following, and open doors - all with your phone.";
export const finalCtaTrust = "Instant access · Lifetime access · Just $150";

export const footerTagline = "Learn to edit viral content with just your phone.";
export const stickyNote = "Viral VFX Vault";

export const SECTION = "mx-auto max-w-6xl px-6 py-16 md:py-20";
export const HEADING = "text-3xl font-bold tracking-tight text-ink md:text-4xl";
