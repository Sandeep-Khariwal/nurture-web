"use client";

import { Container, Title, Text, Card, Stack } from "@mantine/core";

export default function AboutUsPage() {
  return (
    <div id="about" style={{ backgroundColor: "#f4f8fb", minHeight: "60vh", padding: "40px 0" }}>
      <Container size="lg">
        {/* Page Heading */}
        <Title
          order={1}
          ta="center"
          mb="lg"
          style={{ color: "#361101", fontWeight: 800 }}
        >
          About Nurture Nerve
        </Title>

        <Stack gap="md">
          <Text size="md" lh={1.7} c="dimmed">
            <strong style={{ color: "#361101" }}>Nurture Nerve</strong> is the
            brainchild of two passionate doctors —{" "}
            <strong>Dr. Sahil Thakral</strong> and{" "}
            <strong>Dr. Richa Mishra</strong>, both esteemed alumni of{" "}
            <strong>AIIMS Jodhpur</strong>, one of India’s premier medical
            institutions.
          </Text>

          <Text size="md" lh={1.7} c="dimmed">
            Driven by a shared vision to combine technology and education, they
            founded Nurture Nerve with a simple but powerful mission:
          </Text>

          {/* Mission Card */}
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{
              backgroundColor: "#ebd9c3",
              borderLeft: "6px solid #361101",
            }}
          >
            <Text size="lg" fw={700} c="#361101">
              🧠 "To nurture young minds for competitive exams, and make learning
              a joyful, interactive experience."
            </Text>
          </Card>

          <Text size="md" lh={1.7} c="dimmed">
            It is a modern, student-centric platform dedicated to helping
            learners succeed in competitive exams through smart, engaging, and
            scientifically curated content.
          </Text>
        </Stack>
      </Container>
    </div>
  );
}
