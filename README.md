# Simple MBTI

4つの質問に答えるだけで、あなたのMBTIタイプがわかるシンプルな性格診断サイトです。

## できること

- E/I・S/N・T/F・J/P の各軸から1問ずつ、合計4問で診断
- 16タイプそれぞれの短い説明を表示
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

## ビルド

```bash
pnpm run generate
```

静的サイトとして `.output/public` に出力されます。Vercel ではこの出力を公開します。
