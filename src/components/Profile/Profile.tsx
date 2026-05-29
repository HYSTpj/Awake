 import './Profile.css'
 import RyoImage from '../../assets/ryotaro_profile.jpg'
import HaImage from '../../assets/hana_profile.jpg'
import MiImage from '../../assets/mitsuki_profile.jpg'
import AImage from '../../assets/ayane_profile.jpeg'
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const members = [
     {
    name: 'しでりょう',
    image: RyoImage,
    x: 'https://x.com/ry0000taro?s=21',
    github: 'https://github.com/ry0000taro',
    lateLevel: 5,
    comment: 'トランペット',
  },
  {
    name: 'はな',
    image: HaImage,
    x: 'https://x.com/haana2187?s=21',
    github: 'https://github.com/hana2187',
    lateLevel: 3,
    comment: 'ホルン',
  },
  {
    name: 'みつき',
    image: MiImage,
    x: 'https://x.com/mitsuki_ol2o?s=21',
    github: 'https://github.com/mitsuki-3928',
    lateLevel: 4,
    comment: 'クラリネット',
  },
  {
    name: 'あやね',
    image: AImage,
    x: 'https://x.com/ayane__1118?s=21',
    github: 'https://github.com/ayane1118',
    lateLevel: 3,
    comment: 'フルート',
  },
]

function Profile() {
  return (
    <section className="profile-section" id="profile">
      <h2 className="profile-title">
        <span className="profile-title-accent">
          Profile
        </span>
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

            {/* SNS */}
            <div className="profile-sns">
              <a
                href={member.x}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-x"
              >
                <FaXTwitter />
              </a>

              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-github"
              >
                <FaGithub />
              </a>
            </div>

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