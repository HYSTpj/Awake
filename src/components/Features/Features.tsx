import React from 'react'
import './Features.css'
import {
  Calendar,
  Clock3,
  FileText,
  Bell,
  Star,
} from 'lucide-react' // ★ 使っていない「Smile」を削除してビルドエラーを回避
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

/* 画像を追加 */
import CreateEvents from '../../assets/src/assets/CreateEvents.jpeg'

interface FeatureItem {
  icon: React.ReactNode
  title: string
  description: string
  image: string
}

const features: FeatureItem[] = [
  {
    icon: <Calendar size={24} />,
    title: 'イベント作成',
    description: '予定を作成してメンバーと共有。',
    image: CreateEvents,
  },
  {
    icon: <Bell size={24} />,
    title: '起床・出発確認',
    description: '通知で寝坊を防止。',
    image: CreateEvents,
  },
  {
    icon: <Clock3 size={24} />,
    title: '寝坊・遅刻状況',
    description: '現在の状況をリアルタイム表示。',
    image: CreateEvents,
  },
  {
    icon: <FileText size={24} />,
    title: '遅刻レポート',
    description: '写真や遅刻理由を投稿。',
    image: CreateEvents,
  },
  {
    icon: <Star size={24} />,
    title: '遅刻王ランキング',
    description: '遅刻や寝坊した人をランキング化。',
    image: CreateEvents,
  },
]

function Features(): React.JSX.Element {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <p className="features-subtitle">FEATURES</p>
          <h2 className="features-title">
            <span>AWAKE</span>の機能
          </h2>
        </div>

        {/* 常に1枚表示、レスポンシブ用の複数表示設定は排除 */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          slidesPerView={1} 
        >
          {features.map((feature: FeatureItem, index: number) => (
            <SwiperSlide key={index}>
              <div className="feature-card">
                
                {/* 【左側】画像エリア（縁なし・少し大きめ） */}
                <div className="feature-image-wrapper">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-image"
                  />
                </div>

                {/* 【右側】言葉（コンテンツ）エリア */}
                <div className="feature-card-content">
                  {/* 右側の上：アイコン ＋ タイトル */}
                  <div className="feature-card-header">
                    <div className="feature-card-icon">
                      {feature.icon}
                    </div>
                    <h3>{feature.title}</h3>
                  </div>

                  {/* 右側のした：一言説明 */}
                  <p className="feature-card-comment">{feature.description}</p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Features