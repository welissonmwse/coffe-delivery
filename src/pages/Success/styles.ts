import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;

  header {
    h1 {
      font-family: 'Baloo 2';
      font-size: 2rem;
      font-weight: 800;
      color: ${(props) => props.theme['yellow-dark']};
      line-height: 41.6px;
    }

    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 26px;
    }
  }
`

export const SuccessContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;

  img {
    max-width: 492px;
  }
`

export const Card = styled.div`
  width: 526px;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme.background};
  background-clip: padding-box;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.yellow} 0%,
      ${(props) => props.theme.purple} 100%
    );
  }
`
interface InfoItemProps {
  variant: 'purple' | 'yellow' | 'yellow-dark'
}

const color = {
  purple: 'purple',
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
} as const

export const InfoItem = styled.div<InfoItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  & + & {
    margin-top: 2rem;
  }

  & div:first-child {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme[color[props.variant]]};
  }

  p {
    font-size: 1rem;
    line-height: 20.8px;
  }
`
