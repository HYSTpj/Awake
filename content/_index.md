---
title: AWAKE
tagline: 間に合う者には<em>称号</em>を、<br>遅刻する者には<em>汚名</em>を。
lead: 遅刻をネタに変える新感覚イベントアプリ。<br>起床確認から遅刻レポートまで、すべてを記録。
sections:
  problem:
    label: PROBLEM
    answer: 待ち合わせの“寝坊”と“遅刻”を、グループで可視化して解決するアプリが“AWAKE”です。
  steps:
    label: HOW IT WORKS
    title: 使い方
  features:
    label: FEATURES
    title: <em>AWAKE</em>の機能
  tech:
    title: <em>Technology</em> Stack
    text: AWAKEを支える技術スタック
  team:
    label: OUR TEAM
    title: <em>HYST</em>について
    text: HYST(ヒスト)です。名城大学應援團吹奏楽部の情報系4人で構成されています！
    members: Profile
problem:
  - “7時に駅集合”と決めたのに、
  - 当日LINEで「今起きた」「あと10分」が飛び交う。
  - 誰が起きていて、誰が向かっているのか分からないまま、
  - 結局みんなが遅刻する。
steps:
  - title: グループを作る
    text: 招待コードでメンバーを集める
  - title: イベントを作る
    text: 集合場所と到着時刻を決め、起床・出発アラームを設定する
  - title: アラームが鳴る
    text: 止めるとステータスがメンバー全員に共有される
  - title: チェックインする
    text: QRコードかパスコードで現地到着を報告する
  - title: 結果を見る
    text: 遅刻報告とランキングでその日を振り返る
features:
  - icon: list-check
    title: イベント作成
    text: 予定を作成してメンバーと共有。
    image: img/screens/create_event.png
  - icon: bell
    title: 起床・出発確認
    text: 通知で寝坊を防止。
    image: img/screens/event_detail.png
  - icon: eye
    title: 寝坊・遅刻状況
    text: 現在の状況をリアルタイム表示。
    image: img/screens/member's_status.png
  - icon: check
    title: チェックイン
    text: QRコードやパスコードで到着を報告。
    image: img/screens/qrcode.png
  - icon: file-lines
    title: 遅刻レポート
    text: 写真や遅刻理由を投稿。
    image: img/screens/late_post.png
  - icon: star
    title: 遅刻王ランキング
    text: 遅刻や寝坊した人をランキング化。
    image: img/screens/ranking.png
tech:
  - category: Design
    icon: awake-pen
    items:
      - name: Figma
      - name: Stitch
      - name: Custom UI Component
  - category: Frontend
    icon: awake-smartphone
    items:
      - name: Flutter / Dart
        primary: true
    sub:
      title: Architecture
      items:
        - name: View / ViewModel / Repository
        - name: Provider
  - category: Backend
    icon: awake-flag
    items:
      - name: Supabase Auth
        primary: true
      - name: Supabase Database
        primary: true
      - name: Supabase Realtime
        primary: true
      - name: Postgres RPC
        primary: true
  - category: Location & Maps
    icon: awake-map-pin
    items:
      - name: Google Maps
      - name: geolocator
      - name: geocoding
  - category: Packages
    icon: awake-package
    small: true
    items:
      - name: qr_flutter
      - name: mobile_scanner
      - name: alarm
      - name: vibration
      - name: image_picker
      - name: image_cropper
      - name: flutter_datetime_picker_plus
      - name: intl
      - name: http
      - name: crypto
  - category: DevOps
    icon: awake-github
    items:
      - name: GitHub
      - name: GitHub Actions
      - name: GitHub Projects / Issues
      - name: flutter_test
      - name: mocktail
team:
  members:
    - name: しでりょう
      image: img/members/ryotaro.jpg
      part: トランペット
      late: 5
      x: https://x.com/ry0000taro
      github: https://github.com/ry0000taro
    - name: はな
      image: img/members/hana.jpg
      part: ホルン
      late: 3
      x: https://x.com/haana2187
      github: https://github.com/hana2187
    - name: みつき
      image: img/members/mitsuki.jpg
      part: クラリネット
      late: 4
      x: https://x.com/mitsuki_ol2o
      github: https://github.com/mitsuki-3928
    - name: あやね
      image: img/members/ayane.jpg
      part: フルート
      late: 3
      x: https://x.com/ayane__1118
      github: https://github.com/ayane1118
---
