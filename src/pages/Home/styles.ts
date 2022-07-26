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
