# Simple MBTI

4つの質問に答えるだけで、あなたのMBTIタイプがわかるシンプルな性格診断サイトです。

**公開URL:** https://simple-mbti-self.vercel.app/

## できること

- E/I・S/N・T/F・J/P の各軸から1問ずつ、合計4問で診断
- 16タイプそれぞれの説明・特徴を表示
- タイプごとの適職例を表示
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
