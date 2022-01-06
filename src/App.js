import './App.css';
import cronosLogoWhite from './imagens/CRONOS-logo-white.png';
import ilustraWeb from './imagens/ilustra-web.png';
import ilustraMarketing from './imagens/ilustra-marketing.png';
import ilustraUx from './imagens/ilustra-ux.png';
import {fecharModal, abrirModal} from './script';

function App() {
  return (
    <div className="App">
  <header>
    <div className="container">
      <a href="#">
        <img src={cronosLogoWhite} alt="Agência CRONOS" />
      </a>
      <h1>Painel administrativo</h1>
    </div>
  </header>
  <section id="servicos" className="py-5 mb-5">
    <div className="container">
      <div className="row">
        <div className="col">


          <h3>Serviços</h3>
          <button className="btn btn-primary" id="open-modal" onClick={abrirModal}>Adicionar novo</button>
          <table id="tableCurso" className="table my-5">
            <thead>
              <tr>
                <td>Nome</td>
                <td>Imagem</td>
                <td>Descrição</td>
                <td>Ações</td>
              </tr>
            </thead>
            <tbody>
              <tr id="tr1">
                <td>Desenvolvimento Web</td>
                <td><img src={ilustraWeb} className="img-fluid" /></td>
                <td>Consequatur debitis ipsa numquam illum placeat quod deleniti.</td>
                <td>
                  <button className="btn1 btn btn-secondary m-1" disabled>editar</button>
                  <button className="btn2 btn btn-danger m-1" id="botao-linha1">excluir</button>
                </td>
              </tr>
              <tr id="tr2">
                <td>Marketing Digital</td>
                <td><img src={ilustraMarketing} className="img-fluid" /></td>
                <td>Consequatur debitis ipsa numquam illum placeat quod deleniti.</td>
                <td>
                  <button className="btn1 btn btn-secondary m-1" disabled>editar</button>
                  <button className="btn2 btn btn-danger m-1" id="botao-linha2" >excluir</button>
                </td>
              </tr>
              <tr id="tr3">
                <td>Consultoria UX</td>
                <td><img src={ilustraUx} className="img-fluid" /></td>
                <td>Consequatur debitis ipsa numquam illum placeat quod deleniti.</td>
                <td>
                  <button className="btn1 btn btn-secondary m-1" disabled>editar</button>
                  <button className="btn2 btn btn-danger m-1" id="botao-linha3">excluir</button>
                </td>
              </tr>
            </tbody>
            <tbody id="corpo">
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <footer className="py-3 bg-light">
    <div className="container text-center">
      <p className="m-0">
        copyright 2021
        agência CRONOS
      </p>
    </div>
  </footer>

  <div className="back-modal" id="modal">
    <div className="janela">
      <span className="close" onClick={fecharModal}>&times;</span>
      <div>
        <h1>Informações sobre o Curso!</h1>
        <form id="form" className="modal-field">
          <ul>
            <li><label>Nome do curso:</label></li>
            <input type="text" className="modal-field" id="nome" data-index="new" required />
            <li><label>Descrição:</label></li>
            <textarea id="descricao" cols="60" rows="3" className="modal-field" required></textarea>
            <li><input type="file" id="imagem" accept="image/*" className="modal-field" /></li>
          </ul>
          <button className="btn btn-primary" id="salvar">Confirmar</button>
        </form>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous">
    </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous">
    </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous">
    </script>

    </div>
  );
}

export default App;
