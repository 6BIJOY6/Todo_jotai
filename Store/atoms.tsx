import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'

export interface TodoItems {
  id: string;
  text: string;
  completed: boolean;
}

export const todosAtom = atomWithStorage<TodoItems[]>("todo",[]);
export const newTodoAtom = atom('');
export const editingIdAtom = atom<string | null>(null);
export const editedTextAtom = atom('');
