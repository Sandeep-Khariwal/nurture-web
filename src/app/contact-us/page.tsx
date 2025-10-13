"use client";

import React from "react";
import {
  Container,
  Paper,
  Stack,
  Text,
  Anchor,
  Box,
  Divider,
} from "@mantine/core";

export default function ContactUs() {
  return (
    <Container size="md" py="xl">
      <Paper
        shadow="md"
        radius="md"
        p="xl"
        style={{
          background: "linear-gradient(180deg, #fffdf9 0%, #fff8f1 100%)",
          border: "1px solid #f1e2d0",
        }}
      >
        <Stack>
          {/* Header Section */}
          <Box style={{ textAlign: "center", marginBottom: "40px" }}>
            <Text
              ta="center"
              size="xl"
              style={{
                color: "#361101",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              Contact Us – Nurture Nerve
            </Text>
            <Text ta="center" size="md" style={{ color: "#555" }}>
              We're here to help you learn better, grow faster, and succeed
              smarter.
            </Text>
          </Box>

          {/* Intro Paragraph */}
          <Text size="md" lh={1.8}>
            Whether you have questions, feedback, or need assistance, feel free
            to reach out!
          </Text>

          {/* Email Support */}
          <Text
            size="lg"
            style={{
              color: "#361101",
              fontWeight: 700,
              marginTop: "30px",
            }}
          >
            📧 Email Support
          </Text>
          <Text size="md" lh={1.8}>
            <strong>Available:</strong> 24 x 7
          </Text>
          <Text size="md" lh={1.8}>
            For queries related to subscriptions, technical support, or content,
            please contact:
          </Text>
          <Text
            size="md"
            lh={1.8}
            style={{ color: "#b88341", fontWeight: 600 }}
          >
            ✉️{" "}
            <Anchor
              href="mailto:nurturenervehelp@gmail.com"
              style={{ color: "#b88341", textDecoration: "none" }}
            >
              nurturenervehelp@gmail.com
            </Anchor>
          </Text>

          {/* Feedback Section */}
          <Text
            size="lg"
            style={{
              color: "#361101",
              fontWeight: 700,
              marginTop: "30px",
            }}
          >
            📝 Feedback & Suggestions
          </Text>
          <Text size="md" lh={1.8}>
            We welcome your feedback to improve our app and content.
          </Text>
          <Text
            size="md"
            lh={1.8}
            style={{ color: "#b88341", fontWeight: 600 }}
          >
            Please send your feedback to:{" "}
            <Anchor
              href="mailto:nurturenervehelp@gmail.com"
              style={{ color: "#b88341", textDecoration: "none" }}
            >
              nurturenervehelp@gmail.com
            </Anchor>
          </Text>

          {/* Footer */}
          <Divider my="lg" />
          <Text ta="center" size="sm" style={{ color: "#aaa" }}>
            © 2025 Nurture Nerve. All rights reserved.
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
}
