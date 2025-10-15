"use client";

import { useState } from "react";
import { Flex, Text, Button, Stack, Drawer, Burger, Box } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const Md = useMediaQuery("(max-width: 900px)");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* Navbar Container */}
      <Flex
        justify="space-between"
        align="center"
        px={Md ? "md" : "xl"}
        py="md"
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <Stack gap={0} style={{ flexDirection: "row", alignItems: "center" }}>
          <Image src="/logo.png" alt="Logo" width={60} height={40} />
          <Text c="#361101" fw={600} ml="xs">
            Nurture Nerve
          </Text>
        </Stack>

        {/* Desktop Navigation */}
        <Flex
          gap="lg"
          align="center"
          justify={"center"}
          style={{ display: Md ? "none" : "flex" }}
        >
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Features", href: "#features" },
            { label: "Founders", href: "#founders" },
            // { label: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              href={link.href}
              passHref
              key={link.href}
              style={{ textDecoration: "none" }}
            >
              <Text component="a" c="#361101" style={{ cursor: "pointer" }}>
                {link.label}
              </Text>
            </Link>
          ))}

          <Button radius="xl" style={{ backgroundColor: "#361101" }}>
            Download Android
          </Button>
          <Button radius="xl" style={{ backgroundColor: "#361101" }}>
            Download Ios
          </Button>
        </Flex>

        {/* Burger Menu (Mobile only) */}
        {Md && (
          <Burger
            opened={opened}
            onClick={open}
            aria-label="Open navigation"
            color="#361101"
          />
        )}
      </Flex>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        opened={opened}
        onClose={close}
        padding="lg"
        size="100%"
        position="right"
        withCloseButton={true}
        classNames={{
          close: "drawer-close",
        }}
        styles={{
          body: {
            paddingTop: "4rem",
          },
        }}
      >
        <Flex direction="column" gap="xl" align="center" justify={"center"}>
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Features", href: "#features" },
             { label: "Founders", href: "#founders" },
            // { label: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              href={link.href}
              passHref
              key={link.href}
              onClick={close}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Text
                component="a"
                c="#361101"
                ta="center"
                fz="lg"
                style={{ cursor: "pointer" }}
              >
                {link.label}
              </Text>
            </Link>
          ))}

          <Button
            radius="xl"
            fullWidth
            size="md"
            style={{ backgroundColor: "#361101", marginTop: "2rem" }}
          >
            Download Android
          </Button>
          <Button
            radius="xl"
            fullWidth
            size="md"
            style={{ backgroundColor: "#361101"}}
          >
            Download Ios
          </Button>
        </Flex>
      </Drawer>
    </>
  );
}
