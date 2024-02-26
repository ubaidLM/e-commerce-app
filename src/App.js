import { SignedOut, SignedIn } from "@clerk/clerk-react"
import AppRouter from "./router/AppRouter"
import AuthRouter from './router/AuthRouter'
function App() {

  return (
    <div>
      <SignedOut>
        <AuthRouter />
      </SignedOut>
      <SignedIn>
        <AppRouter />
      </SignedIn>
    </div>
  )
}

export default App