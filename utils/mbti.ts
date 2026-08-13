export type Dichotomy = 'EI' | 'SN' | 'TF' | 'JP'
export type Trait = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'

export type Question = {
  id: number
  axis: Dichotomy
  text: string
  options: [
    { label: string; trait: Trait },
    { label: string; trait: Trait }
  ]
}

export type TypeInfo = {
  code: string
  name: string
  summary: string
  traits: string[]
  careers: string[]
}

/** @deprecated Use TypeInfo */
export type MbtiTypeInfo = TypeInfo

export const questions: Question[] = [
  {
    id: 1,
    axis: 'EI',
    text: '休日の理想に近いのは、どちらですか？',
    options: [
      { label: '友人と予定を入れて、賑やかに過ごす', trait: 'E' },
      { label: 'ひとりや少人数で、静かに充電する', trait: 'I' }
    ]
  },
  {
    id: 2,
    axis: 'SN',
    text: '新しいことを学ぶとき、どう進めたいですか？',
    options: [
      { label: '具体的な手順や実例から入りたい', trait: 'S' },
      { label: '全体の意味や可能性から考えたい', trait: 'N' }
    ]
  },
  {
    id: 3,
    axis: 'TF',
    text: '大切な決断をするとき、何を優先しますか？',
    options: [
      { label: '筋の通った根拠や合理性', trait: 'T' },
      { label: '周囲の気持ちや調和', trait: 'F' }
    ]
  },
  {
    id: 4,
    axis: 'JP',
    text: '旅行の計画は、どちらがしっくりきますか？',
    options: [
      { label: '事前にスケジュールを固めておく', trait: 'J' },
      { label: 'その場の流れで柔軟に決める', trait: 'P' }
    ]
  }
]

export const typeInfo: Record<string, TypeInfo> = {
  INTJ: {
    code: 'INTJ',
    name: '戦略家',
    summary: '長期の見通しを立て、静かに仕組みを組み立てるタイプです。',
    traits: ['独立心が強い', '計画的', '本質を見抜く'],
    careers: ['戦略コンサルタント', 'エンジニア', '研究者', 'データサイエンティスト']
  },
  INTP: {
    code: 'INTP',
    name: '思索家',
    summary: '仕組みや理屈を掘り下げ、柔軟に答えを探すタイプです。',
    traits: ['分析好き', '柔軟', '知的好奇心'],
    careers: ['ソフトウェア開発', '大学教員', 'アナリスト', '研究開発']
  },
  ENTJ: {
    code: 'ENTJ',
    name: '統率者',
    summary: '目標に向けて人を動かし、決断と実行で道を開くタイプです。',
    traits: ['リーダー気質', '効率重視', '決断力'],
    careers: ['経営者', 'プロジェクトマネージャー', '弁護士', '投資関連']
  },
  ENTP: {
    code: 'ENTP',
    name: '発想家',
    summary: '新しいアイデアを試し、議論と挑戦で刺激を生むタイプです。',
    traits: ['発想豊か', '機転が利く', '変化を楽しむ'],
    careers: ['事業企画', 'マーケター', '商品企画', 'ジャーナリスト']
  },
  INFJ: {
    code: 'INFJ',
    name: '洞察家',
    summary: '人の内面に寄り添い、理想を静かな行動につなげるタイプです。',
    traits: ['洞察力', '理想主義', '共感力'],
    careers: ['カウンセラー', 'ライター', '人事', 'NPOスタッフ']
  },
  INFP: {
    code: 'INFP',
    name: '理想家',
    summary: '自分の価値観を大切にし、優しさと想像力で世界を彩るタイプです。',
    traits: ['感受性豊か', '誠実', '創造的'],
    careers: ['編集者', 'デザイナー', '心理職', '翻訳']
  },
  ENFJ: {
    code: 'ENFJ',
    name: '導き手',
    summary: '周囲の可能性を信じ、人を励ましながら場を導くタイプです。',
    traits: ['面倒見が良い', '情熱的', '協調性'],
    careers: ['教師', '人事・研修', 'キャリアコーチ', '広報']
  },
  ENFP: {
    code: 'ENFP',
    name: '鼓舞家',
    summary: '自由な発想と温かさで、人と可能性をつなぐタイプです。',
    traits: ['楽観的', '社交的', 'アイデア豊富'],
    careers: ['イベント企画', 'クリエイティブ職', '営業企画', 'コミュニティ運営']
  },
  ISTJ: {
    code: 'ISTJ',
    name: '堅実家',
    summary: '責任感と丁寧さで、確かな基盤をつくり続けるタイプです。',
    traits: ['堅実', '誠実', '規律正しい'],
    careers: ['会計', '公務員', '品質管理', '事務職']
  },
  ISFJ: {
    code: 'ISFJ',
    name: '支援者',
    summary: '思いやりと実務力で、大切な人や場を支えるタイプです。',
    traits: ['思いやり', '献身的', '丁寧'],
    careers: ['看護', '図書館司書', 'カスタマーサポート', '保育']
  },
  ESTJ: {
    code: 'ESTJ',
    name: '実行者',
    summary: '秩序と実行力で物事を整え、チームを前へ進めるタイプです。',
    traits: ['組織力', '実務的', '責任感'],
    careers: ['管理職', '金融', '運営マネージャー', '公務']
  },
  ESFJ: {
    code: 'ESFJ',
    name: '協調者',
    summary: '調和を大切にし、周囲が気持ちよく過ごせるよう動くタイプです。',
    traits: ['親切', '協力的', '気配り'],
    careers: ['医療事務', 'ホスピタリティ', '営業', 'イベント運営']
  },
  ISTP: {
    code: 'ISTP',
    name: '職人',
    summary: '冷静に状況を見極め、手を動かしながら最適解を見つけるタイプです。',
    traits: ['実践的', '冷静', '適応力'],
    careers: ['整備', '技術職', 'パイロット', 'システム運用']
  },
  ISFP: {
    code: 'ISFP',
    name: '感性派',
    summary: '感性と穏やかさで、今この瞬間の美しさを大切にするタイプです。',
    traits: ['穏やか', '芸術的', '柔軟'],
    careers: ['デザイン', '写真', 'パティシエ', 'リハビリ職']
  },
  ESTP: {
    code: 'ESTP',
    name: '行動家',
    summary: '行動と機転で現場を切り開き、刺激の中で力を発揮するタイプです。',
    traits: ['行動派', '現実的', '大胆'],
    careers: ['営業', '事業立ち上げ', 'スポーツ関連', '現場対応職']
  },
  ESFP: {
    code: 'ESFP',
    name: '表現者',
    summary: '明るさと臨機応変さで、場の空気を生き生きと変えるタイプです。',
    traits: ['明るい', '自発的', '人を楽しませる'],
    careers: ['演出・表現', 'ガイド', '販売', 'イベント進行']
  }
}

export const axisMeta: Record<
  Dichotomy,
  { label: string; left: Trait; right: Trait; leftName: string; rightName: string }
> = {
  EI: { label: 'エネルギーの向き', left: 'E', right: 'I', leftName: '外向', rightName: '内向' },
  SN: { label: '情報の取り方', left: 'S', right: 'N', leftName: '感覚', rightName: '直感' },
  TF: { label: '判断の基準', left: 'T', right: 'F', leftName: '思考', rightName: '感情' },
  JP: { label: '進め方の好み', left: 'J', right: 'P', leftName: '判断', rightName: '知覚' }
}

export function diagnose(answers: Trait[]): TypeInfo {
  const code = answers.join('')
  return (
    typeInfo[code] ?? {
      code,
      name: 'あなたらしいタイプ',
      summary: '4つの選択から見えた、あなたの傾向です。',
      traits: [],
      careers: []
    }
  )
}

export function axisBreakdown(code: string) {
  const letters = code.split('') as Trait[]
  const axes: Dichotomy[] = ['EI', 'SN', 'TF', 'JP']

  return axes.map((axis, index) => {
    const meta = axisMeta[axis]
    const trait = letters[index]
    const isLeft = trait === meta.left

    return {
      axis,
      label: meta.label,
      trait: trait ?? meta.left,
      traitName: isLeft ? meta.leftName : meta.rightName
    }
  })
}
