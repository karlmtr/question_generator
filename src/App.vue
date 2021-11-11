<template>
  <div class=" bg-gray-300 flex-col">
    <div class="w-3/4 pb-10 mx-auto min-h-screen bg-gray-100">
      <h1
        class="
          p-6
          underline
          text-black-100 text-2xl
          antialiased
          text-center
        "
      >
        Formatteur de questions pour l'application QuizzApp
      </h1>
      <QuestionForm />
      

    </div>
  </div>
</template>


<script>
import QuestionForm from "./components/QuestionForm.vue";

export default {
  name: "App",
  components: {
    QuestionForm,

  },
};
</script>

<style>
/* #app { */
/* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
/* color: #2c3e50;
  margin-top: 60px; */
/* } */
</style>
