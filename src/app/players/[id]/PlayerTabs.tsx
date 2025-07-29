'use client'

import { useState } from 'react'
import { Player } from '@/lib/types'

type TabType = 'stats' | 'videos' | 'availability'

export default function PlayerTabs({ player }: { player: Player }) {
  const [tab, setTab] = useState<TabType>('stats')
  const [selectedVideo, setSelectedVideo] = useState<string>(player.videoPrimary || '')

  console.log(selectedVideo);

  const videoTitles: Record<string, string> = {
    [player.videoPrimary]: 'Primary Highlights',
  }

  // Add dynamic additional videos if they exist
  
  player.videoAdditional.forEach((video, index) => {
    videoTitles[video] = `Additional Video ${index + 1}`
  })

  

  return (
    <section className="py-16 border-y border-divider bg-primary-bg">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex gap-4 border-b border-divider overflow-x-auto mb-8">
          {(['stats', 'videos', 'availability'] as TabType[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-3 font-medium border-b-2 transition ${
                tab === t
                  ? 'text-accent-red border-accent-red'
                  : 'text-primary-muted border-transparent hover:text-accent-amber'
              }`}
            >
              {t === 'stats'
                ? 'Career Stats'
                : t === 'videos'
                ? 'Highlight Videos'
                : 'Availability'}
            </button>
          ))}
        </div>

        {/* Stats Tab */}
        {tab === 'stats' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              title="Career Total"
              stats={{ Appearances: '156', Goals: '78', Assists: '32', Trophies: '5' }}
            />
            <StatCard
              title="Season"
              stats={{ Appearances: '28', Goals: '15', Assists: '8', Minutes: '2340' }}
            />
            <StatCard title="International" stats={{ Caps: '12', Goals: '6', Tournaments: '2' }} />
          </div>
        )}

        {/* Videos Tab */}
        {tab === 'videos' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Selected Video Preview */}
            <div className="bg-primary-bg rounded-lg overflow-hidden border border-divider">
              <div className="aspect-video">
                <video src={selectedVideo} controls className='w-full h-full'></video>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {videoTitles[selectedVideo] || 'Highlight Video'}
                </h3>
              </div>
            </div>

            {/* Video List */}
            <div className="space-y-4">
              {Object.entries(videoTitles).map(([url, title]) => (
                <div
                  key={url}
                  className={`cursor-pointer rounded-lg p-4 border ${
                    selectedVideo === url ? 'border-accent-red' : 'border-divider'
                  }`}
                  onClick={() => setSelectedVideo(url)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-16 bg-primary-secondary flex items-center justify-center rounded">
                      <i className="fa-solid fa-play text-accent-red" />
                    </div>
                    <div>
                      <h4 className="font-medium">{title}</h4>
                      <p className="text-primary-muted text-sm">Click to play</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Availability Tab */}
        {tab === 'availability' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Info */}
            <div className="bg-primary-bg rounded-lg p-6 border border-divider">
              <h3 className="font-semibold text-xl mb-4">Availability</h3>
              <div className="space-y-4 text-sm">
                <p>
                  <strong>Contract Status:</strong> Free Agent
                </p>
                <p>
                  <strong>Available From:</strong> Immediately
                </p>
                <p>
                  <strong>Preferred Leagues:</strong> Premier League, La Liga, Serie A
                </p>
                <p>
                  <strong>Salary Expectation:</strong> €50k - €80k/week
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-primary-bg rounded-lg p-6 border border-divider">
              <h3 className="font-semibold text-xl mb-4">Agent Contact</h3>
              <p className="text-primary-muted mb-2">
                <i className="fa-solid fa-user-tie mr-2"></i> Agent Name
              </p>
              <p className="text-primary-muted mb-2">
                <i className="fa-solid fa-envelope mr-2"></i> {player.email}
              </p>
              <p className="text-primary-muted mb-4">
                <i className="fa-solid fa-phone mr-2"></i> {player.phone}
              </p>
              <button className="w-full btn-primary">Request Player Info</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function StatCard({ title, stats }: { title: string; stats: Record<string, string> }) {
  return (
    <div className="bg-primary-bg rounded-lg p-6 border border-divider shadow-md">
      <h4 className="font-semibold text-xl mb-4">{title}</h4>
      <div className="space-y-3">
        {Object.entries(stats).map(([label, value]) => (
          <div className="flex justify-between" key={label}>
            <span className="text-primary-muted">{label}</span>
            <span className="font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
