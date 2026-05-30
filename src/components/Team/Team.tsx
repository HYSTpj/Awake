import './Team.css'

function Team() {
  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <p className="team-small-title">OUR TEAM</p>

        <h2 className="team-title">
          <span>HYST</span>についてy
        </h2>

        <p className="team-description">
          私たちは「学生が本当に使いたくなる体験」を目指して
          開発を行うチームです。
        </p>

        <div className="team-box">
          <div className="team-card">
            <h3>MISSION</h3>

            <p>
              テクノロジーを通じて、
              学生生活をもっと便利で楽しいものにする。
            </p>
          </div>

          <div className="team-card">
            <h3>VALUE</h3>

            <p>
              デザイン・使いやすさ・熱量を
              大切にしながら開発しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team