import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, Linkbotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <Linkbotao>Visualizar</Linkbotao>
  </Card>
)

export default Projeto
