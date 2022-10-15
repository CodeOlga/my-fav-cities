import { useState } from 'react';
import { data } from './data'
import './App.css';

function App() {
  const [slide, setSlide] = useState(0);
  const [showMore, setShowMore] = useState(false)
  const { id, city, description, image } = data[slide];
  const previousSlide = () => {
    setSlide ((slide => {
      slide --;
      if (slide < 0){
        return data.length - 1;
      }
      return slide;
    }))
  }
  const nextSlide = () => {
    setSlide((slide => {
      slide ++;
      if (slide > data.length -1) {
        slide = 0;
      }
      return slide;
    }))
  }

  return (
    <div>
      <div className="container">
        <h1>My 5 favorite cities in the world</h1>
      </div>
      <div className="container">
        <h2>{id} - {city}</h2>
      </div>
      <div className="container">
        <img src = { image } width="300px" alt={city}/>
      </div>
      <div className="container">
        <p>{ showMore ? description : description.substring(0, 200) + '....'}
        <button className="btn_show_more" onClick={() => setShowMore (!showMore)}>{ showMore ? "show less" : "show more"}</button>
        </p>
      </div>
      <div className="btn container">
        <button onClick={previousSlide} className="button">Previous</button>
        <button onClick={nextSlide} className="button">Next</button>
      </div>
    </div>
  );
}

export default App;
