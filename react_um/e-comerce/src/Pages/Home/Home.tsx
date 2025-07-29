import { useEffect, useState } from "react";
import axios from "axios"; //requisicao http
import { Card } from "../../Components/Card";
import { Cabecalho } from "../../Components/Cabecalho";
import { Footer } from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
//pega as informações como estão na api
interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export default function Home() {
  const Produtos_URL = "https://dummyjson.com/products"; //pega os produtos
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [atualPagina, setAtualPagina] = useState(1); //controlar paginação
  const quantidadePorPagina = 10; //max 10 produtos por pagina

  const navigate = useNavigate(); //navegar para as outras rotas

  useEffect(() => {
    axios.get(Produtos_URL).then((response) => {
      setProdutos(response.data.products);
    });
  }, []);

  const totalPaginas = Math.ceil(produtos.length / quantidadePorPagina); //paginas ncessarias para mostrar todos produtos
  const inicio = (atualPagina - 1) * quantidadePorPagina; //calcula os indices dos prod que vai aparecer na pg atual
  const produtosAmostra = produtos.slice(inicio, inicio + quantidadePorPagina); //mostra os produtos na pg atual

  return (
    <>
      <Cabecalho />

      <section>
        <h1 className="flex justify-center font-bold mb-10 md:text-2xl text-pink-900 bg-pink-50 h-20 items-center">
          PRODUTOS DISPONÍVEIS:
        </h1>
      </section>
      {/* lista dos produto da pagina */}
      <ul className="flex flex-wrap justify-center gap-6 p-6">
        {produtosAmostra.map((produto) => (
          <div key={produto.id} onClick={() => navigate(`/produto/${produto.id}`)}> {/* chama os produto por id, depois quando clica no produto navega para a pagina do produto clicável */}
            <Card produto={produto} />
          </div>
        ))}
      </ul>
      <div>
        <button onClick={() => navigate(-1)} //ele volta uma pagina. se colocar -2 ele volta para o login
          className=" flex ml-19 px-3 py-1 hover:text-pink-900 hover:shadow-lg hover:bg-pink-200 hover:font-bold bg-pink-900 text-white rounded">
          Deslogar
          </button>
      </div>

        {/*essa parte serve para criar uma lista onde os produtos vai aparecer um do lado do outro e só quebra se n tiver espaço suficieinte */}
      <div className="flex justify-center gap-2 mt-4 mb-10">
        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
          <button key={num} onClick={() => setAtualPagina(num)} className={`px-3 py-1 rounded border ${ atualPagina === num ? "bg-pink-900 text-white":"bg-white text-pink-900 border-pink-900 hover:bg-blue-100"}`}>
            {num}
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
}
