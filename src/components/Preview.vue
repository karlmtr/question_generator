<template>
  <div
    id="carte"
    class="
      my-10
      p-4
      pb-0
      w-1/2
      justify-center
      m-auto
      items-center
      shadow-xl
      rounded-lg
      flex flex-col
      bg-blue-300
    "
  >
    <div
      id="question"
      class="
        bg-blue-200
        max-w-full min-h-full min-w-full
        text-xl
        p-3
        m-2
        rounded-2xl
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
      class="min-w-full px-2 pt-1 pb-2 hover:text-blue-500"
      v-if="data_question.isUrl"
    >
      <a :href="data_question.referenceUrl"> Lien de référence </a>
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