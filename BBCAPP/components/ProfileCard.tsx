import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function ProfileCard() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  const [name, setName] = useState('Alex Silva');
  const [bio, setBio] = useState('Desenvolvedor Fullstack apaixonado por React Native.');

  const handleSave = () => {
    Alert.alert('Sucesso', 'As alterações do perfil foram salvas!');
  };

  return (
    <View style={StyleSheet.flatten([styles.cardContainer, { backgroundColor: theme.background }])}>
      {/* Imagem de Perfil */}
      <Image
        source={{ uri: 'https://avatar.iran.liara.run/public/31' }}
        style={styles.profileImage}
      />

      {/* Conteúdo de Informações */}
      <View style={styles.form}>
        <Text style={[styles.label, { color: theme.icon }]}>Nome de Usuário</Text>
        <TextInput
          style={StyleSheet.flatten([styles.input, { backgroundColor: colorScheme === 'dark' ? '#2c2c2e' : '#F2F2F7', color: theme.text }])}
          value={name}
          onChangeText={setName}
          placeholder="Seu nome"
          placeholderTextColor={theme.icon}
        />

        <Text style={[styles.label, { color: theme.icon }]}>Biografia</Text>
        <TextInput
          style={StyleSheet.flatten([styles.input, styles.bioInput, { backgroundColor: colorScheme === 'dark' ? '#2c2c2e' : '#F2F2F7', color: theme.text }])}
          value={bio}
          onChangeText={setBio}
          placeholder="Fale um pouco sobre você"
          placeholderTextColor={theme.icon}
          multiline
          numberOfLines={3}
        />

        {/* Botão de Ação */}
        <TouchableOpacity style={styles.button} onPress={handleSave} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    margin: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#007AFF',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#8E8E93',
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  bioInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});