import { Container, StyledForm, StyledInput, StyledButton, StyledLink } from "./estilo"
import { ThreeDots } from "react-loader-spinner"
import React, { useContext } from 'react'
import MyContext from '../../contexts/context'
import { useState } from "react"

export default function Cadastro() {
  const { email, setEmail, name, setName, password, setPassword, confirmPassword, setConfirmPassword} = useContext(MyContext)
  const [botaoAnimado, setBotaoAnimado] = useState("Cadastrar")

  function cadastrar(e) {
    e.preventDefault()
    setBotaoAnimado(
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />)

      console.log('Deu certo o formulário!')
      console.log(name)
      console.log(email)      
      console.log(password)
      console.log(confirmPassword)

  }

  return (
    <Container>
      <h1>MyWallet</h1>

      <StyledForm onSubmit={cadastrar}>

        <StyledInput
          name="name"
          placeholder="Nome"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <StyledInput
          name="email"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <StyledInput
          name="password"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <StyledInput
          name="password"
          placeholder="Confirme a senha"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
        <StyledButton>
          {botaoAnimado}
        </StyledButton>

      </StyledForm>

      <StyledLink to="/">
        Já tem uma conta? Entre agora!
      </StyledLink>

    </Container>
  )
}

