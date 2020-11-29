import React, { FC } from 'react'
import { DragSourceMonitor, useDrag } from 'react-dnd'

interface IBoxProps {
  name: string
}

const Box: FC<IBoxProps> = ({name}) => {

  const [{ isDragging }, drag] = useDrag({
    item: {
      name,
      type: 'Box'
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <div 
      ref={drag}
      style={{
        opacity: isDragging? 0.4 : 1,
        border: '1px solid black',
        display: "inline-block"
      }}
    >
      {name}
    </div>
  )
}

export default Box
