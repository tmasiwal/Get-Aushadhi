import React, { useEffect, useState } from 'react'
import { Button, Card, Input, InputGroup, InputLeftElement ,Flex,Spacer,Box} from '@chakra-ui/react';
import { FaSearch,FaArrowRight } from 'react-icons/fa';
import { CgEnter } from 'react-icons/cg';
import axios from 'axios'
import Cards from './card';
const Home = () => {
const [data,setData]=useState()


 
function getData() {
  axios(`https://api-get-aushadhi-data.onrender.com/medicineData`)
  .then((res)=>{setData(res.data)})
}
  function handleSubmit() {

  }
  useEffect(()=>{
    getData()
  },[])
  console.log(data)
  return (
    <div>
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none" children={<FaSearch />} />
        <Input type="text" placeholder="Search" />
        <Button color={"blue"} onClick={handleSubmit}><CgEnter/></Button>
      </InputGroup>

      <Flex gap={"2"}>
  <Box >
  {data&&<Cards {...data[1]} />}
  </Box>
  <Spacer />
  <Box >
  {data&&<Cards {...data[0]} />}
  </Box>
  <Spacer />
  <Box >
  {data&&<Cards {...data[3]} />}
  </Box>
</Flex>
      
     
    </div>
  )
}

export default Home
