import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  StackDivider,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};


const Home = () => {
  const [assignedStudents, setAssignedStudents] = useState([]);

  const navigate = useNavigate();
  const handleAddStudentClick = () => {
  navigate('/AddStudent');
}

const toast = useToast();

  const fetchAssignedStudents = async (email) => {
    try {
      const response = await axios.post('https://result-manage.onrender.com/teacher/assignedStudents', { email });
      setAssignedStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeStudent = async (email, uid) => {
    try {
      console.log(email, uid);
      email = "viveks@gmail.com";
      const response = await axios.post('https://result-manage.onrender.com/teacher/removeStudent', { email, uid });
      console.log(response.data);
      // Show success toast
      toast({
        title: "Student removed successfully",
        status: "success",
        position: "top",
        duration: 3000,
        colorScheme:"blue",
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      // Show error toast
      toast({
        title: "An error occurred",
        description: "Failed to remove student",
        status: "error",
        duration: 3000,
        colorScheme:"blue",
        isClosable: true,
      });
    }
  };
  useEffect(()=>{
    fetchAssignedStudents("viveks@gmail.com");
  },[])
  return (
    <>
      {/* teacher details box */}
      <Box >
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          m={'20'}
          bg="#E6FFFA"
        >


          <Stack>
            <CardBody>
              <Heading size="md">viveks</Heading>
              <Text py="2">
                viveks@gmail.com
                
              </Text>
            </CardBody>

            <CardFooter>
            <Button variant="solid" colorScheme="blue" onClick={ handleAddStudentClick}>
                Add Student
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
      <HStack justifyContent="center" marginTop={'15'}>
        <Heading colorScheme="blue">STUDENT ASSIGNED</Heading>
      </HStack>
      {
        assignedStudents?.map((detail) => {
          const { name, uid, ideation, execution, viva, theory, email, evaluated, assigned } = detail;

          return <div>


            {/* students box */}

            <Container>
              <Card marginLeft={'50'} marginTop={'10'} w={'50'} bg="#E6FFFA">
                <CardHeader display="flex" alignItems="center">
                  <Heading size="md">{name}</Heading>
                  <Spacer />
                  <Button onClick={()=>removeStudent(email,uid)} colorScheme="teal" size="xs">
                    Remove
                  </Button>
                  
                </CardHeader>

                {/* students details box */}
                <CardBody>
                  <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        UID :
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        {uid}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        E-mail:
                      </Heading>
                      <Text pt="2" fontSize="sm">
                        {email}
                      </Text>
                    </Box>

                  </Stack>
                </CardBody>
              </Card>
            </Container>
          </div>

        })
      }


    </>
  );
};

export default Home;
