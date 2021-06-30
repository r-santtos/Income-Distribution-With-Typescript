import React, { useState } from 'react';
import { 
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import Input from '../components/Input';
import { SafeAreaView } from 'react-native-safe-area-context';

function Calc() {
  const [money, setMoney] = useState('');
  function handleCuston(value: string) {
    setMoney(value);
  }
  const numFloat:any = money.replace(/\D/g, "").replace(/(\d)(\d{2})$/, "$1.$2");
  const cincoCinco = numFloat * 0.55;
  const dez = numFloat * 0.10;
  const cinco = numFloat * 0.05;
  
  const resCincoCinco = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cincoCinco);
  const resDez = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dez);
  const resCinco = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cinco);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.real}>R$</Text>
        <Input
          value={money}
          placeholder='0,00'
          placeholderTextColor='#c6c6c6'
          keyboardType="decimal-pad"
          maxLength={14}
          inputMaskChange={(text: string) => handleCuston(text)}
        />
      </View>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      >
        <View style={styles.box}>
          <View style={styles.boxTitle}>
            <View style={styles.sinal} />
            <Text style={styles.titleText}>55% Custos de vida / mês</Text>
          </View>
          <Text style={styles.value}>{resCincoCinco}</Text>
        </View>

        <View style={styles.box}>
          <View style={styles.boxTitle}>
            <View style={styles.sinal} />
            <Text style={styles.titleText}>10% Independência financeira</Text>
          </View>
        <Text style={styles.value}>{resDez}</Text>
        </View>

        <View style={styles.box}>
          <View style={styles.boxTitle}>
            <View style={styles.sinal} />
            <Text style={styles.titleText}>10% Objetivos de médio prazo</Text>
          </View>
          <Text style={styles.value}>{resDez}</Text>
        </View>

        <View style={styles.box}>
          <View style={styles.boxTitle}>
            <View style={styles.sinal} />
            <Text style={styles.titleText}>5% Dinheiro em caixa</Text>
          </View>
          <Text style={styles.value}>{resCinco}</Text>
        </View>

        <View style={styles.box}>
          <View style={styles.boxTitle}>
            <View style={styles.sinal} />
            <Text style={styles.titleText}>10% Educação</Text>
          </View>
          <Text style={styles.value}>{resDez}</Text>
        </View>

        <View style={styles.box}>
          <View style={styles.boxTitle}>
            <View style={styles.sinal} />
            <Text style={styles.titleText}>10% Lazer</Text>
          </View>
          <Text style={styles.value}>{resDez}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -17,
  },
  real: {
    fontSize: 35,
    color: '#c6c6c6',
  },
  scrollView: {
    width: '100%',
    paddingTop: 10,
  },
  box: {
    backgroundColor: '#202020',
    marginBottom: 10,
  },
  boxTitle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303030',
  },
  titleText: {
    color: '#c6c6c6',
    fontSize: 16,
  },
  sinal: {
    maxHeight: 7,
    maxWidth: 7,
    minHeight: 7,
    minWidth: 7,
    borderRadius: 50,
    backgroundColor: '#c6c6c6',
    marginRight: 10,
  },
  value: {
    fontSize: 20,
    color: '#c6c6c6',
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
});

export default Calc;