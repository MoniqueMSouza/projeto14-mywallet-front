import {Container, StyledForm, StyledInput, StyledButton} from './estilo'

export default function NovaEntrada() {
    return (
        <Container>
            <div>
                <h1>Nova entrada</h1>
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
                    Salvar Entrada
                </StyledButton>

            </StyledForm>

        </Container>
    )
}