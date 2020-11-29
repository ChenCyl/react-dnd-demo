import React, { FC, useState } from 'react'
import { DragSourceMonitor, useDrag } from 'react-dnd'
import { TYPE, IDragItem } from '.'

interface IBoxProps {
  name: string
  type: TYPE
}

const Box: FC<IBoxProps> = ({name, type}) => {
  
  const [didDrop, setDidDrop] = useState(false)

  const [{ isDragging }, drag] = useDrag({
    item: {
      name,
      type
    },
    begin(monitor) {
      console.log('=== [drag] begin')
    },
    end(item: IDragItem | undefined, monitor: DragSourceMonitor) {
      console.log('=== [drag] end')
      setDidDrop(monitor.didDrop())
    },
    canDrag(monitor) {
      console.log('=== [drag] canDrag')
      return true
    },
    isDragging(monitor) {
      console.log('=== [drag] isDragging')
      return monitor.getItem().name === name
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
      // didDrop: monitor.didDrop()
    })
  })

  return (
    <div 
      ref={drag}
      style={{
        opacity: isDragging? 0.4 : 1,
        border: '1px solid black',
        textDecoration: didDrop ? 'line-through': 'none',
        display: "inline-block"
      }}
    >
      {name}
    </div>
  )
}

export default Box
