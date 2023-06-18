import React,{useState} from 'react'
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

import { Card, CardHeader, CardBody, Collapse,Button,Stack,Heading,Image,Text,Divider,CardFooter,ButtonGroup } from '@chakra-ui/react'
import { Link, Navigate } from 'react-router-dom'
const Cards = (sdata) => {
console.log(sdata,"g")
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const ldata= JSON.parse(localStorage.getItem('medicineData'))||[]
    const hendleCart=(id)=>{
 let check=ldata.find((el)=>{return el.id==id})
 if(check){
onOpen()
 }
else{
  let data1={...sdata,quantity:1}
  ldata.push(data1)
localStorage.setItem("medicineData",JSON.stringify(ldata))}

    }

  return (
    <div>
      <Card maxW='sm'>
  <CardBody>
 <Link to={`/medicineData/${sdata.id}`}>   <Image
      src={sdata.image[0]}
      alt=''
      borderRadius='lg'
      boxSize={"250px"}
      
    /></Link>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{sdata.name}</Heading>
      <Collapse startingHeight={20} in={show}>
        {sdata.description}</Collapse>
      <Button size='sm' onClick={handleToggle} mt='1rem'>
        Show {show ? 'Less' : 'More'}
      </Button>
      <Text color='blue.600' fontSize='2xl'>
        ₹ {sdata.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue' onClick={()=>{hendleCart(sdata.id)}}> 
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
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

export default Cards
