import Loader from './components/Loader';
import Home from './components/Home';
import { useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

function App() {
  const loaderControls = useAnimationControls();
  const pageAnimation = useAnimationControls();
  const homeAnimation = useAnimationControls();

  const sequence = async () => {
    await homeAnimation.set('initial');
    await loaderControls.start('animate');
    await pageAnimation.start('animate');
    await homeAnimation.start('animate');
  };

  useEffect(() => {
    sequence();
  }, []);

  return (
    <div className='App'>
      <Loader loaderControls={loaderControls} pageAnimation={pageAnimation} />
      <Home homeAnimation={homeAnimation} />
    </div>
  );
}

export default App;
