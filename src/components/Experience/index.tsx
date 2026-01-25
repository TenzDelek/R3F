
const Experience = () => {
  return (
    <>
      <mesh scale={2} rotation-y={Math.PI / 4} position={[0, 0, 0]}>
        {/* <sphereGeometry args={[1, 32, 32]} /> */}
        <boxGeometry scale={2} />
        <meshBasicMaterial wireframe color="mediumpurple" />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[0, -1, 0]} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  )
}

export default Experience