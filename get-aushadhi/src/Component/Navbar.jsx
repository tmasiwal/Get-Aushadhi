import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Flex, Spacer, Box, Avatar, Button, ButtonGroup, WrapItem ,useDisclosure,Input, Center, Heading} from '@chakra-ui/react';
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
  import { CiEdit ,CiMedicalCross,CiViewList,CiSun} from "react-icons/ci";
const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
console.log(user)

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
          <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </Button>
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
          <DrawerHeader>Profile</DrawerHeader>

          <DrawerBody>
            <Center>

            <Avatar size='2xl' name={user.name} src={user.picture} showBorder="true" border={" 4px dashed green"}/>

           
            </Center>
            <Center> <Heading color={'blue'}>{user.name}</Heading></Center>

            <Box>
<Heading > <CiEdit/> Edit Profile </Heading>
<Heading > <CiMedicalCross/> My Medicine </Heading>
<Heading > <CiViewList/>Order History </Heading>
<Heading > <CiSun/> Setting </Heading>
<Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
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
