"use client";
import { Box, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import TypewriterClass from "typewriter-effect";

export default function Features() {
  const isMd = useMediaQuery("(max-width: 900px)");

  const features = [
    {
      title: "10+ competitive Exams",
      description:
        "Get access to curated content for over 10 major exams, including NCLEX,NORCET , AIIMS , CRE and more.",
    },
    {
      title: "Weekly Quizzes",
      description:
        "Stay sharp with quizzes that test your knowledge and help reinforce key concepts regularly. Also win exciting prizes in each quiz.",
    },
    {
      title: "Video Lectures",
      description:
        "Learn from expert faculty through easy-to-understand video lectures designed for conceptual clarity.",
    },
    {
      title: "Subject Wise Modules",
      description:
        "Attempt unlimited mock tests based on real exam patterns to build confidence and speed.",
    },
    {
      title: "Mock Test",
      description:
        "Simulates the real exam with timed tests, instant scores, and detailed analysis to boost preparation and confidence.",
    },
    {
      title: "Progress Analytics",
      description:
        "Track your performance with intelligent analytics — know your strengths and work on your weak areas.",
    },
    {
      title: "Leaderboard Competitions",
      description:
        "Compete with fellow aspirants in live rankings and see where you stand — nationwide!",
    },
  ];

  return (
    <Flex
    id="features"
      direction={"column"}
      px={isMd ? "md" : "xl"}
      mih={"100vh"}
      style={{
        backgroundImage: `url('/logo1.jpg')`, // logo-pm.png replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "4rem 1rem",
        backgroundAttachment: "fixed",
        // borderRadius: "16px",
      }}
    >
      <Box
      w={isMd?"100%":"40%"}
        style={{
          backgroundColor: "rgba(54, 17, 1,0.9)",
          borderRadius: 16,
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
          // backdropFilter: "blur(2px)",
          alignSelf: "center",
        }}
      >
        <Text fz={isMd ? 24 : 40} fw={700} ta="center" c="#B88341">
          Powerful Features
        </Text>
        <Box  c="#fff" fz={isMd ? 18 : 26} fw={700} ta={"center"} >
          <TypewriterClass
            options={{
              strings: ["for Students!", "of 'Nurture Nerve'!"],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>
      </Box>
      <Flex
        mt={40}
        wrap="wrap"
        justify="center"
        gap="xl"
        style={{ backdropFilter: "blur(2px)" }}
      >
        {features.map((feature) => (
          <Box
            key={feature.title}
            p="xl"
            w={isMd ? "100%" : "30%"}
            style={{
              backgroundColor: "rgba(54, 17, 1,0.9)", //rgba(255, 255, 255, 0.85)
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              padding: "2rem",
              backdropFilter: "blur(2px)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Text fw={700} fz={20} c="#B88341" mb="sm">
              {feature.title}
            </Text>
            <Text fz={14} c="#fff">
              {feature.description}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}
