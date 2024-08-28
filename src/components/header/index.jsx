import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/VictorZornek.png" alt="Foto do usuário" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Victor Zornek</strong>
                </div>
            </Profile>
        </Container>
    )
}