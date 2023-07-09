import { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion'

function App() {
  const [rotate, setrotate] = useState(false)
  return (
    <div className="App">
      <motion.div
        // animate={{
        //   // y: 100,
        //   // scale: 1
        //   x: rotate ? -200 : 200,
        // }}
        // transition={{
        //   // type: "spring",
        //   // duration: 0.5
        //   type: 'spring',
        //   bounce: 0.5
        // }}
        // onMouseEnter={() => setrotate(!rotate)}

        // initial={{
        //   y: 0,
        //   scale: 0
        // }}
        // drag
        // dragConstraints={{ left: 50, right: 50, top: 50, bottom: 50 }}
        animate={{
          // rotate: [0, 80, 190, 280, 360],
          scale: [0, 2]
        }}
        transition={{ repeat: Infinity, duration: 5 }}

      // whileHover={{
      //   scale: 2
      // }}
      >

      </motion.div>
    </div >
  );
}

export default App;
