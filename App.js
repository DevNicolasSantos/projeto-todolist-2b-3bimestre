import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';
import { TextInput } from 'react-native-web';
import add from './assets/add.png';
import { useState } from 'react';

export default function App() {
  const [ tarefa, setTarefa ] = useState("");
  const btnAdicionar = () => {
    Alert.alert("TODO List","Valor: ", + tarefa);
    setTarefa("");
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image source={logo} style={styles.logo}/>
      </View>
      <Text>TODO List</Text>
      <StatusBar style="auto" />
      <View style={styles.viewInput}>
        <TextInput 
          placeholder="Digite a Tarefa" 
          value={tarefa} 
          onChange={setTarefa}
        />
        <TouchableOpacity onPress={btnAdicionar}>
          <Image source={add} style={styles.add} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    width: 128,
    height: 128,
  },
  viewInput: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  add: {
    width: 32,
    height: 32,
  },
  viewLogo: {
    width: "100%",
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 10
  }
});
