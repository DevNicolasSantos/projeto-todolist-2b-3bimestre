import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'; 
import logo from './assets/logo.png';
import add from './assets/add.png';
import { useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import trash from './assets/trash.jpg';
import Checkbox from 'expo-checkbox';

export default function App() {

  const [ tarefa, setTarefa ] = useState("");
  const [ tarefas, setTarefas ] = useState([]);

  const btnAdicionar = () => {
    //Alert.alert("TODO List", "Valor: " + tarefa);
    setTarefas([tarefa, ...tarefas]);
    setTarefa("");
  }

  const renderItem = ({ item }) => (
    <View style={styles.viewItemRender}>
      <Text>{item}</Text>
      <Checkbox value={false} />
      <TouchableOpacity>
        <Image source={trash} />
      </TouchableOpacity>
    </View>
  );  

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
          onChangeText={setTarefa}
        />

        <TouchableOpacity onPress={btnAdicionar}>
          <Image source={add} style={styles.add} />
        </TouchableOpacity>
      </View>

      <View style={styles.viewTarefas}>
        <FlashList
        data={tarefas}
        renderItem={renderItem}
        estimatedItemSize={50}
      />
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
  },
  viewTarefas: {
    width: "100%",
    flex: 1,
  },
  viewItemRender: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    gap: 1,
  }
});