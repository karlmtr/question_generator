<template>
  <div
    id="carte"
    class="
      w-1/2
      my-10
      p-4
      pb-0
      justify-center
      m-auto
      items-center
      shadow-2xl
      rounded-lg
      flex flex-col
      bg-blue-300
    "
  >
    <div
      id="question"
      class="
        bg-blue-200
        max-w-full
        min-h-full min-w-full
        text-xl
        p-3
        m-2
        rounded-md
        whitespace-pre-wrap
      "
    >
      <vue-mathjax :formula="data_question.question" />
    </div>

    <div id="reponses" class="min-w-full min-h-full mx-2 my-1">
      <div
        class="preview-answer"
        :class="
          answer.id === data_question.correctAnswer ? 'correct-answer' : ''
        "
        v-for="answer in data_question.answers"
        :key="answer.id"
      >
        <vue-mathjax :formula="answer.text" />
      </div>
    </div>
    <div
      class="flex flex-row min-w-full px-2 pt-1 pb-2"
      v-if="data_question.isUrl"
    >
    Lien
      <a class="mx-1" :href="data_question.referenceUrl" target="_blank">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview",
  components: {},
  props: { data_question: Object },
  data: function () {
    return {};
  },
  computed: {},
};
</script>