import {
  salvarPreferenciasCadastro,
  restaurarPreferenciasCadastro,
  limparPreferenciasCadastro
} from "./storage.js";


function iniciarMascaras() {
  const cpf =
    document.querySelector("#cpf");

  const telefone =
    document.querySelector("#telefone");

  const cep =
    document.querySelector("#cep");


  if (cpf) {
    cpf.addEventListener(
      "input",
      () => {
        let valor =
          cpf.value
            .replace(/\D/g, "")
            .slice(0, 11);

        valor = valor.replace(
          /^(\d{3})(\d)/,
          "$1.$2"
        );

        valor = valor.replace(
          /^(\d{3})\.(\d{3})(\d)/,
          "$1.$2.$3"
        );

        valor = valor.replace(
          /\.(\d{3})(\d)/,
          ".$1-$2"
        );

        cpf.value = valor;
      }
    );
  }


  if (telefone) {
    telefone.addEventListener(
      "input",
      () => {
        let valor =
          telefone.value
            .replace(/\D/g, "")
            .slice(0, 11);

        valor = valor.replace(
          /^(\d{2})(\d)/,
          "($1) $2"
        );

        valor = valor.replace(
          /(\d{5})(\d)/,
          "$1-$2"
        );

        telefone.value = valor;
      }
    );
  }


  if (cep) {
    cep.addEventListener(
      "input",
      () => {
        let valor =
          cep.value
            .replace(/\D/g, "")
            .slice(0, 8);

        valor = valor.replace(
          /^(\d{5})(\d)/,
          "$1-$2"
        );

        cep.value = valor;
      }
    );
  }
}


function iniciarFormulario() {
  const formulario =
    document.querySelector(
      "#form-cadastro"
    );


  if (!formulario) {
    return;
  }


  const alerta =
    document.querySelector(
      "#alerta-sucesso"
    );

  const modal =
    document.querySelector(
      "#modal-confirmacao"
    );

  const fecharModal =
    document.querySelector(
      "#fechar-modal"
    );

  const backdrop =
    document.querySelector(
      "[data-fechar-modal]"
    );


  function fecharModalLocal() {
    if (modal) {
      modal.hidden = true;
    }
  }


  formulario.addEventListener(
    "change",
    (evento) => {
      if (
        evento.target.name ===
          "participacao" ||
        evento.target.id === "area"
      ) {
        salvarPreferenciasCadastro();
      }
    }
  );


  formulario.addEventListener(
    "submit",
    (evento) => {
      evento.preventDefault();


      if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
      }


      salvarPreferenciasCadastro();


      if (alerta) {
        alerta.hidden = false;
      }


      if (window.Swal) {
        window.Swal.fire({
          icon: "success",
          title: "Cadastro realizado!",
          text:
            "Obrigado por fazer parte da Rede de Afeto.",
          confirmButtonText: "Fechar"
        });

      } else if (modal) {
        modal.hidden = false;

        if (fecharModal) {
          fecharModal.focus();
        }
      }
    }
  );


  formulario.addEventListener(
    "reset",
    () => {
      limparPreferenciasCadastro();

      if (alerta) {
        alerta.hidden = true;
      }

      fecharModalLocal();
    }
  );


  if (fecharModal) {
    fecharModal.addEventListener(
      "click",
      fecharModalLocal
    );
  }


  if (backdrop) {
    backdrop.addEventListener(
      "click",
      fecharModalLocal
    );
  }
}


export function iniciarRecursosDaPagina(rota) {
  iniciarMascaras();
  iniciarFormulario();

  if (rota === "cadastro") {
    restaurarPreferenciasCadastro();
  }
}