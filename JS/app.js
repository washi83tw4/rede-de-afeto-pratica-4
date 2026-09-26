import {
  templates
} from "./templates.js";

import {
  salvarUltimaRota,
  obterUltimaRota
} from "./storage.js";

import {
  iniciarRecursosDaPagina
} from "./formulario.js";

import {
  atualizarMenu,
  iniciarNavegacaoGlobal
} from "./navegacao.js";


const conteudoPrincipal =
  document.querySelector(
    "#conteudo-principal"
  );


export function obterRota() {
  const rota =
    window.location.hash
      .replace("#", "")
      .trim();


  const rotasValidas = [
    "inicio",
    "projetos",
    "cadastro"
  ];


  return rotasValidas.includes(rota)
    ? rota
    : "inicio";
}


function renderizarPagina() {
  const rota =
    obterRota();


  conteudoPrincipal.innerHTML =
    templates[rota];


  salvarUltimaRota(rota);

  atualizarMenu(rota);

  iniciarRecursosDaPagina(rota);


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


window.addEventListener(
  "hashchange",
  renderizarPagina
);


if (!window.location.hash) {
  const ultimaRota =
    obterUltimaRota();


  const rotasValidas = [
    "inicio",
    "projetos",
    "cadastro"
  ];


  const rotaInicial =
    rotasValidas.includes(
      ultimaRota
    )
      ? ultimaRota
      : "inicio";


  history.replaceState(
    null,
    "",
    `#${rotaInicial}`
  );
}


iniciarNavegacaoGlobal(
  obterRota
);

renderizarPagina();