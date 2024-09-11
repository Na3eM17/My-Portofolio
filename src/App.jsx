import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Contain from './cintains';
import Header  from './header';
function App() {

  return (
    <>
      <Header name="prifiles" name2="game" name3="footer" hdr="h-containor2"
      linked="https://myportofolio-self-five.vercel.app/#view"
      git="https://myportofolio-self-five.vercel.app/#containor"
      insta="https://na3em17.github.io/My-Profiles/"
      />
      <Contain/>
      <Header name="Instagram" name2="Github" 
      name3="Linkedin" hdr="h-containor"
       insta="https://www.instagram.com/neemo_bh/"
       git="https://github.com/Na3eM17"
       linked="https://www.linkedin.com/in/naeem-alhindi-720b29310/"
       />
    </>
  )
}

export default App
