import Item from "../models/Item";

export default class ItemService {

  static validarNome(nome: string, listaItens: Item[]): string | null {

    if (nome.trim().length <= 2) {
      return "O nome precisa ter mais de 2 caracteres";
    }

    const existe = listaItens.find(
      item => item.nome.toLowerCase() === nome.toLowerCase()
    );

    if (existe) {
      return "Já existe um item com esse nome";
    }

    return null;
  }

}