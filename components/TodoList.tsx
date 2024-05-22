import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useAtom } from 'jotai';
import { todosAtom } from '@/Store/atoms'; // Import atoms from a separate file
import TodoItems from './TodoItems'; // Import the TodoItem component

const TodoList = () => {
  const [todos] = useAtom(todosAtom);

  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoItems todo={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default TodoList;
