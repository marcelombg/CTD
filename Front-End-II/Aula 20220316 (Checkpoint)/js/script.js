const form = document.getElementById('form__');
const resultado = document.querySelector('.resultado');
const titulo = document.querySelector('.titulo');
const preco = document.querySelector('.preco');
const descricao = document.querySelector('.descricao');
const url = document.querySelector('.url');
const localizacao = document.querySelector('.localizacao');



let dados = [];

dados.push({
  titulo: titulo.value,
  preco: preco.value,
  descricao: descricao.value,
  url: url.value,
  localizacao: localizacao.value
});

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  resultado.innerHTML +=
  `<div class="new">
      <img src="${url.value}">
      <div class="new-responsive">
          <h2>${titulo.value}</h2>
          <span class="descricao">${descricao.value}</span>
      <div class="preco-anuncio"><span>R$ ${preco.value}</span></div>
      <div class="svg">
      <hr>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg> ${localizacao.value}
      </span>
      </div>
    </div>
  </div>`
});

