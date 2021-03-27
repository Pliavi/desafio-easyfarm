export const defaultState = () => ({
  lastUID: 3,
  selectedProject: 0,
  order: "",
  newTodo: {
    task: "",
    deadline: false,
    completed: false
  },
  projects: [
    {
      id: 1,
      name: "Vamos começar!",
      color: "hsl(30, 45%, 85%)",
      lastUID: 5,
      todos: [
        {
          id: 1,
          task: "Olá",
          deadline: false,
          completed: true
        },
        {
          id: 2,
          task: "Crie seu primeiro projeto!",
          deadline: false,
          completed: false
        },
        {
          id: 3,
          task: "Crie sua primeira atividade!",
          deadline: 1616778716750,
          completed: false,
        },
        {
          id: 4,
          task: "Finalize esta atividade! Você está atrasado!",
          deadline: 1616777714724,
          completed: false
        }
      ]
    },
    {
      id: 2,
      name: "Me apague!",
      color: "hsl(280, 75%, 95%)",
      lastUID: 4,
      todos: [
        {
          id: 1,
          task: "Apague este projeto!",
          deadline: false,
          completed: false
        }
      ]
    }
  ]
});
