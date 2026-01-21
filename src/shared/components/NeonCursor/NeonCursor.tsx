// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import { useCallback, useEffect, useState } from 'react'

import { motion, useAnimation } from 'framer-motion'

import './neoncursor.css'

const NeonCursor = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [ready, setReady] = useState(false)

  const trailControls = useAnimation()
  const glowControls = useAnimation()

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY })
    setReady(true)
  }, [])

  const handleMouseDown = () => setIsClicking(true)
  const handleMouseUp = () => setIsClicking(false)

  const handleMouseOver = useCallback(
    (e) => {
      const target = e.target

      if (!target?.matches) return

      if (target.matches('a, button, input, [data-hover="true"]')) {
        void trailControls.start({
          scale: 1.5,
          borderColor: 'rgb(255, 150, 50)',
          borderWidth: '3px'
        })
        void glowControls.start({
          scale: 2,
          opacity: 0.8
        })
      }
    },
    [trailControls, glowControls]
  )

  const handleMouseOut = useCallback(() => {
    void trailControls.start({
      scale: 1,
      borderColor: 'rgb(236, 101, 23)',
      borderWidth: '2px'
    })
    void glowControls.start({
      scale: 1,
      opacity: 0.4
    })
  }, [trailControls, glowControls])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [handleMouseMove, handleMouseOver, handleMouseOut])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  if (!enabled || !ready) return null

  return (
    <div className="neon-cursor-container">
      <motion.div
        className="cursor-main"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isClicking ? 0.8 : 1
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 400,
          mass: 0.5
        }}
      />
      <motion.div
        className="cursor-trail"
        animate={{
          x: position.x - 17,
          y: position.y - 17
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.8
        }}
      />
      <motion.div
        className="cursor-glow"
        animate={{
          x: position.x - 34,
          y: position.y - 34
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 150,
          mass: 1
        }}
      />
    </div>
  )
}

export default NeonCursor
