import { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"

const Index = ({ verticesCount }: { verticesCount: number }) => {
    const finalcount = verticesCount * 3
    const georef = useRef<any>(null);

    const positions = useMemo((
    ) => {
        const positions = new Float32Array(finalcount * 3) // 3 for x, y, z

        for (let i = 0; i < finalcount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 3 // -1.5 to 1.5
        }
        return positions // return needed so that the line 6 is re-executed when verticesCount changes

    }, [verticesCount])

    useEffect(() => {
        georef.current.computeVertexNormals();
    }, [])

    return (
        <mesh>
            <bufferGeometry ref={georef}>
                <bufferAttribute
                    attach="attributes-position"
                    count={finalcount}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <meshStandardMaterial color="red" side={THREE.DoubleSide} />
        </mesh>
    )
}

export default Index