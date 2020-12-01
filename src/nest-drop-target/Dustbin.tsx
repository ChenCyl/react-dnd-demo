import React, { useState } from 'react'
import { DropTargetMonitor, useDrop } from 'react-dnd'
import { ItemTypes } from '.'

function getStyle(backgroundColor: string): React.CSSProperties {
  return {
    border: '1px solid rgba(0,0,0,0.2)',
    minHeight: '8rem',
    minWidth: '8rem',
    color: 'white',
    backgroundColor,
    padding: '2rem',
    paddingTop: '1rem',
    margin: '1rem',
    textAlign: 'center',
    float: 'left',
    fontSize: '1rem',
  }
}

export interface DustbinProps {
  greedy?: boolean
}

export interface DustbinState {
  hasDropped: boolean
  hasDroppedOnChild: boolean
}

export const Dustbin: React.FC<DustbinProps> = ({ greedy, children }) => {
  const [hasDropped, setHasDropped] = useState(false)
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false)

  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop()
      // 当嵌套存在时 可以将 didDrop 理解为 hasDroppedOnChild
      if (greedy) {
        setHasDropped(true)
        setHasDroppedOnChild(didDrop)
      } else {
        if (!didDrop) setHasDropped(true)
      }
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: greedy? monitor.isOver() : monitor.isOver({shallow: true})
    })
  })

  const text = greedy ? 'greedy' : 'not greedy'
  const backgroundColor = isOver? 'lightblue' : 'rgba(0, 0, 0, .5)'

  return (
    <div ref={drop} style={getStyle(backgroundColor)}>
      {text}
      <br />
      {hasDropped && <span>dropped {hasDroppedOnChild && ' on child'}</span>}

      <div>{children}</div>
    </div>
  )
}
