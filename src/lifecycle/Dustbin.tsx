import React, { FC } from 'react'
import { DropTargetMonitor, useDrop } from 'react-dnd'


interface IDragItem {
  name: string,
  type: string
}

const Dustbin: FC = () => {

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'Box',
    canDrop(item, monitor) { // 非常重要的 offset 转折点
      // 行进过程中的 offset 可以通过 canDrop 和 hover 拿到
      console.log('... [drop] canDrop')
      console.log('getInitialClientOffset', monitor.getInitialClientOffset());
      console.log('getClientOffset', monitor.getClientOffset());
      console.log('getInitialSourceClientOffset', monitor.getInitialSourceClientOffset())
      console.log('getSourceClientOffset', monitor.getSourceClientOffset())
      console.log('getDifferenceFromInitialOffset', monitor.getDifferenceFromInitialOffset());
      return true
    },
    hover(item, monitor) {
      console.log('... [drop] hover')
      // offset 与 canDrop 一样
      // console.log('getInitialClientOffset', monitor.getInitialClientOffset());
      // console.log('getClientOffset', monitor.getClientOffset());
      // console.log('getInitialSourceClientOffset', monitor.getInitialSourceClientOffset())
      // console.log('getSourceClientOffset', monitor.getSourceClientOffset())
      // console.log('getDifferenceFromInitialOffset', monitor.getDifferenceFromInitialOffset());
    },
    drop: (item: IDragItem, monitor: DropTargetMonitor) => {
      // monitor.didDrop 会阻挡 offset 的传播
      console.log('... [drop] drop')
      console.log('getInitialClientOffset', monitor.getInitialClientOffset());
      console.log('getClientOffset', monitor.getClientOffset());
      console.log('getInitialSourceClientOffset', monitor.getInitialSourceClientOffset())
      console.log('getSourceClientOffset', monitor.getSourceClientOffset())
      console.log('getDifferenceFromInitialOffset', monitor.getDifferenceFromInitialOffset());
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
        backgroundColor: canDrop? (isOver ? 'green' : 'yellowgreen'): 'black'
      }}
    >
      <div style={{color: "white"}}>{isOver? 'Release to drop' : 'Drag a box here'}</div>
    </div>
  )
}

export default Dustbin
