import { Container, StyledForm, StyledInput, StyledButton, StyledLink } from "./estilo"

export default function Cadastro() {
  return (
    <Container>
      <h1>MyWallet</h1>

      <StyledForm>

        <StyledInput
          name="name"
          placeholder="Nome"
          type="text"
          required
        />
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

        <StyledInput
          name="password"
          placeholder="Confirme a senha"
          type="password"
          required
        />
        <StyledButton>
          Cadastrar
        </StyledButton>

      </StyledForm>

      <StyledLink to="/">
        Já tem uma conta? Entre agora!
      </StyledLink>

    </Container>
  )
}

