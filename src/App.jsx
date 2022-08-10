import './App.css';
import logo from './components/image.png'
import background from './components/Rectangle.png'
import cat from './components/cat.png'

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`,
    width: '100vw',
    height: '100vh'}}>
      <center><img src={cat} alt="cat" class= "centerImage" height="350"/></center>
      <center><img src={logo} alt="logo" class="centerImage" height="75"/></center>

      <center><h1 style={{ color: 'teal' }}>
        We are currently under construction. <br/>
        Come back soon!
        </h1></center>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <footer>
        <bottom><center>
          <p style={{ fontSize: "12px" }}><p style={{ color: 'aqua' }}>Calico.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. <br/>
Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
          </p></p></center></bottom>
        </footer>
    </div>
  );
}

export default App;
