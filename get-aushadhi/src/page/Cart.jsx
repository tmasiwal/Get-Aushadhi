import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,Image,Box,Button
  } from '@chakra-ui/react'
import TrTable from '../Component/TrTable'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,useDisclosure
  } from '@chakra-ui/react'

const Cart = () => {
    const ldata= JSON.parse(localStorage.getItem('medicineData'))||[] 
   
    let sum= 0
    for(let i=0;i<ldata.length;i++){
        sum=sum+ldata[i].price
    }
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: false })
    
   if( isVisible ){ return(
        <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Payment Submitted!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for using your application. Our team will get back to you soon.
  </AlertDescription>
</Alert>
      ) }

  return (
    <div>
      <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th>Image</Th>
        <Th>Name</Th>
        <Th >Quantity</Th>
        <Th >Price</Th>
      </Tr>
    </Thead>
    <Tbody>
        {ldata.map((data)=>{return <TrTable key={data.id} {...data}/>  })}
     
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Total</Th>
        <Th></Th>
        <Th></Th>
        <Th >₹{sum}</Th>
      </Tr>

      <Tr>
        <Th></Th>
        <Th></Th>
        <Th></Th>
        <Th ><Button bg={"teal"} color={"white"} onClick={onOpen}>Checkout</Button></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  )
}

export default Cart
