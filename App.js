
import SayMyName from "./components/SatMyName";
import Pessoa from "./components/Pessoa";

function App() {

  const nome = "João"
  return (
    <div className="App">
    <h1>Matheus Lineke da Cruz Figueredo</h1>
    <SayMyName nome="Lineke"/>
    <SayMyName nome="Carlos"/>
    <SayMyName nome={nome}/>
    <Pessoa nome="Rodrigo" 
    idade="87"
    profissão= "Dev"
    foto="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvivamais.cemigsaude.org.br%2Fo-que-e-o-estatuto-do-idoso%2F&psig=AOvVaw3FvzM76g0xoslPrbVU_KXb&ust=1667907922076000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLiu1Kv_m_sCFQAAAAAdAAAAABAE"
    ></Pessoa>
    </div>
  );
}

export default App;
