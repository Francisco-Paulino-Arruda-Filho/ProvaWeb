import { useState, useEffect } from "react";

// Desconstrução dos argumentos recebidos do pai
function Questao01B({ lista, msg }) {

    // Estado para armazenar o maior valor de cada objeto
    const [maiores, setMaiores] = useState([]);

    // UseEffect para atualizar o estado dos maiores valores sempre que a lista mudar
    useEffect(() => {
        const encontrarMaior = (obj) => {
            ///... faz uma cópia do objeto e "desconstrói" ele em um array de valores
            return Math.max(...Object.values(obj));
        };

        // Encontra o maior valor de cada objeto
        const listaComMaiores = lista.map((obj) => {
            // Adiciona o maior valor ao objeto
            const maior = encontrarMaior(obj);
            return { ...obj, maior };
        });

        setMaiores(listaComMaiores);
        // Dependência da lista para atualizar o estado e evitar loop infinito, já que só executará de novo se a lista mudar
    }, [lista]);

    const falarComPai = () => {
        // Chama a função msg passando os maiores valores e dá a resposta para o pai
        msg(maiores);
    };

    // Botão para chamar a função falarComPai
    return (
        <button onClick={falarComPai}>Falar com o pai</button>
    );
}

const Questao01A = () => {

    // Estado para armazenar os maiores elementos de cada objeto
    const [maioresElementos, setMaioresElementos] = useState([]);

    const lista = [
        { a: 10, b: 3, c: 7 },
        { a: 5, b: -3, c: 9 },
        { a: 1, b: 9, c: 40 },
    ];

    const mensagemFilho = (msg) => {
        // Recebe a lista de maiores elementos do filho
        setMaioresElementos(msg);
    };

    return (
        <>
            <p>Questão 01</p>
            <Questao01B lista={lista} msg={mensagemFilho} />
            <div>
                <h3>Maiores elementos de cada objeto:</h3>
                <ul>
                    {/* Impressão dos maiores elementos de cada objeto */}
                    {maioresElementos.map((obj, index) => (
                        <li key={index}>{`Maior valor: ${obj.maior}`}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Questao01A;
