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
  'Turn your phone into a <span class="text-brand-500">scroll-stopping content machine</span>';
export const heroSubheadline =
  "Unlock the Viral VFX Vault and start creating edits that get attention, grow your following, and earn you more money - all with your phone.";
export const heroBullets = [
  "Mobile-only editing, no expensive gear",
  "Easily find the viral effects people actually use to go viral, all in one sortable place",
  "Learn exactly how to recreate each effect, with a tutorial and tool breakdown for every one",
  "185+ proven viral effects and growing",
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

// --- SOLUTION / HOW IT WORKS ---
export const steps = [
  { title: "Find the right effect", desc: "Search the Vault by difficulty, style, use case, or just the hook that caught your eye. If you've seen it go viral, it's probably in here." },
  { title: "Follow the tutorial", desc: "Every effect comes with a step-by-step breakdown - no guessing, no piecing it together from three different YouTube videos." },
  { title: "Apply it to your next video", desc: "Shoot it, edit it, post it. That's the whole system." },
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

// --- WHAT YOU GET / PRICING & BONUS STACK ---
// Core product + 5 bonuses. checkoutTotalValue below is the exact sum
// (197 + 299 + 99 + 29 + 99 + 99 = 822), not an approximation.
export const deliverables = [
  { title: "Viral VFX Vault", desc: "The full library, searchable by difficulty, style, and use case, with a step-by-step tutorial behind every effect.", value: "$197" },
  { title: "Bonus 1: Viral Editing Academy (Full Course)", desc: "The complete system, start to finish - building a repeatable process for viral-ready content.", value: "$299" },
  { title: "Bonus 2: Advanced Viral FX Course", desc: "Next-level effects and technique once you've got the basics down.", value: "$99" },
  { title: "Bonus 3: Mobile Transitions Mini-Course", desc: "The transitions that make an edit feel seamless instead of choppy.", value: "$29" },
  { title: "Bonus 4: CapCut Bootcamp", desc: "Every tool, shortcut, and setting worth knowing, so you're never fumbling mid-edit.", value: "$99" },
  { title: "Bonus 5: \"5 Ideas Into 30 Posts\" Workshop", desc: "Turn one idea into a month of content instead of one post and a blank page tomorrow.", value: "$99" },
];

// --- BENEFITS ---
// video: compressed looping MP4s converted from source gifs in Gifs/
// (raw gifs are 14-180MB each - unusable on a page as-is; these are
// h264, muted, ~30-500KB apiece). See Gifs/ for the originals if any
// need to be re-cut or re-picked.
// fit: "contain" for portrait-source clips (~9:16) so the full frame shows
// letterboxed instead of getting cropped by object-cover in a 16:9 box;
// "cover" for clips that are already 16:9 (checked via ffprobe).
export const benefits = [
  { title: "Skyrocket your views and following", desc: "Every effect in the Vault is already proven - real videos that pulled real views. Steal what works instead of guessing.", video: "/videos/benefit-skyrocket-views.mp4", fit: "cover" },
  { title: "Never run out of content ideas again", desc: "Open the Vault, pick an effect, shoot. No more staring at your phone wondering what to post next.", video: "/videos/benefit-never-run-out-of-ideas.mp4", fit: "cover" },
  { title: "Edit like a pro with just your phone", desc: "No laptop, no expensive software, no gear list. Everything's built for CapCut on your phone - the same way I do it.", video: "/videos/benefit-edit-with-just-your-phone.mp4", fit: "cover" },
  { title: "Save hours of editing time", desc: "Every tutorial skips the trial and error. You get the exact steps, not an afternoon spent reverse-engineering someone else's edit.", video: "/videos/benefit-save-hours-editing.mp4", fit: "cover" },
  { title: "Stand out in the scroll", desc: "Most people are posting the same flat talking-head video. A few seconds of the right effect is what stops the thumb.", video: "/videos/benefit-stand-out.mp4", fit: "contain" },
  { title: "Stop guessing. Start growing.", desc: "You don't need a content strategy degree. You need a system you can actually follow - this is that system.", video: "/videos/benefit-stop-guessing.mp4", fit: "cover" },
];

// Hero split-mode looping video (converted from Gifs/Top 3 FX landscape 2.0.gif).
export const heroVideo = "/videos/hero-top-3-fx-v4.mp4";

// --- WHO IT'S FOR ---
export const forYou = [
  "You've never edited a video in your life - zero experience is the starting point, not a dealbreaker.",
  "You create in any niche - fitness, business, comedy, coaching, it doesn't matter. These are editing skills, not niche tricks.",
  "You're a business owner making your own content and want it to look like someone made it for you.",
  "You're already a creator and want to level up past the basics.",
  "You're chasing brand deals or trying to go full-time, and know better edits mean better numbers.",
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
  { label: "One-time payment", price: "$97", note: "Lifetime access, pay once", featured: true },
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
  { q: "What exactly is the Viral VFX Vault?", a: "It's a searchable library of proven viral video effects. Every effect is broken down step-by-step - the exact tools, the exact settings, done on your phone - so you're never guessing how something was made." },
  { q: "Do I need any editing experience?", a: "No. Every tutorial assumes you're starting from zero. If you can tap record on your phone, you can follow along." },
  { q: "Will this work for my niche?", a: "Yes. These are editing and effect skills, not niche-specific tricks. Doesn't matter if you're a creator, a coach, or a business owner posting your own content - the technique transfers." },
  { q: "Can't I just learn this for free on YouTube or TikTok?", a: "You can find pieces of it, sure. But free tutorials are usually rushed, skip steps, or leave out the one detail that actually makes the effect work. Everything here is organized and built to be followed start to finish - not pieced together from ten different videos." },
  { q: "What do I actually get inside?", a: "The Vault itself, plus five bonuses - the full Viral Editing Academy course, the Advanced Viral FX course, a mobile transitions mini-course, a CapCut bootcamp, and the \"5 Ideas Into 30 Posts\" workshop. Full breakdown above, with what each is worth on its own." },
  { q: "Can I really do this with just my phone?", a: "Yes - that's the whole point. No laptop, no expensive software, no gear list. Everything's built around CapCut, the same way I edit." },
  { q: "Is there a guarantee?", a: "Yes. Try it for 7 days. If it's not for you, email us and you'll get a full refund - no hoops to jump through." },
];

// --- SECTION HEADINGS, EYEBROWS & CTAs (all editable copy lives here too) ---
export const pageTitle = "Viral VFX Vault";
export const ctaLabel = "Enroll now - $97"; // shared by nav, hero, final CTA + sticky bar

export const heroEyebrow = "Viral VFX Vault";
export const heroSecondaryLabel = "See how it works";
export const heroTrustLabel = "Backed by real student results";

export const problemEyebrow = "The problem";
export const problemHeading = "Effort isn't the problem. Your edits are.";

export const solutionEyebrow = "How it works";
export const solutionHeading = "Three steps. That's the whole system.";
export const solutionSub =
  "No filler lessons, no 40-minute videos to sit through - just find an effect, follow the steps, and post.";

export const winsEyebrow = "Student wins";
export const winsHeading = "Results from real students";
export const winsSub = "Real creators, real edits, real results - built with the same system you're getting.";

export const includedEyebrow = "Everything included";
export const includedHeading = "Here's exactly what you get";

export const benefitsEyebrow = "The benefits";
export const benefitsHeading = "What actually changes when you use it";

export const whoEyebrow = "Who it's for";
export const whoHeading = "Read this before you enroll";
export const forYouTitle = "This is for you if";
export const notForYouTitle = "This isn't for you if";

export const testimonialsEyebrow = "Real results";
export const testimonialsHeading = "What students are saying";

export const checkoutEyebrow = "Your checkout";
export const checkoutTitle = "Enroll in Viral VFX Vault";
export const checkoutTotalValue = "$822";
export const checkoutBadges = ["Lifetime access", "Instant access", "Learn at your own pace"];

// Shown separately from the checkout stack - not counted in checkoutTotalValue.
export const testimonialIncentive =
  "Get results and tell us about it - a testimonial (written or video) unlocks the Visual Hooks Masterclass, free.";

export const aboutEyebrow = "About";
export const aboutHeading = `Hi, I'm ${about.name}`;

export const faqEyebrow = "Questions";
export const faqHeading = "Frequently asked questions";

export const finalCtaHeading = "Turn your phone into a scroll-stopping content machine";
export const finalCtaSub =
  "Enroll in Viral VFX Vault and start creating edits that get attention, grow your following, and open doors - all with your phone.";
export const finalCtaTrust = "Instant access · Lifetime access · Just $97";

export const footerTagline = "Learn to edit viral content with just your phone.";
export const stickyNote = "Viral VFX Vault";

export const SECTION = "mx-auto max-w-6xl px-6 py-16 md:py-20";
export const HEADING = "text-3xl font-bold tracking-tight text-ink md:text-4xl";
