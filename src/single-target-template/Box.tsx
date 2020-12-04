import React from 'react'
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { ItemTypes } from '.'

const style: React.CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

interface BoxProps {
  name: string
}

export const Box: React.FC<BoxProps> = ({ name }) => {


  return (
    <div style={{ ...style }}>
      {name}
    </div>
  )
}
