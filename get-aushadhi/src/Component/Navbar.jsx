import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Flex, Spacer, Box, Avatar, Button, ButtonGroup, WrapItem ,useDisclosure,Divider,AbsoluteCenter, Center, Heading} from '@chakra-ui/react';
import { Link, Navigate } from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import {BiCartAdd } from "react-icons/bi";
  import { CiEdit ,CiMedicalCross,CiViewList,CiSun} from "react-icons/ci";
const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
console.log(user)
const divStyles={
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
}
  return (
    <>
    <Flex alignItems='center' gap='2'>
      <Box p='2'>
        <WrapItem>
          <Avatar size='lg' name='Christian Nwamba' src='https://i.ibb.co/ncCJZQx/Screenshot-2023-06-13-212223.jpg' />
        </WrapItem>
      </Box>
      <Spacer />
      <Box >
        <Link to={"/"}>Home</Link>
      </Box>
    
      <Box>
        <Link to={"/calender"}>Calender</Link>
      </Box>
      
      <Box>
        <Link to={"/profile"}>Profile</Link>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        {isAuthenticated&&<WrapItem>
          <Link to={"/profile"}><Avatar size='lg' name={user.name} src={user.picture}  onClick={onOpen} /></Link>
        </WrapItem>}
        {isAuthenticated ? (
        null
        ) : (
          <Button onClick={() => loginWithRedirect()}>Log In</Button>
        )}
      </ButtonGroup>
    </Flex>
   {isAuthenticated&& <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader><Box position='relative' padding='10'>
  <Divider />
  <AbsoluteCenter bg='white' px='4'>
    <Heading color={"teal"}>Profile</Heading>
  </AbsoluteCenter>
</Box></DrawerHeader>

          <DrawerBody>
            <Center>

            <Avatar size='2xl' name={user.name} src={user.picture} showBorder="true" border={" 4px dashed green"}/>

           
            </Center>
            <Center> <Heading color={'teal'}>{user.name}</Heading></Center>
        <br/>
            
            <Box >
           <Link to={"/cart"}> <Flex alignContent={"center"}gap={2}>
                    <Heading><BiCartAdd /></Heading>
                    <Heading as="h3" size="lg">
                      My Cart
                    </Heading>
                  </Flex></Link>
                  <br/>
            <Flex alignContent={"center"}gap={2}>
                    <Heading><CiEdit /></Heading>
                    <Heading as="h3" size="lg">
                      Edit Profile
                    </Heading>
                  </Flex>
                  <br/>
                  <Flex gap={2}>
                   <Heading> <CiMedicalCross /></Heading>
                    <Heading as="h3" size="lg">
                      My Medicine
                    </Heading>
                  </Flex>
                  <br/>
                  <Flex gap={2}>
                   <Heading> <CiViewList /></Heading>
                    <Heading as="h3" size="lg">
                      Order History
                    </Heading>
                  </Flex>
                  <br/>
                  <Flex gap={2}>
                    <Heading><CiSun /></Heading>
                    <Heading as="h3" size="lg">
                      Setting
                    </Heading>
                  </Flex>
                  <br/>
                  <br/>
<Button bg={"teal"} color={"white"} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </Button>



            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>}
    </>
    
  );
};

export default Navbar;
