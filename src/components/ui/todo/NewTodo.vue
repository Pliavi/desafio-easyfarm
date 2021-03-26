<template>
  <div class="flex items-center gap-6 p-4 bg-gray-300">
    <div
      class="flex items-center justify-center w-12 h-12 text-2xl font-bold text-white uppercase rounded-lg text-shadow"
      :style="{ backgroundColor: project.color }"
    >
      {{ newTodo.task[0] }}
    </div>

    <!-- form -->
    <form class="flex flex-1 h-12 gap-x-6" @submit.prevent="addTodo(newTodo)">
      <div class="flex-1">
        <input
          class="w-full h-12 px-4 rounded-lg bg-gray-white"
          type="text"
          placeholder="Nome da tarefa"
          v-model="newTodo.task"
        />
      </div>

      <div class="flex-1">
        <date-picker
          id="deadline"
          class="deadline-picker"
          name="deadline"
          v-model="newTodo.deadline"
          type="datetime"
          format="DD/MM/YYYY HH:mm"
          value-type="timestamp"
          placeholder="Prazo (mantenha vazio para não ter prazo)"
          :editable="false"
          confirm
        />
      </div>

      <button
        class="self-center w-8 h-8 ml-auto text-2xl text-white bg-green-500 rounded-lg shadow hover:shadow-md"
      >
        +
      </button>
    </form>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import { mapMutations } from "vuex";

export default {
  props: ["project"],
  data() {
    return {
      newTodo: {
        task: "",
        deadline: null,
      },
    };
  },
  methods: {
    ...mapMutations(["addTodo"]),
  },
  components: {
    DatePicker,
  },
};
</script>

<style scoped>
.text-shadow {
  text-shadow: 0 2px #0006;
}
</style>

<style lang="postcss">
.deadline-picker.mx-datepicker {
  @apply w-full h-12 overflow-hidden rounded-lg;
}
.deadline-picker.mx-datepicker .mx-input-wrapper,
.deadline-picker.mx-datepicker .mx-input-wrapper .mx-input {
  @apply h-12 border-0;
}

.deadline-picker.mx-datepicker .mx-input-wrapper .mx-input {
  @apply px-4 shadow-none;
}
</style>
