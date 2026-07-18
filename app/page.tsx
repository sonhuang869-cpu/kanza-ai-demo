import Link from 'next/link';
import Image from 'next/image';
import { Logo, LogoMark } from '@/components/Logo';
import { ArrowUpRight, Plus } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink overflow-hidden">
      {/* Marquee announcement bar */}
      <div className="bg-ink text-ivory py-2.5 overflow-hidden border-b border-ink">
        <div className="animate-marquee whitespace-nowrap flex gap-16 text-xs font-medium tracking-widest uppercase">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <span>KANZA · The Content Studio</span>
              <span className="text-terracotta">◆</span>
              <span>New: Ramadan Content Templates</span>
              <span className="text-terracotta">◆</span>
              <span>Trusted by 1,500+ Saudi Brands</span>
              <span className="text-terracotta">◆</span>
              <span>2026 Editorial Release</span>
              <span className="text-terracotta">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-xl border-b border-ink/10">
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
          <Logo size={38} />
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#studio" className="link-editorial">The Studio</a>
            <a href="#atelier" className="link-editorial">The Atelier</a>
            <a href="#process" className="link-editorial">Process</a>
            <a href="#library" className="link-editorial">Library</a>
            <Link href="/dashboard" className="btn-editorial">
              <span>Enter Studio</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO — Editorial magazine style */}
      <section className="relative min-h-[90vh] flex items-center px-8 py-20">
        {/* Background elements - simple, no gradients */}
        <div className="absolute top-24 right-12 w-32 h-32 animate-float-rotate opacity-40">
          <LogoMark size={128} />
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative">
          <div className="grid grid-cols-12 gap-8">
            {/* Left column - main headline */}
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-4 mb-8 animate-reveal-up opacity-0" style={{animationFillMode: 'forwards'}}>
                <span className="section-num">Issue №01 / 2026</span>
                <div className="h-px w-16 bg-terracotta"></div>
                <span className="text-eyebrow text-ink-subtle">Riyadh — Jeddah — Global</span>
              </div>

              <h1 className="text-huge animate-reveal-up opacity-0 delay-100" style={{animationFillMode: 'forwards'}}>
                Unearth your
                <br />
                <span className="italic font-light text-terracotta">content</span> treasure.
              </h1>

              <div className="my-10 flex items-center gap-4 animate-reveal-up opacity-0 delay-200" style={{animationFillMode: 'forwards'}}>
                <div className="rule flex-1 max-w-32"></div>
                <span className="text-eyebrow text-terracotta">Kanza · كنز · Treasure</span>
                <div className="rule flex-1"></div>
              </div>

              <p className="text-xl font-light text-ink-muted max-w-xl leading-relaxed animate-reveal-up opacity-0 delay-300" style={{animationFillMode: 'forwards'}}>
                A content studio built inside your business. We read what you sell, learn what performs,
                and craft posts that actually move — with your final word before anything goes live.
              </p>

              <div className="mt-10 flex items-center gap-4 flex-wrap animate-reveal-up opacity-0 delay-400" style={{animationFillMode: 'forwards'}}>
                <Link href="/dashboard" className="btn-editorial group">
                  <span>Enter the Studio</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
                </Link>
                <a href="#atelier" className="btn-ghost">
                  <span>The Atelier</span>
                </a>
              </div>
            </div>

            {/* Right column - stats & meta */}
            <div className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l lg:border-ink/10">
              <div className="space-y-8 animate-reveal-right opacity-0 delay-500" style={{animationFillMode: 'forwards'}}>
                <div>
                  <div className="text-eyebrow text-ink-subtle mb-3">Featured this issue</div>
                  <div className="text-2xl font-light leading-tight">
                    &ldquo;Every brand carries a story worth telling. We just help you find the words.&rdquo;
                  </div>
                  <div className="text-eyebrow text-terracotta mt-4">— The KANZA Studio</div>
                </div>

                <div className="rule"></div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-4xl font-black tracking-tight">1,500<span className="text-terracotta">+</span></div>
                    <div className="text-eyebrow text-ink-subtle mt-2">Saudi Brands</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black tracking-tight">89K</div>
                    <div className="text-eyebrow text-ink-subtle mt-2">Posts Crafted</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black tracking-tight">×3<span className="text-terracotta">.4</span></div>
                    <div className="text-eyebrow text-ink-subtle mt-2">Avg. Engagement Lift</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black tracking-tight">60<span className="text-terracotta">s</span></div>
                    <div className="text-eyebrow text-ink-subtle mt-2">To Set Up</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview mockup - Full-bleed editorial */}
      <section className="px-8 mb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-frame p-4 relative animate-scale-in opacity-0" style={{animationFillMode: 'forwards'}}>
            <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-ink"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-ink"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-ink"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-ink"></div>

            <div className="bg-ivory-warm p-8 md:p-16 relative">
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <LogoMark size={20} />
                <span className="text-eyebrow">The Studio · Live Preview</span>
              </div>

              <div className="grid grid-cols-12 gap-6 mt-8">
                <div className="col-span-12 md:col-span-5">
                  <div className="text-eyebrow text-terracotta mb-4">Today, 07:24</div>
                  <div className="text-[80px] md:text-[120px] font-black leading-none tracking-tight">
                    89
                  </div>
                  <div className="text-eyebrow text-ink-subtle mt-2 max-w-[200px]">
                    Fresh Ideas · Ready for your review
                  </div>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-sage animate-ping-slow rounded-full"></div>
                    <span className="text-xs font-medium text-ink-muted">AI actively drafting</span>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-3">
                  {[
                    { src: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&auto=format&fit=crop&q=80', score: 92, tag: 'ROSE OUD' },
                    { src: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop&q=80', score: 88, tag: 'REEL' },
                    { src: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&auto=format&fit=crop&q=80', score: 85, tag: 'STORY' },
                    { src: 'https://images.unsplash.com/photo-1585687433492-9fac2a89b98d?w=400&auto=format&fit=crop&q=80', score: 94, tag: 'RAMADAN' },
                    { src: 'https://images.unsplash.com/photo-1616604426481-fa5d431e2c9d?w=400&auto=format&fit=crop&q=80', score: 79, tag: 'REVIEW' },
                    { src: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&auto=format&fit=crop&q=80', score: 91, tag: 'TIKTOK' },
                  ].map((item, i) => (
                    <div key={i} className="relative aspect-square group cursor-pointer overflow-hidden">
                      <Image src={item.src} alt="" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" sizes="150px" />
                      <div className="absolute inset-0 bg-ink/40 group-hover:bg-transparent transition-all duration-500"></div>
                      <div className="absolute inset-0 flex flex-col justify-between p-2 text-ivory">
                        <div className="text-[9px] font-bold tracking-widest">{item.tag}</div>
                        <div className="text-2xl font-black">{item.score}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE STUDIO — What we do */}
      <section id="studio" className="px-8 py-32 bg-ivory-warm border-y border-ink/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-24">
                <div className="section-num mb-6">02 / The Studio</div>
                <h2 className="text-mega mb-8">
                  We think
                  <br />
                  <span className="italic font-light">like editors.</span>
                  <br />
                  We ship
                  <br />
                  <span className="text-terracotta">like machines.</span>
                </h2>
                <p className="text-lg text-ink-muted font-light leading-relaxed max-w-md">
                  Six disciplines, one studio. Each one built by hand, tuned for Saudi content, and orchestrated by AI that finally understands your brand.
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8 space-y-0">
              {[
                {
                  num: '01',
                  title: 'Content Archaeology',
                  desc: 'We read every product image and description on your site. Not manually — automatically. Your inventory becomes our raw material.',
                  keyword: 'READ',
                },
                {
                  num: '02',
                  title: 'The Voice Engine',
                  desc: 'Our AI writes in your brand voice, not a template voice. Every generated caption sounds like you wrote it after two coffees.',
                  keyword: 'WRITE',
                },
                {
                  num: '03',
                  title: 'Signal Intelligence',
                  desc: 'We watch what actually performs — your FAQs, your viral posts, your competitor moves — and let data drive the next idea.',
                  keyword: 'LEARN',
                },
                {
                  num: '04',
                  title: 'The Publishing Desk',
                  desc: 'Instagram. TikTok. Twitter. Snapchat. One calendar, one rhythm, drag-and-drop scheduling with intelligent time slots.',
                  keyword: 'SCHEDULE',
                },
                {
                  num: '05',
                  title: 'The Editor In Chief (You)',
                  desc: 'Nothing publishes without your green light. Every draft waits. Your judgment is the final filter. Full control, always.',
                  keyword: 'APPROVE',
                },
                {
                  num: '06',
                  title: 'Bilingual By Default',
                  desc: 'Native Arabic content generation with cultural nuance. Every post exists in both languages — with proper RTL, proper tone, proper you.',
                  keyword: 'عربي',
                },
              ].map((item) => (
                <div key={item.num} className="group grid grid-cols-12 gap-4 py-8 border-t border-ink/10 last:border-b hover:bg-ivory transition-colors duration-500 cursor-pointer -mx-4 px-4">
                  <div className="col-span-1 text-eyebrow text-terracotta pt-1">{item.num}</div>
                  <div className="col-span-10 md:col-span-8">
                    <h3 className="text-3xl font-bold tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                    <p className="text-base text-ink-muted font-light leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                  <div className="col-span-12 md:col-span-3 flex items-center justify-end">
                    <span className="text-xs font-bold tracking-[0.3em] text-ink-subtle group-hover:text-terracotta transition-colors">
                      {item.keyword}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE ATELIER — Showcase with real product imagery */}
      <section id="atelier" className="px-8 py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="section-num mb-6">03 / The Atelier</div>
              <h2 className="text-mega">
                From product,
                <br />
                to <span className="italic font-light text-terracotta">post</span>,
                <br />
                to performance.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 flex items-end">
              <p className="text-lg text-ink-muted font-light leading-relaxed max-w-md">
                Case study: A luxury Saudi fragrance brand. Four products in, six weeks later — a full library of content that speaks fluently in their voice.
              </p>
            </div>
          </div>

          {/* Editorial gallery */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 relative aspect-[16/10] group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&auto=format&fit=crop&q=80" alt="Featured product" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="800px" priority />
              <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 text-ivory">
                <div className="text-eyebrow text-terracotta mb-2">Case Study N°01</div>
                <div className="text-4xl font-bold tracking-tight max-w-md">Luxury Rose Oud</div>
                <div className="text-sm text-ivory/80 mt-2">12 posts generated · 156K weekly reach</div>
              </div>
              <div className="absolute top-6 right-6 w-16 h-16 border-2 border-ivory flex items-center justify-center">
                <div className="text-2xl font-black text-ivory">92</div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 grid grid-cols-1 gap-4">
              <div className="relative aspect-square group overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop&q=80" alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="400px" />
                <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/30 transition-colors flex items-end p-6">
                  <div className="text-ivory">
                    <div className="text-eyebrow text-terracotta mb-1">Reel</div>
                    <div className="text-lg font-bold">Layering Guide</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] group overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&auto=format&fit=crop&q=80" alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="400px" />
                <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/30 transition-colors flex items-end p-6">
                  <div className="text-ivory">
                    <div className="text-eyebrow text-terracotta mb-1">Story</div>
                    <div className="text-lg font-bold">Behind The Craft</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6 md:col-span-3 relative aspect-square group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1585687433492-9fac2a89b98d?w=400&auto=format&fit=crop&q=80" alt="" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" sizes="400px" />
              <div className="absolute inset-0 bg-terracotta/60 group-hover:bg-transparent transition-colors flex items-center justify-center">
                <div className="text-center text-ivory">
                  <div className="text-3xl font-black">94</div>
                  <div className="text-eyebrow text-ivory">Ramadan</div>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 relative aspect-square group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1616604426481-fa5d431e2c9d?w=400&auto=format&fit=crop&q=80" alt="" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" sizes="400px" />
              <div className="absolute inset-0 bg-ink/60 group-hover:bg-transparent transition-colors flex items-center justify-center">
                <div className="text-center text-ivory">
                  <div className="text-3xl font-black">79</div>
                  <div className="text-eyebrow text-ivory">Reviews</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 relative aspect-[16/9] group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&auto=format&fit=crop&q=80" alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="600px" />
              <div className="absolute inset-0 bg-ink/50"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-8 text-ivory max-w-xs">
                <div className="text-eyebrow text-terracotta mb-2">The Result</div>
                <div className="text-3xl font-bold tracking-tight leading-tight">A brand that sounds unmistakably itself.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROCESS - Numbered editorial */}
      <section id="process" className="px-8 py-32 bg-ink text-ivory relative overflow-hidden">
        <div className="absolute top-24 right-12 w-24 h-24 animate-float opacity-30">
          <LogoMark size={96} variant="inverse" />
        </div>

        <div className="max-w-[1400px] mx-auto relative">
          <div className="mb-20">
            <div className="section-num mb-6" style={{color: '#C4522E'}}>04 / The Process</div>
            <h2 className="text-mega max-w-3xl">
              Three moves.
              <br />
              <span className="italic font-light text-terracotta">Weekly rhythm.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ivory/20">
            {[
              { num: '01', title: 'Connect', desc: 'Add your website URL. Link social accounts. That\'s it. 60 seconds and we\'re listening.', hint: 'Monday morning' },
              { num: '02', title: 'Generate', desc: 'Our AI drafts your entire week of content — captions, hashtags, best posting times, all bilingual.', hint: 'Monday, 8:03 AM' },
              { num: '03', title: 'Approve', desc: 'Scroll through drafts. Tweak what needs tweaking. Approve. Everything schedules itself.', hint: 'Monday, 8:15 AM — done.' },
            ].map((step) => (
              <div key={step.num} className="p-10 border-r border-ivory/20 last:border-r-0 group hover:bg-ivory/5 transition-colors duration-500">
                <div className="text-6xl font-black text-terracotta mb-6">{step.num}</div>
                <h3 className="text-3xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-500">{step.title}</h3>
                <p className="text-base text-ivory/70 font-light leading-relaxed mb-6">{step.desc}</p>
                <div className="text-eyebrow text-terracotta">{step.hint}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Massive editorial finale */}
      <section className="px-8 py-32 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8 items-end mb-12">
            <div className="col-span-12 md:col-span-8">
              <div className="section-num mb-6">05 / Enter</div>
              <h2 className="text-huge">
                Your studio
                <br />
                <span className="text-terracotta">awaits.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="rule mb-6"></div>
              <p className="text-lg font-light leading-relaxed text-ink-muted">
                Every screen you&apos;re about to explore is real. Every animation, every interaction, every data point — designed with your workflow in mind.
              </p>
            </div>
          </div>

          <div className="rule-thick mb-12"></div>

          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-8">
              <Link href="/dashboard" className="inline-flex items-center gap-6 group">
                <div className="flex items-center gap-3 text-4xl md:text-6xl font-black tracking-tight">
                  <span className="group-hover:text-terracotta transition-colors duration-500">Open the Studio</span>
                  <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16 group-hover:rotate-45 group-hover:text-terracotta transition-all duration-500" />
                </div>
              </Link>
            </div>
            <div className="col-span-12 md:col-span-4 flex items-center gap-3 text-eyebrow text-ink-subtle">
              <Plus className="w-3 h-3" />
              <span>No signup required</span>
              <div className="rule flex-1"></div>
              <span>Demo mode</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-ivory px-8 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-5">
              <Logo size={44} variant="inverse" />
              <p className="text-ivory/60 font-light mt-8 max-w-sm leading-relaxed">
                An editorial-grade content studio, built for Saudi brands that take their voice seriously.
              </p>
            </div>

            <div className="col-span-6 md:col-span-2">
              <div className="text-eyebrow text-terracotta mb-4">Studio</div>
              <div className="space-y-2 text-sm">
                <div>The Atelier</div>
                <div>The Library</div>
                <div>Case Studies</div>
              </div>
            </div>

            <div className="col-span-6 md:col-span-2">
              <div className="text-eyebrow text-terracotta mb-4">Product</div>
              <div className="space-y-2 text-sm">
                <div>AI Ideas</div>
                <div>Analytics</div>
                <div>Calendar</div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-3">
              <div className="text-eyebrow text-terracotta mb-4">Kanza · كنز</div>
              <div className="text-sm text-ivory/70 leading-relaxed font-light">
                <span className="italic">Noun.</span> An Arabic word meaning <span className="text-terracotta">treasure</span> — something precious that must be discovered, refined, and shared.
              </div>
            </div>
          </div>

          <div className="rule opacity-20 mb-8" style={{background: 'var(--ivory)'}}></div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ivory/50">
            <div>© 2026 KANZA/AI · The Content Studio · Prepared for Ameer Albahouth</div>
            <div className="flex items-center gap-6">
              <span>Riyadh</span>
              <div className="w-1 h-1 rounded-full bg-terracotta"></div>
              <span>Jeddah</span>
              <div className="w-1 h-1 rounded-full bg-terracotta"></div>
              <span>Editorial № 01</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
