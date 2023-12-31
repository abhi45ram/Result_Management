import { Card, CardHeader, CardBody, CardFooter, Stack } from '@chakra-ui/react'
import { Box, Container, Heading, Text, Image, StackDivider, VStack, HStack, Select } from '@chakra-ui/react';
import axios from "axios"
import React,{ useState, useEffect } from 'react';

const MarksView = () => {
  const [evaluatedStudents, setEvaluatedStudents] = useState([]);
  const [unEvaluatedStudents, setUnEvaluatedStudents] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const fetchAssignedStudents = async (email) => {
    try {
      const response = await axios.post('https://result-manage.onrender.com/teacher/evaluatedStudents', { email });
      setEvaluatedStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUnassignedStudents = async (email) => {
    try {
      const response = await axios.post('https://result-manage.onrender.com/teacher/unEvaluatedStudents', { email });
      setUnEvaluatedStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAssignedStudents("viveks@gmail.com");
    fetchUnassignedStudents("viveks@gmail.com");
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const filteredStudents = selectedOption === 'assigned' ? evaluatedStudents : unEvaluatedStudents;

  return (
    <>
      <Container marginTop={"10"}>
        <Select placeholder='Select option' onChange={handleOptionChange}>
          <option value='assigned'>Marks Locked</option>
          <option value='notAssigned'>Marks Not Locked</option>
        </Select>
      </Container>

      {selectedOption && filteredStudents.length > 0 && filteredStudents.map((details) => {
        const { name, uid, ideation, execution, viva, theory, email, evaluated, assigned } = details;

        return (
          <div id={uid}>
            <Stack m={"20"}>
              <Card bg="#E6FFFA">
                <CardHeader>
                  <Heading size='md'>Name : {name}</Heading>
                </CardHeader>

                <CardBody>
                  <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                      <Heading size='xs' textTransform='uppercase'>
                        Uid : {uid}
                      </Heading>

                    </Box>
                    <Box>
                      <Heading size='xs' >
                        Email : {email}
                      </Heading>

                    </Box>
                    <Box>
                      <Heading size='xs' textTransform='uppercase'>
                        Marks
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        ideation : {ideation} <br></br>
                        execution : {execution} <br></br>
                        viva : {viva} <br></br>
                        theory : {theory} <br></br>
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>


            </Stack>


          </div>
        )
      })}
    </>
  )
}

export default MarksView

