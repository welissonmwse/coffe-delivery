import styled from 'styled-components'

export const CartContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const FormContainer = styled.form`
  display: flex;
  gap: 2rem;

  h4 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .address,
  .payment {
    background-color: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px;
    margin-top: 15px;
  }

  .addressTitle,
  .paymentTitle {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    div {
      h5 {
        font-size: 1rem;
        line-height: 20.8px;
        color: ${(props) => props.theme['base-subtitle']};
      }

      p {
        font-size: 0.875rem;
        line-height: 18.5px;
      }
    }
  }

  .addressTitle svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  .paymentTitle svg {
    color: ${(props) => props.theme['purple-dark']};
  }

  .formInputsGrup {
    margin-top: 2rem;
  }

  .inputContentItems {
    display: flex;
    gap: 12px;

    div {
      flex: 1;
    }

    input {
      padding: 0.75rem;
      border-radius: 4px;
      background-color: ${(props) => props.theme['base-input']};
      border: 1px solid ${(props) => props.theme['base-button']};

      &[placeholder='Rua'] {
        width: 100%;
      }

      &[placeholder='Complemento'] {
        width: 100%;
      }

      &[placeholder='UF'] {
        width: 3.75rem;
      }
    }

    & + .inputContentItems {
      margin-top: 1rem;
    }
  }
`

export const PaymentTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;

  margin-top: 1rem;
`
// RadioBoxProps
export const RadioBox = styled.button`
  height: 3.125rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;

  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
`
