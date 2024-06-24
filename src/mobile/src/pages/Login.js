import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

import { login } from '../services/auth.services';

const Login = () => {
  const navigation = useNavigation('');
  const { setSigned, setName } = useUser('');

  // const [email, setEmail] = useState('teste13@teste.com');
  // const [password, setPassword] = useState('teste');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Atenção', 'Por favor, preencha o email e a senha.');
    } else {
      login({
        email: email,
        password: password,
      }).then((res) => {
        console.log(res);
        setSigned(true);
        AsyncStorage.setItem('@TOKEN_KEY', res.jwtToken).then();
      });
    }
  };

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>

      <Headline style={styles.textHeader}>Gestão de Despesas</Headline>

      <Body>
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <Button style={styles.button} mode="contained" onPress={handleLogin}>
          LOGIN
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
  },
  textHeader: {
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12,
  },
});

export default Login;
