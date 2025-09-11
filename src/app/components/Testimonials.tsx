import { Stack, Text, Box, Flex } from "@mantine/core";

export default function Testimonials() {
  return (
    <Stack align="center" gap="lg" py="xl">
      <Text size="xl" fw={700}>What Our Clients Say</Text>
      <Flex gap="lg" wrap="wrap" justify="center">
        <Box p="md" w={250} bg="gray.1"  >
          <Text>"Amazing software! Our school’s fee management became effortless."</Text>
          <Text fw={500} mt="sm">– Principal Sharma</Text>
        </Box>
        <Box p="md" w={250} bg="gray.1" >
          <Text>"Very easy to use and helps track everything in one place."</Text>
          <Text fw={500} mt="sm">– Teacher Gupta</Text>
        </Box>
      </Flex>
    </Stack>
  );
}
