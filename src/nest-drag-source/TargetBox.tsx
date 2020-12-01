import React, { useState, useCallback } from 'react'
import { DropTargetMonitor, useDrop } from 'react-dnd'
import { Colors } from '.'
import { DragItem } from '.'

const style: React.CSSProperties = {
  border: '1px solid gray',
  height: '15rem',
  width: '15rem',
  padding: '2rem',
  textAlign: 'center',
}

export const TargetBox: React.FC = () => {

  const [lastDrop, setLastDrop] = useState<DragItem>()

  const [, drop] = useDrop({
    accept: 'Box',
    drop: (item: DragItem, monitor: DropTargetMonitor) => {
      console.log('drop', item)
      setLastDrop(item)
    }
  })

  return (
    <div ref={drop} style={{ ...style }}>
      <p>Drop here.</p>
      {lastDrop? <p>Last dropped: {lastDrop.color}</p> : null}
    </div>
  )
}