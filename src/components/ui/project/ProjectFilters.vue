<template>
  <div
    class="overflow-hidden bg-white border border-gray-200 divide-y rounded-lg shadow"
  >
    <div class="flex divide-x">
      <button
        class="flex-1 p-2 hover:bg-gray-100"
        :class="[filter === 'all' ? 'font-bold bg-gray-100' : '']"
        @click="emitFilter('all')"
      >
        Todos
      </button>
      <button
        class="flex-1 p-2 hover:bg-gray-100"
        :class="[filter === 'pending' ? 'font-bold bg-gray-100' : '']"
        @click="emitFilter('pending')"
      >
        Pendente
      </button>
      <button
        class="flex-1 p-2 hover:bg-gray-100"
        :class="[filter === 'late' ? 'font-bold bg-gray-100' : '']"
        @click="emitFilter('late')"
      >
        Atrasado
      </button>
      <button
        class="flex-1 p-2 hover:bg-gray-100"
        :class="[filter === 'completed' ? 'font-bold bg-gray-100' : '']"
        @click="emitFilter('completed')"
      >
        Completado
      </button>
    </div>
    <div class="flex divide-x">
      <button class="flex-1 p-2 hover:bg-gray-100" @click="emitOrder">
        Data
        <span class="inline-block w-4" v-if="order === 'none'"> ⚌ </span>
        <span class="inline-block w-4" v-if="order === 'asc'"> ▲ </span>
        <span class="inline-block w-4" v-if="order === 'desc'"> ▼ </span>
      </button>
      <div class="flex items-center flex-1 gap-4 pl-4 hover:bg-gray-100">
        <label for="project-select">Projeto:</label>
        <select
          id="project-select"
          class="flex-1 py-2 bg-transparent"
          @change="emitProject"
        >
          <option value="all">Todos</option>
          <option
            v-for="(project, index) in projects"
            :value="index"
            :key="project.id"
          >
            {{ project.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["order", "filter", "projects"],
  methods: {
    emitFilter(filter) {
      this.$emit("filterChange", filter);
    },
    emitOrder() {
      if (this.order === "none") {
        this.$emit("orderChange", "asc");
      }
      if (this.order === "asc") {
        this.$emit("orderChange", "desc");
      }
      if (this.order === "desc") {
        this.$emit("orderChange", "none");
      }
    },
    emitProject(ev) {
      const projectIndex = ev.target.value;
      if (projectIndex === "all") {
        this.$emit("projectChange");
        return;
      }
      this.$emit("projectChange", this.projects[projectIndex]);
    },
  },
};
</script>
