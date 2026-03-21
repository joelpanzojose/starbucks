import './App.css'
import { Header } from './Components/Header/Header';
import { Conteudo } from './Components/Conteudo/conteudo';
import { Trending } from './Components/Tranding/Trending';  
function App() {

  return (
    <>
      
          <Header />
          <main>
               <Conteudo />
               <Trending />
          </main>
         

    </>
  )
}

export default App
