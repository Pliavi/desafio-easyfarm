import Vue from "vue";
import Vuex from "vuex";
import { defaultState } from "./defaults";
import { createRandomColor } from "../lib/colors";

Vue.use(Vuex);

const loadFromStorage = () => {
  return JSON.parse(localStorage.getItem("projects"));
};

const saveToStorage = projects => {
  return localStorage.setItem("projects", JSON.stringify(projects));
};

const getCurrentProject = state => state.projects[state.selectedProject];

const store = new Vuex.Store({
  state: loadFromStorage() || defaultState,
  mutations: {
    addTodo(state, { task, deadline }) {
      const currentProject = getCurrentProject(state);
      const todos = currentProject.todos;

      todos.push({
        id: currentProject.lastUID++,
        task,
        deadline,
        completed: false
      });
    },
    updateTodo(state, todo, changes) {
      const todos = getCurrentProject(state).todos;

      todos[todos.indexOf(todo)] = { ...todo, ...changes };
    },
    deleteTodo: (state, todo) => {
      const todos = getCurrentProject(state).todos;

      todos.splice(todos.indexOf(todo), 1);
    },
    toggleCompleteTodo(state, todo) {
      const todos = getCurrentProject(state).todos;

      todos[todos.indexOf(todo)].completed = !todo.completed;
    },

    addProject(state, name) {
      state.projects.push({
        id: state.lastUID++,
        name,
        color: createRandomColor(),
        lastUID: 0,
        todos: []
      });
    },
    updateProjectName({ projects }, project, changes) {
      projects[projects.indexOf(project)] = { ...project, ...changes };
    },
    deleteProject({ projects }, project) {
      projects.splice(projects.indexOf(project), 1);
    }
  },
  getters: {
    filteredProjects: ({ projects }) => selectedProject => {
      if (selectedProject) {
        return [projects[projects.indexOf(selectedProject)]];
      }
      return projects.sort((a, b) => b.id - a.id);
    },
    todos: () => (project, filter = "all", dateSort = "asc") => {
      let todos = project.todos;

      if (filter === "completed") {
        todos = todos.filter(todo => todo.completed);
      }

      if (filter === "pending") {
        todos = todos.filter(todo => !todo.completed);
      }

      if (filter === "late") {
        const now = Date.now();

        todos = todos.filter(todo => {
          if (!todo.deadline) return false;
          if (todo.completed) return false;

          const deadline = new Date(todo.deadline);

          return deadline < now;
        });
      }

      if (dateSort !== "none") {
        todos.sort((todoA, todoB) => {
          if (!todoA.deadline) return 1;
          if (!todoB.deadline) return -1;

          if (dateSort === "asc") {
            if (todoA.deadline > todoB.deadline) return 1;
            if (todoA.deadline < todoB.deadline) return -1;
          }

          if (dateSort === "desc") {
            if (todoA.deadline > todoB.deadline) return -1;
            if (todoA.deadline < todoB.deadline) return 1;
          }

          return 0;
        });
      } else {
        todos.sort((todoA, todoB) => {
          if (todoA.id > todoB.id) {
            return 1;
          }
          if (todoA.id < todoB.id) {
            return -1;
          }

          return 0;
        });
      }

      return todos;
    }
  }
});

store.watch(() => {
  saveToStorage(store.state);
});

export default store;
