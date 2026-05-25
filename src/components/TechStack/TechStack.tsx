import './TechStack.css'

function TechStack() {
  return (
    <section className="tech-stack" id="tech">
      <div className="tech-stack-container">
        <h2 className="tech-stack-title">
          <span className="tech-stack-title-accent">Technology</span> Stack
        </h2>
        <p className="tech-stack-description">
          AWAKEを支える技術スタック
        </p>

        {/* Design */}
        <div className="tech-category">
          <h3 className="tech-category-title">
            <span className="tech-category-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </span>
            Design
          </h3>
          <div className="tech-items">
            <div className="tech-item">
              <span className="tech-item-name">Figma</span>
              <span className="tech-item-badge">Dev Mode</span>
            </div>
            <div className="tech-item">
              <span className="tech-item-name">Stitch</span>
            </div>
            <div className="tech-item">
              <span className="tech-item-name">Custom UI Component</span>
            </div>
          </div>
        </div>

        {/* Frontend */}
        <div className="tech-category">
          <h3 className="tech-category-title">
            <span className="tech-category-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </span>
            Frontend
          </h3>
          <div className="tech-items">
            <div className="tech-item tech-item-primary">
              <span className="tech-item-name">Flutter / Dart</span>
            </div>
          </div>
          <div className="tech-sub-section">
            <h4 className="tech-sub-title">Architecture</h4>
            <div className="tech-items">
              <div className="tech-item">
                <span className="tech-item-name">MVVM + Clean Architecture</span>
              </div>
              <div className="tech-item">
                <span className="tech-item-name">Reactive Data Binding</span>
              </div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="tech-category">
          <h3 className="tech-category-title">
            <span className="tech-category-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </span>
            Backend
          </h3>
          <div className="tech-items">
            <div className="tech-item tech-item-primary">
              <span className="tech-item-name">Firebase Authentication</span>
            </div>
            <div className="tech-item tech-item-primary">
              <span className="tech-item-name">Cloud Firestore</span>
            </div>
            <div className="tech-item tech-item-primary">
              <span className="tech-item-name">Cloud Storage</span>
            </div>
            <div className="tech-item tech-item-primary">
              <span className="tech-item-name">Cloud Functions</span>
              <span className="tech-item-badge">自動判定ロジック</span>
            </div>
          </div>
        </div>

        {/* Location & Maps */}
        <div className="tech-category">
          <h3 className="tech-category-title">
            <span className="tech-category-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            Location & Maps
          </h3>
          <div className="tech-items">
            <div className="tech-item">
              <span className="tech-item-name">Google Maps SDK</span>
              <span className="tech-item-badge">Flutter</span>
            </div>
            <div className="tech-item">
              <span className="tech-item-name">Places API</span>
            </div>
            <div className="tech-item">
              <span className="tech-item-name">Geocoding API</span>
            </div>
            <div className="tech-item">
              <span className="tech-item-name">MySQL</span>
              <span className="tech-item-badge">Drift</span>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="tech-category">
          <h3 className="tech-category-title">
            <span className="tech-category-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16.5 9.4l-9-5.19" />
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </span>
            Packages
          </h3>
          <div className="tech-items tech-items-packages">
            <div className="tech-item tech-item-small">geolocator</div>
            <div className="tech-item tech-item-small">google_maps_flutter</div>
            <div className="tech-item tech-item-small">flutter_google_places</div>
            <div className="tech-item tech-item-small">maps_webservice</div>
            <div className="tech-item tech-item-small">cached_network_image</div>
            <div className="tech-item tech-item-small">qr_flutter</div>
            <div className="tech-item tech-item-small">freezed</div>
            <div className="tech-item tech-item-small">json_serializable</div>
          </div>
        </div>

        {/* DevOps */}
        <div className="tech-category">
          <h3 className="tech-category-title">
            <span className="tech-category-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </span>
            DevOps
          </h3>
          <div className="tech-items">
            <div className="tech-item">
              <span className="tech-item-name">GitHub</span>
            </div>
            <div className="tech-item">
              <span className="tech-item-name">GitHub Actions</span>
            </div>
            <div className="tech-item">
              <span className="tech-item-name">GitHub Projects / Issues</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack