import { Container, Content, Links } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  
  
  return(
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, nesciunt. 
            Voluptates laudantium quisquam pariatur ex amet ipsam facere magni, nihil, 
            repellat recusandae voluptatibus quam earum officiis consectetur vero maxime hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum unde a 
            reprehenderit odio quasi iste nobis quam, corporis architecto omnis, iure illo 
            dolore officia pariatur assumenda id ea perferendis!
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores"> 
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />

        </Content>
      </main>

    </Container>

  )
}