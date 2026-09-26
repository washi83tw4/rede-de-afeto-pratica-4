const CHAVE_PREFERENCIAS =
  "redeAfetoPreferenciasCadastro";

const CHAVE_ULTIMA_ROTA =
  "redeAfetoUltimaRota";


export function salvarUltimaRota(rota) {
  localStorage.setItem(
    CHAVE_ULTIMA_ROTA,
    rota
  );
}


export function obterUltimaRota() {
  return localStorage.getItem(
    CHAVE_ULTIMA_ROTA
  );
}


export function salvarPreferenciasCadastro() {
  const participacao =
    document.querySelector(
      'input[name="participacao"]:checked'
    );

  const area =
    document.querySelector("#area");


  const preferencias = {
    participacao:
      participacao
        ? participacao.value
        : "",

    area:
      area
        ? area.value
        : ""
  };


  localStorage.setItem(
    CHAVE_PREFERENCIAS,
    JSON.stringify(preferencias)
  );
}


function obterPreferenciasCadastro() {
  const dados =
    localStorage.getItem(
      CHAVE_PREFERENCIAS
    );


  if (!dados) {
    return null;
  }


  try {
    return JSON.parse(dados);

  } catch (erro) {
    localStorage.removeItem(
      CHAVE_PREFERENCIAS
    );

    return null;
  }
}


export function restaurarPreferenciasCadastro() {
  const preferencias =
    obterPreferenciasCadastro();


  if (!preferencias) {
    return;
  }


  if (preferencias.participacao) {
    const opcao =
      document.querySelector(
        `input[name="participacao"][value="${preferencias.participacao}"]`
      );


    if (opcao) {
      opcao.checked = true;
    }
  }


  const area =
    document.querySelector("#area");


  if (
    area &&
    preferencias.area
  ) {
    area.value =
      preferencias.area;
  }
}


export function limparPreferenciasCadastro() {
  localStorage.removeItem(
    CHAVE_PREFERENCIAS
  );
}