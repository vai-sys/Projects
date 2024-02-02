import './App.css';
import Imageslider from './components/Imageslider';
// import Star from './components/Star';
import image1 from './components/image1.jpg'; 
import image2 from './components/image2.jpg'; 

function App() {
  return (
    <div className="App">
      <Imageslider Images={[image1,image2]} />
     {/* <Star/> */}
    </div>
  );
}

export default App;

