import {
  acoesInicio,
  voluntariado,
  campanhas,
  etapasContribuicao
} from "./dados.js";


function gerarCards(lista) {
  return lista
    .map((item) => {
      let conteudo = "";

      if (item.itens) {
        const tagLista = item.ordenada ? "ol" : "ul";

        conteudo = `
          <${tagLista} class="info-list">
            ${item.itens
              .map((texto) => `<li>${texto}</li>`)
              .join("")}
          </${tagLista}>
        `;
      } else {
        conteudo = `<p>${item.texto}</p>`;
      }

      return `
        <article class="card">
          <span class="card-number" aria-hidden="true">
            ${item.numero}
          </span>

          <h3>${item.titulo}</h3>

          ${conteudo}
        </article>
      `;
    })
    .join("");
}


function gerarEtapas(lista) {
  return lista
    .map(
      (item) => `
        <article class="process-item">
          <span aria-hidden="true">${item.numero}</span>

          <div>
            <h3>${item.titulo}</h3>
            <p>${item.texto}</p>
          </div>
        </article>
      `
    )
    .join("");
}


export const templates = {

  inicio: `
    <section class="hero" aria-labelledby="titulo-principal">
      <div class="container hero-grid">

        <div class="hero-content">
          <p class="eyebrow">Educação que aproxima</p>

          <h1 id="titulo-principal">
            Fortalecemos vínculos para transformar comunidades
          </h1>

          <p class="hero-text">
            A Rede de Afeto é uma ONG que acolhe crianças e famílias,
            cria oportunidades de aprendizagem e incentiva a participação
            comunitária.
          </p>

          <a
            class="button"
            href="#inicio"
            data-scroll-target="contato"
          >
            Conheça nossos canais
          </a>
        </div>

        <figure class="hero-image">
          <img
            src="../imagens/acao-comunitaria.png"
            alt="Crianças, familiares e voluntários reunidos em uma atividade educativa"
          >

          <figcaption>
            Aprender, conviver e construir novas possibilidades em conjunto.
          </figcaption>
        </figure>

      </div>
    </section>


    <section class="section" id="quem-somos">
      <div class="container about-grid">

        <div>
          <p class="eyebrow">Nossa história</p>
          <h2>Quem somos</h2>
        </div>

        <div class="about-copy">
          <p>
            Nascemos do encontro entre educadores, moradores e voluntários
            que acreditam no cuidado como ponto de partida para o
            desenvolvimento social.
          </p>

          <p>
            Nosso propósito é oferecer um espaço seguro de aprendizagem,
            escuta e convivência, respeitando a história e o potencial
            de cada pessoa.
          </p>
        </div>

      </div>
    </section>


    <section
      class="section section-highlight"
      id="atuacao"
    >
      <div class="container">

        <p class="eyebrow">
          Ações próximas e contínuas
        </p>

        <h2>Como atuamos</h2>

        <div class="cards">
          ${gerarCards(acoesInicio)}
        </div>

      </div>
    </section>


    <section
      class="section contact"
      id="contato"
    >
      <div class="container contact-grid">

        <div>
          <p class="eyebrow">Vamos conversar</p>

          <h2>Entre em contato</h2>

          <p>
            Quer conhecer as atividades ou saber como colaborar?
            Fale com a nossa equipe pelos canais abaixo.
          </p>
        </div>

        <address class="contact-card">
          <h3>Canais de atendimento</h3>

          <ul class="contact-list">
            <li>
              <strong>E-mail:</strong>
              contato@rededeafeto.org.br
            </li>

            <li>
              <strong>Telefone:</strong>
              (51) 3333-2026
            </li>

            <li>
              <strong>Endereço:</strong>
              Rua das Flores, 120 — Centro, Porto Alegre — RS
            </li>

            <li>
              <strong>Atendimento:</strong>
              segunda a sexta, das 9h às 17h
            </li>
          </ul>
        </address>

      </div>
    </section>
  `,


  projetos: `
    <section class="page-intro">

      <div class="container page-intro-grid">

        <div>
          <p class="eyebrow">Projetos sociais</p>

          <h1>
            Há diferentes maneiras de fazer parte
          </h1>

          <p>
            Você pode compartilhar tempo e conhecimento no voluntariado
            ou apoiar campanhas criadas a partir das necessidades da comunidade.
          </p>
        </div>

        <nav
          class="page-links"
          aria-label="Conteúdo dos projetos"
        >
          <a
            href="#projetos"
            data-scroll-target="voluntariado"
          >
            Voluntariado
          </a>

          <a
            href="#projetos"
            data-scroll-target="doacoes"
          >
            Campanhas de doação
          </a>

          <a
            href="#projetos"
            data-scroll-target="transparencia"
          >
            Cuidado com as contribuições
          </a>
        </nav>

      </div>
    </section>


    <section
      class="section"
      id="voluntariado"
    >
      <div class="container">

        <p class="eyebrow">Doe seu tempo</p>

        <h2>
          Como participar do voluntariado
        </h2>

        <div class="cards project-cards">
          ${gerarCards(voluntariado)}
        </div>

      </div>
    </section>


    <section
      class="section section-highlight"
      id="doacoes"
    >
      <div class="container">

        <p class="eyebrow">
          Apoie uma necessidade real
        </p>

        <h2>
          Como conduzimos as campanhas de doação
        </h2>

        <div class="cards project-cards">
          ${gerarCards(campanhas)}
        </div>

      </div>
    </section>


    <section
      class="section"
      id="transparencia"
    >
      <div class="container">

        <p class="eyebrow">
          Responsabilidade em cada etapa
        </p>

        <h2>
          Como cuidamos das contribuições
        </h2>

        <div class="process-grid">
          ${gerarEtapas(etapasContribuicao)}
        </div>

      </div>
    </section>


    <section class="section participation">

      <div class="container">

        <p class="eyebrow">Próximo passo</p>

        <h2>Escolha como participar</h2>

        <div class="choice-grid">

          <article class="choice-card">
            <h3>Quero ser voluntário</h3>

            <p>
              Conte em qual atividade deseja colaborar
              e quais dias ou horários tem disponíveis.
            </p>

            <a class="button" href="#cadastro">
              Fazer cadastro
            </a>
          </article>


          <article class="choice-card">
            <h3>Quero apoiar uma campanha</h3>

            <p>
              Peça informações sobre as campanhas ativas
              e confirme os dados antes de fazer uma contribuição.
            </p>

            <a
              class="button button-light"
              href="#cadastro"
            >
              Quero participar
            </a>
          </article>

        </div>

      </div>
    </section>
  `,


  cadastro: `
    <section class="section section-highlight">

      <div class="container">

        <p class="eyebrow">Faça parte</p>

        <h1>Cadastro de apoiadores</h1>

        <p>
          Preencha seus dados para participar como voluntário
          ou apoiar as campanhas da Rede de Afeto.
        </p>

        <div class="feedback-badges">
          <span class="badge badge-voluntariado">
            Voluntariado
          </span>

          <span class="badge badge-doacao">
            Doação
          </span>
        </div>

      </div>
    </section>


    <section class="section">

      <div class="container">

        <h2>Seus dados</h2>

        <div
          class="alert alert-success"
          id="alerta-sucesso"
          role="status"
          aria-live="polite"
          hidden
        >
          <strong>
            Cadastro enviado com sucesso!
          </strong>

          <span>
            Obrigado por fazer parte da Rede de Afeto.
          </span>
        </div>


        <form id="form-cadastro">

          <fieldset>
            <legend>Dados pessoais</legend>

            <div class="form-group">
              <label for="nome">
                Nome completo
              </label>

              <input
                type="text"
                id="nome"
                name="nome"
                minlength="3"
                maxlength="100"
                required
              >
            </div>

            <div class="form-group">
              <label for="email">
                E-mail
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
              >
            </div>

            <div class="form-group">
              <label for="nascimento">
                Data de nascimento
              </label>

              <input
                type="date"
                id="nascimento"
                name="nascimento"
                required
              >
            </div>

            <div class="form-group">
              <label for="cpf">
                CPF
              </label>

              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="000.000.000-00"
                pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                maxlength="14"
                required
              >
            </div>

            <div class="form-group">
              <label for="telefone">
                Telefone
              </label>

              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(00) 00000-0000"
                pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                maxlength="15"
                required
              >
            </div>

          </fieldset>


          <fieldset>
            <legend>Endereço</legend>

            <div class="form-group">
              <label for="cep">CEP</label>

              <input
                type="text"
                id="cep"
                name="cep"
                placeholder="00000-000"
                pattern="[0-9]{5}-[0-9]{3}"
                maxlength="9"
                required
              >
            </div>

            <div class="form-group">
              <label for="endereco">
                Endereço
              </label>

              <input
                type="text"
                id="endereco"
                name="endereco"
                required
              >
            </div>

            <div class="form-group">
              <label for="numero">
                Número
              </label>

              <input
                type="text"
                id="numero"
                name="numero"
                required
              >
            </div>

            <div class="form-group">
              <label for="cidade">
                Cidade
              </label>

              <input
                type="text"
                id="cidade"
                name="cidade"
                required
              >
            </div>

            <div class="form-group">
              <label for="estado">
                Estado
              </label>

              <select
                id="estado"
                name="estado"
                required
              >
                <option value="">
                  Selecione
                </option>

                <option value="RS">
                  Rio Grande do Sul
                </option>

                <option value="SC">
                  Santa Catarina
                </option>

                <option value="PR">
                  Paraná
                </option>

                <option value="SP">
                  São Paulo
                </option>

                <option value="RJ">
                  Rio de Janeiro
                </option>
              </select>
            </div>

          </fieldset>


          <fieldset>
            <legend>
              Forma de participação
            </legend>

            <div class="form-group">

              <p>
                Como você deseja participar?
              </p>

              <label>
                <input
                  type="radio"
                  name="participacao"
                  value="voluntario"
                  required
                >
                Trabalho voluntário
              </label>

              <label>
                <input
                  type="radio"
                  name="participacao"
                  value="doador"
                >
                Doação
              </label>

            </div>

            <div class="form-group">

              <label for="area">
                Área de interesse
              </label>

              <select
                id="area"
                name="area"
                required
              >
                <option value="">
                  Selecione
                </option>

                <option value="educacao">
                  Educação
                </option>

                <option value="oficinas">
                  Oficinas comunitárias
                </option>

                <option value="campanhas">
                  Campanhas de doação
                </option>

                <option value="apoio">
                  Apoio às famílias
                </option>
              </select>

            </div>

            <div class="form-group">
              <label for="mensagem">
                Conte um pouco sobre sua disponibilidade
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
              ></textarea>
            </div>

            <label class="checkbox-label">
              <input
                type="checkbox"
                id="consentimento"
                required
              >

              Autorizo o uso dos dados para contato
              sobre as atividades da ONG.
            </label>

          </fieldset>


          <button
            class="button"
            type="submit"
          >
            Enviar cadastro
          </button>

          <button type="reset">
            Limpar formulário
          </button>

        </form>

      </div>
    </section>


    <div
      class="feedback-modal"
      id="modal-confirmacao"
      hidden
    >
      <div
        class="modal-backdrop"
        data-fechar-modal
      ></div>

      <section
        class="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
      >
        <span class="modal-icon">✓</span>

        <h2 id="modal-titulo">
          Cadastro realizado!
        </h2>

        <p>
          Seus dados foram registrados
          para esta demonstração acadêmica.
        </p>

        <button
          class="button"
          id="fechar-modal"
          type="button"
        >
          Fechar
        </button>
      </section>

    </div>
  `
};