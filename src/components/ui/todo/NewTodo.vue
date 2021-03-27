<template>
  <div class="flex items-center gap-6 p-4 bg-gray-300 rounded-lg">
    <div
      class="items-center justify-center hidden w-12 h-12 text-2xl font-bold text-white uppercase rounded-lg text-shadow md:flex"
      :style="{ backgroundColor: project.color }"
    >
      {{ newTodo.task[0] }}
    </div>

    <form
      class="flex flex-col flex-1 gap-x-6 gap-y-2 md:h-12 md:flex-row"
      @submit.prevent="addTodo"
    >
      <!-- task name -->
      <div class="flex-1">
        <input
          class="w-full h-12 px-4 rounded-lg bg-gray-white"
          type="text"
          placeholder="Nome da nova tarefa"
          v-model="newTodo.task"
        />
      </div>

      <!-- task deadline -->
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
        class="flex items-center self-center justify-center w-8 h-8 ml-auto text-2xl text-white bg-green-500 rounded-lg shadow hover:shadow-md"
        type="submit"
      >
        <PlusIcon size="1x" />
      </button>
    </form>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import { PlusIcon } from "@vue-hero-icons/solid";

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
    addTodo() {
      this.newTodo.task = this.newTodo.task.trim();

      if (this.newTodo.task !== "") {
        this.$store.commit("addTodo", this.newTodo);
        this.newTodo = {
          task: "",
          deadline: null,
        };

        return;
      }

      this.$toast.error("O nome não pode ser vazio", { position: "top" });
    },
  },
  components: {
    DatePicker,
    PlusIcon,
  },
};
</script>

<style scoped>
.text-shadow {
  text-shadow: 0 2px #0006;
}
</style>

<style lang="postcss">
/* Customizing deadline date picker */
/* XXX: não pode ser escopado ou deverá usar deep-selector */
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
