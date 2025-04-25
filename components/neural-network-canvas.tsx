"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    canvasRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5

    const nodes: THREE.Mesh[] = []
    const connections: THREE.Line[] = []
    const layers = [6, 8, 8, 4] // Number of nodes in each layer
    const layerDistance = 10
    const nodeGeometry = new THREE.SphereGeometry(0.3, 16, 16)

    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x00b7ff })
    const activatedNodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00b7ff,
      transparent: true,
      opacity: 0.3,
    })

    layers.forEach((nodeCount, layerIndex) => {
      const layerNodes: THREE.Mesh[] = []

      for (let i = 0; i < nodeCount; i++) {
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone())
        const yPos = (i - (nodeCount - 1) / 2) * 2
        node.position.set(layerIndex * layerDistance - 15, yPos, 0)
        scene.add(node)
        layerNodes.push(node)
        nodes.push(node)
      }

      if (layerIndex > 0) {
        const prevLayerNodes = nodes.slice(
          nodes.length - layerNodes.length - layers[layerIndex - 1],
          nodes.length - layerNodes.length,
        )

        layerNodes.forEach((currentNode) => {
          prevLayerNodes.forEach((prevNode) => {
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([prevNode.position, currentNode.position])
            const line = new THREE.Line(lineGeometry, lineMaterial.clone())
            scene.add(line)
            connections.push(line)
          })
        })
      }
    })

    const animateNetwork = () => {
      const time = Date.now() * 0.001

      nodes.forEach((node, index) => {
        const pulseSpeed = 0.5
        const pulseIntensity = Math.sin(time * pulseSpeed + index * 0.2) * 0.5 + 0.5
        ;(node.material as THREE.MeshBasicMaterial).color.setRGB(
          0.0 + pulseIntensity * 1.0,
          0.7 + pulseIntensity * 0.3,
          1.0,
        )
        node.scale.setScalar(0.8 + pulseIntensity * 0.4)
      })

      connections.forEach((line, index) => {
        const pulseSpeed = 0.3
        const pulseDelay = index * 0.01
        const pulseIntensity = Math.sin(time * pulseSpeed + pulseDelay) * 0.5 + 0.5
        ;(line.material as THREE.LineBasicMaterial).opacity = 0.1 + pulseIntensity * 0.3
      })
    }

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      animateNetwork()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", handleResize)

      nodes.forEach((node) => {
        node.geometry.dispose()
        ;(node.material as THREE.Material).dispose()
      })
      connections.forEach((line) => {
        line.geometry.dispose()
        ;(line.material as THREE.Material).dispose()
      })
    }
  }, [])

  return <div ref={canvasRef} className="absolute inset-0" />
}
