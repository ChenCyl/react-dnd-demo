import React, { useRef } from 'react'
import { useDrag, useDrop, DropTargetMonitor, DragSourceMonitor } from 'react-dnd'
import { ItemTypes } from '.'
import { XYCoord } from 'dnd-core'

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}

export interface CardProps {
  id: any
  text: string
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
  index: number
  id: string
  type: string
}
export const Card: React.FC<CardProps> = ({ id, text, index, moveCard }) => {
  const ref = useRef<HTMLDivElement>(null)

  const [{isDragging}, drag] = useDrag({
    item: {
      index,
      id,
      type: ItemTypes.CARD
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover: (item: DragItem, monitor: DropTargetMonitor) => {
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) return

      const clientRect = ref.current?.getBoundingClientRect()
      const clientOffset = monitor.getClientOffset()
      
      if (clientRect && clientOffset) {
        
        const rectMiddleY = (clientRect.top + clientRect.bottom) / 2
        const offsetY = clientOffset.y
        
        if (
          (dragIndex < hoverIndex && offsetY > rectMiddleY) ||
          (dragIndex > hoverIndex && offsetY < rectMiddleY)
        ) {
          moveCard(dragIndex, hoverIndex)
          item.index = index
        }
      }
    }
  })

  drag(drop(ref))

  return (
    <div ref={ref} style={{ ...style, opacity: isDragging? 0:1 }}>
      {text}
    </div>
  )
}
