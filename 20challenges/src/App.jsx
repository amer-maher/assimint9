import './App.css'
import { RouterProvider } from 'react-router-dom'
import ThemeApp from './Theme/ThemeApp'
import router from './router'
function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
