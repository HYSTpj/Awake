import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">&#9201;</span>
          Event Management App
        </div>
        <h1 className="hero-title">
          <span className="title-accent">Awake</span>で
          <br />
          イベント参加をスマートに
        </h1>
        <p className="hero-description">
          イベントの作成、参加者管理、QRコードチェックイン、
          <br className="mobile-break" />
          リアルタイムステータス共有を一つのアプリで。
          <br />
          チームの集合をもっと簡単に。
        </p>
        <div className="hero-buttons">
          <a href="#download" className="btn btn-primary">
            ダウンロード
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <a href="#features" className="btn btn-secondary">
            機能を見る
          </a>
        </div>
      </div>
      
      <div className="hero-screens">
        <div className="screens-container">
          <div className="screen-group screen-group-left">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202026-05-22%2013.31.50-HgArRz3pLt0ul4IogD9xGlscAryTQ2.png"
              alt="Awake app status screens showing event scheduling and check-in features"
              className="screen-image"
            />
          </div>
          <div className="screen-group screen-group-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202026-05-22%2013.32.13-1oZ9AFc0PXJsRmeLtwEDUc9Yp5glCO.png"
              alt="Awake app create event and participant management screens"
              className="screen-image"
            />
          </div>
          <div className="screen-group screen-group-right">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202026-05-22%2013.32.01-7LCtV9QDARrUhdmEUAPvHBDCz7TsJU.png"
              alt="Awake app member status and QR code check-in screens"
              className="screen-image"
            />
          </div>
        </div>
      </div>
      
      <div className="hero-features">
        <div className="feature-item">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <span>イベント管理</span>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <span>参加者管理</span>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M7 7h.01" />
              <path d="M17 7h.01" />
              <path d="M7 17h.01" />
              <path d="M17 17h.01" />
              <rect x="7" y="10" width="4" height="4" />
              <path d="M13 10h4v4h-4z" />
            </svg>
          </div>
          <span>QRチェックイン</span>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <span>リアルタイム状況</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
