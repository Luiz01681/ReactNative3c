import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Link } from 'expo-router';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function StartPage() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Início
      </ThemedText>
      
      <ThemedText style={styles.subtitle}>
        Clique abaixo para navegar até a página de acesso que você criou.
      </ThemedText>

      <Link href="/access-page" asChild>
        <TouchableOpacity 
          style={StyleSheet.flatten([styles.button, { backgroundColor: theme.tint }])}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Entrar no App</Text>
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
    marginBottom: 12,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
    opacity: 0.6,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 4,
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