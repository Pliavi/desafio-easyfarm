<template>
  <div id="app">
    <ProjectFilters :ordering="options.ordering" :filter="options.filter" />
    <ProjectBoard :project="currentProject" />
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex";
  import ProjectFilters from "@/components/ui/project/ProjectFilters";
  import ProjectBoard from "@/components/ui/project/ProjectBoard";

  export default {
    name: "App",
    components: {
      ProjectFilters,
      ProjectBoard
    },
    data() {
      return {
        options: {
          ordering: "asc",
          filter: "all"
        }
      };
    },
    computed: {
      ...mapGetters(["currentProject", "filteredTodos"])
    },
    methods: {
      ...mapMutations({ createProject: "createProject" })
    }
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .date {
  }
</style>
