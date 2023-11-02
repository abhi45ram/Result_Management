import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        zIndex={'overlay'}
        top={'4'}
        left={'4'}
        colorScheme="blue"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>DashBoard</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
                <Button onClick={onClose} variant={"ghost"} colorScheme={"black"}>
                   <Link to= {'/'}>Home</Link> 
                </Button>

                <Button onClick={onClose} variant={"ghost"} colorScheme={"black"}>
                   <Link to= {'/addStudent'}>Add Student</Link> 
                </Button>


                <Button onClick={onClose} variant={"ghost"} colorScheme={"black"}>
                   <Link to= {'/upload'}>Upload and Lock Marks</Link> 
                </Button>

                <Button onClick={onClose} variant={"ghost"} colorScheme={"black"}>
                   <Link to= {'/status'}>Student Marks Status</Link> 
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme={"black"}>
                   <Link to= {'/marksheet'}>Student Marksheet</Link> 
                </Button>

            </VStack>

            <HStack pos={"absolute"} bottom={"10"} left={"0"} w={"full"} justifyContent={"space-evenly"}>

            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
