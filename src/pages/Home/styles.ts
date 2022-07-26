import styled from 'styled-components'

export type IconVariant = 'yellow_dark' | 'yellow' | 'base_text' | 'purple'
interface IconProps {
  variant: IconVariant
}

const iconVariants = {
  yellow_dark: 'yellow-dark',
  yellow: 'yellow',
  base_text: 'base-text',
  purple: 'purple',
} as const

export const HomeContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const BannerSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5.75rem 0;
`

export const BannerContent = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 62.4px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 26px;
    margin-bottom: 4.125rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Items = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 12px;

    & ~ div {
      margin-top: 1.25rem;
    }
  }
`
export const Icon = styled.div<IconProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme[iconVariants[props.variant]]};
  color: ${(props) => props.theme.background};
`

export const CoffeSection = styled.section`
  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin: 2rem 0;
  }
`
export const CoffeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 1rem;
`
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
    background: ${(props) => props.theme.purple};
    padding: 8px;
    border-radius: 6px;
  }
`
