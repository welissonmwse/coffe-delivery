import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

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

export const PaymentTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;

  margin-top: 1rem;
`
// RadioBoxProps
export const RadioBox = styled(RadioGroup.Item)`
  height: 3.125rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 0.375rem;
  cursor: pointer;

  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['base-hover']};
    border-color: ${(props) => props.theme['base-hover']};
  }

  &[data-state='checked'] {
    background-color: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};
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

export const ContentCart = styled.div`
  margin-top: 15px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  min-width: 448px;

  .cardProduct {
    display: flex;
    gap: 20px;
    width: 100%;

    img {
      width: 64px;
      height: 64px;
    }

    .bodyCard {
      width: 100%;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 8px;

      h5 {
        font-size: 1rem;
        line-height: 20.8px;
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 400;
      }

      p {
        line-height: 20.8px;
        font-weight: 700;
      }
    }

    .footerCard {
      display: flex;
      gap: 8px;

      .buttons {
        display: flex;
        align-items: center;
        gap: 4px;
        background-color: ${(props) => props.theme['base-button']};
        padding: 8px;
        border-radius: 6px;
        font-size: 1rem;

        button {
          border: none;
          cursor: pointer;
          color: ${(props) => props.theme.purple};
          background: transparent;
          transition: color 0.2s;

          &:hover {
            color: ${(props) => props.theme['purple-dark']};
          }
        }

        p {
          font-size: 1rem;
          padding: 4px 8px;
          margin: 0;
        }
      }

      svg {
        color: ${(props) => props.theme['purple-dark']};
      }

      .remove {
        display: flex;
        align-items: center;
        gap: 4px;
        background-color: ${(props) => props.theme['base-button']};
        padding: 8px;
        border-radius: 6px;
        font-size: 0.75rem;
        border: none;
        cursor: pointer;
        color: ${(props) => props.theme['base-text']};
        font-weight: 400;
        transition: color 0.2s;

        &:hover {
          background-color: ${(props) => props.theme['base-hover']};
        }
      }
    }
  }

  .divider {
    background-color: ${(props) => props.theme['base-button']};
    height: 1px;
    margin: 1.5rem 0;
  }
`

export const CartFooter = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + div {
      margin-top: 12px;
    }

    h6 {
      font-size: 0.875rem;
      font-weight: 400;
    }
  }

  .total {
    h6,
    p {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  button {
    width: 100%;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.yellow};
    border: none;
    cursor: pointer;
    font-weight: 700;
    border-radius: 6px;
    padding: 8px;
    margin-top: 24px;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
