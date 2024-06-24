import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';
import { getGastos } from '../services/gastos.services';

import { useIsFocused } from '@react-navigation/native';

const Gastos = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { name } = useUser();
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    getGastos().then(dados => {
      console.log(dados);
      setGastos(dados);
    });
  }, [isFocused]);

  const calculateRemainingAmount = (item) => {
    if (!item || !item.payments) return item.valueExpense;
    const totalPayments = item.payments.reduce((acc, payment) => {
      return acc + payment.valuePayment;
    }, 0);
    const remainingAmount = item.valueExpense - totalPayments;
    return remainingAmount;
  };

  const renderItem = ({ item }) => {
    const remainingAmount = calculateRemainingAmount(item);
    const displayAmount = remainingAmount <= 0 ? 'R$ 0 - QUITADO' : `R$ ${remainingAmount.toFixed(2)}`;

    return (
      <List.Item
        title={displayAmount}
        description={`${item.description} - Grupo: ${item.groupId}`}
        left={(props) => (
          <List.Icon
            {...props}
            color='blue'
            icon="cash"
          />
        )}
        right={(props) => (
          <Text {...props} style={{ alignSelf: 'center' }}>
            {new Date(item.date).toLocaleDateString()}
          </Text>
        )}
        onPress={() => navigation.navigate('Abastecimento', { item })}
      />
    );
  };

  return (
    <Container>
      <Header title={`Olá, ${name}`} />
      <Body>
        <FlatList
          data={gastos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('Abastecimento')}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Gastos;
