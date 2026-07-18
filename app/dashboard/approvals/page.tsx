'use client';

import { useState } from 'react';
import { mockContentIdeas } from '@/lib/mock-data';
import { CheckCircle2, XCircle, Edit3, Calendar, Zap, TrendingUp } from 'lucide-react';

export default function ApprovalsPage() {
  const [ideas, setIdeas] = useState(mockContentIdeas.filter(i => i.status === 'pending'));
  const [selected, setSelected] = useState<number | null>(ideas[0]?.id ?? null);

  const selectedIdea = ideas.find(i => i.id === selected);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Approvals</h1>
        <p className="text-slate-500 mt-1">Review each post before it gets scheduled. Nothing publishes without your OK.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: List */}
        <div className="lg:col-span-2 space-y-3">
          <div className="text-sm font-semibold text-slate-700 mb-2">
            Pending review ({ideas.length})
          </div>
          {ideas.map((idea) => (
            <button
              key={idea.id}
              onClick={() => setSelected(idea.id)}
              className={`w-full text-left p-4 rounded-xl border transition ${
                selected === idea.id
                  ? 'border-primary-500 bg-primary-50/50 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-accent-500/20 flex items-center justify-center text-xl flex-shrink-0">
                  {idea.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-500 mb-1">{idea.type}</div>
                  <div className="font-semibold text-sm truncate">{idea.title}</div>
                  <div className="text-xs text-slate-500 mt-1 truncate">{idea.suggestedTime}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm font-bold text-primary-600">{idea.engagementScore}</div>
                </div>
              </div>
            </button>
          ))}

          {ideas.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              All caught up. No more approvals waiting.
            </div>
          )}
        </div>

        {/* Right: Preview */}
        {selectedIdea && (
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden sticky top-24">
              {/* Preview */}
              <div className="p-6 border-b border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs font-medium text-primary-600 mb-1">Preview</div>
                    <h2 className="text-xl font-bold">{selectedIdea.title}</h2>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-100 text-primary-700">
                    {selectedIdea.type}
                  </span>
                </div>

                {/* Fake IG-style preview */}
                <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 mb-4">
                  <div className="flex items-center gap-2 p-3 border-b border-slate-200 bg-white">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-semibold">
                      K
                    </div>
                    <div>
                      <div className="text-xs font-semibold">kanza.official</div>
                      <div className="text-[10px] text-slate-500">Sponsored</div>
                    </div>
                  </div>
                  <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-primary-100 via-white to-accent-500/10 text-8xl">
                    {selectedIdea.image}
                  </div>
                  <div className="p-3 bg-white">
                    <div className="text-sm">
                      <span className="font-semibold">kanza.official</span>{' '}
                      <span className="text-slate-700">{selectedIdea.content}</span>
                    </div>
                    <div className="text-xs text-primary-600 mt-2">
                      {selectedIdea.hashtags.join(' ')}
                    </div>
                  </div>
                </div>

                {/* Arabic preview */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100" dir="rtl">
                  <div className="text-xs text-slate-500 mb-1 font-mono" dir="ltr">Arabic version</div>
                  <div className="text-sm font-semibold mb-1">{selectedIdea.titleAr}</div>
                  <div className="text-sm text-slate-700">{selectedIdea.contentAr}</div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 border-b border-slate-100">
                <div className="p-4 text-center border-r border-slate-100">
                  <Zap className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                  <div className="text-2xl font-bold">{selectedIdea.engagementScore}</div>
                  <div className="text-xs text-slate-500">Engagement</div>
                </div>
                <div className="p-4 text-center border-r border-slate-100">
                  <TrendingUp className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                  <div className="text-2xl font-bold">{selectedIdea.predictedReach}</div>
                  <div className="text-xs text-slate-500">Predicted Reach</div>
                </div>
                <div className="p-4 text-center">
                  <Calendar className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                  <div className="text-sm font-bold leading-tight pt-1">{selectedIdea.suggestedTime}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Best time</div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 flex items-center gap-2">
                <button
                  onClick={() => {
                    setIdeas(ideas.filter(i => i.id !== selected));
                    setSelected(ideas.find(i => i.id !== selected)?.id ?? null);
                  }}
                  className="flex-1 py-3 bg-emerald-500 text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-emerald-600"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Approve & Schedule
                </button>
                <button className="px-4 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium text-sm hover:bg-slate-200 flex items-center gap-1.5">
                  <Edit3 className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => {
                    setIdeas(ideas.filter(i => i.id !== selected));
                    setSelected(ideas.find(i => i.id !== selected)?.id ?? null);
                  }}
                  className="px-4 py-3 bg-red-50 text-red-600 rounded-lg font-medium text-sm hover:bg-red-100 flex items-center gap-1.5"
                >
                  <XCircle className="w-4 h-4" />
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
