import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
// 로컬스토리지 저장
const { persistAtom } = recoilPersist({
  key: "todoLocal",
  storage: localStorage,
});
export let defaultCategories: string[] = ["toDo", "Doing", "Done"];
export interface IToDo {
  text: string;
  id: number;
  category: string;
}

// 기본 카테고리
export const categoryState = atom<string>({
  key: "category",
  default: defaultCategories[0],
});

// 새로 입력하는 카테고리
export const newCategoryState = atom<string[]>({
  key: "newCategory",
  default: JSON.parse(
    localStorage.getItem("categories") ?? JSON.stringify(defaultCategories)
  ),
  effects_UNSTABLE: [persistAtom],
});

// 투두리스트
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
// 카테고리에 맞는 리스트만 필터함 => ToDoList에
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState); // []
    const category = get(categoryState); // string
    console.log(toDos.filter((toDo) => toDo.category === category));

    return toDos.filter((toDo) => toDo.category === category);
  },
});

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const openCategoryAtom = atom({
  key: "openCategory",
  default: false,
});

// 체크박스 리스트
export const checkedListState = atom<string[]>({
  key: "checkedList",
  default: [],
});
