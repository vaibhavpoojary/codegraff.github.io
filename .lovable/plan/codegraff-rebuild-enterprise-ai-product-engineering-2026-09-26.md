# CodeGraff rebuild — Enterprise AI Product Engineering

Rebuild the whole website to follow the uploaded brief: a premium AI product company look (not an IT services template), with real product experiences, a scroll story, and an animated lifecycle.

## Visual direction
- Palette from the brief: white #FFFFFF, soft #F5F5F7, near-black #050505 / #111111, muted text #6E6E73, electric blue as the main accent, a light violet used rarely. Light and dark sections alternate.
- Type: Geist for headings and body, Geist Mono for small labels and the demo terminal. Very large hero headings that shrink cleanly on phones.
- Motion: reveal-on-scroll, a sticky scroll story, an animated agent flow, a typing terminal. All of it respects the "reduce motion" setting.
- No fake logos, testimonials or numbers. Use "Built with enterprise engineering principles" instead.

## Pages
- **Home** (in the brief's order): hero "Building Intelligence Into Software." with an animated agent network and a demo terminal; scroll story ("Software is changing… will act"); "From Prompt to Action" agent flow; 12-step lifecycle (Discover → Improve) as an interactive timeline; featured products; YouTube Automator workflow demo; "Designed Beyond the Demo" architecture diagram; technology ecosystem; Why CodeGraff (6 principles); "Have an idea that sounds impossible? Good." call to action.
- **Products**: large interactive cards for Enterprise RAG, Social AI Assistant, Social Advisor, YouTube Content Automator, AI Script Writer, and Agentic Automation Platform, each with a mock product screen. Plus a CodeGraff Labs section for future products.
- **Product detail** (one page per product): tagline, capabilities, workflow, mock screen, call to action.
- **Solutions** (new page): solutions grouped by business need, drawn from the brief.
- **Services** (new page): the 9 services (AI Product Engineering through AI Modernization).
- **Careers / Internships, About, Contact**: rewritten using the brief's copy. The contact form stays a working demo that shows a confirmation.
- **Navigation**: Home, Products, Solutions, Services, Careers, About, Contact, with a "Build With Us" button. Glass effect on scroll and a smooth mobile menu.
- **Footer**: "Engineering Intelligence." with links to every page.
- **Search listings**: title and description taken from the brief.

## Technical details
- Update the design tokens in index.css and tailwind.config.ts, and load Geist from Google Fonts.
- Add shared building blocks: Reveal (IntersectionObserver), Section, SectionHeading, ProductMockup, Terminal, AgentFlow, LifecycleTimeline, and ScrollStory (sticky, driven by scroll position).
- Keep product data in `src/data/products.ts`. Add routes `/products/:slug`, `/solutions` and `/services`.
- Use CSS and IntersectionObserver for animation, with no new heavy libraries. Product screens are built in code, not generated images.
- Remove the old tech stock photos that no longer fit the direction.
