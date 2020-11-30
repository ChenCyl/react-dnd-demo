import React, { FC } from 'react'
import { DropTargetMonitor, useDrop } from 'react-dnd'
import Box from './Box'


export interface IDragItem {
  name: string,
  type: string
}

interface IContainerProps {
  hideSourceOnDrag: boolean
}

export interface IDropResult {
  topDiff?: number
  leftDiff?: number
}

const Container: FC<IContainerProps> = ({ hideSourceOnDrag }) => {

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'Box',
    hover(item, monitor) {
      // console.log('... [drop] hover')
    },
    canDrop(item, monitor) {
      console.log('... [drop] canDrop')
      return true
    },
    drop: (item: IDragItem, monitor: DropTargetMonitor): IDropResult => {
      console.log('... [drop] drop')
      return {
        leftDiff: monitor.getDifferenceFromInitialOffset()?.x,
        topDiff: monitor.getDifferenceFromInitialOffset()?.y
      }
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })

  return (
    <div ref={drop} style={{
      position: 'relative',
      width: 300,
      height: 300,
      border: '1px solid black'
    }}>
      <Box name="Drag me around" hideSourceOnDrag={hideSourceOnDrag} initTop={0} initLeft={30}></Box>
      <Box name='Drag me too' hideSourceOnDrag={hideSourceOnDrag} initTop={100} initLeft={0}></Box>
    </div>
  )
}

export default Container
