<template>
  <div class="project-board">
    <div class="project-board__title">
      <h1>{{ project.name }}</h1>
      <button>+</button>
    </div>

    <div class="project-board__todos">
      <TodoItem
        v-for="todo in project.todos"
        :project="project"
        :todo="todo"
        :key="todo.id"
      />
    </div>
  </div>
</template>

<script>
  import TodoItem from "@/components/ui/todo/TodoItem";

  export default {
    props: ["project"],
    mounted() {},
    components: { TodoItem }
  };
</script>

<style lang="scss" scoped>
  .project-board__todos {
    display: flex;
  }
</style>
