import { Box, Container, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="blue.500" color="white" py={4}>
        <Heading as="h1" textAlign="center">PhotoShare</Heading>
      </Box>
      <Box as="main" py={8}>
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
          {/* Placeholder for photos */}
          <GridItem w="100%" h="200px" bg="gray.200" />
          <GridItem w="100%" h="200px" bg="gray.200" />
          <GridItem w="100%" h="200px" bg="gray.200" />
          <GridItem w="100%" h="200px" bg="gray.200" />
          <GridItem w="100%" h="200px" bg="gray.200" />
          <GridItem w="100%" h="200px" bg="gray.200" />
        </Grid>
      </Box>
      <Box as="footer" bg="blue.500" color="white" py={4} textAlign="center">
        <Text>&copy; 2023 PhotoShare. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;