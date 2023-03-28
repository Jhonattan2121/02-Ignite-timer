import { useContext, useEffect, useState } from 'react'
import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../..'

export function Countdown() {
  const { activeCycle, activeCycleId, markCurrentCycleAsFinished } =
    useContext(CyclesContext)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number
    if (activeCycleId) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setAmountSecondsPassed(totalSeconds)

          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, activeCycleId, totalSeconds, markCurrentCycleAsFinished])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const MinutesAmount = Math.floor(currentSeconds / 60)
  const SecondsAmount = currentSeconds % 60

  const Minutes = String(MinutesAmount).padStart(2, '0')
  const Seconds = String(SecondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${Minutes}:${Seconds}`
    }
  }, [Minutes, Seconds, activeCycle])

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
