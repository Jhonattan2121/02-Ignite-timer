import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  return (
    <CountdownContainer>
      <span>{Minutes[0]}</span>
      <span>{Minutes[1]}</span>
      <Separator>:</Separator>
      <span>{Seconds[0]}</span>
      <span>{Seconds[1]}</span>
    </CountdownContainer>
  )
}
