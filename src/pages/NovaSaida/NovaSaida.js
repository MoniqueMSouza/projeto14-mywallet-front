import { Container, StyledForm, StyledInput, StyledButton } from "./estilo"

export default function NovaSaida() {
    return (
        <Container>
            <div>
                <h1>Nova Saída</h1>
            </div>
            <StyledForm>

                <StyledInput
                    name="valor"
                    placeholder="Valor"
                    type="number"
                    required
                />

                <StyledInput
                    name="description"
                    placeholder="Descrição"
                    type="text"
                    required
                />

                <StyledButton type="submit">
                    Salvar Saída
                </StyledButton>

            </StyledForm>
        </Container>
    )
}   