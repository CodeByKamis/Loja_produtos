// src/Pages/Home.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from '../../Components/Card';
import { Cabecalho } from "../../Components/Cabecalho";
import { Footer } from "../../Components/Footer";
import TelaProduto from "../TelaProduto/TelaProduto";

interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export default function Home() {
  const Produtos_URL = "https://dummyjson.com/products";
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const [atualPagina, setAtualPagina] = useState(1);
  const quantidadePorPagina = 10;

  useEffect(() => {
    axios.get(Produtos_URL).then((response) => {
      setProdutos(response.data.products);
    });
  }, []);

  const totalPaginas = Math.ceil(produtos.length / quantidadePorPagina);
  const Inicio = (atualPagina -1) * quantidadePorPagina;
  const produtosAmostra = produtos.slice(Inicio, Inicio + quantidadePorPagina);



  return (
    <>
      <Cabecalho/>

      <section>
        <h1 className="flex justify-center font-bold mb-10 md:text-2xl text-pink-900 bg-pink-50 h-20 items-center">PRODUTOS DISPONÍVEIS:</h1>
      </section>
      <ul className="flex flex-wrap justify-center gap-6 p-6">
        {produtosAmostra.map((produto) => (
          <div key={produto.id} onClick={() => setProdutoSelecionado(produto)}>
            <Card produto={produto} />
          </div>
        ))}
      </ul>

      {produtoSelecionado && (
        <TelaProduto produto={produtoSelecionado} onClose={() => setProdutoSelecionado(null)} />
      )}

     
      <div className="flex justify-center gap-2 mt-4 mb-10">
        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setAtualPagina(num)}
            className={`px-3 py-1 rounded border 
              ${atualPagina === num ? "bg-pink-900 text-white" : "bg-white text-pink-900 border-pink-900 hover:bg-blue-100"}`}
          >
            {num}
          </button>
        ))}
      </div>
      <Footer/>
    </>
  );
}
