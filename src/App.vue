<template>
  <div class=" bg-gray-300 flex-col font-sans subpixel-antialiased">
    <div class="sm:w-full md:w-3/4 pb-10 mx-auto bg-gray-100">
      <h1
        class="
          p-6

          text-black-100 text-2xl
      
          text-center
        "
      >
        Créateur de questions
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
