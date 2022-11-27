import React from 'react';
import { animate, motion } from 'framer-motion';
import styled from 'styled-components';
import portrait from '../img/portrait.jpg';
import landscape from '../img/landscape.jpg';

const navVariants = {
  initial: {
    y: '-15vh',
  },
  animate: {
    y: '0vh',
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const imgVariants = {
  initial: (i) => ({
    scale: 0.8,
    x: i ? '100vw' : '-100vw',
  }),
  animate: {
    scale: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const titleParentVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  initial: { y: '100%' },
  animate: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Home = ({ homeAnimation }) => {
  return (
    <StyledHome>
      <motion.div
        variants={navVariants}
        animate={homeAnimation}
        className='header'>
        <div>Jakob Eriksson</div>
        <div>
          Freelancing Frontend <br /> Developer
        </div>
        <div>
          Based In Kalmar
          <br /> Sweden
        </div>
        <div>
          <div>Work.</div>
          <div>About.</div>
        </div>
      </motion.div>
      <motion.div
        className='title'
        variants={titleParentVariants}
        animate={homeAnimation}>
        <motion.span variants={titleVariants}>f</motion.span>
        <motion.span variants={titleVariants}>r</motion.span>
        <motion.span variants={titleVariants}>o</motion.span>
        <motion.span variants={titleVariants}>n</motion.span>
        <motion.span variants={titleVariants}>t</motion.span>
        <motion.span variants={titleVariants}>e</motion.span>
        <motion.span variants={titleVariants}>n</motion.span>
        <motion.span variants={titleVariants}>d</motion.span>
      </motion.div>
      <motion.div
        className='title'
        variants={titleParentVariants}
        animate={homeAnimation}>
        <motion.span variants={titleVariants}>d</motion.span>
        <motion.span variants={titleVariants}>e</motion.span>
        <motion.span variants={titleVariants}>v</motion.span>
        <motion.span variants={titleVariants}>e</motion.span>
        <motion.span variants={titleVariants}>l</motion.span>
        <motion.span variants={titleVariants}>o</motion.span>
        <motion.span variants={titleVariants}>p</motion.span>
        <motion.span variants={titleVariants}>e</motion.span>
        <motion.span variants={titleVariants}>r</motion.span>
      </motion.div>
      <div className='img'>
        <motion.img
          variants={imgVariants}
          animate={homeAnimation}
          className='portrait'
          src={portrait}
        />
        <motion.img
          variants={imgVariants}
          animate={homeAnimation}
          custom={'right'}
          className='landscape'
          src={landscape}
        />
      </div>
      <motion.div
        className='name'
        variants={titleParentVariants}
        animate={homeAnimation}>
        <motion.span variants={titleVariants}>j</motion.span>
        <motion.span variants={titleVariants}>a</motion.span>
        <motion.span variants={titleVariants}>k</motion.span>
        <motion.span variants={titleVariants}>o</motion.span>
        <motion.span variants={titleVariants}>b</motion.span>
      </motion.div>
      <motion.div
        className='name'
        variants={titleParentVariants}
        animate={homeAnimation}>
        <motion.span variants={titleVariants}>e</motion.span>
        <motion.span variants={titleVariants}>r</motion.span>
        <motion.span variants={titleVariants}>i</motion.span>
        <motion.span variants={titleVariants}>k</motion.span>
        <motion.span variants={titleVariants}>s</motion.span>
        <motion.span variants={titleVariants}>s</motion.span>
        <motion.span variants={titleVariants}>o</motion.span>
        <motion.span variants={titleVariants}>n</motion.span>
      </motion.div>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled(motion.div)`
  background-color: #e0dfdd;
  height: 100vh;
  position: absolute;
  width: 100%;
  overflow-x: hidden;
  padding: 0 4rem;

  .header {
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      font-size: 2rem;
      font-weight: 500;
      display: flex;

      div {
        margin-left: 1.5rem;
      }
    }
  }

  .title {
    z-index: 5;
    position: relative;
    color: #eee;
    mix-blend-mode: difference;
    overflow: hidden;

    span {
      font-size: 12rem;
      font-weight: 600;
      text-transform: uppercase;
      display: inline-block;
    }
  }

  .name {
    z-index: 5;
    position: relative;
    color: #eee;
    mix-blend-mode: difference;
    overflow: hidden;
    display: flex;
    justify-content: end;

    span {
      font-size: 15rem;
      font-weight: 600;
      text-transform: uppercase;
      display: inline;
    }
  }

  .img {
    img {
      object-fit: contain;
      position: absolute;
      z-index: 2;
    }

    .portrait {
      width: 300px;
      left: 20%;
      top: 30%;
    }

    .landscape {
      width: 600px;
      height: 500px;
      left: 50%;
      top: 40%;
    }
  }
`;
