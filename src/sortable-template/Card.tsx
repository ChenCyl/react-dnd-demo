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

  return (
    <div style={{ ...style}}>
      {text}
    </div>
  )
}
