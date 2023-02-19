import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export interface ICat {
  category: string;
}

export const newCatState = atom<ICat[]>({
  key: "newCat",
  default: [],
});

export const categoryState = atom({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter(
      (toDo) => JSON.stringify(toDo.category) === JSON.stringify(category)
    );
  },
});

export const categorySelector = selector({
  key: "categorySelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
  },
});
