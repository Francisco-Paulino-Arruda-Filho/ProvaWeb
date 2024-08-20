import { useState } from "react";

const Questao02 = () => {
    // Declare uma variável de estado chamada 'virar' e inicialize-a com o valor 'false'
    const [virar, setVirar] = useState(false);

    // Declare duas variáveis chamadas 'url' e 'url2' e inicialize-as com os valores fornecidos na questão, cada uma
    // com um sprite do Pikachu
    const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'
    const url2 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'

    return (
        <>
            <h1>Questão 02</h1>
            <button onClick={() => setVirar(!virar)}>Virar</button>
            {/* Ternário que renderize uma imagem com o atributo 'src' que alterna entre 'url' e 'url2' dependendo do valor de 'virar' */}
            {virar ? (
                <img src={url} alt="Pokemon" />
            ) : (
                <img  src={url2} alt="Pokemon" />
            )}
        </>
    );
}

export default Questao02;