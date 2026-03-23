import './App.css'
import { Header } from './Components/Header/Header';
import { Conteudo } from './Components/Conteudo/conteudo';
import { Trending } from './Components/Tranding/Trending'; 
import { Sobre } from './Components/Sobre/Sobre';
import { Produtos } from './Components/Produtos/Produtos';
function App() {

  return (
    <>
      
          <Header />
          <main>
            <section>
               <Conteudo />
            </section>
            
            <section>
                <Trending />
            </section>
              
              <section>
                 <Sobre />
              </section>

              <section>
                 <Produtos />
              </section>
              
          </main>
         

    </>
  )
}

export default App
