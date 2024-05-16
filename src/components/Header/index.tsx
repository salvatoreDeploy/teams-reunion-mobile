import logoImg from '../../assets/logo.png'
import { BackButton, BackIcon, Container, Logo } from './style'

type headerProps = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: headerProps) {
  return (
    <Container>

      {showBackButton && <BackButton><BackIcon /></BackButton>}

      <Logo source={logoImg} />
    </Container>
  )
}