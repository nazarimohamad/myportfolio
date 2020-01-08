import React, { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Projects from './Projects';
import Main from './Main';
import '../style.scss';


const App = () => {
  const [move, setMove] = useState(false);

  useEffect(() => {
    setInterval(() => {
      return setMove = !move
    }, 1000);
  })

  return (
    <ReactFullpage
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000}

      render={({fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Main />
            </div>
            <div className="section">
              <Projects />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}

export default App;