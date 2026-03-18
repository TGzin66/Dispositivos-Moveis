export default class Item {
  id: string;
  nome: string;
  desc: string;
  imagem: string;

  constructor(id: string, nome: string, desc: string, imagem: string) {
    this.id = id;
    this.nome = nome;
    this.desc = desc;
    this.imagem = imagem;
  }
}