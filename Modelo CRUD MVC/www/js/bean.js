var Cliente = function() {
  this.setId = function(id) {
    this.id = id;
  }
  this.setNome = function(nome) {
    this.nome = nome;
  }
  this.setSobrenome = function(sobrenome) {
    this.sobrenome = sobrenome;
  }

  this.getId = function() {
    return this.id;
  }

  this.getNome = function() {
    return this.nome;
  }

  this.getSobrenome = function() {
    return this.sobrenome;
  }
}
