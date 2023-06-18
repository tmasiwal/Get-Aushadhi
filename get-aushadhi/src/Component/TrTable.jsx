import React, { useState } from 'react'
import {

    Tr,
   
    Td,
   Image,Box, Button
  } from '@chakra-ui/react'
const TrTable = (data) => {

    const [qunt,setqunt]=useState(data.quantity)
    const handleChange=(e)=>{
setqunt(qunt+e)
    }
  return (
    
      <Tr >
        <Td ><Box >
  <Image  boxSize='100px' src={data.image[0]} alt={data.name} />
</Box></Td>
        <Td>{data.name}</Td>
        <Td ><Button  onClick={()=>{handleChange(1)}}>+</Button> {qunt} <Button isDisabled={qunt==1} onClick={()=>{handleChange(-1)}}>-</Button></Td>
        <Td >₹{data.price}</Td>
      </Tr>
    
  )
}

export default TrTable
