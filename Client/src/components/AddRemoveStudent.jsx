import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Box, Container, Heading, Stack, Text, Image, StackDivider, VStack, HStack, Button } from '@chakra-ui/react';
import React from 'react'

const AddRemoveStudent = () => {
  return (
    <>
{/* add remove Students */}
<Box>
    <Container>
    <Heading m={"10"}>Add/Remove Students</Heading>
    </Container>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  m={"20"}
>
 
  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
      <Button variant='solid' colorScheme='blue' marginLeft={"5"}>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  m={"20"}
>
 
  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
      <Button variant='solid' colorScheme='blue' marginLeft={"5"}>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  m={"20"}
>
  

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
      <Button variant='solid' colorScheme='blue' marginLeft={"5"}>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  m={"20"}
>
 

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
      <Button variant='solid' colorScheme='blue' marginLeft={"5"}>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>

</Box>
    </>
  )
}

export default AddRemoveStudent
