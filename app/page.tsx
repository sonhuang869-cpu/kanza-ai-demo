import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-white font-bold">
              K
            </div>
            <span className="text-xl font-bold gradient-text">KANZA AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
            <a href="#how" className="text-slate-600 hover:text-slate-900">How it works</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900">Pricing</a>
            <Link href="/dashboard" className="px-5 py-2 gradient-bg text-white rounded-full font-medium hover:opacity-90">
              Live Demo →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-500 pulse-slow"></span>
            Built for Saudi Businesses
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Your Content Team,
            <br />
            <span className="gradient-text">Powered by AI</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Generate ideas from your website, learn from what works on social media,
            and schedule every post in one unified dashboard.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/dashboard" className="px-8 py-4 gradient-bg text-white rounded-full font-semibold text-lg hover:scale-105 transition shadow-xl shadow-primary-500/25">
              Try the Live Demo →
            </Link>
            <a href="#how" className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-full font-semibold text-lg hover:border-slate-400 transition">
              See how it works
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Demo prepared for KANZA · Built with Next.js · No setup required
          </p>
        </div>

        {/* Preview mockup */}
        <div className="max-w-5xl mx-auto mt-20 fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center text-xs text-slate-500 font-mono">
                app.kanza.ai/dashboard
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 via-white to-accent-500/5 p-12 min-h-[400px] flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                {[
                  { title: 'AI Ideas Generated', value: '89', trend: '+23%' },
                  { title: 'Posts Scheduled', value: '23', trend: 'Next 7 days' },
                  { title: 'Engagement Rate', value: '8.4%', trend: '+12%' },
                ].map((stat) => (
                  <div key={stat.title} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                    <div className="text-sm text-slate-500 mb-1">{stat.title}</div>
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-primary-600 mt-1 font-medium">{stat.trend}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-white text-slate-700 text-sm font-medium mb-4 border border-slate-200">
              Everything you need
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              One place. Every channel.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built with the specific workflow that Ameer described — prepare and publish in a single place, with manual approval before anything goes live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🌐',
                title: 'Website Analysis',
                desc: 'We read your product images and descriptions. AI understands what you sell without any manual input.',
              },
              {
                icon: '💡',
                title: 'AI Content Ideas',
                desc: 'Generate post ideas that fit your brand voice. Every idea comes with engagement predictions.',
              },
              {
                icon: '📊',
                title: 'Social Insights',
                desc: 'We analyze your past posts, FAQs, and viral content to suggest what will actually perform.',
              },
              {
                icon: '📅',
                title: 'Unified Scheduling',
                desc: 'One calendar for Instagram, TikTok, Twitter, and Snapchat. Drag, drop, publish.',
              },
              {
                icon: '✅',
                title: 'Manual Approval',
                desc: 'Nothing publishes automatically. Every post waits for your approval — full control, always.',
              },
              {
                icon: '🇸🇦',
                title: 'Arabic-First',
                desc: 'Native RTL support, Arabic content generation, and cultural context for the Saudi market.',
              },
            ].map((feature) => (
              <div key={feature.title} className="card-hover bg-white rounded-2xl p-8 border border-slate-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Three steps. Every week.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect',
                desc: 'Add your website URL and link your social accounts. Takes 60 seconds.',
              },
              {
                step: '02',
                title: 'Generate',
                desc: 'Our AI creates weekly content ideas based on your products and past engagement.',
              },
              {
                step: '03',
                title: 'Approve & Publish',
                desc: 'Review each idea, tweak the wording if needed, then schedule with a single click.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg text-white text-xl font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl gradient-bg p-16 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to see it in action?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Explore the live demo — every screen is functional with realistic mock data from a Saudi fragrance brand.
            </p>
            <Link href="/dashboard" className="inline-block px-10 py-4 bg-white text-primary-700 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl">
              Open the Demo →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded gradient-bg flex items-center justify-center text-white text-xs font-bold">
              K
            </div>
            <span>KANZA AI — Demo built for Ameer Albahouth</span>
          </div>
          <div>Built with Next.js · 2026</div>
        </div>
      </footer>
    </main>
  );
}
