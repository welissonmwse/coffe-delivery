import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  text-align: center;
  border-radius: 6px 36px;
  padding: 0 20px 20px;
  margin-bottom: 20px;

  img {
    margin-top: -20px;
  }

  h4 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
    line-height: 130%;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    line-height: 130%;
    margin-top: 8px;
  }
`

export const CardContainerTitle = styled.div`
  margin-top: 0.75rem;

  h3 {
    display: inline-block;
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
    font-weight: 700;
    font-size: 0.625rem;
    padding: 4px 8px;
    border-radius: 100px;
  }
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  .priceAmount {
    p {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 1.5rem;
    }

    span {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  .cartButtonsAmount {
    display: flex;
    align-items: center;
    gap: 8px;
  }

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

  .cart {
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme['base-card']};
    background: ${(props) => props.theme['purple-dark']};
    padding: 8px;
    border-radius: 6px;
    transition: background-color 0.2s;

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
