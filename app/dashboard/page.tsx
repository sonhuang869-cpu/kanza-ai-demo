import Link from 'next/link';
import { mockStats, mockPlatforms, mockContentIdeas, mockScheduledPosts } from '@/lib/mock-data';
import { TrendingUp, Sparkles, Calendar, Users, ArrowUpRight, Clock } from 'lucide-react';

export default function DashboardOverview() {
  const upcomingPosts = mockScheduledPosts.slice(0, 5);
  const pendingIdeas = mockContentIdeas.filter(i => i.status === 'pending').slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Good morning, Ameer 👋</h1>
        <p className="text-slate-500 mt-1">Here&apos;s what&apos;s happening with your content this week.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Sparkles className="w-5 h-5" />}
          label="AI Ideas Generated"
          value={mockStats.contentIdeasGenerated.toString()}
          trend="+23% this week"
          trendUp
          color="from-purple-500 to-pink-500"
        />
        <StatCard
          icon={<Calendar className="w-5 h-5" />}
          label="Posts Scheduled"
          value={mockStats.scheduledPosts.toString()}
          trend="Next 7 days"
          color="from-blue-500 to-cyan-500"
        />
        <StatCard
          icon={<TrendingUp className="w-5 h-5" />}
          label="Engagement Rate"
          value={`${mockStats.engagementRate}%`}
          trend="+12% vs last week"
          trendUp
          color="from-emerald-500 to-teal-500"
        />
        <StatCard
          icon={<Users className="w-5 h-5" />}
          label="Weekly Reach"
          value={mockStats.weeklyReach}
          trend={`+${mockStats.audienceGrowth}% growth`}
          trendUp
          color="from-orange-500 to-red-500"
        />
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Ideas */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold">Fresh AI Ideas</h2>
              <p className="text-sm text-slate-500 mt-0.5">Generated based on your website & recent trends</p>
            </div>
            <Link href="/dashboard/content-generator" className="text-sm text-primary-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {pendingIdeas.map((idea) => (
              <div key={idea.id} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50/30 transition">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {idea.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{idea.type}</span>
                    <span className="text-xs text-slate-500">·</span>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      {idea.suggestedTime}
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm truncate">{idea.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{idea.content}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-lg font-bold text-primary-600">{idea.engagementScore}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Score</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Platform stats */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Platforms</h2>
            <div className="space-y-3">
              {mockPlatforms.map((platform) => (
                <div key={platform.name} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center text-xl`}>
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{platform.name}</div>
                    <div className="text-xs text-slate-500">{platform.posts} posts</div>
                  </div>
                  <div className="text-sm font-medium text-emerald-600">{platform.growth}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming posts */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Coming up</h2>
              <Link href="/dashboard/calendar" className="text-xs text-primary-600 font-medium">
                Calendar →
              </Link>
            </div>
            <div className="space-y-3">
              {upcomingPosts.map((post, i) => (
                <div key={i} className="flex items-center gap-3 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0">
                  <div className="text-center flex-shrink-0 w-11">
                    <div className="text-xs text-slate-500">{post.time}</div>
                    <div className="text-xs font-medium text-slate-700 mt-0.5">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{post.title}</div>
                    <div className="text-xs text-slate-500">{post.platform}</div>
                  </div>
                  <div className={`text-[10px] font-medium px-2 py-1 rounded-full ${
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
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, trend, trendUp, color }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  trendUp?: boolean;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 card-hover">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold tracking-tight">{value}</div>
      <div className="text-sm text-slate-500 mt-1">{label}</div>
      <div className={`text-xs mt-2 font-medium ${trendUp ? 'text-emerald-600' : 'text-slate-500'}`}>
        {trend}
      </div>
    </div>
  );
}
