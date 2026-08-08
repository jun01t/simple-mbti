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

export type MbtiTypeInfo = {
  code: string
  name: string
  summary: string
  traits: string[]
}

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

export const typeInfo: Record<string, MbtiTypeInfo> = {
  INTJ: {
    code: 'INTJ',
    name: '建築家',
    summary: '戦略的に未来を描き、独自のビジョンを静かに形にするタイプです。',
    traits: ['独立心が強い', '計画的', '本質を見抜く']
  },
  INTP: {
    code: 'INTP',
    name: '論理学者',
    summary: '好奇心で仕組みを掘り下げ、柔軟な思考で真相に近づくタイプです。',
    traits: ['分析好き', '柔軟', '知的好奇心']
  },
  ENTJ: {
    code: 'ENTJ',
    name: '指揮官',
    summary: '目標に向けて人を動かし、決断と実行で道を切り開くタイプです。',
    traits: ['リーダー気質', '効率重視', '決断力']
  },
  ENTP: {
    code: 'ENTP',
    name: '討論者',
    summary: 'アイデアを次々と試し、議論と挑戦で刺激を生み出すタイプです。',
    traits: ['発想豊か', '機転が利く', '変化を楽しむ']
  },
  INFJ: {
    code: 'INFJ',
    name: '提唱者',
    summary: '人の内面に寄り添い、理想を静かな行動へつなげるタイプです。',
    traits: ['洞察力', '理想主義', '共感力']
  },
  INFP: {
    code: 'INFP',
    name: '仲介者',
    summary: '自分の価値観を大切にし、優しさと想像力で世界を彩るタイプです。',
    traits: ['感受性豊か', '誠実', '創造的']
  },
  ENFJ: {
    code: 'ENFJ',
    name: '主人公',
    summary: '周囲の可能性を信じ、人を励ましながら場を導くタイプです。',
    traits: ['面倒見が良い', '情熱的', '協調性']
  },
  ENFP: {
    code: 'ENFP',
    name: '広報運動家',
    summary: '自由な発想と温かさで、人と可能性をつなぐタイプです。',
    traits: ['楽観的', '社交的', 'アイデア豊富']
  },
  ISTJ: {
    code: 'ISTJ',
    name: '管理者',
    summary: '責任感と丁寧さで、確かな基盤をつくり続けるタイプです。',
    traits: ['堅実', '誠実', '規律正しい']
  },
  ISFJ: {
    code: 'ISFJ',
    name: '擁護者',
    summary: '思いやりと実務力で、大切な人や場を支えるタイプです。',
    traits: ['思いやり', '献身的', '丁寧']
  },
  ESTJ: {
    code: 'ESTJ',
    name: '幹部',
    summary: '秩序と実行力で物事を整え、チームを前へ進めるタイプです。',
    traits: ['組織力', '実務的', '責任感']
  },
  ESFJ: {
    code: 'ESFJ',
    name: '領事',
    summary: '調和を大切にし、周囲が気持ちよく過ごせるよう動くタイプです。',
    traits: ['親切', '協力的', '気配り']
  },
  ISTP: {
    code: 'ISTP',
    name: '巨匠',
    summary: '冷静に状況を見極め、手を動かしながら最適解を見つけるタイプです。',
    traits: ['実践的', '冷静', '適応力']
  },
  ISFP: {
    code: 'ISFP',
    name: '冒険家',
    summary: '感性と穏やかさで、今この瞬間の美しさを大切にするタイプです。',
    traits: ['穏やか', '芸術的', '柔軟']
  },
  ESTP: {
    code: 'ESTP',
    name: '起業家',
    summary: '行動と機転で現場を切り開き、刺激の中で力を発揮するタイプです。',
    traits: ['行動派', '現実的', '大胆']
  },
  ESFP: {
    code: 'ESFP',
    name: 'エンターテイナー',
    summary: '明るさと臨機応変さで、場の空気を生き生きと変えるタイプです。',
    traits: ['明るい', '自発的', '人を楽しませる']
  }
}

export function diagnose(answers: Trait[]): MbtiTypeInfo {
  const code = answers.join('')
  return (
    typeInfo[code] ?? {
      code,
      name: 'あなたらしいタイプ',
      summary: '4つの選択から見えた、あなたの傾向です。',
      traits: []
    }
  )
}
