import {Container, StyledForm, StyledInput, StyledButton, StyledLink} from './estilo'

export default function Login() {

  return (
    <Container>
      <h1>MyWallet</h1>

      <StyledForm>

        <StyledInput
          name="email"
          placeholder="E-mail"
          type="email"
          required
        />
        <StyledInput
          name="password"
          placeholder="Senha"
          type="password"
          required
        />

        <StyledButton type="submit">
          Entrar
        </StyledButton>

      </StyledForm>

      <StyledLink to="/cadastro">
        Primeira vez? Cadastre-se!
      </StyledLink>

    </Container>
  )
}

