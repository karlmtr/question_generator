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
            class="
              rounded
              text-green-400
              focus:outline-none focus:ring-2 focus:ring-green-400
            "
          />
          <label class="label-form">Réponse {{ index }}</label>
        </span>
        <textarea class="text-area" v-model="c_answers[index]"></textarea>
      </div>
    </div>
    <div class="boite">
      <span>
        <label class="label-form">Ajouter un lien de référence ?</label>
        <input
          class="
            rounded
            text-blue-400
            focus:outline-none focus:ring-2 focus:ring-blue-400
          "
          type="checkbox"
          id="isWikiUrl"
          v-model="c_isUrl"
        />
      </span>
      <input
        class="text-area"
        v-model="c_referenceUrl"
        v-if="c_isUrl"
        type="text"
        placeholder="Collez l'url entière"
      />
    </div>
  </form>
  <preview :data_question="jsonFormat"></preview>

  <div>
    <div
      class="bg-red-400 text-center w-3/4 min-w-0 mx-auto mb-2 rounded-md"
      v-for="error in c_error"
      :key="error"
    >
      {{ error }}
    </div>
  </div>
  <button
    class="
      shadow-lg
      active:shadow-none active:bg-gray-400
      m-auto
      grid
      place-items-center
      px-3
      py-1
      rounded-lg
      bg-gray-300
      w-28
      h-16
      group
      active:translate-y-1
    "
    @click="checkValidation"
  >
    <svg
      class="w-12 h-12"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
      ></path>
    </svg>
    <span class="copy-tooltip" :class="c_copied ? 'scale-100' : ''">
      copié !
    </span>
  </button>
  <iframe
    v-if="c_saveable"
    class="w-full my-4 scale-10"
    src="https://docs.google.com/forms/d/e/1FAIpQLSd3c1Sowv_DFavKNwi5St3du9NuVgCeQ8N0CJOKyKiMfV3UzA/viewform?embedded=true"
    height="500"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    >Chargement…</iframe
  >
 
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
      c_error: [],
      c_copied: false,
      c_saveable: false,
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
  methods: {
    checkValidation() {
      this.c_error = [];
      if (!this.c_correctAnswerID) {
        this.c_error.push("Vous n'avez pas choisi de bonne réponse");
      }
      if (this.c_isUrl && this.c_referenceUrl == "") {
        this.c_error.push("Le lien est vide mais vous avez coché l'option !");
      }
      if (this.c_error.length == 0) {
        this.c_saveable = true;
        navigator.clipboard
          .writeText(JSON.stringify(this.jsonFormat, undefined, 2))
          .then(() => {
            this.c_copied = true;
            setTimeout(() => {
              this.c_copied = false;
            }, 2000);
          });
      }
    },
  },
};
</script>





