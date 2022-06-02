import ItemListContainer from "./ItemListContainer"
import {Container} from 'react-bootstrap'

const Main = () => {
    return (
        <Container as="main">
            <ItemListContainer saludo="Bienvenid@!" />
        </Container>
    )
}

export default Main