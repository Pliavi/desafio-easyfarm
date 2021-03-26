<template>
  <div class="todo-item">
    <div class="todo-item__icon">
      {{ todo.task[0] }}
    </div>
    <div class="todo-item__info">
      <div class="todo-item__title">{{ todo.task }}</div>
      <div class="todo-item__deadline">{{ todo.deadline }}</div>
    </div>
    <div class="todo-item__status">
      {{ todo.completed }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["todo"],
}
</script>