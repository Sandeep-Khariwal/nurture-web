"use client";
import { Box, Flex, Text, Title, Anchor, Divider } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconMail,
  IconPhoneCall,
  IconMapPin,
  IconBrandFacebook,
  IconBrandTelegram,
  IconBrandThreads,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { Image } from "@mantine/core";

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
            educators to simplify exam preparation. We focus on quality,
            accessibility, and empowering students to learn smarter and succeed
            faster.
          </Text>

          <Flex direction="column" mt={20} gap="sm">
            <Link href={"#about"} style={{ color: "white" }}>
              About Us
            </Link>
            <Link href={"/privacy"} style={{ color: "white" }}>
              Privacy Policy
            </Link>
            <Link href={"/terms-and-conditions"} style={{ color: "white" }}>
              Terms and conditions
            </Link>
            <Link href={"/contact-us"} style={{ color: "white" }}>
              Contact Us
            </Link>
            <Link href={"#faqs"} style={{ color: "white" }}>
              FAQs
            </Link>
          </Flex>
        </Box>

        {/* Social Media */}
        <Box style={{ flex: 1, minWidth: 250 }}>
          <Title order={3} style={{ color: "#B88341", marginBottom: "1rem" }}>
            Connect with Us
          </Title>
          <Flex direction="column" gap="sm">
            <Anchor
              href="https://www.instagram.com/nurturenerve?igsh=MTV0NGJjbjVvcGdpNg=="
              target="_blank"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Flex align="center" gap="xs">
                <IconBrandInstagram size={18} /> Instagram
              </Flex>
            </Anchor>
            <Anchor
              href="https://youtube.com/@nurturenerve?si=FqZn_QxEED4cNleu"
              target="_blank"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Flex align="center" gap="xs">
                <IconBrandYoutube size={18} /> YouTube
              </Flex>
            </Anchor>
            <Anchor
              href="https://www.linkedin.com/in/nurture-nerve-399a90388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Flex align="center" gap="xs">
                <IconBrandLinkedin size={18} /> LinkedIn
              </Flex>
            </Anchor>
            <Anchor
              href="https://www.facebook.com/share/1FgPfrBU6L/"
              target="_blank"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Flex align="center" gap="xs">
                <IconBrandFacebook size={18} /> Facebook
              </Flex>
            </Anchor>
            <Anchor
              href="https://t.me/NurtureNerve"
              target="_blank"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Flex align="center" gap="xs">
                <IconBrandTelegram size={18} /> Telegram
              </Flex>
            </Anchor>
            <Anchor
              href="https://www.threads.com/@nurturenerve"
              target="_blank"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Flex align="center" gap="xs">
                <IconBrandThreads size={18} /> Threads
              </Flex>
            </Anchor>
            <Anchor
              href="https://x.com/NurtureNerve?t=7neOh1e6Gz1Pj5rghyKRUA&s=08"
              target="_blank"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Flex align="center" gap="xs">
                <IconBrandX size={18} /> X
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
            {/* <Flex align="center" gap="sm">
              <IconPhoneCall size={18} />{" "}
              <Text size="sm" style={{ color: "#eee" }}>
                8285484704
              </Text>
            </Flex> */}
            <Flex align="center" gap="sm">
              <IconMail size={18} />{" "}
              <Text size="sm" style={{ color: "#eee" }}>
                nurturenerve@gmail.com
              </Text>
            </Flex>
            <Flex align="center" gap="sm">
              <IconMapPin size={18} />{" "}
              <Text size="sm" style={{ color: "#eee" }}>
                Nurture Nerve , Gandhi Colony Sirsa Haryana (125055)
              </Text>
            </Flex>
            <Text size="sm" style={{ color: "#ccc", marginTop: "0.5rem" }}>
              💬 Feedback & suggestions are always welcome!
            </Text>
          </Flex>
          <Image
            src="/dpiit.jpeg"
            alt="Startup India recognized - DPIIT certificate"
            w={{ base: 250, sm: 200, md: 220 }} 
            h="auto"
            style={{
              filter: 'brightness(0.95) contrast(1.1)',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              padding: '12px',
              border: '1px solid rgba(184, 131, 65, 0.4)',
              marginTop: '1rem',
            }}
          />
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
