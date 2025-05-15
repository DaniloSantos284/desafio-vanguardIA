// lib/api/weather.ts

// Tipagem básica do que vamos receber/processar
export interface WeatherData {
  city: string;
  temp: number;        // em °C
  condition: string;   // descrição (e.g. "clear sky")
}

// Função que faz a chamada à API externa
export async function getWeather(city: string): Promise<WeatherData> {
  // Sua chave da OpenWeatherMap (coloque em .env.local: WEATHER_API_KEY=seu_token)
  const apiKey = process.env.WEATHER_API_KEY;
  if (!apiKey) {
    throw new Error('Falta a variável de ambiente WEATHER_API_KEY');
  }

  // Construímos a URL da requisição
  const url = `https://api.openweathermap.org/data/2.5/weather` +
              `?q=${encodeURIComponent(city)}` +
              `&appid=${apiKey}`;

  // Fazemos o fetch
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Erro ao buscar clima para ${city}: ${res.statusText}`);
  }

  // Transformamos em JSON
  const data = await res.json();

  // Mapeamos só o que precisamos
  const tempKelvin = data.main.temp as number;
  const tempCelsius = tempKelvin - 273.15; // conversão simples

  return {
    city: data.name,
    temp: Number(tempCelsius.toFixed(1)),
    condition: data.weather[0].description,
  };
}

