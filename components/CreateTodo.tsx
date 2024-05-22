import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useAtom } from 'jotai';
import { newTodoAtom, todosAtom } from '@/Store/atoms'; // Import atoms from a separate file

const CreateTodo = () => {
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);
  const [, setTodos] = useAtom(todosAtom);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Math.random().toString(), text: newTodo, completed: false },
      ]);
      setNewTodo('');
    } else {
      alert('Please enter at least one letter.');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Add" onPress={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
});

export default CreateTodo;
