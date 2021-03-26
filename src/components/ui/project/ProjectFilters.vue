<template>
  <div class="project-filters button-bag">
    <div class="button-bag__upper">
      <button @click="emitFilter('all')">Todos</button>
      <button @click="emitFilter('pending')">Pendente</button>
      <button @click="emitFilter('late')">Atrasado</button>
      <button @click="emitFilter('completed')">Completado</button>
    </div>
    <div class="button-bag__bottom">
      <button @click="emitOrdering">Data {{ ordering }}</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["ordering", "filter"],
    methods: {
      emitFilter(state) {
        this.$emit("filterChange", state);
      },
      emitOrdering() {
        const ordering = this.ordering === "asc" ? "desc" : "asc";

        this.$emit("orderingChange", ordering);
      }
    }
  };
</script>
