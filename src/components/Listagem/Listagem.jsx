import { Cartao } from "../Cartao/Cartao";
import { ContainerListagem, TituloListagem } from "./style";


const dados = [
    {
        "titulo" : 'Casa',
        "letra" : 'a'
    },
    {
        "titulo" : 'Joao',
        "letra" : 'p'
    },
    {
        "titulo" : 'Cavalo',
        "letra" : 'c'
    },
    {
        "titulo" : 'AAAAAAA',
        "letra" : 'A'
    },
    {
        "titulo" : 'Engenharia',
        "letra" : 'e'
    },
    {
        "titulo" : 'Suave',
        "letra" : 's'
    }
]

const elementos = dados.map( (el, i) => (
    <Cartao
        key={i}
        titulo={el.titulo}
        letra={el.letra}
    />
) )

const Listagem = () => (
    <>
        <TituloListagem>
            Lista
        </TituloListagem>
        <ContainerListagem>
            {elementos}
        </ContainerListagem>
    </>
)

export {Listagem}