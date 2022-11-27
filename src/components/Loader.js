import styled from 'styled-components';
import { motion } from 'framer-motion';

const nameVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

const numberVariants = {
  animate: (i) => ({
    y: ['100%', '0%', i ? '-100%' : '%'],
    transition: {
      duration: 1,
      delay: i,
    },
  }),
};

const pageVariants = {
  animate: {
    y: '-100%',
    transition: {
      duration: 1,
    },
  },
};

const Loader = ({ loaderControls, pageAnimation }) => {
  return (
    <StyledLoader variants={pageVariants} animate={pageAnimation}>
      <div className='name'>
        <motion.div variants={nameVariants} initial='initial' animate='animate'>
          Jakob Eriksson
        </motion.div>
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          portfolio 2022
        </motion.div>
      </div>
      <div className='numbers'>
        <div className='number'>
          <motion.div
            variants={numberVariants}
            animate={loaderControls}
            custom={2.5}>
            1
          </motion.div>
          <motion.div
            variants={numberVariants}
            animate={loaderControls}
            custom={2.6}>
            0
          </motion.div>
          <motion.div
            variants={numberVariants}
            animate={loaderControls}
            custom={2.7}>
            0
          </motion.div>
        </div>
        <div className='number'>
          <motion.div
            variants={numberVariants}
            animate={loaderControls}
            custom={2}>
            6
          </motion.div>
          <motion.div
            variants={numberVariants}
            animate={loaderControls}
            custom={2.1}>
            7
          </motion.div>
        </div>
        <div className='number'>
          <motion.div
            variants={numberVariants}
            animate={loaderControls}
            custom={1.5}>
            4
          </motion.div>
          <motion.div
            variants={numberVariants}
            animate={loaderControls}
            custom={1.6}>
            2
          </motion.div>
        </div>
        <div className='number'>
          <motion.div
            variants={numberVariants}
            animate={loaderControls}
            custom={1}>
            0
          </motion.div>
          <motion.div
            variants={numberVariants}
            animate={loaderControls}
            custom={1.1}>
            0
          </motion.div>
        </div>
      </div>
    </StyledLoader>
  );
};

export default Loader;

const StyledLoader = styled(motion.div)`
  height: 100vh;
  background-color: black;
  padding: 4rem;
  color: #eee;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .name {
    text-transform: uppercase;
    overflow: hidden;

    div {
      font-size: 2.4rem;
      font-weight: 500;
    }
  }

  .numbers {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .number {
      display: flex;
      overflow: hidden;

      div {
        font-size: 15rem;
      }
    }
  }
`;
