
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar';
import { Accueil } from './components/accueil'
import { Footer } from './components/footer'
import { Parcours } from './components/parcours'
import { Projet } from './components/projet'
import { Contact } from './components/contact'



function App() {

  return (
    <>
      <NavigationBar />
      <Accueil />

      <Parcours />
      <Projet />
      <Contact />
      <Footer />
      
      
    </>
  )
}

export default App
