import React, { FC } from 'react'
import { DropTargetMonitor, useDrop } from 'react-dnd'


interface IDragItem {
  name: string,
  type: string
}

const Dustbin: FC = () => {

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'Box',
    drop: (item: IDragItem) => {
      alert(`You dropped ${item.name} into Dustbin!`)
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })

  return (
    <div
      ref={drop}
      style={{
        width: 300,
        height: 300,
        backgroundColor: canDrop? (isOver ? 'green' : 'yellowgreen'): 'black'
      }}
    >
      <div style={{color: "white"}}>{isOver? 'Release to drop' : 'Drag a box here'}</div>
    </div>
  )
}

export default Dustbin
