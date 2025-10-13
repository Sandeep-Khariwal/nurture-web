"use client";

import React from "react";
import {
  Box,
  Stack,
  Text,
  Title,
  Divider,
  Anchor,
  Container,
  Paper,
} from "@mantine/core";

export default function TermsAndConditions() {
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
              style={{ color: "#361101", marginBottom: "10px", fontWeight: 700 }}
            >
              Terms and Conditions
            </Text>
            <Text ta="center" size="md" style={{ color: "#555" }}>
              Effective as of August 2025
            </Text>
          </Box>

          {/* Intro Section */}
          <Text size="md" lh={1.8}>
            Welcome to our website/app. We appreciate your trust in using our
            services. It is our priority to provide you with the highest quality
            experience with minimal effort on your part. By continuing to access
            or use this platform, you acknowledge and agree to be bound by the
            following Terms and Conditions of Use, which govern your
            relationship with{" "}
            <strong style={{ color: "#b88341" }}>Nurture Nerve</strong> in
            conjunction with our <em>Privacy Policy</em>.
          </Text>

          <Box my="lg" />

          {/* Ownership and Acceptance */}
          <Text size="lg" style={{ color: "#361101", fontWeight: 700 }}>
            1. Ownership and Acceptance
          </Text>
          <Text size="md" lh={1.8}>
            The Website/App Owner, including its subsidiaries and affiliates
            (referred to as "we", "us", or "our"), makes the content on this
            website/app available to you ("user" or "you") under these terms.
            The term "Nurture Nerve" refers to the owner of the website/app
            whose registered office is in Sirsa, Haryana, India. Pin: 125055.
          </Text>

          <Box my="lg" />

          {/* Terms of Use */}
          <Text size="lg" style={{ color: "#361101", fontWeight: 700 }}>
            2. Terms of Use
          </Text>
          <Stack gap={4} pl="20px">
            <Text size="md" lh={1.8}>
              • By providing your email/phone during registration, you agree to
              receive updates via calls, SMS, emails, or other means.
            </Text>
            <Text size="md" lh={1.8}>
              • You permit us to use your data (name, photo, rank, etc.) for
              testimonials and promotions.
            </Text>
            <Text size="md" lh={1.8}>
              • Content on this site is for general use only and may be changed
              without notice.
            </Text>
            <Text size="md" lh={1.8}>
              • We make no guarantees about the accuracy or suitability of any
              material provided. Use at your own risk.
            </Text>
            <Text size="md" lh={1.8}>
              • It is your responsibility to evaluate whether the information or
              services meet your requirements.
            </Text>
            <Text size="md" lh={1.8}>
              • All content/design/layouts/graphics are owned or licensed by us
              and cannot be reproduced without permission.
            </Text>
            <Text size="md" lh={1.8}>
              • Some educational material may be student-contributed. Valid
              copyright claims will be honored upon verification.
            </Text>
            <Text size="md" lh={1.8}>
              • Trademarks not owned by Nurture Nerve are acknowledged where
              applicable.
            </Text>
            <Text size="md" lh={1.8}>
              • Unauthorized use may lead to legal action under applicable laws.
            </Text>
            <Text size="md" lh={1.8}>
              • This electronic record is legally valid under the Information
              Technology Act, 2000.
            </Text>
            <Text size="md" lh={1.8}>
              • Links to other websites/apps may be provided for convenience
              only.
            </Text>
            <Text size="md" lh={1.8}>
              • You may not link to this website/app without our prior written
              approval.
            </Text>
            <Text size="md" lh={1.8}>
              • Usage and disputes are governed by Indian law or applicable
              regulatory bodies.
            </Text>
            <Text size="md" lh={1.8}>
              • We are not responsible for failed transactions due to cardholder
              credit limits or bank issues.
            </Text>
            <Text size="md" lh={1.8}>
              • We may modify or discontinue services, change course content,
              fees, or structure at any time.
            </Text>
          </Stack>

          <Box my="lg" />

          {/* Cancellation & Refund Policy */}
          <Text size="lg" style={{ color: "#361101", fontWeight: 700 }}>
            3. Cancellation & Refund Policy
          </Text>
          <Text size="md" lh={1.8}>
            No cancellations & refunds are entertained.
          </Text>

          <Box my="lg" />

          {/* Shipping and Delivery */}
          <Text size="lg" style={{ color: "#361101", fontWeight: 700 }}>
            4. Shipping and Delivery
          </Text>
          <Text size="md" lh={1.8}>
            We provide a digital subscription service that is activated
            immediately upon payment. No shipping or delivery is required.
          </Text>

          <Box my="lg" />

          {/* Contact Section */}
          <Divider my="lg" />
          <Text size="md" lh={1.8}>
            For copyright-related concerns, email us at:{" "}
            <Anchor
              href="mailto:nurturenervehelp@gmail.com"
              style={{ color: "#b88341", fontWeight: 600 }}
            >
              nurturenervehelp@gmail.com
            </Anchor>
          </Text>

          <Divider my="lg" />

          <Text ta="center" size="sm" style={{ color: "#aaa" }}>
            © 2025 Nurture Nerve. All rights reserved.
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
}
