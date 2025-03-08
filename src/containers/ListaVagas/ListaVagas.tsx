import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga/Vaga'
import { ListaContainer } from './styles'

type VagaType = {
  id: number
  titulo: string
  descricao: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  // Exemplo de vagas
  const vagas: VagaType[] = [
    {
      id: 1,
      titulo: 'Desenvolvedor Front-End',
      descricao: 'React, Vue, Angular',
      localizacao: 'Remoto',
      nivel: 'Júnior',
      modalidade: 'CLT',
      salarioMin: 3000,
      salarioMax: 5000,
      requisitos: ['React', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      titulo: 'Desenvolvedor Back-End',
      descricao: 'Node.js, Python, Java',
      localizacao: 'São Paulo',
      nivel: 'Pleno',
      modalidade: 'PJ',
      salarioMin: 6000,
      salarioMax: 10000,
      requisitos: ['Node.js', 'MongoDB', 'Docker']
    },
    {
      id: 3,
      titulo: 'Desenvolvedor Full Stack',
      descricao: 'React, Node.js, Banco de Dados',
      localizacao: 'Híbrido - Rio de Janeiro',
      nivel: 'Sênior',
      modalidade: 'CLT',
      salarioMin: 8000,
      salarioMax: 12000,
      requisitos: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    }
  ]

  // Filtrando vagas apenas pelo título
  const vagasFiltradas = vagas.filter((vaga) =>
    vaga.titulo.toLowerCase().includes(filtro.toLowerCase())
  )

  return (
    <>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <ListaContainer>
        {vagasFiltradas.map((vaga) => (
          <Vaga key={vaga.id} {...vaga} />
        ))}
      </ListaContainer>
    </>
  )
}

export default ListaVagas
