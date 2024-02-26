import { SignedOut, SignedIn } from "@clerk/clerk-react"
import SignInPage from "./pages/SignInPage"
 
function App() {
 
  return (
    <div>
      <SignedOut>
        <SignInPage/>
      </SignedOut>
      <SignedIn>
        <p>This content is private. Only signed in users can see this.</p>
      </SignedIn>
    </div>
  )
}
 
export default App