import { useState, useEffect } from 'react';

const Questao04 = () => {
    //Mesmos estados da questão 03
    const [data, setData] = useState([]);
    const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState('');
    const [maiorPopulacao, setMaiorPopulacao] = useState(0);
    const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState('');
    const [menorPopulacao, setMenorPopulacao] = useState(Number.MAX_SAFE_INTEGER);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            const minhaPromessa = new Promise((resolve, reject) => {
                // Dados locais fictícios
                const data = [
                    {"capital":["Dublin"],"population":4994724},
                    {"capital":["Nicosia"],"population":1207361},
                    {"capital":["Madrid"],"population":47351567}
                ];

                // Filter fictício para simular um erro
                const algumPaisInvalido = data.some(country => country.population > 50000000);

                if (algumPaisInvalido) {
                    // Erro simulado só para o VSCode não acusar erro
                    reject('Erro fictício: População excede o limite permitido.');
                } else {
                    resolve(data); // Resolve a promessa com os dados locais
                }
            });

            minhaPromessa
                .then(data => {
                    setData(data);
                    setLoading(false);

                    let maiorPopTemp = 0;
                    let menorPopTemp = Number.MAX_SAFE_INTEGER;
                    let capitalMaior = '';
                    let capitalMenor = '';

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

                    // Atualiza os estados com os resultados da "consulta"
                    setMaiorPopulacao(maiorPopTemp);
                    setCapitalMaiorPopulacao(capitalMaior);
                    setMenorPopulacao(menorPopTemp);
                    setCapitalMenorPopulacao(capitalMenor);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        };

        fetchData();
    }, []);

    // Renderização condicional enquanto aguarda a resposta da "API"
    if (loading) {
        console.log(data);
        return <div>Carregando...</div>;
    }

    // Renderização condicional em caso de erro, embora não deva ocorrer já que a promessa é resolvida
    // com dados locais e  erro é simulado
    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div>
            <h1>Questão 04</h1>
            <h2>Capital com maior população: {capitalMaiorPopulacao}</h2>
            <h2>Maior população: {maiorPopulacao.toLocaleString()}</h2>
            <h2>Capital com menor população: {capitalMenorPopulacao}</h2>
            <h2>Menor população: {menorPopulacao.toLocaleString()}</h2>
        </div>
    );
};

export default Questao04;
