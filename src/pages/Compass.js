import React, {Suspense, useRef} from "react";
import {Canvas, extend,useLoader, useFrame, useThree} from "react-three-fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls })

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

function Compass1Red() {
    const {
        camera,
        gl: {domElement}
    } = useThree()
    const group = useRef();
    const {nodes} = useLoader(GLTFLoader, "models/arwing.glb");
    useFrame(() => {
        // group.current.rotation.y += 0.004;
    });
    return (
        <>
            <group ref={group}>
                <mesh
                    visible
                    geometry={nodes.Default.geometry}
                    onClick={(e) => console.log("click")}
                >
                    <meshStandardMaterial
                        attach="material"
                        color="white"
                        roughness={0.3}
                        metalness={0.3}
                    />
                </mesh>
            </group>

            <orbitControls args={[camera, domElement]}/>
        </>
    );
}

function Compass1Green() {
    const {
        camera,
        gl: {domElement}
    } = useThree()
    const group = useRef();
    const {nodes} = useLoader(GLTFLoader, "models/arwing.glb");
    useFrame(() => {
        // group.current.rotation.y += 0.004;
    });
    return (
        <>
            <group ref={group}>
                <mesh
                    position={[10,0,1]}
                    visible
                    geometry={nodes.Default.geometry}
                    onClick={(e) => console.log("click1")}
                >
                    <meshStandardMaterial
                        attach="material"
                        color="white"
                        roughness={0.3}
                        metalness={0.3}
                    />
                </mesh>
            </group>

            <orbitControls args={[camera, domElement]}/>
        </>
    );
}

class Compass extends React.Component {
    state ={
        password: '',
        doorEnter: false,
        arEnter:false,
    };
    render(){
    return (
        <>
            <Canvas>
                <directionalLight intensity={0.5}/>
                <Suspense fallback={<Loading/>}>
                    <Compass1Red/>
                    <Compass1Green/>
                </Suspense>

            </Canvas>
        </>
    );}
}
export default Compass;
