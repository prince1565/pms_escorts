import React from 'react';
import { Flex, IconButton, Menu, MenuButton, MenuList, MenuItem, Avatar, Box } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import  {useNavigate}  from 'react-router-dom';

const Header = ({ onOpenSidebar }) => {
  const navigate=useNavigate();

  const handleLogout=()=>{
    navigate('/');
  }
  return (
    <Flex as="header" justify="space-between" align="center" p="4" bg="white" boxShadow="md">
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton icon={<FaBars />} aria-label="Open menu" onClick={onOpenSidebar} />
      </Box>
      <Box></Box>
      <Menu>
        <MenuButton as={Avatar} size="sm" cursor="pointer" />
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;


