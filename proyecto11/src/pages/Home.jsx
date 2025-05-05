import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const [criptos, setCriptos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1"
        );
        const data = await res.json();
        setCriptos(data);
        setFiltered(data);
      } catch (err) {
        setError("Error al cargar criptomonedas");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFiltered(
      criptos.filter((cripto) =>
        cripto.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, criptos]);

  if (loading) return <p className='p-4'>Cargando...</p>;
  if (error) return <p className='p-4'>{error}</p>;

  return (
    <div className='p-4 w-full'>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Buscar criptomoneda...'
        className='mb-4 w-full p-2 rounded border'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {filtered.map((cripto) => (
          <Link
            key={cripto.id}
            to={`/cripto/${cripto.id}`}
            className='border rounded-xl p-4 shadow hover:shadow-lg transition'
          >
            <img src={cripto.image} alt={cripto.name} className='w-10 h-10' />
            <h2 className='text-xl font-bold'>{cripto.name}</h2>
            <p>{cripto.symbol.toUpperCase()}</p>
            <p>€{cripto.current_price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
