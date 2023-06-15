import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Flex, Spacer, Box, Avatar, Button, ButtonGroup, WrapItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
console.log(user)
  return (
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
        <Link to={"/Profile"}>Profile</Link>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        {isAuthenticated&&<WrapItem>
          <Avatar size='lg' name={user.name} src={user.picture} />
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
  );
};

export default Navbar;
