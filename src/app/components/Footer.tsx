"use client";
import { Box, Flex, Text, Title, Anchor } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconMail,
  IconPhoneCall,
  IconMapPin,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <Box
      id="footer"
      style={{
        backgroundColor: "#361101",
        color: "#fff",
        padding: "3rem 1rem 2rem",
      }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        wrap="wrap"
        gap="xl"
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        {/* Company Info */}
        <Box style={{ flex: 1, minWidth: 250 }}>
          <Title order={3} style={{ color: "#B88341", marginBottom: "1rem" }}>
            About Nurture Nerve
          </Title>
          <Text size="sm" style={{ color: "#eee", lineHeight: 1.6 }}>
            Nurture Nerve is a student-first platform built by doctors and
            educators to simplify nursing exam preparation. We focus on quality,
            accessibility, and empowering students to learn smarter and succeed
            faster.
          </Text>
        </Box>

        {/* Social Media */}
        <Box style={{ flex: 1, minWidth: 250 }}>
          <Title order={3} style={{ color: "#B88341", marginBottom: "1rem" }}>
            Connect with Us
          </Title>
          <Flex direction="column" gap="sm">
            <Anchor
              href="https://instagram.com"
              target="_blank"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Flex align="center" gap="xs">
                <IconBrandInstagram size={18} /> Instagram
              </Flex>
            </Anchor>
            <Anchor
              href="https://youtube.com"
              target="_blank"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Flex align="center" gap="xs">
                <IconBrandYoutube size={18} /> YouTube
              </Flex>
            </Anchor>
            <Anchor
              href="https://linkedin.com"
              target="_blank"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Flex align="center" gap="xs">
                <IconBrandLinkedin size={18} /> LinkedIn
              </Flex>
            </Anchor>
          </Flex>
        </Box>

        {/* Contact Info */}
        <Box style={{ flex: 1, minWidth: 250 }}>
          <Title order={3} style={{ color: "#B88341", marginBottom: "1rem" }}>
            Contact Us
          </Title>
          <Flex direction="column" gap="sm">
            <Flex align="center" gap="sm">
              <IconPhoneCall size={18} />{" "}
              <Text size="sm" style={{ color: "#eee" }}>
                Available 24 x 7
              </Text>
            </Flex>
            <Flex align="center" gap="sm">
              <IconMail size={18} />{" "}
              <Text size="sm" style={{ color: "#eee" }}>
                nurturenerve@gmail.com
              </Text>
            </Flex>
            <Flex align="center" gap="sm">
              <IconMapPin size={18} />{" "}
              <Text size="sm" style={{ color: "#eee" }}>
                Sirsa , Haryana , 125055
              </Text>
            </Flex>
            <Text size="sm" style={{ color: "#ccc", marginTop: "0.5rem" }}>
              💬 Feedback & suggestions are always welcome!
            </Text>
          </Flex>
        </Box>
      </Flex>

      {/* Bottom Copyright */}
      <Text
        size="sm"
        ta="center"
        style={{
          color: "#aaa",
          marginTop: "3rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "1rem",
        }}
      >
        © {new Date().getFullYear()} Nurture Nerve. All rights reserved.
      </Text>
    </Box>
  );
}
