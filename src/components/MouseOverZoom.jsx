import React, { useRef, useEffect, useState } from 'react'

const MouseOverZoom = ({
  imageSrc,
  canvasWidth = 200,
  canvasHeight = 200,
  radius = 25,
}) => {
  const sourceRef = useRef(null)
  const targetRef = useRef(null)
  const cursorRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    isActive: false,
  })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sourceRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isActive: true,
      })
    }

    const handleMouseOut = () => {
      setMousePosition((prevState) => ({ ...prevState, isActive: false }))
    }

    const sourceElement = sourceRef.current
    sourceElement.addEventListener('mousemove', handleMouseMove)
    sourceElement.addEventListener('mouseout', handleMouseOut)

    return () => {
      sourceElement.removeEventListener('mousemove', handleMouseMove)
      sourceElement.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  useEffect(() => {
    const { x, y, isActive } = mousePosition

    const cursor = cursorRef.current
    if (isActive && cursor) {
      cursor.style.left = `${x - radius}px`
      cursor.style.top = `${y - radius}px`
      cursor.style.display = 'block'
    } else {
      if (cursor) cursor.style.display = 'none'
    }

    const targetCtx = targetRef.current.getContext('2d')
    if (!isActive) {
      targetCtx.clearRect(0, 0, canvasWidth, canvasHeight)
      return
    }

    const image = sourceRef.current
    const imageRatio = image.naturalWidth / image.offsetWidth
    const zoomBounds = {
      left: x - radius,
      top: y - radius,
      width: radius * 2,
      height: radius * 2,
    }

    targetCtx.drawImage(
      image,
      Math.max(0, zoomBounds.left * imageRatio),
      Math.max(0, zoomBounds.top * imageRatio),
      zoomBounds.width * imageRatio,
      zoomBounds.height * imageRatio,
      0,
      0,
      canvasWidth,
      canvasHeight
    )
  }, [mousePosition, canvasWidth, canvasHeight, radius])

  return (
    <div className='relative grid place-items-center'>
      <img
        ref={sourceRef}
        src={imageSrc}
        alt='Zoomable'
        style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
        className='block max-w-full h-auto border-b-[5px] border-black'
      />
      <div
        ref={cursorRef}
        style={{
          position: 'absolute',
          border: '1px solid black',
          borderRadius: '50%',
          pointerEvents: 'none',
          display: 'none',
          width: radius * 2,
          height: radius * 2,
        }}
      ></div>
      <canvas
        ref={targetRef}
        width={canvasWidth}
        height={canvasHeight}
        className='border-[5px] border-black mt-[-40px] relative z-10 bg-[#E5E7EB]'
      ></canvas>
    </div>
  )
}

export default MouseOverZoom
