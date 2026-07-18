import { mockScheduledPosts } from '@/lib/mock-data';
import { PlatformIconMap } from '@/components/PlatformIcons';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const platformStyle: Record<string, string> = {
  Instagram: 'bg-terracotta text-ivory',
  TikTok: 'bg-ink text-ivory',
  Twitter: 'bg-sage text-ivory',
  Snapchat: 'bg-ink-muted text-ivory',
};

export default function CalendarPage() {
  const days = Array.from({ length: 35 }, (_, i) => i - 5);
  const today = 18;

  const postsByDay: Record<number, typeof mockScheduledPosts> = {};
  mockScheduledPosts.forEach(post => {
    const day = parseInt(post.date.split('-')[2]);
    if (!postsByDay[day]) postsByDay[day] = [];
    postsByDay[day].push(post);
  });

  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="animate-reveal-up opacity-0" style={{animationFillMode: 'forwards'}}>
        <div className="flex items-center gap-4 mb-6">
          <span className="section-num">Section 04 · Publishing Desk</span>
          <div className="rule flex-1"></div>
        </div>
        <div className="flex items-end justify-between">
          <h1 className="text-huge">
            The <span className="italic font-light text-terracotta">publishing</span> desk.
          </h1>
          <button className="btn-editorial group">
            <Plus className="w-4 h-4" />
            <span>Schedule Post</span>
          </button>
        </div>
      </header>

      {/* Calendar */}
      <section className="editorial-frame p-8 animate-reveal-up opacity-0 delay-200" style={{animationFillMode: 'forwards'}}>
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-ink/10">
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 border border-ink/20 hover:bg-ink hover:text-ivory hover:border-ink transition-all flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="text-eyebrow text-terracotta">Issue 07</div>
              <h2 className="text-3xl font-black tracking-tight">July, 2026</h2>
            </div>
            <button className="w-10 h-10 border border-ink/20 hover:bg-ink hover:text-ivory hover:border-ink transition-all flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-0 border border-ink/20">
            {['MONTH', 'WEEK', 'DAY'].map((view, i) => (
              <button key={view} className={`px-4 py-2 text-eyebrow ${i === 0 ? 'bg-ink text-ivory' : 'text-ink-subtle hover:bg-ivory-warm'} transition-colors`}>
                {view}
              </button>
            ))}
          </div>
        </div>

        {/* Legend with SVG icons */}
        <div className="flex items-center gap-6 mb-6 text-eyebrow">
          {Object.keys(platformStyle).map((platform) => {
            const Icon = PlatformIconMap[platform];
            return (
              <div key={platform} className="flex items-center gap-2">
                <Icon size={14} className="text-ink" />
                <span className="text-ink-muted">{platform}</span>
              </div>
            );
          })}
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-0 mb-2 border border-ink/10">
          {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, i) => (
            <div key={day} className={`text-center text-eyebrow py-3 ${i !== 6 ? 'border-r' : ''} border-ink/10 bg-ivory-warm`}>
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-0 border-l border-t border-ink/10">
          {days.map((day, i) => {
            const isCurrentMonth = day > 0 && day <= 31;
            const isToday = day === today;
            const posts = postsByDay[day] || [];

            return (
              <div
                key={i}
                className={`min-h-[110px] p-2 border-r border-b border-ink/10 transition-all animate-reveal-up opacity-0 ${
                  isToday
                    ? 'bg-terracotta text-ivory'
                    : isCurrentMonth
                    ? 'bg-white hover:bg-ivory-warm cursor-pointer'
                    : 'bg-ivory'
                }`}
                style={{animationDelay: `${0.3 + i * 0.008}s`, animationFillMode: 'forwards'}}
              >
                <div className={`text-eyebrow mb-2 ${
                  isToday ? 'text-ivory' : isCurrentMonth ? 'text-ink' : 'text-ink-subtle/40'
                }`}>
                  {isCurrentMonth ? String(day).padStart(2, '0') : ''}
                </div>
                <div className="space-y-1">
                  {posts.map((post, j) => {
                    const Icon = PlatformIconMap[post.platform];
                    return (
                      <div
                        key={j}
                        className={`text-[10px] px-1.5 py-1 ${isToday ? 'bg-ivory text-terracotta' : platformStyle[post.platform]} font-bold flex items-center justify-between gap-1 hover:scale-105 transition-transform cursor-pointer`}
                      >
                        <Icon size={10} />
                        <span className="font-mono">{post.time}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Editorial schedule list */}
      <section className="animate-reveal-up opacity-0 delay-300" style={{animationFillMode: 'forwards'}}>
        <div className="mb-8">
          <div className="section-num mb-2">This week&apos;s issue</div>
          <h2 className="text-4xl font-black tracking-tight">Going out.</h2>
        </div>

        <div className="editorial-frame divide-y divide-ink/10">
          {mockScheduledPosts.map((post, i) => {
            const Icon = PlatformIconMap[post.platform];
            return (
              <div
                key={i}
                className="flex items-center gap-6 p-6 hover:bg-ivory-warm transition-colors group cursor-pointer animate-reveal-up opacity-0"
                style={{animationDelay: `${0.4 + i * 0.06}s`, animationFillMode: 'forwards'}}
              >
                <div className={`w-12 h-12 flex items-center justify-center ${platformStyle[post.platform]}`}>
                  <Icon size={20} />
                </div>
                <div className="w-24">
                  <div className="text-2xl font-black">{post.time}</div>
                  <div className="text-eyebrow text-ink-subtle">{new Date(post.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</div>
                </div>
                <div className="flex-1 group-hover:translate-x-2 transition-transform duration-500">
                  <div className="text-lg font-bold">{post.title}</div>
                  <div className="text-eyebrow text-ink-subtle mt-1">{post.platform}</div>
                </div>
                <span className={`text-eyebrow px-3 py-1 border ${post.status === 'scheduled' ? 'text-sage border-sage/30' : 'text-ink-subtle border-ink/20'}`}>
                  {post.status}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
