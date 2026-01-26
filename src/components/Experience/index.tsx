import { TransformControls, OrbitControls, PivotControls, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import Custom from "../Custom/Index"

const Experience = () => {
  const cubeRef = useRef<any>(null);
  const sphereRef = useRef<any>(null);
  useFrame((state, delta) => {
    const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    state.camera.lookAt(0, 0, 0);
    cubeRef.current.rotation.y += delta // for such thing like animation dont use state, use ref directly
    //we use delta to make animation sync. because every person have different fps
  })
  return (
    <>
      <OrbitControls enableDamping makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1.5} />
      <PivotControls anchor={[0, 1, 0]} lineWidth={2} scale={1} depthTest={false}>
        <mesh ref={sphereRef} position={[-3, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="red" />
          <Html
            wrapperClass="label"
            position={[1, 1, 0]}
            occlude={[sphereRef, cubeRef]} // when the object is occluded, the html will not be visible
            center // center is to center the pivot 
            distanceFactor={5}> This is a sphere</Html> {/*  distanceFactor is to control prespective. */}
        </mesh>
      </PivotControls>
      <mesh ref={cubeRef} scale={2} rotation-y={Math.PI / 4} position={[2, 0, 0]}>
        {/* <sphereGeometry args={[1, 32, 32]} /> */}
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} mode="scale" /> {/* mode is rotate, translate, scale */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -1, 0]} scale={10}> {/* roation to - to see the face */}
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Custom verticesCount={10} />
    </>
  )
}

export default Experience