import React, { useEffect, useState } from 'react'
import { Card, Box,SkeletonCircle,SkeletonText, CardBody, CardFooter,Stack,Heading,Divider,ButtonGroup,Button,Image,Text, Center } from '@chakra-ui/react'
import { json, useParams } from 'react-router-dom'
import axios from 'axios'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

const Product = () => {
const [loding,setLoding]=useState(true)
    const{id}=useParams()
    console.log(id)
const [data,setData]=useState([])
const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
      setLoding(true)
axios(`https://api-get-aushadhi-data.onrender.com/medicineData/${id}`)
.then((res)=>{setData(res.data)
setLoding(false)})
    },[id])
    console.log(data)
const ldata= JSON.parse(localStorage.getItem('medicineData'))||[]
    const hendleCart=()=>{
 let check=ldata.find((el)=>{return el.id==data.id})
 if(check){
onOpen()
 }
else{
  let data1={...data,quantity:1}
  ldata.push(data1)
localStorage.setItem("medicineData",JSON.stringify(ldata))}

    }
    if(loding){
      return <Box padding='6' boxShadow='lg' bg='white'>
      <SkeletonCircle size='10' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    </Box>
    }
  return (
    <div>
      <Center><Heading>Product Details</Heading></Center>
     <Center>
     <Card maxW='sm'>
  <CardBody>
    <Image
      src={data?.image[0]}
      alt={data?.name}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
      {data.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       ₹{data?.price}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       Quantity :{typeof(data.quantity)=="number"?data.quantity+ " Tableet(s) in Strip":data.quantity}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue' onClick={hendleCart}>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
     </Center>
     
     <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Text>Product is already in cart</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Product
