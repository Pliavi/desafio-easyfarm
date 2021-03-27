<template>
  <div id="app" class="min-h-screen py-8 text-gray-800 bg-gray-200">
    <div class="flex items-center justify-center gap-2 mb-8">
      <img class="h-12" src="@/assets/logo_icon.png" alt="" />
      <div class="text-2xl font-bold">EasyTasks</div>
    </div>

    <div class="container mx-auto space-y-8">
      <ProjectFilters
        :order="options.order"
        :filter="options.filter"
        :projects="projects"
        @filterChange="(filter) => (options.filter = filter)"
        @orderChange="(order) => (options.order = order)"
        @projectChange="(project) => (options.selectedProject = project)"
      />

      <NewProject />

      <ProjectBoard
        :project="project"
        :order="options.order"
        :filter="options.filter"
        v-for="project in filteredProject"
        :key="project.id"
        @delete="deleteProject"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ProjectFilters from "@/components/ui/project/ProjectFilters";
import ProjectBoard from "@/components/ui/project/ProjectBoard";
import NewProject from "./components/ui/project/NewProject.vue";

export default {
  name: "App",
  components: {
    ProjectFilters,
    ProjectBoard,
    NewProject,
  },
  data() {
    return {
      options: {
        order: "none",
        filter: "all",
        selectedProject: undefined,
      },
    };
  },
  computed: {
    ...mapState(["projects"]),
    filteredProject() {
      return this.$store.getters.filteredProjects(this.options.selectedProject);
    },
  },
  methods: {
    ...mapMutations(["createProject"]),
    deleteProject(project) {
      if (this.options.selectedProject === project) {
        this.options.selectedProject = undefined;
      }
      this.$store.commit("deleteProject", project);
    },
  },
};
</script>
