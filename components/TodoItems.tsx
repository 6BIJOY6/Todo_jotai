import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { useAtom } from 'jotai';
import { todosAtom, editingIdAtom, editedTextAtom, TodoItems } from '@/Store/atoms'; // Import atoms from a separate file
interface TodoItemProp {
    todo: TodoItems;
}
const TodoItem:React.FC<TodoItemProp> = ({ todo }) => {
  const [todos, setTodos] = useAtom(todosAtom);
  const [editingId, setEditingId] = useAtom(editingIdAtom);
  const [editedText, setEditedText] = useAtom(editedTextAtom);

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const saveEditTodo = (id: string, editedText: string) => {
    if (editedText.trim()) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, text: editedText } : todo
        )
      );
      setEditingId(null);
      setEditedText('');
    } else {
      alert('Please enter at least one letter.');
    }
  };

  const startEditTodo = (id: string) => {
    setEditingId(id);
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      setEditedText(todo.text);
    }
  };

  return (
    <View style={styles.todoItem}>
      <CheckBox
        checked={todo.completed}
        onPress={() => toggleTodo(todo.id)}
      />
      {editingId === todo.id ? (
        <>
          <TextInput
            style={styles.editInput}
            value={editedText}
            onChangeText={setEditedText}
            autoFocus
          />
          <TouchableOpacity onPress={() => saveEditTodo(todo.id, editedText)}>
            <Ionicons name="save" size={24} color="blue" />
          </TouchableOpacity>
        </>
      ) : (
        <Text style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </Text>
      )}
      <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
        <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>
      {editingId !== todo.id && (
        <TouchableOpacity onPress={() => startEditTodo(todo.id)}>
          <Ionicons name="create" size={24} color="blue" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  editInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});

export default TodoItem;
