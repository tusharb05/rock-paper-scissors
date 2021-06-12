import Loading from './components/Loading';
import Home from './components/Home';
import {useState, useEffect, useRef} from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [wasSmall, setWasSmall] = useState(false);

  const rockOption = useRef('');
  const paperOption = useRef('');
  const scissorOption = useRef('');
  const [width, setWidth] = useState();

  window.addEventListener('load', e=>{
    setLoading(false)
    if(window.innerWidth<=1070) setWidth(1070)
  });

  window.addEventListener('resize', e=>{
    setWidth(window.innerWidth)
  });

  useEffect(()=>{
    if(width <= 1070){
      //for rock
      rockOption.current.classList = ['newOption'];

      //for paper
      paperOption.current.classList = ['newOption'];

      //for scissor
      scissorOption.current.classList = ['newOption'];
      setWasSmall(true)
    }else {
      //for rock
      if(wasSmall){
        rockOption.current.classList = ['rock'];
        paperOption.current.classList = ['paper'];
        scissorOption.current.classList = ['scissor']
        setWasSmall(false)
      }
    }
  }, [width]);


  return (
    <div className="center">
      {loading && <Loading/>}
      {!loading && <Home opt1={rockOption} opt2={paperOption} opt3={scissorOption}/>}
    </div>
  );
}

export default App;
