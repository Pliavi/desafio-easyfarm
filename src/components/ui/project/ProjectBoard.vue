<template>
  <div class="space-y-4">
    <div class="flex items-center gap-2 px-4">
      <h1 class="text-2xl font-bold">{{ project.name }}</h1>

      <button
        class="w-8 h-8 ml-auto text-2xl text-white bg-gray-500 rounded-lg shadow hover:bg-red-800 hover:shadow-md"
        @click="emitDelete"
      >
        ×
      </button>
    </div>

    <NewTodoItem :project="project" />

    <div
      class="overflow-hidden bg-white divide-y rounded-lg shadow divide-gray-50"
    >
      <TodoItem
        v-for="todo in filteredTodos"
        :project="project"
        :todo="todo"
        :key="todo.id"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/ui/todo/TodoItem";
import NewTodoItem from "@/components/ui/todo/NewTodo";

export default {
  props: ["project", "order", "filter"],
  computed: {
    filteredTodos() {
      return this.$store.getters.todos(this.project, this.filter, this.order);
    },
  },
  methods: {
    emitDelete() {
      this.$emit("delete", this.project);
    },
  },
  components: { TodoItem, NewTodoItem },
};
</script>
