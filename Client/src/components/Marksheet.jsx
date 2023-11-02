import React, { useRef ,useEffect,useState} from 'react'
import { useReactToPrint } from "react-to-print";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Box, Container, Heading, Text, Image, StackDivider, VStack, HStack,Select,Stack,Button} from '@chakra-ui/react';
import axios from "axios"


const Marksheet = () => {


  const [myData,setMyData]=useState();

  useEffect(()=>{
    axios.get('https://result-manage.onrender.com/student/allstudents').then((res)=>
   setMyData(res.data))
  
  },[]);



    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });   

    return (
      <>
        <Container>
          <Heading m={'5'}>Student Marks View</Heading>
        </Container>
        <Box>
        <Button onClick={handlePrint} className='print__button' colorScheme='black' variant={'outline'} m={'5'} >
          Download
        </Button>
        </Box>
        <Box ref={componentRef}>
          {myData?.map((detail) => {
            const { name, uid, ideation, execution, viva, theory, email, evaluated, assigned } = detail;
  
            return (
              <Card key={uid} margin={'5'} bg="#E6FFFA">
                <CardHeader>
                  <Heading size='md'>Name: {name}</Heading>
                </CardHeader>
  
                <CardBody>
                  <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                      <Heading size='xs' textTransform='uppercase'>
                        UID:{uid}
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        IDEATION MARKS: {ideation} <br></br>
                        EXECUTION MARKS: {execution}<br></br>
                        VIVA MARKS: {viva}<br></br>
                        THEORY MARKS: {theory}<br></br>
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
        </Box>
      </>
    );
  };

export default Marksheet;
