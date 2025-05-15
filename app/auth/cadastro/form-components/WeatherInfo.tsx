import { useState, useEffect } from 'react';
import { WeatherData } from '@/lib/weather';

interface WeatherInfoProps {
  city?: string;       // Opcional se receber weather diretamente
  weather?: WeatherData; // Opcional se receber city para buscar
}

export default function WeatherInfo({ city, weather: initialWeather }: WeatherInfoProps) {
  const [weather, setWeather] = useState<WeatherData | null>(initialWeather || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (city && !initialWeather) {
      setLoading(true);
      fetch('/api/weather', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) throw new Error(data.error);
          setWeather(data);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [city, initialWeather]);

  if (loading) return <div>Carregando clima...</div>;
  if (error) return <div className="text-red-500">Erro: {error}</div>;
  if (!weather) return <div>Nenhum dado climático disponível</div>;

  return (
    <div className="p-4 bg-blue-50 rounded-lg">
      <h2 className="text-xl font-semibold">Clima em {weather.city}</h2>
      <p className="text-lg">Temperatura: {weather.temp}°C</p>
      <p className="capitalize">Condição: {weather.condition}</p>
    </div>
  );
}