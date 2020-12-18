import React, {Suspense, useRef, useState} from "react";
import {Canvas, extend, useLoader, useFrame, useThree} from "react-three-fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

extend({OrbitControls})

function Loading() {
    return (
        <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <sphereGeometry attach="geometry" args={[1, 16, 16]}/>
            <meshStandardMaterial
                attach="material"
                color="white"
                transparent
                opacity={0.6}
                roughness={1}
                metalness={0}
            />
        </mesh>
    );
}

// function Compass1Red() {
//     const materials = useLoader(MTLLoader, 'models/map_all.mtl')
//     const object = useLoader(OBJLoader, 'models/map_all.obj', loader => {
//         // materials.preload()
//         // loader.setMaterials(materials)
//     })
//     console.log(materials);
//     return <primitive onclick={alert('Click!')} object={object}/>
// }
//
// function Compass1Green() {
//     const {
//         camera,
//         gl: {domElement}
//     } = useThree()
//     const group = useRef();
//     const {nodes} = useLoader(GLTFLoader, "models/arwing.glb");
//     console.log(nodes);
//     useFrame(() => {
//         // group.current.rotation.y += 0.004;
//     });
//     return (
//         <>
//             <group ref={group}>
//                 <mesh
//                     position={[0, 0, 1]}
//                     visible
//                     // geometry={nodes.Default.geometry}
//                     onClick={(e) => console.log("click1")}
//                 >
//                     <meshStandardMaterial
//                         attach="material"
//                         color="green"
//                         roughness={0.3}
//                         metalness={0.3}
//                     />
//                 </mesh>
//             </group>
//
//             <orbitControls args={[camera, domElement]}/>
//         </>
//     );
// }
function Compass1Black(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [3, 3, 3]}
            // onClick={(e) => setActive(!active) & this.setState({
            //     compass1BlackEnter: true,
            //     compass1BlueEnter: false,
            //     compass1GreenEnter: false,
            //     compass1RedEnter: false,
            // })}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxBufferGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? 'black' : 'black'}/>
        </mesh>
    )
}

function Compass1Red(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [3, 3, 3]}
            // onClick={(e) => setActive(!active) & this.setState({
            //     compass1BlackEnter: false,
            //     compass1BlueEnter: false,
            //     compass1GreenEnter: false,
            //     compass1RedEnter: true,
            // })}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxBufferGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? 'red' : 'red'}/>
        </mesh>
    )
}

function Compass1Green(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [3, 3, 3]}
            // onClick={(e) => setActive(!active) & this.setState({
            //     compass1BlackEnter: false,
            //     compass1BlueEnter: false,
            //     compass1GreenEnter: true,
            //     compass1RedEnter: false,
            // })}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxBufferGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? 'green' : 'green'}/>
        </mesh>
    )
}

function Compass1Blue(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [3, 3, 3]}
            // onClick={(e) => setActive(!active) & this.setState({
            //     compass1BlackEnter: false,
            //     compass1BlueEnter: true,
            //     compass1GreenEnter: false,
            //     compass1RedEnter: false,
            // })}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxBufferGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={hovered ? 'blue' : 'blue'}/>
        </mesh>
    )
}

// eslint-disable-next-line react-hooks/rules-of-hooks

class Compass extends React.Component {
    state = {
        password: '',
        compass1BlackEnter: false,
        compass1BlueEnter: false,
        compass1GreenEnter: false,
        compass1RedEnter: false,
        compass2BlackEnter: false,
        compass2GreenEnter: false,
        compass2RedEnter: false,
        compass2YellowEnter: false,
    };

    render() {
        return (
            <>
                <Canvas>
                    <directionalLight intensity={0.5}/>
                    <Suspense fallback={<Loading/>}>
                        <Compass1Red onClick={console.log('d')} position={[-5, 0, 0]}/>
                        <Compass1Green position={[4, 0, 0]}/>
                        <Compass1Black position={[-5, -5, 0]}/>
                        <Compass1Blue position={[4, -5, 0]}/>
                    </Suspense>
                </Canvas>
            </>
        );
    }
}
export default Compass;
