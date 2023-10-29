import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const LoaderComp = ({ loaded }) => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  useEffect(() => {
    if (loaded) {
      abrirTelon();
    }
  }, [loaded]);

  const abrirTelon = async () => {
    // Inicia ambas animaciones al mismo tiempo
    await Promise.all([
      controlsLeft.start({ x: "-100vw" }, { duration: 2.5 }), // Duración de 2 segundos
      controlsRight.start({ x: "100vw" }, { duration: 2.5 }), // Duración de 2 segundos
    ]);
  };
  return (
    <div className="flex" style={{ height: "100%", overflow: "hidden" }}>
      {/* Div Izquierdo */}
      <motion.div
        style={{
          flex: 1,
          backgroundColor: "black",
          height: "100%",
          width: "100vw",
        }}
        animate={controlsLeft}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 0 : 1 }}
        transition={{ duration: 0 }}
        className="fixed flex flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
      <div className="custom-loader"></div>
      </motion.div>
      <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 0 : 1 }}
          transition={{ duration: 0 }}
      className="text-[#f1f1f1]  bottom-10 max-w-[250px] text-center fixed left-1/2 transform -translate-x-1/2">
        <h1 >use desktop and microsoft edge for a better experience</h1>

      </motion.div>
      {/* Div Derecho */}
      <motion.div
        style={{
          flex: 1,
          backgroundColor: "black",
          height: "100%",
          width: "100vw",
        }}
        animate={controlsRight}
      />
    </div>
  );
};
export default LoaderComp;
