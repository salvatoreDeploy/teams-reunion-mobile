import { TouchableOpacityProps } from "react-native"
import { ButtonTypeStyleProps, Container, Title } from "./style"

type ButtonProps = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'PRiMARY', ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}