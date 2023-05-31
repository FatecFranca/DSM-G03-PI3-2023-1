import RoutesApp from "./router"
import { AuthProvider } from "./contexts/auth"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <AuthProvider>
      <ToastContainer autoClose={3333} />
      <RoutesApp />
    </AuthProvider>
  )
}

export default App
