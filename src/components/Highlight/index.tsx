import { Container, Subtitle, Title } from "./style"

type highlightProps = {
  title: string
  subtitle: string
}

export function Highlight({ title, subtitle }: highlightProps) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}