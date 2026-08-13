# Simple Type

4つの質問に答えるだけで、16タイプの傾向がわかる娯楽用の簡易性格診断サイトです。

**公開URL:** https://simple-mbti-self.vercel.app/

## 注意

- 本サイトは公式の MBTI® 診断ではありません。
- MBTI® / Myers-Briggs Type Indicator® は The Myers-Briggs Company の登録商標です。
- 本サービスは同社と提携・認定されておらず、独自の娯楽用診断です。

## できること

- E/I・S/N・T/F・J/P の各軸から1問ずつ、合計4問で診断
- 16タイプそれぞれの説明・特徴を表示
- タイプごとの適職例（参考情報）を表示
- 診断結果を X（旧Twitter）でシェア

## 開発

```bash
pnpm i
pnpm run dev
```

または

```bash
npm i
npm run dev
```

## ビルド / デプロイ

```bash
pnpm run generate
```

静的サイトとして `.vercel/output/static` に出力されます。

本番は Vercel で公開しています。再デプロイする場合:

```bash
pnpm dlx vercel deploy --prod
```
