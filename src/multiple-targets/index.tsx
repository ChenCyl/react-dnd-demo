import React from 'react'
import Dustbin from './Dustbin'
import Box from './Box'

export enum TYPE {
  GLASS = "glass",
  FOOD = "food",
  PAPER = "paper",
  __NATIVE_URL__ = "__NATIVE_URL__",
  __NATIVE_FILE__ = "__NATIVE_FILE__"
}

export interface IDragItem {
  name: string,
  type: TYPE
}

export const Container: React.FC = () => {
  return (
    <div>
      <div style={{display: "flex", flexWrap: 'wrap'}}>
        <Dustbin accept={[TYPE.GLASS]} />
        <Dustbin accept={[TYPE.FOOD]} />
        <Dustbin accept={[TYPE.PAPER, TYPE.GLASS, TYPE.__NATIVE_URL__]} />
        <Dustbin accept={[TYPE.PAPER, TYPE.__NATIVE_FILE__]}/>
      </div>
      <div>
        <Box name="Bottle" type={TYPE.GLASS}/>
        <Box name="Banana" type={TYPE.FOOD} />
        <Box name="Magazine" type={TYPE.PAPER} />
      </div>
    </div>
  )
}

export default Container