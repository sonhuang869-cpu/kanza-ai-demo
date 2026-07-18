import { mockFAQs, mockViralPosts, mockStats } from '@/lib/mock-data';
import { MessageCircle, TrendingUp, Eye, Heart, MessageSquare, Share2, Sparkles } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Social Insights</h1>
        <p className="text-slate-500 mt-1">What&apos;s working and what your audience is actually asking about.</p>
      </div>

      {/* Overview metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <div className="text-3xl font-bold">{mockStats.weeklyReach}</div>
          <div className="text-sm text-slate-500 mt-1">Weekly Reach</div>
          <div className="text-xs text-emerald-600 mt-2 font-medium">+18% vs last week</div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <div className="text-3xl font-bold">{mockStats.weeklyImpressions}</div>
          <div className="text-sm text-slate-500 mt-1">Impressions</div>
          <div className="text-xs text-emerald-600 mt-2 font-medium">+24% vs last week</div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <div className="text-3xl font-bold">{mockStats.engagementRate}%</div>
          <div className="text-sm text-slate-500 mt-1">Engagement Rate</div>
          <div className="text-xs text-emerald-600 mt-2 font-medium">Above industry avg</div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <div className="text-3xl font-bold">+{mockStats.audienceGrowth}%</div>
          <div className="text-sm text-slate-500 mt-1">Audience Growth</div>
          <div className="text-xs text-emerald-600 mt-2 font-medium">This month</div>
        </div>
      </div>

      {/* Chart placeholder */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">Engagement over time</h2>
            <p className="text-sm text-slate-500 mt-0.5">Last 30 days across all platforms</p>
          </div>
          <select className="px-3 py-1.5 rounded-lg border border-slate-200 text-sm bg-white">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>

        {/* Fake chart */}
        <div className="h-64 flex items-end gap-1.5">
          {[
            45, 52, 48, 61, 55, 68, 72, 65, 70, 78, 82, 74, 88, 92,
            85, 90, 96, 88, 94, 105, 98, 112, 108, 115, 122, 118, 125, 130, 128, 135
          ].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-primary-600 to-primary-400 opacity-90 hover:opacity-100 transition"
                style={{ height: `${(h / 135) * 100}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
          <span>Jun 18</span>
          <span>Jul 3</span>
          <span>Jul 17</span>
        </div>
      </div>

      {/* Two column */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* FAQs */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-500" />
                Frequently Asked
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">Questions your audience keeps asking</p>
            </div>
          </div>

          <div className="space-y-3">
            {mockFAQs.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{faq.question}</div>
                    <div className="text-xs text-slate-500 mt-0.5" dir="rtl">{faq.questionAr}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-lg font-bold text-blue-600">{faq.frequency}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">asks</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-slate-200 text-xs text-slate-600">
                  <Sparkles className="w-3.5 h-3.5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span><span className="font-medium">AI suggestion:</span> {faq.suggestedContent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Viral posts */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="mb-5">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              Top Performing Content
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">Your best posts from the last 90 days</p>
          </div>

          <div className="space-y-3">
            {mockViralPosts.map((post) => (
              <div key={post.id} className="p-4 rounded-xl border border-slate-100 hover:border-emerald-200 transition">
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                    {post.thumbnail}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {post.platform}
                      </span>
                      <span className="text-xs text-slate-500">·</span>
                      <span className="text-xs text-slate-500">{post.type}</span>
                    </div>
                    <h3 className="font-semibold text-sm">{post.topic}</h3>

                    <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {post.likes}</span>
                      <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {post.comments}</span>
                      <span className="flex items-center gap-1"><Share2 className="w-3 h-3" /> {post.shares}</span>
                      <span className="flex items-center gap-1 font-medium text-emerald-600">
                        <Eye className="w-3 h-3" /> {post.engagement}
                      </span>
                    </div>

                    <div className="mt-2 p-2 rounded-lg bg-primary-50 text-xs text-primary-700 flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                      <span>{post.insights}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
