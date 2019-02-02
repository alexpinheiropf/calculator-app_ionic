var Usuario = function (id,login,senha) {
  this.id = id;
  this.login = login;
  this.senha = senha;
  console.log("Login:" + login + " e senha: " + senha);
}

var Produto = function (id,descricao,estoqueMinimo) {
  this.id = id;
  this.descricao = descricao;
  this.estoqueMinimo = estoqueMinimo;
  console.log("Descrição: " + descricao + " e Estoque Minimo: " + estoqueMinimo);
}
