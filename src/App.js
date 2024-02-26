import { SignedOut, SignedIn } from "@clerk/clerk-react"
import Router from "./router/routes"
import AuthRouter from './router/AuthRouter'
function App() {

  return (
    <div>
      <SignedOut>
        <AuthRouter />
      </SignedOut>
      <SignedIn>
        <Router />
      </SignedIn>
    </div>
  )
}

export default App