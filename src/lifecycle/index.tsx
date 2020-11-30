import React, { memo } from 'react'
import Dustbin from './Dustbin'
import Box from './Box'

export const Container: React.FC = memo(function Container() {
  return (
    <div>
      <div>
        <Dustbin />
      </div>
      <div>
        <Box name="Glass" />
      </div>
    </div>
  )
})

export default Container