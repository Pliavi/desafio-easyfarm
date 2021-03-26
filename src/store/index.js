import Vue from "vue";
import Vuex from "vuex";
import { defaultState } from "./defaults";
import { createRandomColor } from "../lib/colors";

Vue.use(Vuex);

const getCurrentProject = state => state.projects[state.selectedProject];

const store = new Vuex.Store({
  state: defaultState,
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

    createProject(state, name) {
      state.projects.push({
        id: `p${state.lastUID++}`,
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
    currentProject: state => {
      console.log(state);
      console.log(getCurrentProject(state));
      return getCurrentProject(state);
    },
    todos: state => (filter, dateSort) => {
      const todos = getCurrentProject(state).todos;

      todos.sort((todoA, todoB) => {
        if (todoA.deadline > todoB.deadline) {
          return dateSort === "asc" ? -1 : 1;
        }

        if (todoA.deadline < todoB.deadline) {
          return dateSort === "asc" ? 1 : -1;
        }

        return 0;
      });

      if (filter === "completed") {
        return todos.filter(todo => todo.completed);
      }

      if (filter === "pending") {
        return todos.filter(todo => !todo.completed);
      }

      if (filter === "late") {
        const now = Date.now();

        return todos.filter(todo => {
          if (!todo.deadline) return false;
          const deadline = Date.parse(todo.deadline);

          return deadline < now;
        });
      }

      return todos;
    }
  }
});

export default store;
