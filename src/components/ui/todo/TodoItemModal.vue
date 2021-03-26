<template>
  <form @submit.prevent="addTodo" class="TodoItemModal">
    <h1 class="todo-item-modal__title">
      Adicionando tarefa à {{ project.name }}
    </h1>

    <label class="label item-label" for="task">Nome da tarefa</label>
    <input class="item-input" type="text" name="task" v-model="newTodo.task" />

    <label class="label item-label" for="deadline">Prazo</label>
    <date-picker
      class="item-input"
      name="deadline"
      v-model="newTodo.deadline"
      type="datetime"
      format="DD/MM/YYYY hh:mm"
      value-type="timestamp"
    />

    <button type="submit">Adicionar</button>
  </form>
</template>

<script>
  import DatePicker from "vue2-datepicker";
  import "vue2-datepicker/index.css";
  import "vue2-datepicker/locale/pt-br";

  export default {
    props: ["project"],
    data() {
      return {
        newTodo: {
          task: "",
          deadline: null
        }
      };
    },
    methods: {
      addTodo() {
        this.$store.commit("addTodo", this.newTodo);
        this.newTodo = {
          task: "",
          deadline: null
        };
      }
    },
    components: { DatePicker }
  };
</script>
