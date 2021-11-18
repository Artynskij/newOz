import { Action } from "redux";


const INITIAL_STATE = {
    books: [
      { id: 1, label: "Незнайка на Луне" },
      { id: 2, label: "Дневник писателя" }
    ],
    films: [
      { id: 1, label: "Кто подставил кролика Роджера" },
      { id: 2, label: "Свинка Пеппа" }
    ]
  };

  export const reducer = (INITIAL_STATE) => {
      switch    (action.type) {
          default: 
          return INITIAL_STATE
      }
  }