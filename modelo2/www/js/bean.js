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
