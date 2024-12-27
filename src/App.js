import * as THREE from 'three'
import { Suspense, useRef,useState, useEffect, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll, useGLTF,Text,Html } from '@react-three/drei'


const material = new THREE.LineBasicMaterial({ color: 'white' })
export default function App() {
  return (
   <div className='landing-main'>
    <Canvas shadows camera={{ position: [0, 0, 10] }}  gl={{ setClearColor: ['#000000', 1] }}>
      <ambientLight intensity={0.1} />
      <fog attach="fog" args={['#ff5020', 12, 5]} />
      {/* ff5020 */}
      <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
      {/* <Sky scale={1000} sunPosition={[2, 0.4, 10]} /> */}
      <Suspense fallback={null}>
        {/* Wrap contents you want to scroll into <ScrollControls> */}
        <ScrollControls pages={3}>
          <LittlestTokyo scale={0.02} position={[2, 1.5,-1]} />
          <Title />
          </ScrollControls>
      </Suspense>
    </Canvas>
    </div> 
  )
}

function Title() {
  const scroll = useScroll(); 
  const maxSize = 1200
  const minSize = 200
  const imgRef = useRef(); 
  const wrapperRef = useRef(); 

  useFrame(() => {
    const newSize = minSize + scroll.offset.toFixed(2) * (maxSize - minSize)
    if (imgRef.current) {
      // console.log(scroll.offset.toFixed(2));
        imgRef.current.style.width = `${Math.max(minSize, Math.min(maxSize, newSize))}px` 
   wrapperRef.current.style.marginTop = `${30+scroll.offset.toFixed(2) * 200}px`
   }  
  }) 

  return (
    <Html
    position={[0, 0, 0]} // Doesn't matter for 2D text; fixed to screen
    wrapperClass="plain-text-wrapper"
    >
    <div className="title"
      ref={wrapperRef}
    style={{ marginTop:`${200}px`,
    zIndex:"10000000" }}>
      <img
        ref={imgRef} 
             src="/title_logo.svg"
        className="logo_svg"
        style={{
          width: `${maxSize}px`, // Initial size
          height: 'auto',
          }}
        alt="Logo"
        
      />
    </div>
  </Html>
  );
}

function LittlestTokyo({ ...props }) {
  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll()
  const { scene, nodes } = useGLTF('/room_big3.glb')
  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
  useFrame((state) => {
    const offset = 1 - scroll.offset
    state.camera.position.set(
    Math.sin(offset) * -10, 
    Math.atan(offset * Math.PI * 2) * 5,
    Math.cos((offset * Math.PI) / 3) * -4)
    state.camera.lookAt(0.3, 0, 0)
  })
  return <primitive object={scene} {...props} />
}

useGLTF.preload('/room_big3.glb')
