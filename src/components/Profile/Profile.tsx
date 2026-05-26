import './Profile.css'

const members = [

  {
    name: 'しでりょう',
    image: '',
    x: 'https://x.com/ry0000taro?s=21',
    lateLevel: 5,
    comment: '遅刻の神',
  },
  {
    name: 'はな',
    image: '',
    x: 'https://x.com/haana2187?s=21',
    lateLevel: 3,
    comment: '',
  },
  {
    name: 'みつき',
    image: '',
    x: 'https://x.com/mitsuki_ol2o?s=21',
    lateLevel: 4,
    comment: '',
  },
  {
    name: 'あやね',
    image: '',
    x: 'https://x.com/ayane__1118?s=21',
    lateLevel: 3,
    comment: '',
  },
]

function Profile() {
  return (
    <section className="profile-section" id="profile">
      <h2 className="profile-title">
        <span className="profile-title-accent">Profile</span> 
      </h2>

      <div className="profile-grid">
        {members.map((member) => (
          <div className="profile-card" key={member.name}>
            <img
              src={member.image}
              alt={member.name}
              className="profile-image"
            />

            <h3 className="profile-name">
              {member.name}
            </h3>

            <a
              href={member.x}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-x"
            >
              𝕏 
            </a>

            <div className="late-section">
              <span className="late-label">
                遅刻度
              </span>

              <div className="late-stars">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < member.lateLevel
                        ? 'star filled'
                        : 'star'
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <p className="profile-comment">
              {member.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Profile