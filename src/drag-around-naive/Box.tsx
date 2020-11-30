import React, { FC, useState } from 'react'
import { DragSourceMonitor, useDrag } from 'react-dnd'
import { IDragItem, IDropResult } from './Container'

interface IBoxProps {
  name: string,
  hideSourceOnDrag: boolean,
  initTop: number,
  initLeft: number
}

const Box: FC<IBoxProps> = ({ name, hideSourceOnDrag, initLeft, initTop }) => {

  const [top, setTop] = useState(initTop)
  const [left, setLeft] = useState(initLeft)

  const [{ isDragging }, drag] = useDrag({
    item: {
      name,
      type: 'Box'
    },
    // canDrag(monitor) {
    //   console.log('=== [drag] canDrag')
    //   return true
    // },
    begin(monitor) {
      console.log('=== [drag] begin')
    },
    // isDragging(monitor) {
    //   console.log('=== [drag] isDragging')
    //   return monitor.getItem().name === name
    // },
    end(item: IDragItem | undefined, monitor: DragSourceMonitor) {
      console.log('=== [drag] end')
      const dropResult = monitor.getDropResult() as IDropResult
      if (dropResult) {
        setTop(prev => prev + (dropResult.topDiff || 0))
        setLeft(prev => prev + (dropResult.leftDiff || 0)) 
      }
      // console.log(dropResult)
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <div 
      ref={drag}
      style={{
        position: 'absolute',
        border: '1px solid black',
        display: "inline-block",
        opacity: isDragging && hideSourceOnDrag? 0 : 1,
        top,
        left
      }}
    >
      {name}
    </div>
  )
}

export default Box
