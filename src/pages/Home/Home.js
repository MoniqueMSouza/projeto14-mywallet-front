import { Container, StyledRegister, StyledButtons, StyledButton, Topo, New, Textos, SaldoFinal,Lançamentos, Lançamento, Data, Valor, Descrição } from './estilo'

export default function Home() {
    /*   return (
           <Container>
               <Topo>
                   <h1>Olá, fulano</h1>
                   <ion-icon name="log-out-outline"></ion-icon>
               </Topo>
   
               <StyledRegister>  
                   <p>Não há registros de entrada ou saída</p>
               </StyledRegister>
   
               <StyledButtons>
   
                   <StyledButton type="submit">
                       <ion-icon name="add-circle-outline"></ion-icon>
                       <New><h2>Nova entrada</h2></New>
                   </StyledButton>
   
                   <StyledButton type="submit">
                       <ion-icon name="remove-circle-outline"></ion-icon>
                       <New><h2>Nova saída</h2></New>
                   </StyledButton>
   
               </StyledButtons>
   
           </Container>
       )
   }
   */

    return (
        <Container>
            <Topo>
                <h1>Olá, fulano</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </Topo>

            <StyledRegister>
                <Textos>
                    <Lançamentos>
                        <Lançamento>
                            <Data>30/11</Data>
                            <Descrição>Almoço mãe</Descrição>
                            <Valor>39,90</Valor>
                        </Lançamento>

                        <Lançamento>
                            <Data>30/11</Data>
                            <Descrição>Almoço de Familia</Descrição>
                            <Valor>39,90</Valor>
                        </Lançamento>

                    </Lançamentos>

                    <SaldoFinal>
                        <h1>SALDO</h1>
                        <h2>2849,96</h2>
                    </SaldoFinal>
                </Textos>
            </StyledRegister>

            <StyledButtons>

                <StyledButton type="submit">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <New><h2>Nova entrada</h2></New>
                </StyledButton>

                <StyledButton type="submit">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <New><h2>Nova saída</h2></New>
                </StyledButton>

            </StyledButtons>

        </Container>
    )
}

