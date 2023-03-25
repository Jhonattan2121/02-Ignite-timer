import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefas</td>
              <td>20 minutos</td>
              <td>25/04/2023</td>
              <td>
                <Status statusColor="green"> Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefas</td>
              <td>20 minutos</td>
              <td>25/04/2023</td>
              <td>
                <Status statusColor="green"> Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefas</td>
              <td>20 minutos</td>
              <td>25/04/2023</td>
              <td>
                <Status statusColor="green"> Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefas</td>
              <td>20 minutos</td>
              <td>25/04/2023</td>
              <td>
                <Status statusColor="green"> Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefas</td>
              <td>20 minutos</td>
              <td>25/04/2023</td>
              <td>
                <Status statusColor="green"> Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}