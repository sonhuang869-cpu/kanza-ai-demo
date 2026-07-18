'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Logo, LogoMark } from '@/components/Logo';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUpRight, Plus } from 'lucide-react';

export default function LandingPage() {
  const { t, lang, dir } = useLanguage();
  const arrowRotate = dir === 'rtl' ? 'group-hover:-rotate-45' : 'group-hover:rotate-45';
  const translateHover = dir === 'rtl' ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2';

  return (
    <main className="min-h-screen bg-ivory text-ink overflow-hidden" dir={dir}>
      {/* Marquee announcement bar */}
      <div className="bg-ink text-ivory py-2.5 overflow-hidden border-b border-ink">
        <div className="animate-marquee whitespace-nowrap flex gap-16 text-xs font-medium tracking-widest uppercase">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <span>{t.marquee.tagline}</span>
              <span className="text-terracotta">◆</span>
              <span>{t.marquee.new}</span>
              <span className="text-terracotta">◆</span>
              <span>{t.marquee.trusted}</span>
              <span className="text-terracotta">◆</span>
              <span>{t.marquee.edition}</span>
              <span className="text-terracotta">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-xl border-b border-ink/10">
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
          <Logo size={38} />
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#studio" className="link-editorial">{t.nav.studio}</a>
            <a href="#atelier" className="link-editorial">{t.nav.atelier}</a>
            <a href="#process" className="link-editorial">{t.nav.process}</a>
            <a href="#library" className="link-editorial">{t.nav.library}</a>
            <LanguageToggle />
            <Link href="/dashboard" className="btn-editorial">
              <span>{t.nav.enterStudio}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center px-8 py-20">
        <div className={`absolute top-24 ${dir === 'rtl' ? 'left-12' : 'right-12'} w-32 h-32 animate-float-rotate opacity-40`}>
          <LogoMark size={128} />
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-4 mb-8 animate-reveal-up opacity-0" style={{animationFillMode: 'forwards'}}>
                <span className="section-num">{t.hero.issue}</span>
                <div className="h-px w-16 bg-terracotta"></div>
                <span className="text-eyebrow text-ink-subtle">{t.hero.geo}</span>
              </div>

              <h1 className="text-huge animate-reveal-up opacity-0 delay-100" style={{animationFillMode: 'forwards'}}>
                {t.hero.headline1}
                <br />
                <span className="italic font-light text-terracotta">{t.hero.headline2}</span> {t.hero.headline3}
              </h1>

              <div className="my-10 flex items-center gap-4 animate-reveal-up opacity-0 delay-200" style={{animationFillMode: 'forwards'}}>
                <div className="rule flex-1 max-w-32"></div>
                <span className="text-eyebrow text-terracotta">{t.hero.divider}</span>
                <div className="rule flex-1"></div>
              </div>

              <p className="text-xl font-light text-ink-muted max-w-xl leading-relaxed animate-reveal-up opacity-0 delay-300" style={{animationFillMode: 'forwards'}}>
                {t.hero.description}
              </p>

              <div className="mt-10 flex items-center gap-4 flex-wrap animate-reveal-up opacity-0 delay-400" style={{animationFillMode: 'forwards'}}>
                <Link href="/dashboard" className="btn-editorial group">
                  <span>{t.hero.cta1}</span>
                  <ArrowUpRight className={`w-4 h-4 ${arrowRotate} transition-transform duration-500`} />
                </Link>
                <a href="#atelier" className="btn-ghost">
                  <span>{t.hero.cta2}</span>
                </a>
              </div>
            </div>

            <div className={`col-span-12 lg:col-span-4 lg:${dir === 'rtl' ? 'pr-8 lg:border-r' : 'pl-8 lg:border-l'} lg:border-ink/10`}>
              <div className="space-y-8 animate-reveal-right opacity-0 delay-500" style={{animationFillMode: 'forwards'}}>
                <div>
                  <div className="text-eyebrow text-ink-subtle mb-3">{t.hero.featured}</div>
                  <div className="text-2xl font-light leading-tight">
                    {t.hero.quote}
                  </div>
                  <div className="text-eyebrow text-terracotta mt-4">{t.hero.quoteBy}</div>
                </div>

                <div className="rule"></div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-4xl font-black tracking-tight">1,500<span className="text-terracotta">+</span></div>
                    <div className="text-eyebrow text-ink-subtle mt-2">{t.hero.brands}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black tracking-tight">89K</div>
                    <div className="text-eyebrow text-ink-subtle mt-2">{t.hero.posts}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black tracking-tight">×3<span className="text-terracotta">.4</span></div>
                    <div className="text-eyebrow text-ink-subtle mt-2">{t.hero.lift}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black tracking-tight">60<span className="text-terracotta">s</span></div>
                    <div className="text-eyebrow text-ink-subtle mt-2">{t.hero.setup}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview mockup */}
      <section className="px-8 mb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="editorial-frame p-4 relative animate-scale-in opacity-0" style={{animationFillMode: 'forwards'}}>
            <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-ink"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-ink"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-ink"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-ink"></div>

            <div className="bg-ivory-warm p-8 md:p-16 relative">
              <div className={`absolute top-4 ${dir === 'rtl' ? 'right-4' : 'left-4'} flex items-center gap-2`}>
                <LogoMark size={20} />
                <span className="text-eyebrow">{t.preview.label}</span>
              </div>

              <div className="grid grid-cols-12 gap-6 mt-8">
                <div className="col-span-12 md:col-span-5">
                  <div className="text-eyebrow text-terracotta mb-4">{t.preview.time}</div>
                  <div className="text-[80px] md:text-[120px] font-black leading-none tracking-tight">89</div>
                  <div className="text-eyebrow text-ink-subtle mt-2 max-w-[200px]">
                    {t.preview.ready}
                  </div>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-sage animate-ping-slow rounded-full"></div>
                    <span className="text-xs font-medium text-ink-muted">{t.preview.drafting}</span>
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

      {/* THE STUDIO */}
      <section id="studio" className="px-8 py-32 bg-ivory-warm border-y border-ink/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-24">
                <div className="section-num mb-6">{t.studio.section}</div>
                <h2 className="text-mega mb-8">
                  {t.studio.title1}
                  <br />
                  <span className="italic font-light">{t.studio.title2}</span>
                  <br />
                  {t.studio.title3}
                  <br />
                  <span className="text-terracotta">{t.studio.title4}</span>
                </h2>
                <p className="text-lg text-ink-muted font-light leading-relaxed max-w-md">
                  {t.studio.description}
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8 space-y-0">
              {t.studio.items.map((item, i) => (
                <div key={i} className="group grid grid-cols-12 gap-4 py-8 border-t border-ink/10 last:border-b hover:bg-ivory transition-colors duration-500 cursor-pointer -mx-4 px-4">
                  <div className="col-span-1 text-eyebrow text-terracotta pt-1">{String(i + 1).padStart(2, '0')}</div>
                  <div className="col-span-10 md:col-span-8">
                    <h3 className={`text-3xl font-bold tracking-tight mb-2 ${translateHover} transition-transform duration-500`}>{item.title}</h3>
                    <p className="text-base text-ink-muted font-light leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                  <div className={`col-span-12 md:col-span-3 flex items-center ${dir === 'rtl' ? 'justify-start' : 'justify-end'}`}>
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

      {/* THE ATELIER */}
      <section id="atelier" className="px-8 py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="section-num mb-6">{t.atelier.section}</div>
              <h2 className="text-mega">
                {t.atelier.title1}
                <br />
                {t.atelier.title2} <span className="italic font-light text-terracotta">{t.atelier.title3}</span>{t.atelier.title4}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 flex items-end">
              <p className="text-lg text-ink-muted font-light leading-relaxed max-w-md">
                {t.atelier.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 relative aspect-[16/10] group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&auto=format&fit=crop&q=80" alt="Featured product" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="800px" priority />
              <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors duration-500"></div>
              <div className={`absolute bottom-0 ${dir === 'rtl' ? 'right-0' : 'left-0'} p-8 text-ivory`}>
                <div className="text-eyebrow text-terracotta mb-2">{t.atelier.caseStudy}</div>
                <div className="text-4xl font-bold tracking-tight max-w-md">{t.atelier.luxuryRose}</div>
                <div className="text-sm text-ivory/80 mt-2">{t.atelier.stats}</div>
              </div>
              <div className={`absolute top-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} w-16 h-16 border-2 border-ivory flex items-center justify-center`}>
                <div className="text-2xl font-black text-ivory">92</div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 grid grid-cols-1 gap-4">
              <div className="relative aspect-square group overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&auto=format&fit=crop&q=80" alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="400px" />
                <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/30 transition-colors flex items-end p-6">
                  <div className="text-ivory">
                    <div className="text-eyebrow text-terracotta mb-1">{t.atelier.reel}</div>
                    <div className="text-lg font-bold">{t.atelier.layering}</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] group overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&auto=format&fit=crop&q=80" alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="400px" />
                <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/30 transition-colors flex items-end p-6">
                  <div className="text-ivory">
                    <div className="text-eyebrow text-terracotta mb-1">{t.atelier.story}</div>
                    <div className="text-lg font-bold">{t.atelier.behindCraft}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6 md:col-span-3 relative aspect-square group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1585687433492-9fac2a89b98d?w=400&auto=format&fit=crop&q=80" alt="" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" sizes="400px" />
              <div className="absolute inset-0 bg-terracotta/60 group-hover:bg-transparent transition-colors flex items-center justify-center">
                <div className="text-center text-ivory">
                  <div className="text-3xl font-black">94</div>
                  <div className="text-eyebrow text-ivory">{t.atelier.ramadan}</div>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 relative aspect-square group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1616604426481-fa5d431e2c9d?w=400&auto=format&fit=crop&q=80" alt="" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" sizes="400px" />
              <div className="absolute inset-0 bg-ink/60 group-hover:bg-transparent transition-colors flex items-center justify-center">
                <div className="text-center text-ivory">
                  <div className="text-3xl font-black">79</div>
                  <div className="text-eyebrow text-ivory">{t.atelier.reviews}</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 relative aspect-[16/9] group overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&auto=format&fit=crop&q=80" alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="600px" />
              <div className="absolute inset-0 bg-ink/50"></div>
              <div className={`absolute top-1/2 -translate-y-1/2 ${dir === 'rtl' ? 'right-8' : 'left-8'} text-ivory max-w-xs`}>
                <div className="text-eyebrow text-terracotta mb-2">{t.atelier.resultLabel}</div>
                <div className="text-3xl font-bold tracking-tight leading-tight">{t.atelier.resultText}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section id="process" className="px-8 py-32 bg-ink text-ivory relative overflow-hidden">
        <div className={`absolute top-24 ${dir === 'rtl' ? 'left-12' : 'right-12'} w-24 h-24 animate-float opacity-30`}>
          <LogoMark size={96} variant="inverse" />
        </div>

        <div className="max-w-[1400px] mx-auto relative">
          <div className="mb-20">
            <div className="section-num mb-6" style={{color: '#C4522E'}}>{t.process.section}</div>
            <h2 className="text-mega max-w-3xl">
              {t.process.title1}
              <br />
              <span className="italic font-light text-terracotta">{t.process.title2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ivory/20">
            {t.process.steps.map((step, i) => (
              <div key={i} className="p-10 border-r border-ivory/20 last:border-r-0 group hover:bg-ivory/5 transition-colors duration-500">
                <div className="text-6xl font-black text-terracotta mb-6">{String(i + 1).padStart(2, '0')}</div>
                <h3 className={`text-3xl font-bold mb-4 ${dir === 'rtl' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform duration-500`}>{step.title}</h3>
                <p className="text-base text-ivory/70 font-light leading-relaxed mb-6">{step.desc}</p>
                <div className="text-eyebrow text-terracotta">{step.hint}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8 items-end mb-12">
            <div className="col-span-12 md:col-span-8">
              <div className="section-num mb-6">{t.cta.section}</div>
              <h2 className="text-huge">
                {t.cta.title1}
                <br />
                <span className="text-terracotta">{t.cta.title2}</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="rule mb-6"></div>
              <p className="text-lg font-light leading-relaxed text-ink-muted">{t.cta.desc}</p>
            </div>
          </div>

          <div className="rule-thick mb-12"></div>

          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-8">
              <Link href="/dashboard" className="inline-flex items-center gap-6 group">
                <div className="flex items-center gap-3 text-4xl md:text-6xl font-black tracking-tight">
                  <span className="group-hover:text-terracotta transition-colors duration-500">{t.cta.button}</span>
                  <ArrowUpRight className={`w-12 h-12 md:w-16 md:h-16 ${arrowRotate} group-hover:text-terracotta transition-all duration-500`} />
                </div>
              </Link>
            </div>
            <div className="col-span-12 md:col-span-4 flex items-center gap-3 text-eyebrow text-ink-subtle">
              <Plus className="w-3 h-3" />
              <span>{t.cta.noSignup}</span>
              <div className="rule flex-1"></div>
              <span>{t.cta.demo}</span>
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
              <p className="text-ivory/60 font-light mt-8 max-w-sm leading-relaxed">{t.footer.tagline}</p>
              <div className="mt-6">
                <LanguageToggle variant="inverse" />
              </div>
            </div>

            <div className="col-span-6 md:col-span-2">
              <div className="text-eyebrow text-terracotta mb-4">{t.footer.studio}</div>
              <div className="space-y-2 text-sm">
                {t.footer.studioLinks.map((link) => (
                  <div key={link}>{link}</div>
                ))}
              </div>
            </div>

            <div className="col-span-6 md:col-span-2">
              <div className="text-eyebrow text-terracotta mb-4">{t.footer.product}</div>
              <div className="space-y-2 text-sm">
                {t.footer.productLinks.map((link) => (
                  <div key={link}>{link}</div>
                ))}
              </div>
            </div>

            <div className="col-span-12 md:col-span-3">
              <div className="text-eyebrow text-terracotta mb-4">{t.footer.kanza}</div>
              <div className="text-sm text-ivory/70 leading-relaxed font-light">
                <span className="italic">{t.footer.definition}</span> {t.footer.defText} <span className="text-terracotta">{t.footer.defTreasure}</span>{t.footer.defRest}
              </div>
            </div>
          </div>

          <div className="rule opacity-20 mb-8" style={{background: 'var(--ivory)'}}></div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ivory/50">
            <div>{t.footer.copyright}</div>
            <div className="flex items-center gap-6">
              <span>{lang === 'ar' ? 'الرياض' : 'Riyadh'}</span>
              <div className="w-1 h-1 rounded-full bg-terracotta"></div>
              <span>{lang === 'ar' ? 'جدة' : 'Jeddah'}</span>
              <div className="w-1 h-1 rounded-full bg-terracotta"></div>
              <span>{lang === 'ar' ? 'العدد 01' : 'Editorial № 01'}</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
