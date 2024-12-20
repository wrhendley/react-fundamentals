// Task 4: Import components into an App component
// Develop a functional component called  App that imports and displays your  Header,   About, and Contact components.

import Header from "./header"
import About from "./about"
import Contact from "./contact"

function App() {

  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>    
  )
}

export default App
