import React, { useState, useCallback, useMemo } from 'react'
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { Colors } from '.'

const style: React.CSSProperties = {
  border: '1px dashed gray',
  padding: '0.5rem',
  margin: '0.5rem',
}

export interface SourceBoxProps {
  color?: string
  onToggleForbidDrag?: () => void
}

export const SourceBox: React.FC<SourceBoxProps> = ({ color, children }) => {
  const [forbidDrag, setForbidDrag] = useState(false)

  const onToggleForbidDrag = useCallback(() => {
    setForbidDrag(!forbidDrag)
  }, [forbidDrag])

  const backgroundColor = useMemo(() => {
    switch (color) {
      case Colors.YELLOW:
        return 'lightgoldenrodyellow'
      case Colors.BLUE:
        return 'lightblue'
      default:
        return 'lightgoldenrodyellow'
    }
  }, [color])

  const containerStyle = useMemo(
    () => ({
      ...style,
      backgroundColor,
      cursor: forbidDrag ? 'default' : 'move',
    }),
    [forbidDrag, backgroundColor],
  )

  return (
    <div style={containerStyle}>
      <input
        type="checkbox"
        checked={forbidDrag}
        onChange={onToggleForbidDrag}
      />
      <small>Forbid drag</small>
      {children}
    </div>
  )
}