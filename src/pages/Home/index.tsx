import { Play } from 'phosphor-react'
import {
  StartCountdownButton,
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  TaskInput,
  MinutesAmountInput,
} from './styles'
import { useState } from 'react'

export function Home() {
  const [task, setTask] = useState('')

  function resetForm() {
    setTask('')
  }

  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em </label>
          <TaskInput
            type="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            onChange={(event) => setTask(event.target.value)}
            value={task}
          />

          <datalist id="task-suggestions">
            <option value="Projeto1" />
            <option value="Projeto2" />
            <option value="Projeto3" />
            <option value="Projeto4" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton disabled={task === ''} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
