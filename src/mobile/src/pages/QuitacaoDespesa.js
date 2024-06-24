import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';
import {
  insertPagamento,
  updatePagamento,
} from '../services/pagamentos.services';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

const QuitacaoDespesa = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [expenseId, setExpenseId] = useState('');
  const [userId, setUserId] = useState('');
  const [valuePayment, setValuePayment] = useState('');

  useEffect(() => {
    if (item) {
      setExpenseId(item.expenseId.toString());
      setUserId(item.userId.toString());
      setValuePayment(item.valuePayment.toString());
    }
  }, [item]);

  const handleSalvar = () => {
    const formattedDate = moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

    if (item) {
      updatePagamento({
        id: item.id,
        expenseId: parseInt(expenseId),
        userId: parseInt(userId),
        valuePayment: parseFloat(valuePayment),
      }).then((res) => {
        if (res) {
          Alert.alert('Sucesso!', 'Pagamento atualizado com sucesso.');
          navigation.goBack();
        } else {
          Alert.alert('Erro!', 'Não foi possível atualizar o pagamento.');
        }
      });
    } else {
      insertPagamento({
        expenseId: parseInt(expenseId),
        userId: parseInt(userId),
        valuePayment: parseFloat(valuePayment),
      }).then((res) => {
        if (res) {
          Alert.alert('Sucesso!', 'Pagamento registrado com sucesso.');
          navigation.goBack();
        } else {
          Alert.alert('Erro!', 'Não foi possível registrar o pagamento.');
        }
      });
    }
  };

  const handleQuitacao = () => {
    if (!expenseId || !userId || !valuePayment) {
      Alert.alert('Atenção!', 'Obrigatório informar o ID da despesa e do usuário!');
      return;
    }

    handleSalvar();
  };

  return (
    <Container>
      <Header 
        title={'Quitar despesa'} 
        goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
        {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
      </Header>
      <Body>
        <Input
          label="ID da Despesa"
          value={expenseId}
          onChangeText={(text) => setExpenseId(text)}
          keyboardType="numeric"
        />
        <Input
          label="ID do Usuário"
          value={userId}
          onChangeText={(text) => setUserId(text)}
          keyboardType="numeric"
        />
        <Input
          label="Valor do Pagamento"
          value={valuePayment}
          onChangeText={(text) => setValuePayment(text)}
          keyboardType="numeric"
        />
        <Button mode="contained" onPress={handleQuitacao} style={styles.button}>
          Quitar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
  },
});

export default QuitacaoDespesa;