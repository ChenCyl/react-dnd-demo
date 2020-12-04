import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '.'

const style: React.CSSProperties = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  backgroundColor: 'black'
}

export const Dustbin: React.FC = () => {


  return (
    <div style={{ ...style }}>
      {'Release to drop'}
    </div>
  )
}
