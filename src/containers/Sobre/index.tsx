import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem iParagrafosum dolor sit amet consectetur adipisicing elit. Ipsum ab
      repudiandae eos neque dignissimos sunt deserunt, animi quas! Ratione cum
      eligendi ipsam magni fuga necessitatibus ea fugiat tempora aliquid
      placeat?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=MarcusOW&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MarcusOW&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
