import { RootStore } from "./store";

export const getBooks = (state: RootStore) => state.books;

export const getFilms = (state: RootStore) => state.films;
