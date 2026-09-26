export function atualizarMenu(rota) {
  const links =
    document.querySelectorAll(
      "[data-route-link]"
    );


  links.forEach((link) => {
    link.removeAttribute(
      "aria-current"
    );


    if (
      link.dataset.routeLink === rota
    ) {
      link.setAttribute(
        "aria-current",
        "page"
      );
    }
  });
}


/* ========================================
   ALTO CONTRASTE
======================================== */

function iniciarAltoContraste() {
  const botao =
    document.querySelector(
      "#contrast-toggle"
    );


  if (!botao) {
    return;
  }


  const contrasteSalvo =
    localStorage.getItem(
      "redeAfetoAltoContraste"
    ) === "true";


  function aplicarContraste(ativo) {
    document.body.classList.toggle(
      "alto-contraste",
      ativo
    );


    botao.setAttribute(
      "aria-pressed",
      String(ativo)
    );


    botao.textContent =
      ativo
        ? "Contraste normal"
        : "Alto contraste";
  }


  aplicarContraste(
    contrasteSalvo
  );


  botao.addEventListener(
    "click",
    () => {

      const ativo =
        !document.body.classList.contains(
          "alto-contraste"
        );


      aplicarContraste(
        ativo
      );


      localStorage.setItem(
        "redeAfetoAltoContraste",
        String(ativo)
      );
    }
  );
}


/* ========================================
   NAVEGAÇÃO
======================================== */

export function iniciarNavegacaoGlobal(
  obterRota
) {

  iniciarAltoContraste();


  const menuToggle =
    document.querySelector(
      ".menu-toggle"
    );


  const navList =
    document.querySelector(
      ".nav-list"
    );


  if (
    menuToggle &&
    navList
  ) {

    menuToggle.addEventListener(
      "click",
      () => {

        const aberto =
          navList.classList.toggle(
            "is-open"
          );


        menuToggle.setAttribute(
          "aria-expanded",
          String(aberto)
        );
      }
    );
  }


  const dropdowns =
    document.querySelectorAll(
      ".nav-dropdown"
    );


  dropdowns.forEach(
    (dropdown) => {

      const botao =
        dropdown.querySelector(
          ".dropdown-toggle"
        );


      if (!botao) {
        return;
      }


      botao.addEventListener(
        "click",
        () => {

          const aberto =
            dropdown.classList.toggle(
              "is-open"
            );


          botao.setAttribute(
            "aria-expanded",
            String(aberto)
          );
        }
      );
    }
  );


  document.addEventListener(
    "click",
    (evento) => {

      const link =
        evento.target.closest(
          "[data-scroll-target]"
        );


      if (!link) {
        return;
      }


      const destino =
        link.dataset.scrollTarget;


      const rota =
        link.dataset.routeLink;


      evento.preventDefault();


      if (
        rota &&
        obterRota() !== rota
      ) {

        window.location.hash =
          rota;


        setTimeout(
          () => {

            const elemento =
              document.getElementById(
                destino
              );


            if (elemento) {
              elemento.scrollIntoView({
                behavior: "smooth"
              });
            }

          },
          100
        );

      } else {

        const elemento =
          document.getElementById(
            destino
          );


        if (elemento) {
          elemento.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    }
  );
}