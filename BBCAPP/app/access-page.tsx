import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function AccessPage() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Acesso à Funcionalidade
      </ThemedText>
      
      <ThemedText style={styles.subtitle}>
        Clique no botão abaixo para navegar até a página do botão de login que utiliza state e renderização condicional.
      </ThemedText>

      <Link href="/login-button" asChild>
        <TouchableOpacity 
          style={StyleSheet.flatten([styles.button, { backgroundColor: theme.tint }])}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Ir para Tela de Login</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/explore" asChild>
        <TouchableOpacity 
          style={StyleSheet.flatten([styles.button, styles.backButton])}
          activeOpacity={0.8}
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
    padding: 24,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 16,
    opacity: 0.7,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  backButton: {
    backgroundColor: '#808080',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});