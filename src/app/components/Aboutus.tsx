"use client";

import {
  Box,
  Stack,
  Text,
  Title,
  Flex,
  List,
  ThemeIcon,
  Container,
  Divider,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCheck, IconUserHeart } from "@tabler/icons-react";

export default function About() {
    const isMd = useMediaQuery("(max-width: 900px)");
  return (
    <Box bg="#f4f8fb" id="founders" >
      <Container size="lg" px="md" mt={60}>
        <Stack gap="xl">
          {/* Hero Section */}
          <Stack align="center" gap="sm">
            <Text fz={isMd?"24px":"32px"} fw={700} c="#361101" ta="center">
              About Us – Founders of Nurture Nerve
            </Text>
            <Text fz="lg" fs="italic" c="dimmed" ta="center">
              “न हि ज्ञानेन सदृशं पवित्रमिह विद्यते। तत्स्वयं योगसंसिद्धः
              कालेनात्मनि विन्दति॥”
            </Text>
            <Text fz="sm" c="gray" ta="center">
              – भगवद् गीता
            </Text>
            <Text fz="sm" fs="italic" c="dimmed" ta="center">
              "There is nothing in this world as purifying as knowledge. One who
              is disciplined discovers it within in due time."
            </Text>
          </Stack>

          {/* Founders Section with Cards */}
          <Divider my="md" />
          <Flex wrap="wrap" gap="xl" justify="center">
            {[
              {
                name: "Dr. Sahil Thakral (MD, DNB)",
                description:
                  "A dedicated academician with a passion for logical reasoning and structured learning. Dr. Sahil brings a methodical approach to exam preparation through evidence-based and high-yield content.",
              },
              {
                name: "Dr. Richa Mishra (MD, DNB)",
                description:
                  "Dr. Richa blends academic excellence with creativity. Her focus is on making high-quality education accessible and engaging for every student.",
              },
            ].map((doc, index) => (
              <Box
                key={index}
                p="xl"
                w={{ base: "100%", md: "45%" }}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.08)";
                }}
              >
                <Flex align="center" gap="md" mb="sm">
                  <ThemeIcon
                    color="orange"
                    size={40}
                    radius="xl"
                    style={{ backgroundColor: "#B88341" }}
                  >
                    <IconUserHeart size={24} />
                  </ThemeIcon>
                  <Title order={3} c="#361101" fz={20}>
                    {doc.name}
                  </Title>
                </Flex>
                <Text fz="md" c="dimmed">
                  {doc.description}
                </Text>
              </Box>
            ))}
          </Flex>

          {/* Why Nurture Nerve */}
          <Divider my="md" />
          <Box>
            <Title order={2} c="#361101">
              Why Nurture Nerve?
            </Title>
            <List
              spacing="sm"
              size="md"
              mt="sm"
              icon={
                <ThemeIcon color="#B88341" size={24} radius="xl">
                  <IconCheck size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>Boost confidence with topic-wise modules</List.Item>
              <List.Item>
                Strengthen concepts through microlearning modules
              </List.Item>
              <List.Item>Improve speed and accuracy with timed tests</List.Item>
              <List.Item>
                Track progress through personalized analytics and leaderboards
              </List.Item>
              <List.Item>
                Cover syllabus for international and other national-level
                competitive exams
              </List.Item>
            </List>
          </Box>
          <Divider my="md" />
        </Stack>
      </Container>
      <Box
        mih={"80vh"}
        style={{
          backgroundImage: `url('/vision.jpeg')`, // replace with your actual image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "4rem 1rem",
          backgroundAttachment: "fixed",
          // borderRadius: "16px",
          marginTop: "2rem",
        }}
      >
        <Flex direction={"column"} gap="xl" justify="center" align="center">
          {/* Mission Card */}
          <Box
            w={isMd?"100%":"50%"}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              padding: "2rem",
              flex: 1,
              backdropFilter: "blur(2px)",
              alignSelf: "start",
            }}
          >
            <Title order={2} c="#361101">
              Our Mission
            </Title>
            <Text fz="md" mt="sm" c="#361101">
              “To empower students with smart learning tools that make exam
              preparation efficient, focused, and stress-free.”
            </Text>
          </Box>

          {/* Vision Card */}
          <Box
            w={isMd?"100%":"50%"}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              padding: "2rem",
              flex: 1,
              backdropFilter: "blur(2px)",
              alignSelf: "end",
            }}
          >
            <Title order={2} c="#361101">
              Our Vision
            </Title>
            <Text fz="md" mt="sm" c="#361101">
              “To be India’s most trusted digital companion in the journey of
              academic success and personal growth.”
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
