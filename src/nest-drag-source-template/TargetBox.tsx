import React, { useState, useCallback } from 'react'
import { useDrop } from 'react-dnd'
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

  return (
    <div style={{ ...style }}>
      <p>Drop here.</p>
    </div>
  )
}