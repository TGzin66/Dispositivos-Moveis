import React from "react";
import { View, Text, Button, FlatList, StyleSheet, Image } from "react-native";
import Item from "../models/Item";

export default function ItemView({ navigation, viewModel }: any) {

  if (!viewModel) return null;

  const { itens, confirmarRemocao } = viewModel;

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Catálogo de Itens</Text>

      <Button
        title="Adicionar Item"
        onPress={() => navigation.navigate("AdicionarItem")}
      />

      <FlatList
        data={itens}
        keyExtractor={(item: Item) => item.id}
        renderItem={({ item }: { item: Item }) => (
          <View style={styles.item}>

            <Image source={{ uri: item.imagem }} style={styles.imagem} />

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
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  info: { flex: 1 },
  item: {
    flexDirection: "row",
    padding: 12,
    marginBottom: 12,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  imagem: {
    width: 70,
    height: 70,
    marginRight: 12,
    borderRadius: 200
  },
  nome: {
    fontWeight: "bold",
    fontSize: 18
  }
});