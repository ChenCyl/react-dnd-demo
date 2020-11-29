import React, { FC } from 'react'
import { DropTargetMonitor, useDrop } from 'react-dnd'
import { TYPE, IDragItem } from '.'

interface IDustbinProps {
  accept: TYPE[]
}

const Dustbin: FC<IDustbinProps> = ({ accept }) => {

  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: (item: IDragItem) => {
      console.log('... [drop] drop')
      // alert(`You dropped ${item.name} into Dustbin!`)
    },
    hover(item, monitor) {
      console.log('... [drop] hover')
    },
    canDrop(item: IDragItem, monitor: DropTargetMonitor) {
      console.log('... [drop] canDrop')
      // console.log('accept', accept)
      // console.log('item', item.type)
      return true
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
        border: '1px solid white',
        backgroundColor: canDrop? (isOver ? 'green' : 'yellowgreen'): 'black'
      }}
    >
      <div style={{color: "white"}}>{isOver? 'Release to drop' : `This dustbin accepts: ${accept}`}</div>
      
      {/* TODO： <div>Last dropped: {</div> */}
    </div>
  )
}

export default Dustbin
