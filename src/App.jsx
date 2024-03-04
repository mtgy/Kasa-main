import './App.scss'
import DataLogements from '@/data/logements.json'
import AppRouter from '@routes/AppRouter'
import Home from '@/pages/Home'




function App() {
  console.log (DataLogements);
  return (
    
    <>
    <AppRouter>
        <Home />
    </AppRouter>  
    </>
   

  )
}

export default App
