
import './App.css';
import background from './background.jpg'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
 
function App() {
  
  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height: '100vh'
  };

 
  return (
    <>
    <div style={styles}>

<Navbar title='Text-Utils by Sam' ></Navbar>

<div className="container my-3">
<TextForm></TextForm>


</div>
<About/>
    </div>
    </>
  );
}

export default App;
