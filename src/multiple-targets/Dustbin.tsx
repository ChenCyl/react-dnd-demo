import React, { FC, useState } from 'react'
import { DropTargetMonitor, useDrop } from 'react-dnd'
import { TYPE, IDragItem } from '.'

interface IDustbinProps {
  accept: TYPE[]
}

const Dustbin: FC<IDustbinProps> = ({ accept }) => {

  const [lastDropItem, setLastDropItem] = useState<IDragItem>()

  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: (item: IDragItem) => {
      console.log('... [drop] drop')
      setLastDropItem(item)
    },
    hover(item, monitor) {
      console.log('... [drop] hover')
    },
    canDrop(item: IDragItem, monitor: DropTargetMonitor) {
      console.log('... [drop] canDrop')
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
        color: 'white',
        backgroundColor: canDrop? (isOver ? 'green' : 'yellowgreen'): 'black'
      }}
    >
      <div>{isOver? 'Release to drop' : `This dustbin accepts: ${accept}`}</div>
      {lastDropItem? (
        <div>
          {`Last dropped: ${JSON.stringify(lastDropItem)}`}
        </div>
      ) : null}
    </div>
  )
}

export default Dustbin
