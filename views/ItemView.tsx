import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, Image } from "react-native";
import Item from "../models/Item";
import useItemViewModel from "../viewmodels/ItemViewModel";

export default function ItemView() {

  const { itens, adicionarItem, removerItem, confirmarRemocao } = useItemViewModel();

  const [nome, setNome] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Catálogo de Itens</Text>

      <TextInput
        placeholder="Nome do item"
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
          setNome("");
          setDesc("");
          setImagem("");
        }}
      />

      <FlatList
        data={itens}
        keyExtractor={(item: Item) => item.id}
        renderItem={({ item }: { item: Item }) => (
          <View style={styles.item}>

            <Image
              source={{ uri: item.imagem }}
              style={styles.imagem}
            />

            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>{item.desc}</Text>
            </View>

            <Button
              color="#ff2c2f"
              title="X"
              onPress={() => confirmarRemocao(item.id)}
            />

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10
  },

  info: {
    flex: 1,
  },

  item: {
    flexDirection: "row",
    padding: 12,
    marginBottom: 12,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },

  imagem: {
    width: 70,
    height: 70,
    marginRight: 12,
    borderRadius: 200,
    backgroundColor: "#ccc",
  },

  nome: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
    marginBottom: 4,
  },

});