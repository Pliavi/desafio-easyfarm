<template>
  <div
    class="flex items-center gap-6 p-4"
    :class="[
      isTodoLate(todo) && 'bg-yellow-50 hover:bg-yellow-100',
      todo.completed && 'bg-green-50 hover:bg-green-100',
      !isTodoLate(todo) && !todo.completed && 'hover:bg-gray-50',
    ]"
  >
    <div
      class="items-center justify-center hidden w-12 h-12 text-2xl font-bold text-white uppercase rounded-lg text-shadow md:flex"
      :style="{ backgroundColor: project.color }"
    >
      {{ todo.task[0] }}
    </div>
    <div :class="[todo.completed ? 'line-through' : '']">
      <div class="font-bold">{{ todo.task }}</div>
      <div class="text-sm text-gray-500 capitalize">
        {{ todo.deadline | timeToDate }}
      </div>
    </div>
    <div class="ml-auto select-none">
      <button
        class="flex items-center justify-center w-8 h-8 border rounded-full cursor-pointer"
        :class="[
          todo.completed
            ? 'bg-green-500 shadow text-white border-transparent hover:bg-gray-400 hover:shadow-md'
            : 'bg-white text-gray-400 hover:bg-green-200 hover:shadow-md hover:text-white hover:border-transparent',
        ]"
        @click="toggleCompleteTodo(todo)"
      >
        <CheckIcon size="1x" />
      </button>
    </div>
    <button
      class="flex items-center justify-center w-8 h-8 text-white bg-gray-500 rounded-full shadow hover:bg-red-800 hover:shadow-md"
      @click="deleteTodo(todo)"
    >
      <XIcon size="1x" />
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { CheckIcon } from "@vue-hero-icons/solid";
import { XIcon } from "@vue-hero-icons/solid";

export default {
  props: ["project", "todo"],
  methods: {
    ...mapMutations(["deleteTodo", "toggleCompleteTodo"]),
    isTodoLate(todo) {
      if (!todo.deadline) return false;
      if (todo.completed) return false;

      const now = Date.now();
      const deadline = new Date(todo.deadline);

      return deadline < now;
    },
  },
  filters: {
    timeToDate(time) {
      const formatter = Intl.DateTimeFormat("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });

      if (time) {
        return formatter.format(new Date(time));
      }
      return "Sem prazo determinado";
    },
  },
  components: {
    CheckIcon,
    XIcon,
  },
};
</script>

<style scoped>
.text-shadow {
  text-shadow: 0 2px #0006;
}
</style>
