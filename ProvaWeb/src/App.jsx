import './App.css'
import Questao01 from './components/AP1OutraVersao/Questao01/Questao01'
import Questao01A from './components/AP1OutraVersao/Questao01/Questao01A'
import Questao01B from './components/AP1OutraVersao/Questao01/Questao01B'
import Questao02 from './components/AP1OutraVersao/Questao02'
import Questao03 from './components/AP1OutraVersao/Questao03'
import Questao04 from './components/AP1OutraVersao/Questao04'
import Questao05 from './components/AP1OutraVersao/Questao05'

function App() {

  return (
    <>
      <Questao01>
        <Questao01A/>
        <Questao01B/>
      </Questao01>
      <Questao02 />
      <Questao03 />
      <Questao04 />
      <Questao05 />
    </>
  )
}

export default App
