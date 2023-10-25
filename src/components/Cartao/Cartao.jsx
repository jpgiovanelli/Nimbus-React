import { Container, Titulo } from "./style"

const Cartao = ( props ) => (

    <Container>
        <Titulo>{props.titulo}</Titulo>
        <p>{props.letra}</p>
    </Container>

)

export {Cartao}