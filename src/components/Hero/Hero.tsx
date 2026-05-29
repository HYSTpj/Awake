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
          <div className="update-notice">
            ⚠️ 現在ページを更新中です。
          </div>
      </div>
    </section>
  )
}

export default Hero
