"use client";
import { Box, Stack, Text, Button, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { IconBrandGooglePlay, IconBrandApple } from "@tabler/icons-react";

export default function Hero() {
  const Md = useMediaQuery("(max-width: 900px)");

  return (
    <Flex
      id="home"
      direction={Md ? "column-reverse" : "row"}
      align="end"
      justify="space-between"
      gap="lg"
      mih={Md ? "60vh" : "80vh"}
      bg={"#361101"}
    >
      <Flex
        h={Md ? "60vh" : "80vh"}
        direction={"column"}
        maw={Md ? "100%" : "50%"}
        align={"start"}
        px={Md ? "md" : "xl"}
      // justify={Md?"center":""}
      >
        <Box>
          <Text lh={1} fz={Md ? 28 : 40} fw={700} c="#fff">
            Welcome to <br />
          </Text>
          <Box c={"#B88341"} fz={Md ? 28 : 40} fw={700}>
            <Typewriter
              options={{
                strings: ["Nurture Nerve!", "Nurture Nerve!"],
                autoStart: true,
                loop: true,
              }}
            />
          </Box>
        </Box>
        <Text lh={1} fz={Md ? 28 : 40} fw={700} mt={30} c="#fff">
          Empowering you for Success 🚀
        </Text>
        <Text fz={Md ? 16 : 18} mt={20} c="#fff">
          Level up your journey with Nurture Nerve — your all-in-one platform
          for cracking multiple competitive exams with expert video lectures,
          daily quizzes, and unlimited practice tests!
        </Text>
        <Flex gap="md" mt={40}>
          <Link
            href="https://play.google.com/store/apps/details?id=com.nurturenerve"
            style={{
              backgroundColor: "#d79f59ff",
              textDecoration: "none",
              fontSize: "18px",
              padding: 10,
              borderRadius: 20,
              color: "#fff",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <IconBrandGooglePlay size={20} />
            Play Store App
          </Link>

          <Link
            href="https://apps.apple.com/us/app/nurture-nerve/id6753872406"
            style={{
              backgroundColor: "#d79f59ff",
              textDecoration: "none",
              fontSize: "18px",
              padding: 10,
              borderRadius: 20,
              color: "#fff",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <IconBrandApple size={20} />
            Apple store App
          </Link>
        </Flex>
      </Flex>

      <Flex
        style={{
          width: Md ? "100%" : "50%",
        }}
        h={"100%"}
        align={"end"}
        justify={"center"}
      >
        <video
          src="/heroVid1.mp4"
          width={"100%"}
          height={Md ? 400 : 600}
          style={{
            marginTop: "auto",
            borderRadius: 8,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            objectFit: "cover",
          }}
          autoPlay
          muted
          loop
          playsInline
        />
      </Flex>
    </Flex>
  );
}
