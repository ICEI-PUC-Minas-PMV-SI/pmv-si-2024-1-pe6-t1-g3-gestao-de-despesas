import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, Appbar } from 'react-native-paper';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import { useNavigation } from '@react-navigation/native';
import {
  updateGasto,
  insertGasto,
  deleteGasto,
  getGrupos,
} from '../services/gastos.services';

const Abastecimento = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [data, setData] = useState(
    moment().utc().startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
  );
  const [groupId, setGroupId] = useState('');

  useEffect(() => {
    if (item) {
      setDesc(item.description);
      setPrice(item.valueExpense.toString());
      setData(
        moment(item.date)
          .utc()
          .startOf('day')
          .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
      );
      setGroupId(item.groupId.toString());
    }
  }, [item]);

  const handleSalvar = () => {
    const formattedDate = moment(data)
      .utc()
      .startOf('day')
      .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    if (item) {
      updateGasto({
        id: item.id,
        valueExpense: parseFloat(price),
        date: formattedDate,
        description: desc,
        groupId: parseInt(groupId),
      }).then((res) => {
        navigation.goBack();
      });
    } else {
      insertGasto({
        valueExpense: parseFloat(price),
        date: formattedDate,
        description: desc,
        groupId: parseInt(groupId),
      }).then((res) => {
        navigation.goBack();
      });
    }
  };

  const handleExcluir = () => {
    deleteGasto(item.id).then((res) => {
      navigation.goBack();
    });
  };

  const calculateRemainingAmount = (item) => {
    if (!item || !item.payments) return 0;
    const totalPayments = item.payments.reduce((acc, payment) => acc + payment.valuePayment, 0);
    const remainingAmount = item.valueExpense - totalPayments;
    return remainingAmount;
  };

  const remainingAmount = item ? calculateRemainingAmount(item) : 0;
  const remainingText = remainingAmount <= 0 ? 'R$ 0 - QUITADO' : `R$ ${remainingAmount.toFixed(2)}`;

  return (
    <Container>
      <Header
        title={item ? 'Editar Despesa' : 'Cadastrar Despesa'}
        goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
        {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
      </Header>

      <Body>
        <Input
          label="Descrição"
          value={desc}
          onChangeText={(text) => setDesc(text)}
        />
        <Input
          label="Valor"
          keyboardType="decimal-pad"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onTouchCancel={() => setShow(false)}
            onChange={(event, date) => {
              setShow(false);
              setData(
                moment(date)
                  .utc()
                  .startOf('day')
                  .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
              );
            }}
          />
        )}

        <TouchableOpacity onPress={() => setShow(true)}>
          <Input
            label="Data"
            value={data}
            left={<TextInput.Icon name="calendar" />}
            editable={false}
          />
        </TouchableOpacity>

        <Input
          label="ID do Grupo"
          value={groupId}
          keyboardType="numeric"
          onChangeText={(text) => setGroupId(text)}
        />

        <Text style={styles.remainingText}>{remainingText}</Text>

        <Button mode="contained" style={styles.button} onPress={handleSalvar}>
          Salvar
        </Button>

        {item && (
          <Button
            mode="contained"
            color={'red'}
            style={styles.button}
            onPress={handleExcluir}>
            Excluir
          </Button>
        )}
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
  },
  remainingText: {
    fontSize: 16,
    marginVertical: 8,
    color: 'green',
  },
});

export default Abastecimento;
