interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface CardProps {
  produto: Produto;
}

export function Card({ produto }: CardProps) {
  return (
    <li className="list-none bg-pink-100 p-4 shadow w-90 h-115 hover:shadow-pink-900 transition rounded-4xl">
      <img
        className="w-80 h-80 object-cover rounded"
        src={produto.images[0]}
        alt={produto.title}
      />
      <p className="text-lg font-semibold mt-2">{produto.title}</p>
      <p className="font-bold text-pink-900">R$ {produto.price}</p>
    </li>
  );
}
