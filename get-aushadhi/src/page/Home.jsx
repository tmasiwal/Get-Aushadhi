import React, { useEffect, useState } from 'react'
import { Button, Card, Input, InputGroup, InputLeftElement ,Flex,Spacer,Box, Center} from '@chakra-ui/react';
import { FaSearch,FaArrowRight } from 'react-icons/fa';
import { CgEnter } from 'react-icons/cg';
import axios from 'axios'
import Cards from './card';
import { Grid, GridItem } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
const Home = () => {
const [data,setData]=useState()
const[loding,setLoding]=useState(false)

 
function getData() {
  setLoding(true)
  axios(`https://api-get-aushadhi-data.onrender.com/medicineData`)
  .then((res)=>{setData(res.data)
  setLoding(false)})
}
  function handleSubmit() {

  }
  useEffect(()=>{
    getData()
  },[])
  console.log(data)

  if(loding){
   return <Center>
    <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />
   </Center>
  }
  return (
    <div>
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none" children={<FaSearch />} />
        <Input type="text" placeholder="Search" />
        <Button color={"blue"} onClick={handleSubmit}><CgEnter/></Button>
      </InputGroup>

      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
      {data?.map((sdata)=>{
  return <GridItem w='100%' key={sdata.id} > <Cards  {...sdata}/></GridItem>

})}
</Grid>

      {/* {data?.map((sdata)=>{


      })} */}

      {/* <Flex gap={"2"}>
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
       */}
     
    </div>
  )
}

export default Home
