import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardUserProps {
  name: string;
  age: number;
}

export function CardUser({ name, age }: CardUserProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Nome: {name}</Text>
      <Text style={styles.text}>Idade: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
    marginBottom: 4,
  },
});