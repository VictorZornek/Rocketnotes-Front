import { Container } from "./styles";

import { Tag } from "../Tag";

export function Note({ data, ...rest }) {
    return(
        <Container {...rest} >
            <h1>{data.title}</h1>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)    // deve ser utilizado uma key por gerar várias tags
                    }
                </footer>
            }

        </Container>
    )
}