<template>
  <div class="p-4 bg-gray-300 rounded-lg">
    <form
      class="flex flex-1 h-12 gap-x-6"
      @submit.prevent="addProject"
    >
      <div class="flex-1">
        <input
          class="w-full h-12 px-4 rounded-lg shadow bg-gray-white"
          type="text"
          placeholder="Nome do novo projeto"
          v-model="newProject"
        />
      </div>

      <button
        class="flex items-center self-center justify-center w-8 h-8 ml-auto text-2xl text-white bg-green-500 rounded-lg shadow hover:shadow-md"
        type="submit"
      >
        <PlusIcon size="1x"/>
      </button>
    </form>
  </div>
</template>

<script>
import { PlusIcon } from "@vue-hero-icons/solid";

export default {
  data() {
    return {
      newProject: "",
    };
  },
  methods: {
    addProject() {
      if (this.newProject.trim() !== "") {
        this.$store.commit("addProject", this.newProject.trim());
        return;
      }

      this.$toast.error("O nome não pode ser vazio", { position: "top" });
    },
  },
  components: { PlusIcon },
};
</script>