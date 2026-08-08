<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero / Start -->
    <section
      v-if="step === 'start'"
      class="relative flex-1 flex flex-col justify-end sm:justify-center min-h-screen overflow-hidden"
    >
      <div class="absolute inset-0 hero-visual" aria-hidden="true">
        <div class="hero-sky" />
        <div class="hero-glow" />
        <svg class="hero-ridges" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice">
          <path
            fill="rgba(31,122,99,0.35)"
            d="M0 520 L180 460 L340 540 L520 400 L700 500 L880 360 L1060 480 L1240 390 L1440 470 L1440 900 L0 900 Z"
          />
          <path
            fill="rgba(26,46,40,0.55)"
            d="M0 620 L220 560 L420 640 L640 520 L860 610 L1080 500 L1260 590 L1440 540 L1440 900 L0 900 Z"
          />
          <path
            fill="rgba(26,46,40,0.82)"
            d="M0 720 L260 680 L480 760 L720 660 L960 740 L1200 680 L1440 720 L1440 900 L0 900 Z"
          />
        </svg>
      </div>

      <div class="relative z-10 px-6 pb-14 pt-24 sm:px-10 sm:pb-20 max-w-2xl mx-auto w-full text-center sm:text-left">
        <p class="anim-rise font-display text-[clamp(2.75rem,10vw,4.5rem)] leading-none tracking-tight text-[#f7faf8]">
          Simple MBTI
        </p>
        <h1
          class="anim-rise mt-5 text-[clamp(1.35rem,4.2vw,1.85rem)] font-medium text-[#e8f4f2] leading-snug"
          style="animation-delay: 0.12s"
        >
          4問に答えるだけで、あなたのタイプがわかる
        </h1>
        <p
          class="anim-rise mt-3 text-[#c5ddd4] text-base sm:text-lg leading-relaxed max-w-md mx-auto sm:mx-0"
          style="animation-delay: 0.22s"
        >
          E/I・S/N・T/F・J/P、各1問ずつのかんたん性格診断。
        </p>
        <div class="anim-rise mt-9" style="animation-delay: 0.34s">
          <button
            type="button"
            class="inline-flex items-center justify-center min-h-12 px-8 text-base font-medium text-[#1a2e28] bg-[#d8f3e7] hover:bg-white transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8f3e7]"
            @click="startQuiz"
          >
            診断をはじめる
          </button>
        </div>
      </div>
    </section>

    <!-- Quiz -->
    <section
      v-else-if="step === 'quiz' && currentQuestion"
      class="flex-1 flex flex-col justify-center px-5 py-12 sm:px-8"
    >
      <div class="w-full max-w-xl mx-auto">
        <div class="flex items-end justify-between gap-4 mb-6">
          <p class="font-display text-2xl sm:text-3xl text-[var(--teal)] tracking-tight">
            Simple MBTI
          </p>
          <p class="text-sm text-[var(--ink-soft)] tabular-nums">
            {{ currentIndex + 1 }} / {{ questions.length }}
          </p>
        </div>

        <div
          class="h-1 w-full bg-[rgba(31,122,99,0.15)] overflow-hidden mb-10"
          role="progressbar"
          :aria-valuenow="currentIndex + 1"
          aria-valuemin="1"
          :aria-valuemax="questions.length"
        >
          <div
            class="h-full origin-left bg-[var(--teal)] transition-[width] duration-500 ease-out"
            :style="{ width: `${((currentIndex + 1) / questions.length) * 100}%` }"
          />
        </div>

        <div :key="currentQuestion.id" class="anim-rise">
          <h2 class="font-display text-[clamp(1.4rem,4vw,1.85rem)] leading-snug text-[var(--ink)]">
            {{ currentQuestion.text }}
          </h2>

          <div class="mt-8 flex flex-col gap-3">
            <button
              v-for="(option, optionIndex) in currentQuestion.options"
              :key="option.trait"
              type="button"
              class="group text-left w-full min-h-[4.5rem] px-5 py-4 border border-[rgba(31,122,99,0.28)] bg-[rgba(247,250,248,0.72)] backdrop-blur-sm hover:border-[var(--teal)] hover:bg-[rgba(216,243,231,0.85)] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--teal)]"
              @click="selectAnswer(option.trait)"
            >
              <span class="block text-xs tracking-widest text-[var(--teal)] mb-1.5">
                {{ optionIndex === 0 ? 'A' : 'B' }}
              </span>
              <span class="block text-base sm:text-lg text-[var(--ink)] leading-relaxed">
                {{ option.label }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Result -->
    <section
      v-else-if="step === 'result' && result"
      class="flex-1 flex flex-col justify-center px-5 py-14 sm:px-8"
    >
      <div class="w-full max-w-xl mx-auto anim-fade">
        <p class="font-display text-xl sm:text-2xl text-[var(--teal)] tracking-tight">
          Simple MBTI
        </p>
        <p class="mt-8 text-sm tracking-[0.2em] uppercase text-[var(--ink-soft)]">
          あなたのタイプ
        </p>

        <div class="mt-3 flex flex-wrap gap-1 sm:gap-2" aria-label="MBTIタイプ">
          <span
            v-for="(letter, index) in result.code.split('')"
            :key="`${letter}-${index}`"
            class="anim-letter font-display text-[clamp(3.2rem,14vw,5.5rem)] leading-none text-[var(--ink)]"
            :style="{ animationDelay: `${0.08 + index * 0.1}s` }"
          >
            {{ letter }}
          </span>
        </div>

        <h2
          class="anim-rise mt-4 text-2xl sm:text-3xl font-medium text-[var(--teal)]"
          style="animation-delay: 0.45s"
        >
          {{ result.name }}
        </h2>
        <p
          class="anim-rise mt-4 text-base sm:text-lg leading-relaxed text-[var(--ink-soft)] max-w-md"
          style="animation-delay: 0.55s"
        >
          {{ result.summary }}
        </p>

        <ul
          v-if="result.traits.length"
          class="anim-rise mt-8 flex flex-wrap gap-x-5 gap-y-2"
          style="animation-delay: 0.65s"
        >
          <li
            v-for="trait in result.traits"
            :key="trait"
            class="text-sm text-[var(--ink)] before:content-['—'] before:mr-2 before:text-[var(--coral)]"
          >
            {{ trait }}
          </li>
        </ul>

        <div class="anim-rise mt-10 flex flex-wrap gap-3" style="animation-delay: 0.75s">
          <a
            :href="shareUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 min-h-12 px-7 text-base font-medium text-white bg-[#111] hover:bg-[#333] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
            Xでシェア
          </a>
          <button
            type="button"
            class="inline-flex items-center justify-center min-h-12 px-7 text-base font-medium text-[var(--teal)] border border-[var(--teal)] bg-transparent hover:bg-[rgba(216,243,231,0.55)] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--teal)]"
            @click="restart"
          >
            もう一度診断する
          </button>
        </div>

        <p class="mt-12 text-xs leading-relaxed text-[var(--ink-soft)]/80 max-w-sm">
          ※ 本診断は娯楽目的の簡易版です。正式な性格検査ではありません。
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { diagnose, questions, type Trait, type MbtiTypeInfo } from '~/utils/mbti'

type Step = 'start' | 'quiz' | 'result'

const step = ref<Step>('start')
const currentIndex = ref(0)
const answers = ref<Trait[]>([])
const result = ref<MbtiTypeInfo | null>(null)

const currentQuestion = computed(() => questions[currentIndex.value] ?? null)

const siteUrl = computed(() => {
  if (import.meta.client) return window.location.href
  return 'https://simple-mbti-self.vercel.app'
})

const shareUrl = computed(() => {
  if (!result.value) return '#'

  const text = [
    `私のMBTIは「${result.value.code}（${result.value.name}）」でした！`,
    '',
    '4問でわかる Simple MBTI',
    '#SimpleMBTI #MBTI'
  ].join('\n')

  const params = new URLSearchParams({
    text,
    url: siteUrl.value
  })

  return `https://x.com/intent/tweet?${params.toString()}`
})

const startQuiz = () => {
  step.value = 'quiz'
  currentIndex.value = 0
  answers.value = []
  result.value = null
}

const selectAnswer = (trait: Trait) => {
  answers.value[currentIndex.value] = trait

  if (currentIndex.value < questions.length - 1) {
    currentIndex.value += 1
    return
  }

  result.value = diagnose(answers.value)
  step.value = 'result'
}

const restart = () => {
  step.value = 'start'
  currentIndex.value = 0
  answers.value = []
  result.value = null
}
</script>

<style scoped>
.hero-visual {
  overflow: hidden;
}

.hero-sky {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 90% 60% at 70% 15%, rgba(224, 122, 95, 0.45), transparent 55%),
    radial-gradient(ellipse 70% 50% at 20% 30%, rgba(126, 200, 176, 0.4), transparent 50%),
    linear-gradient(180deg, #7eb8b0 0%, #c5ddd4 38%, #e8f4f2 62%, #1a2e28 100%);
  animation: fade-soft 1.1s ease both;
}

.hero-glow {
  position: absolute;
  top: 12%;
  right: 18%;
  width: min(28vw, 180px);
  height: min(28vw, 180px);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 236, 210, 0.85) 0%, rgba(224, 122, 95, 0.25) 45%, transparent 70%);
  filter: blur(2px);
  animation: rise-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.hero-ridges {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  animation: rise-in 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
}
</style>
