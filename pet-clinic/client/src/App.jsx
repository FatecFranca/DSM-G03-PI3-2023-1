import RoutesApp from "./router"
import { AuthProvider } from "./contexts/auth"

function App() {

  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  )
}

export default App
