import './Features.css'

import {
  Calendar,
  Clock3,
  FileText,
  Bell,
  Star,
  Smile,
} from 'lucide-react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const features = [
  {
    icon: <Smile size={32} />,
    title: '遅刻のネタ化',
  },
  {
    icon: <Calendar size={32} />,
    title: 'イベント作成',
  },
  {
    icon: <Bell size={32} />,
    title: '起床・出発確認',
  },
  {
    icon: <Clock3 size={32} />,
    title: '寝坊・遅刻状況',
  },
  {
    icon: <FileText size={32} />,
    title: '遅刻レポート',
  },
  {
    icon: <Star size={32} />,
    title: '遅刻王ランキング',
  },
]

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <h2 className="features-title">
          <span>AWAKE</span>の機能
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="feature-card">
                <div className="feature-card-icon">
                  {feature.icon}
                </div>

                <p>{feature.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Features