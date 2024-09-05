import React, { useState, useEffect } from 'react';
import { Box, VStack, Link, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useBreakpointValue, Flex, Spinner } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import escorts from '../images/brand/escorts.png';
import kubota from '../images/brand/Kubota-Logo.png';

const SidebarContent = ({ menuItems, onClose }) => {
  const location = useLocation();

  return (
    <VStack spacing="4" align="stretch">
      {menuItems.map((item) => (
        <Link
        className='menuoption'
          key={item.path}
          as={RouterLink}
          to={item.path}
          onClick={onClose}
          bg={location.pathname === item.path ? 'blue.700' : 'transparent'}
          _hover={{ bg: 'blue.800', color:'white.800' }}
          p={2}
          borderRadius="md"
          fontWeight="bold"
        >
          {item.label}
        </Link>
      ))}
    </VStack>
  );
};

const Sidebar = ({ isOpen, onClose }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const variant = useBreakpointValue({ base: 'drawer', md: 'sidebar' });


  useEffect(() => {
    // Simulate fetching data
    const fetchMenuItems = () => {
      setTimeout(() => {
        setMenuItems([
          { "path": "/dashboard", "label": "Dashboard" },
          { "path": "/report", "label": "Report" },
          { "path": "/fileupload", "label": "Upload File" },

          
        ]);
        setLoading(false);
      }, 100);
    };

    fetchMenuItems();
  }, []);

  // useEffect(() => {
  //   // Replace with your API endpoint
  //   fetch('/api/menu-items')
  //     .then(response => response.json())
  //     .then(data => {
  //       setMenuItems(data);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //       // Handle error
  //     });
  // }, []);


  

  if (loading) {
    return <Spinner size="xl" />;
  }

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
      <Flex alignItems="center" mb={4}>
        <img src={escorts} alt="Logo" style={{ height: '50px', width: 'auto' }} />
        <img src={kubota} alt="Logo" style={{ height: '50px', width: 'auto', marginLeft: '10px' }} />
      </Flex>
      <Box mt={10}>
        <SidebarContent menuItems={menuItems} onClose={onClose} />
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
              <SidebarContent menuItems={menuItems} onClose={onClose} />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
