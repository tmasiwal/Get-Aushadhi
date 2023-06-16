import React,{useState} from 'react'
import { Card, CardHeader, CardBody, Collapse,Button,Stack,Heading,Image,Text,Divider,CardFooter,ButtonGroup } from '@chakra-ui/react'
const Cards = ({image,description,price,name
}) => {

    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)
  return (
    <div>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={image[0]}
      alt=''
      borderRadius='lg'
      boxSize={"250px"}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Collapse startingHeight={20} in={show}>
        {description}</Collapse>
      <Button size='sm' onClick={handleToggle} mt='1rem'>
        Show {show ? 'Less' : 'More'}
      </Button>
      <Text color='blue.600' fontSize='2xl'>
        ₹ {price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default Cards
