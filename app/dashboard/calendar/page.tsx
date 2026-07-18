import { mockScheduledPosts } from '@/lib/mock-data';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const platformColors: Record<string, string> = {
  Instagram: 'from-pink-500 to-purple-500 border-pink-200',
  TikTok: 'from-slate-900 to-pink-500 border-slate-300',
  Twitter: 'from-sky-400 to-blue-500 border-sky-200',
  Snapchat: 'from-yellow-400 to-yellow-500 border-yellow-200',
};

const platformIcons: Record<string, string> = {
  Instagram: '📷',
  TikTok: '🎵',
  Twitter: '🐦',
  Snapchat: '👻',
};

export default function CalendarPage() {
  const days = Array.from({ length: 35 }, (_, i) => i - 5);
  const today = 18; // July 18

  // Map posts to days
  const postsByDay: Record<number, typeof mockScheduledPosts> = {};
  mockScheduledPosts.forEach(post => {
    const day = parseInt(post.date.split('-')[2]);
    if (!postsByDay[day]) postsByDay[day] = [];
    postsByDay[day].push(post);
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Calendar</h1>
          <p className="text-slate-500 mt-1">Plan, schedule, and publish across all platforms.</p>
        </div>
        <button className="px-4 py-2.5 gradient-bg text-white rounded-lg font-medium flex items-center gap-2 hover:opacity-90">
          <Plus className="w-4 h-4" />
          Schedule Post
        </button>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        {/* Calendar header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h2 className="text-xl font-semibold px-4">July 2026</h2>
            <button className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-2 text-xs">
            <button className="px-3 py-1.5 rounded-full bg-slate-900 text-white font-medium">Month</button>
            <button className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium">Week</button>
            <button className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium">Day</button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-4 text-xs">
          {Object.keys(platformIcons).map(platform => (
            <div key={platform} className="flex items-center gap-1.5">
              <span>{platformIcons[platform]}</span>
              <span className="text-slate-600">{platform}</span>
            </div>
          ))}
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="text-center text-xs font-medium text-slate-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, i) => {
            const isCurrentMonth = day > 0 && day <= 31;
            const isToday = day === today;
            const posts = postsByDay[day] || [];

            return (
              <div
                key={i}
                className={`min-h-[100px] p-2 rounded-lg border ${
                  isToday
                    ? 'border-primary-500 bg-primary-50'
                    : isCurrentMonth
                    ? 'border-slate-100 hover:border-slate-300 bg-white'
                    : 'border-slate-50 bg-slate-50/50'
                } transition`}
              >
                <div className={`text-xs font-semibold mb-2 ${
                  isToday ? 'text-primary-700' : isCurrentMonth ? 'text-slate-700' : 'text-slate-400'
                }`}>
                  {isCurrentMonth ? day : ''}
                </div>
                <div className="space-y-1">
                  {posts.map((post, j) => (
                    <div
                      key={j}
                      className={`text-[10px] px-1.5 py-1 rounded bg-gradient-to-r ${platformColors[post.platform]} text-white truncate flex items-center gap-1`}
                    >
                      <span>{platformIcons[post.platform]}</span>
                      <span className="truncate">{post.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scheduled list */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h2 className="text-lg font-semibold mb-4">This week&apos;s schedule</h2>
        <div className="space-y-3">
          {mockScheduledPosts.map((post, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition">
              <div className="text-2xl">{platformIcons[post.platform]}</div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{post.title}</div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric'
                  })} at {post.time}
                </div>
              </div>
              <div className="text-xs font-medium text-slate-600 px-3 py-1 rounded-full bg-slate-100">
                {post.platform}
              </div>
              <div className={`text-xs font-medium px-3 py-1 rounded-full ${
                post.status === 'scheduled'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-amber-100 text-amber-700'
              }`}>
                {post.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
