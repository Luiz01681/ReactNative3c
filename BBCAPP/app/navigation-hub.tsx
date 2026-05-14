import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Link } from 'expo-router';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function NavigationHub() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Página de Navegação
      </ThemedText>
      
      <ThemedText style={styles.subtitle}>
        Clique no botão abaixo para acessar a página de funcionalidades (Access Page).
      </ThemedText>

      <Link href="/access-page" asChild>
        <TouchableOpacity 
          style={StyleSheet.flatten([styles.button, { backgroundColor: theme.tint }])}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Ir para Access Page</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/explore" asChild>
        <TouchableOpacity 
          style={StyleSheet.flatten([styles.button, styles.backButton])}
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
    padding: 24,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 40,
    opacity: 0.6,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 14,
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