import CreateTodo from '@/components/CreateTodo';
import TodoList from '@/components/TodoList';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Todo App</Text>
      </View>
      <CreateTodo/>
      <TodoList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 40,
    backgroundColor: 'white', 
  },
  header: {
    backgroundColor: '#3498db',
    padding: 18,
    alignItems: 'center',
    margin: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

