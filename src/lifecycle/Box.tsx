import React, { FC } from 'react'
import { DragSourceMonitor, useDrag } from 'react-dnd'

interface IBoxProps {
  name: string
}

const Box: FC<IBoxProps> = ({name}) => {

  const [{ 
    isDragging, 
    initialClientOffset,
    clientOffset,
    initialSourceClientOffset,
    sourceClientOffset,
    differenceFromInitialOffset
  }, drag] = useDrag({
    item: {
      name,
      type: 'Box'
    },
    canDrag(monitor) {
      console.log('=== [drag] canDrag')
      console.log('getInitialClientOffset', monitor.getInitialClientOffset());
      console.log('getClientOffset', monitor.getClientOffset());
      console.log('getInitialSourceClientOffset', monitor.getInitialSourceClientOffset())
      console.log('getSourceClientOffset', monitor.getSourceClientOffset())
      console.log('getDifferenceFromInitialOffset', monitor.getDifferenceFromInitialOffset());
      return true
    },
    begin(monitor) {
      console.log('=== [drag] begin')
      console.log('getInitialClientOffset', monitor.getInitialClientOffset());
      console.log('getClientOffset', monitor.getClientOffset());
      console.log('getInitialSourceClientOffset', monitor.getInitialSourceClientOffset())
      console.log('getSourceClientOffset', monitor.getSourceClientOffset())
      console.log('getDifferenceFromInitialOffset', monitor.getDifferenceFromInitialOffset());
    },
    isDragging(monitor) {
      console.log('=== [drag] isDragging')
      console.log('getInitialClientOffset', monitor.getInitialClientOffset());
      console.log('getClientOffset', monitor.getClientOffset());
      console.log('getInitialSourceClientOffset', monitor.getInitialSourceClientOffset())
      console.log('getSourceClientOffset', monitor.getSourceClientOffset())
      console.log('getDifferenceFromInitialOffset', monitor.getDifferenceFromInitialOffset());
      return monitor.getItem().name === name
    },
    end(item, monitor) {
      console.log('=== [drag] end')
      console.log('getInitialClientOffset', monitor.getInitialClientOffset());
      console.log('getClientOffset', monitor.getClientOffset());
      console.log('getInitialSourceClientOffset', monitor.getInitialSourceClientOffset())
      console.log('getSourceClientOffset', monitor.getSourceClientOffset())
      console.log('getDifferenceFromInitialOffset', monitor.getDifferenceFromInitialOffset());
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
      clientOffset: monitor.getClientOffset(),
      initialClientOffset: monitor.getInitialClientOffset(),
      initialSourceClientOffset: monitor.getInitialSourceClientOffset(),
      sourceClientOffset: monitor.getSourceClientOffset(),
      differenceFromInitialOffset: monitor.getDifferenceFromInitialOffset()
    })
  })

  // 结论：
  // DragSourceMonitor 里可以拿到两个 initial offset
  // 只有当 drag source 没有 didDrop() 时，才会拿到所有值

  // collect 里并不能拿到期望的值，它和 didDrop 一样是会随着生命周期变化的，把他们理解成钩子会比较好

  return (
    <div 
      ref={drag}
      style={{
        opacity: isDragging? 0.4 : 1,
        border: '1px solid black',
        display: "inline-block"
      }}
    >
      {name}
      <div>
        {`
          ${JSON.stringify(clientOffset)}
          ${JSON.stringify(initialClientOffset)}
          ${JSON.stringify(initialSourceClientOffset)}
          ${JSON.stringify(sourceClientOffset)}
          ${JSON.stringify(differenceFromInitialOffset)}
        `}   
      </div>
    </div>
  )
}

export default Box
