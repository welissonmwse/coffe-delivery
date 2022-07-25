import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
`
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    span {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 8px;
      color: ${(props) => props.theme['purple-dark']};
      background-color: ${(props) => props.theme['purple-light']};
      border-radius: 6px;
    }

    a {
      display: block;
      width: 38px;
      height: 38px;
      border-radius: 6px;
      padding: 8px;
      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};
    }
  }
`
