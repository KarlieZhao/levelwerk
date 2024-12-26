import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Sky, useScroll, useGLTF, useAnimations } from '@react-three/drei'

export default function App() {
  return (
   <div className='landing-main'>
    <Canvas shadows camera={{ position: [0, 0, 10] }}  gl={{ setClearColor: ['#000000', 1] }}>
      <ambientLight intensity={0.1} />
      <fog attach="fog" args={['#ff5020', 7, 18]} />
      {/* ff5020 */}
      <spotLight angle={0.14} color="#ffd0d0" penumbra={1} position={[25, 50, -20]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow />
      {/* <Sky scale={1000} sunPosition={[2, 0.4, 10]} /> */}
      <Suspense fallback={null}>
        {/* Wrap contents you want to scroll into <ScrollControls> */}
        <ScrollControls pages={3}>
          <LittlestTokyo scale={0.02} position={[2, 1.5,-1]} />
        </ScrollControls>
      </Suspense>
    </Canvas>

   <div className='title'>LevelWerk</div> 
    </div> 
  )
}

function LittlestTokyo({ ...props }) {
  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll()
  const { scene, nodes } = useGLTF('/room_big3.glb')
  useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
  useFrame((state, delta) => {
    const offset = 1 - scroll.offset
    state.camera.position.set(
    Math.sin(offset) * -10, 
    Math.atan(offset * Math.PI * 2) * 5,
    Math.cos((offset * Math.PI) / 3) * -4)
    state.camera.lookAt(0.3, 0, 0)
  })
  return <primitive object={scene} {...props} />
}

/*
author: glenatron (https://sketchfab.com/glenatron)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
title: Littlest Tokyo */
useGLTF.preload('/room_big3.glb')
