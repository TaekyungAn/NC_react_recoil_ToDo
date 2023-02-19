import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

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

const { persistAtom } = recoilPersist({
  key: "todoLocal",
  storage: localStorage,
});
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
  // effects: [
  //   ({ setSelf, onSet }) => {
  //     const todoStoreKey = "Todo";
  //     const savedValue = localStorage.getItem(todoStoreKey);
  //     if (savedValue != null) {
  //       setSelf(JSON.parse(savedValue));
  //     }
  //     onSet((newValue, _, isReset) => {
  //       isReset
  //         ? localStorage.removeItem(todoStoreKey)
  //         : localStorage.setItem(todoStoreKey, JSON.stringify(newValue));
  //     });
  //   },
  // ],
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
