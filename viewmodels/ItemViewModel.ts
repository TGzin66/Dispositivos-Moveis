import { useState } from "react";
import Item from "../models/Item";
import ItemService from "../services/ItemService";
import { Alert } from "react-native";

export default function useItemViewModel() {

  const [itens, setItens] = useState<Item[]>([
    new Item(
      "1",
      "Telefone",
      "Iphone 2077",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbsCHqW3REktAv8VonkuShF7wgF5eOrLhPfQ&s"
    ),
    new Item(
      "2",
      "Notebook",
      "Com Pincel Jaspion de 20° geração",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYun2iiUyqhsaIvySsl99RzNQ2LFPpSXfIlw&s"
    ),
    new Item(
      "3",
      "Smartwatch",
      "Não mostra as horas",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVszJNL7Q9D7MgNYSeB463JMPnvAhmmgJXSQ&s"
    )
  ]);

  function adicionarItem(nome: string, desc: string, imagem: string): void {

    const erro = ItemService.validarNome(nome, itens);

    if (erro) {
      alert(erro);
      return;
    }

    const novoItem = new Item(
      Date.now().toString(),
      nome,
      desc,
      imagem
    );

    setItens([...itens, novoItem]);
  }

  const removerItem = (id: string) => {
  setItens(prev => prev.filter(item => item.id !== id));
};

 const confirmarRemocao = (id: string) => {
    Alert.alert(
      "Excluir item",
      "Tem certeza que deseja excluir este item?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => removerItem(id)
        }
      ]
    );
  };

  return {
    itens,
    adicionarItem,
    removerItem,
    confirmarRemocao
  };
}