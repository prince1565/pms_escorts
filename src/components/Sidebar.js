// src/components/Sidebar.js
import React from 'react';
import { Box, VStack, Link, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useBreakpointValue, Flex } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import escorts from '../images/brand/escorts.png';
import kubota from '../images/brand/Kubota-Logo.png';
import { CSidebarBrand, CSidebarHeader } from '@coreui/react';

const SidebarContent = ({ onClose }) => {
  const location = useLocation();

  return (
    <VStack spacing="4" align="stretch">
      <Link
        as={RouterLink}
        to="/"
        onClick={onClose}
        bg={location.pathname === '/' ? 'blue.700' : 'transparent'}
        _hover={{ bg: 'blue.800' }}
        p={2}
        borderRadius="md"
        fontWeight="bold"
      >
        Dashboard
      </Link>
      <Link
        as={RouterLink}
        to="/fileupload"
        onClick={onClose}
        bg={location.pathname === '/fileupload' ? 'blue.700' : 'transparent'}
        _hover={{ bg: 'blue.800' }}
        p={2}
        borderRadius="md"
        fontWeight="bold"
      >
        File Upload
      </Link>
      <Link
        as={RouterLink}
        to="/filehistory"
        onClick={onClose}
        bg={location.pathname === '/filehistory' ? 'blue.700' : 'transparent'}
        _hover={{ bg: 'blue.800' }}
        p={2}
        borderRadius="md"
        fontWeight="bold"
      >
        File History
      </Link>
    </VStack>
  );
};

const Sidebar = ({ isOpen, onClose }) => {
  const variant = useBreakpointValue({ base: 'drawer', md: 'sidebar' });

  return variant === 'sidebar' ? (
    <Box
      as="nav"
      bg="blue.900"
      color="white"
      w="250px"
      p="4"
      display={{ base: 'none', md: 'block' }}
      position="fixed"
      h="full"
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <Flex alignItems="center">
            <img src={escorts} alt="Logo" style={{ height: '50px', width: 'auto' }} />
            <img src={kubota} alt="Logo" style={{ height: '50px', width: 'auto', marginLeft: '10px' }} />
          </Flex>
        </CSidebarBrand>
      </CSidebarHeader>
      <Box mt={10}>
        <SidebarContent onClose={onClose} />
      </Box>
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="blue.900" color="white" maxW="80%">
          <DrawerCloseButton mt={3} />
          <DrawerBody>
            <Flex alignItems="center" mb={4} mt={3}>
              <img src={escorts} alt="Logo" style={{ height: '30px', width: 'auto' }} />
              <img src={kubota} alt="Logo" style={{ height: '35px', width: 'auto', marginLeft: '10px' }} />
            </Flex>
            <Box mt={5}>
              <SidebarContent onClose={onClose} />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
