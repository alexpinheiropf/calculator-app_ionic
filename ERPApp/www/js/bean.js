var Usuario = function() {
  this.setId = function(id) {
    this.id = id;
  }
  this.setNome = function(nome) {
    this.nome = nome;
  }
  this.setLogin = function(login) {
    this.login = login;
  }
  this.setSenha = function(senha) {
    this.senha = senha;
  }

  this.getId = function() {
    return this.id;
  }

  this.getNome = function() {
    return this.nome;
  }

  this.getLogin = function() {
    return this.login;
  }
  this.getSenha = function() {
    return this.senha;
  }
}

var Projeto = function() {
  this.setId = function(id) {
    this.id = id;
  }
  this.setNome = function(nome) {
    this.nome = nome;
  }
  this.setDescricao = function(descricao) {
    this.descricao = descricao;
  }
  this.setVotos = function(votos) {
    this.votos = votos;
  }

  this.getId = function() {
    return this.id;
  }

  this.getNome = function() {
    return this.nome;
  }

  this.getDescricao = function() {
    return this.descricao;
  }
  this.getVotos = function() {
    return this.votos;
  }
}

var Instituicao = function() {
  this.setId = function(id) {
    this.id = id;
  }
  this.setTitulo = function(titulo) {
    this.titulo = titulo;
  }
  this.setTexto = function(texto) {
    this.texto = texto;
  }

  this.getId = function() {
    return this.id;
  }

  this.getTitulo= function() {
    return this.titulo;
  }

  this.getTexto = function() {
    return this.texto;
  }
}
