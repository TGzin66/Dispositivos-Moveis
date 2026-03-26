import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddItemView({ navigation, viewModel }: any) {

  if (!viewModel) return null;

  const { adicionarItem } = viewModel;

  const [nome, setNome] = useState("");
  const [desc, setDesc] = useState("");
  const [imagem, setImagem] = useState("");

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Adicionar Item</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição"
        value={desc}
        onChangeText={setDesc}
        style={styles.input}
      />

      <TextInput
        placeholder="URL da imagem"
        value={imagem}
        onChangeText={setImagem}
        style={styles.input}
      />

      <Button
        title="Adicionar"
        onPress={() => {
          adicionarItem(nome, desc, imagem);
          navigation.goBack();
        }}
      />

      <Button
        title="Cancelar"
        color="gray"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  }
});