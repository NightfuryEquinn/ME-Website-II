import DissolveMaterial from "../../material/DissolveMaterial"

import { animated } from "@react-spring/three"
import { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Html } from "@react-three/drei"

export default function R2( { controls, geometry, material } ) {
  const [ hover, setHover ] = useState( false )
  const [ clicked, setClicked ] = useState( false )

  const theMesh = useRef()

  useFrame(() => {
    if( clicked ) {
      theMesh.current.position.lerp(
        new THREE.Vector3( 15, 0, 10 ), 0.015
      )
    } else {
      theMesh.current.position.lerp(
        new THREE.Vector3( 10, -6, 0 ), 0.015
      )
    }
  })

  return <>
    <animated.mesh
      ref={ theMesh }
      name="R2"
      position={ [ 10, -6, 0 ] } 
      rotation={ [ Math.PI, 0, 0 ] } 
      geometry={ geometry } 
      onClick={ ( e ) => {
        setClicked( true )
        controls.setLookAt(
          25, 0, -50,
          25, 0, -50,
          true
        )
        e.stopPropagation()
      }}
      onPointerMissed={ ( e ) => {
        setClicked( false )
        controls.setLookAt(
          0, 0, 50,
          0, 0, 0,
          true
        )
        e.stopPropagation()
      }}
      onPointerEnter={ ( e ) => {
        setHover( true )

        e.stopPropagation()
      }} 
      onPointerLeave={ ( e ) => {
        setHover( false )

        e.stopPropagation()
      }}
    >
      <DissolveMaterial 
        baseMaterial={ material }
        visible={ hover ? false : true }
      />

      <Html
        position={ [ 13, 1, 0 ] }
        center
        distanceFactor={ 50 }
      >
        <div className={`relative pl-4 border-white duration-300 ease-in-out ${ hover ? "border-l-4" : "border-l-0" }`}>
          <h2 
            data-gw-string="Archery" 
            className={`glitched-title font-made-light text-4xl text-white whitespace-nowrap delay-200 duration-300 ease-in-out ${ hover ? "opacity-100" : "opacity-0" }`}
          >
            Archery
          </h2>
        </div>
      </Html>
    </animated.mesh>
  </>
}
