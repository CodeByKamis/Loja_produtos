interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface ProdutosProps {
  produto: Produto;
  onClose: () => void;
}

export default function TelaProduto({ produto, onClose }: ProdutosProps) {
  const handleComprar = () => {
    alert("Compra bem-sucedida!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
        <button
          className="absolute top-2 right-4 text-gray-400 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <img
          src={produto.images[0]}
          alt={produto.title}
          className="w-full h-64 object-cover rounded mb-4"
        />

        <input
          type="text"
          className="border p-2 w-full mb-2"
          value={produto.title}
          readOnly
        />
        <textarea
          className="border p-2 w-full mb-2"
          value={produto.description}
          readOnly
        />
        <input
          type="number"
          className="border p-2 w-full mb-4"
          value={produto.price}
          readOnly
        />

        <button
          onClick={handleComprar}
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 w-full"
        >
          Comprar Agora
        </button>
      </div>
    </div>
  );
}
