
import './App.css';
import React, { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"

import { proxy, useSnapshot } from "valtio"

import Model from './Zzz';


function App() {
  console.log('render app');
  
  let inputEl = useRef()
 

  function handleClickChangeColor(){
    //control model
    window.dispatchEvent(
      new CustomEvent('colorFace',{
        detail:'colorFace'
      })
    )
  }

 

  return (
    <div className="App">
    
      
   <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={1} />
        <ambientLight intensity={0.7} />
        <spotLight intensity={1} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        
        <Suspense fallback={null}>
        
        <Model />
        </Suspense>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} />
      </Canvas>
      <button onClick={()=> handleClickChangeColor()} >Change face color</button>
      <button onClick={()=> {
        window.dispatchEvent(
          new CustomEvent('onOffGlass',{
            detail:'onOffGlass'
          })
        )
      }} >on/off glass</button>
     
       </div>
  );
}

export default App;
