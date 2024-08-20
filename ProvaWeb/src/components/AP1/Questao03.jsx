import { useState, useEffect } from 'react';

const Questao03 = () => {
    // Estados para armazenar os dados da API
    const [data, setData] = useState([]);
    // Guarda o nome da capital com a maior população
    const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState('');
    const [maiorPopulacao, setMaiorPopulacao] = useState(0);
    // Guarda o nome da capital com a menor população
    const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState('');
    // Estado para armazenar a menor população inicializado com o maior valor possível
    const [menorPopulacao, setMenorPopulacao] = useState(Number.MAX_SAFE_INTEGER);
    // Estado para indicar que a requisição está em andamento
    const [loading, setLoading] = useState(true);
    // Estado para armazenar o erro em caso de falha no acesso a API
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            const minhaPromessa = new Promise((resolve, reject) => {
                fetch('https://restcountries.com/v3.1/region/europe?fields=capital,population')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Erro na requisição');
                        }
                        return response.json();
                    })
                    .then(data => {
                        resolve(data); // Resolve a promessa com os dados da API
                    })
                    .catch(error => {
                        reject(error); // Rejeita a promessa em caso de erro
                    });
            });

            // Utilização da Promise com async-await
            minhaPromessa
                .then(data => {
                    setData(data);
                    setLoading(false);

                    let maiorPopTemp = 0;
                    let menorPopTemp = Number.MAX_SAFE_INTEGER;
                    let capitalMaior = '';
                    let capitalMenor = '';

                    // Encontra a capital com a maior e a menor população
                    data.forEach((country) => {
                        const population = country.population;
                        const capital = country.capital ? country.capital[0] : 'Desconhecida';

                        if (population > maiorPopTemp) {
                            maiorPopTemp = population;
                            capitalMaior = capital;
                        }

                        if (population < menorPopTemp) {
                            menorPopTemp = population;
                            capitalMenor = capital;
                        }
                    });

                    //Seta os valores renderizados na tela
                    setMaiorPopulacao(maiorPopTemp);
                    setCapitalMaiorPopulacao(capitalMaior);
                    setMenorPopulacao(menorPopTemp);
                    setCapitalMenorPopulacao(capitalMenor);
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        };

        fetchData();
    }, []);

    // Renderização condicional enquanto aguarda a resposta da API
    if (loading) {
        console.log(data);
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div>
            <h1>Questão 03</h1>
            <h2>Capital com maior população: {capitalMaiorPopulacao}</h2>
            <h2>Maior população: {maiorPopulacao.toLocaleString()}</h2>
            <h2>Capital com menor população: {capitalMenorPopulacao}</h2>
            <h2>Menor população: {menorPopulacao.toLocaleString()}</h2>
        </div>
    );
};

export default Questao03;
