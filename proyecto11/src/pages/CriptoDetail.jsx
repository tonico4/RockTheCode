import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function CriptoDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await res.json();
        setDetail(data);
      } catch (err) {
        setError("Error al cargar los details");
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <p className='p-4'>Cargando details...</p>;
  if (error) return <p className='p-4'>{error}</p>;
  if (!detail) return null;

  return (
    <div className='p-4 max-w-xl mx-auto rounded-lg shadow-lg bg-white'>
      <img src={detail.image.large} alt={detail.name} className='w-20 h-20' />
      <h1 className='text-3xl font-bold'>{detail.name}</h1>
      <p>Precio actual: €{detail.market_data.current_price.eur}</p>
      <p>
        Capitalización de mercado: €
        {detail.market_data.market_cap.eur.toLocaleString()}
      </p>
      <p>
        Cambio 24h: {detail.market_data.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
}
