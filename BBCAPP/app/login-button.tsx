import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function LoginButtonScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  const handlePress = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity
        style={StyleSheet.flatten([
          styles.button,
          { 
            backgroundColor: isLoggedIn ? '#34C759' : theme.tint,
            shadowColor: '#000',
          },
        ])}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          {isLoggedIn ? 'Login realizado' : 'Faça login'}
        </Text>
      </TouchableOpacity>

      <Link href="/explore" asChild>
        <TouchableOpacity 
          style={StyleSheet.flatten([styles.button, styles.bottomBackButton])}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Voltar para Explore</Text>
        </TouchableOpacity>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomBackButton: {
    backgroundColor: '#808080',
    position: 'absolute',
    bottom: 40,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});