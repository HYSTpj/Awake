import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-app-name">AWAKE</h1>
        <p className="hero-tagline">
          間に合う者には<span className="tagline-accent">称号</span>を、
          <br />
          遅刻する者には<span className="tagline-accent">汚名</span>を。
        </p>
        <p className="hero-description">
          遅刻をネタに変える新感覚イベントアプリ。
          <br />
          起床確認から遅刻レポートまで、すべてを記録。
        </p>
      </div>
      
      {/* スクリーンショット用のプレースホルダー - 後で画像を追加 */}
      <div className="hero-screens-placeholder">
        <div className="placeholder-content">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
          <span>App Screenshots Coming Soon</span>
        </div>
      </div>

      {/* AWAKEでできること */}
      <div className="hero-section">
        <h2 className="section-title">
          <span className="section-title-app">AWAKE</span>でできること
        </h2>
        <div className="hero-features">
          <div className="feature-card">
            <div className="feature-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </div>
            <span>遅刻のネタ化</span>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <span>イベント作成</span>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <span>起床・出発確認</span>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span>寝坊・遅刻状況</span>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <span>遅刻レポート</span>
          </div>
          <div className="feature-card feature-card-highlight">
            <div className="feature-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
              </svg>
            </div>
            <span>遅刻王ランキング</span>
          </div>
        </div>
      </div>

      {/* AWAKEでできないこと */}
      <div className="hero-section">
        <h2 className="section-title section-title-muted">
          <span className="section-title-app">AWAKE</span>でできないこと
        </h2>
        <div className="hero-features">
          <div className="feature-card feature-card-disabled">
            <div className="feature-card-icon feature-card-icon-disabled">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
            </div>
            <span>1秒のなんちゃって遅刻</span>
          </div>
          <div className="feature-card feature-card-disabled">
            <div className="feature-card-icon feature-card-icon-disabled">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
            </div>
            <span>寝坊</span>
          </div>
          <div className="feature-card feature-card-disabled">
            <div className="feature-card-icon feature-card-icon-disabled">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
            </div>
            <span>ごまかし到着</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
