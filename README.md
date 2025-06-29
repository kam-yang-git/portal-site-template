# ポータルサイト

Bootstrap 5を使用したレスポンシブ対応のポータルサイトテンプレートです。ダークモード・ライトモードの切り替え機能を備えています。

## 概要

このプロジェクトは、企業や組織のポータルサイトとして使用できるテンプレートです。大分類・中分類・アイテムの階層構造を持ち、お知らせ機能も含まれています。ダークモードとライトモードを0.3秒のスムーズなトランジションで切り替えることができます。

## 機能

- **レスポンシブデザイン**: PC、タブレット、スマートフォンに対応
- **ダークモード・ライトモード切り替え**: 目に優しいテーマ切り替え機能
- **スムーズなトランジション**: 0.3秒のなめらかな色の変化
- **階層構造**: 大分類 → 中分類 → アイテムの3段階構造
- **お知らせ機能**: 最新5件表示、6件以上はスクロール可能
- **パンくずリスト**: 現在位置の表示
- **統一されたデザイン**: 目に優しい配色とレイアウト

## ファイル構成

```
portal-site-template/
├── main.html          # メインHTMLファイル
├── css/
│   └── style.css      # カスタムCSSファイル（CSS変数対応）
├── js/
│   └── set_theme.js   # テーマ切り替えJavaScript
└── README.md          # このファイル
```

## 技術仕様

### 使用技術
- **HTML5**: セマンティックな構造（header, main, footer）
- **CSS3**: カスタムスタイリング（CSS変数、トランジション効果）
- **Bootstrap 5.3.0**: レスポンシブグリッドシステム
- **JavaScript**: テーマ切り替え機能
- **UTF-8**: 文字エンコーディング

### ブラウザ対応
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## デザイン仕様

### カラーパレット（ライトモード）
- **背景色**: `#f5f5f5` (薄いグレー)
- **お知らせ背景**: `#f8f8f8` (目に優しい白)
- **大分類背景**: `#87CEEB` (水色)
- **中分類背景**: `#B8E6FF` (薄い水色)
- **ナブバー**: Bootstrap の `bg-primary` (青色)
- **リンク色**: `#007bff` (青色)

### カラーパレット（ダークモード）
- **背景色**: `#181a1b` (濃いグレー)
- **お知らせ背景**: `#23272b` (ダークグレー)
- **大分類背景**: `#191970` (濃い青)
- **中分類背景**: `#4682b4` (スチールブルー)
- **テキスト色**: `#f5f5f5` (明るいグレー)

### トランジション効果
- **切り替え時間**: 0.3秒
- **対象プロパティ**: background-color, color, border-color
- **イージング**: ease（デフォルト）

### レイアウト
- **グリッドシステム**: Bootstrap の12カラムグリッド
- **レスポンシブブレークポイント**:
  - 大画面 (lg): 3カラム
  - 中画面 (md): 2カラム
  - 小画面 (sm): 1カラム

## CSS変数による色管理

### 変数定義
```css
:root {
    /* ライトモードの色 */
    --light-bg-color: #f5f5f5;
    --light-text-color: #333;
    --light-news-bg: #f8f8f8;
    --light-category-bg: #87CEEB;
    --light-subcategory-bg: #B8E6FF;
    --light-link-color: #007bff;
}

[data-bs-theme="dark"] {
    /* ダークモードの色 */
    --light-bg-color: #181a1b;
    --light-text-color: #f5f5f5;
    --light-news-bg: #23272b;
    --light-category-bg: #191970;
    --light-subcategory-bg: #4682b4;
    --light-link-color: #007bff;
}
```

### 使用例
```css
body {
    background-color: var(--light-bg-color);
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}
```

## 見出し階層について

### h3, h4タグにfont-sizeを指定する理由

```css
.category-header h3 {
    font-size: 1.4rem;  /* 大分類 */
}

.subcategory-header h4 {
    font-size: 1.1rem;  /* 中分類 */
}
```

#### 1. **ブラウザ間の差異**
- ブラウザによってh3、h4のデフォルトサイズが異なる
- Chrome、Firefox、Safari、Edgeなどで微妙にサイズが違う
- 統一された見た目を保証するため

#### 2. **環境間の一貫性**
- 自宅と職場など、異なる使用環境での統一性
- 異なるOSやブラウザでも同じ見た目を維持
- チーム開発での安定性確保

#### 3. **デザインの意図**
- 大分類と中分類の視覚的な階層を明確化
- サイト全体での統一された見出しサイズ
- 他の要素（お知らせ一覧など）とのバランス調整

## カスタマイズ方法

### 色の変更
`css/style.css`の`:root`と`[data-bs-theme="dark"]`セクションで変数を編集してください：

```css
:root {
    --light-bg-color: #f5f5f5;      /* ページ背景色 */
    --light-category-bg: #87CEEB;   /* 大分類背景色 */
    --light-subcategory-bg: #B8E6FF; /* 中分類背景色 */
}
```

### トランジション時間の調整
```css
body,
main,
footer,
.category-header,
.subcategory-header,
.news-container,
.news-item,
.news-section h3,
.news-date,
.news-content,
.subcategory-links li {
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}
```

### お知らせの追加・編集
`main.html`の`.news-container`内の`.news-item`を追加・編集してください：

```html
<div class="news-item">
    <span class="news-date">YYYY-MM-DD:</span>
    <span class="news-content">お知らせ内容</span>
</div>
```

### 大分類・中分類・アイテムの追加
HTMLの構造に従って、新しいセクションを追加してください。

## 改善履歴

### v2.0.0
- CSS変数の導入による色管理の改善
- ダークモード・ライトモード切り替えの追加
- 0.3秒のスムーズなトランジション効果の実装
- お知らせ一覧の背景色を目に優しい色に調整

### v1.0.0
- 基本的なポータルサイト機能の実装
- レスポンシブデザインの対応
- 階層構造とお知らせ機能の実装

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
