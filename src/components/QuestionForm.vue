<template>
  <form class="flex flex-col justify-center">
    <div class="boite">
      <label class="label-form"> Question </label>
      <textarea
        class="text-area"
        v-model="c_question"
        placeholder="Entrez la question "
        id="question-textarea"
      >
      </textarea>
    </div>

    <label class="italic mx-8">
      Ecrivez les 4 différentes réponses et cochez la réponse juste:</label
    >
    <div class="answers">
      <div v-for="index in 4" :key="index" class="boite">
        <span>
          <input
            type="radio"
            :id="index"
            :value="index"
            v-model="c_correctAnswerID"
          />
          <label class="label-form">Réponse {{ index }}</label>
        </span>
        <textarea class="text-area" v-model="c_answers[index]"></textarea>
      </div>
    </div>
    <div class="boite">
      <span>
        <label class="label-form">Ajouter un lien de référence ?</label>
        <input type="checkbox" id="isWikiUrl" v-model="c_isUrl" />
      </span>
      <input
        class="text-area"
        v-model="c_referenceUrl"
        v-if="c_isUrl"
        type="text"
      />
    </div>
  </form>
  <preview :data_question="jsonFormat"></preview>
</template>

<script>
import Preview from "./Preview.vue";
export default {
  name: "QuestionForm",
  components: {
    Preview,
  },
  data: function () {
    return {
      c_question: "",
      c_answers: { 1: "", 2: "", 3: "", 4: "" },
      c_referenceUrl: "",
      c_correctAnswerID: null,
      c_isUrl: false,
    };
  },
  computed: {
    jsonFormat: function () {
      return {
        question: this.c_question,
        answers: [
          { id: 1, text: this.c_answers["1"] },
          { id: 2, text: this.c_answers["2"] },
          { id: 3, text: this.c_answers["3"] },
          { id: 4, text: this.c_answers["4"] },
        ],
        correctAnswer: this.c_correctAnswerID,
        referenceUrl: this.c_referenceUrl,
        isUrl: this.c_isUrl,
      };
    },
  },
};
</script>



<style scoped>
/* 
.result{
 
  background-color: rgb(209, 202, 202);
  border-radius: 30px;
  width: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px ;
  word-wrap: break-word;

} */
</style>