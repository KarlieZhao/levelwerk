import * as THREE from 'three'
import { Suspense, useRef,useState, useEffect, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll, useGLTF,Text,Html } from '@react-three/drei'
import NavBar from "./navbar";
import useWindowDimensions from './resize';
import isMobile from './isMobile';
export default function Main() {
return ( <div className='landing-main'>
      <NavBar showIcon={false}/>

    <Canvas shadows camera={{ position: [0, 0, 10] }}  gl={{ setClearColor: ['#000000', 1] }}>
      <ambientLight intensity={0.2} />
      <fog attach="fog" args={['#ff5020', 10, 2]} />
      {/* <fog attach="fog" args={['#ff5020', 2, 0]} /> */}
      {/* <spotLight angle={0.12} intensity={0.1}  color="#ffd0d0" penumbra={1} position={[-300, 100, 0]} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} castShadow /> */}
      <spotLight angle={-0.12} color="#ffd0d0" intensity={0.5} penumbra={1} position={[20, 30, 10]} />
      <Suspense fallback={null}>
        <ScrollControls pages={3}>
        {/* <RoomScan scale={0.03} position={[2, 1.5,-1]} /> */}
         <RoomScan scale={0.022} position={[0,1,1]} />
          {/* <RoomScan scale={0.02} position={[-6,2,-0.5]} /> */}
          <Title />
          </ScrollControls>
      </Suspense>
    </Canvas>
    </div> )
}

function Title() {
    const scroll = useScroll(); 
    const { height,width } = useWindowDimensions();
    const maxSize = Math.min(width*0.7,1500);
    const minSize = 150
   
    const imgRef = useRef(); 
    const wrapperRef = useRef(); 
  const contentRef= useRef();
  const [textHeight,setTextHeight]=useState(350000/width);
  const [isMobileDevice,setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile());
  })

  useEffect(() => {
   const calcHeight = setTimeout(() => {
    if (contentRef.current) {
      setTextHeight( (isMobileDevice?1.2:1.5) * contentRef.current.getBoundingClientRect().height);}
   }, 200); 

   return () => {clearTimeout(calcHeight)}
  }, [contentRef.current,width]);

    useFrame(() => {
      const scrollPos = scroll.offset.toFixed(2);
      const newSize = minSize + scrollPos * (maxSize - minSize)
      if (imgRef.current) {
          imgRef.current.style.width = `${Math.max(minSize, Math.min(maxSize, newSize))}px` 
     }  
     if(wrapperRef.current){
      wrapperRef.current.style.marginTop = `${(isMobileDevice? 100: 30)+ scrollPos * height/5}px`
    }
    if(contentRef.current){
      contentRef.current.style.opacity = `${scrollPos}`
      contentRef.current.style.marginTop = `${height - scrollPos *  textHeight}px`
    }
    }) 
  
    return (
      <Html
      position={[0, 0, 0]} // fixed to screen
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

      <div className='content'>
        <p ref={contentRef}>LevelWerk is an artist-run alternative art space in Brooklyn, NY, committed to supporting both local and international artists while building community through its residency program.</p>
        </div>
    </Html>
    );
  }
  
  function RoomScan({ ...props }) {
    // This hook gives you offets, ranges and other useful things
    const scroll = useScroll()
    const { scene, nodes } = useGLTF('/scene.glb')
    useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
    useFrame((state) => {
      const offset = 1 - scroll.offset
      state.camera.position.set(
      Math.sin(offset* Math.PI/2 ) * 5,
      Math.atan(offset * Math.PI * 2) * 9,
      Math.cos((offset * Math.PI) / 3) * 3)
      state.camera.lookAt(0, 0, 1)
      // state.camera.lookAt(-8, 1, 0)
    })
    return <primitive object={scene} {...props} />
  }
  
  useGLTF.preload('/scene.glb')  