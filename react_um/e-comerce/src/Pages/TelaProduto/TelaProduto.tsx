import { useParams, useNavigate } from "react-router-dom"; //parametro de rota
import { useEffect, useState } from "react";
import axios from "axios"; //requisicao http
import { Cabecalho } from "../../Components/Cabecalho";
import { Footer } from "../../Components/Footer";
//pega as informações da api
interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export default function TelaProduto() {
  const { id } = useParams<{ id: string }>();
  //armazenar dados do produto, começa null - sem dados
  const [produto, setProduto] = useState<Produto | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setProduto(response.data); //salva o estado dele
    });
  }, [id]);
  //se nn foi carregado vai retornar nadinha
  if (!produto) return;

  return (
    <>
      <Cabecalho/>
      <main className="h-185 w-full">
        <section>
        <h2 className="flex justify-center font-bold mb-10 md:text-2xl text-pink-900 bg-pink-50 h-20 items-center">INFORMAÇÃO DO PRODUTO: {produto.title}</h2>
        </section>

        <div className="p-4">
          <button
            onClick={() => navigate(-1)} //ele volta uma pagina. se colocar -2 ele volta para o login
            className="mb-9 px-3 py-1 ml-10 hover:text-pink-900 hover:shadow-lg hover:bg-pink-200 hover:font-bold bg-pink-900 text-white rounded">
            Voltar
          </button>
          {/* imagem e os detalhes do produto */}
          <section className="flex w-full ">
            <div className="bg-pink-50 w-130 ml-34 rounded-4xl flex items-center justify-center flex-col ">
              <img
              src={produto.images[0]}
              alt={produto.title}
              className="w-80 h-80 object-cover mb-4 flex items-center justify-center"/>
              <h1 className="text-xl font-bold mb-2">{produto.title}</h1>
            </div>
            <div className="flex flex-col gap-10 w-90 justify-center ml-10">
              <p className="mb-2 font-semibold">{produto.description}</p>
              <p className=" flex font-bold text-lg text-green-100 bg-green-600 w-23 justify-center rounded-4xl  hover:shadow-lg">R$ {produto.price}</p>
            </div>
          </section>

        </div>
      </main>
      
      <Footer/>
    </>
  );
}
