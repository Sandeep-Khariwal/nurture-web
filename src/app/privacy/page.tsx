import React from "react";
import {
  Stack,
  Text,
  Box,
  Title,
  Anchor,
  Divider,
  Paper,
  Container,
} from "@mantine/core";

export default function Privacy() {
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
        <Stack gap="lg">
          {/* Header Section */}
          <Box ta="center" mb="lg">
            <Title
              order={1}
              style={{
                color: "#361101",
                fontWeight: 800,
                letterSpacing: 0.5,
              }}
            >
              Privacy Policy
            </Title>
            <Text size="sm" c="#a27852" mt="xs">
              Effective as of August 2025
            </Text>
          </Box>

          <Divider size="sm" color="#e6d2b2" />

          {/* Introduction */}
          <Text size="md" lh={1.8} c="dimmed">
            <strong>Nurture Nerve</strong> ("we", "our", or "us") is committed
            to protecting your privacy. This Privacy Policy outlines how we
            collect, use, disclose, and safeguard your information when you use
            our mobile application and services related to competitive exam
            preparation and student engagement.
          </Text>

          <Text size="md" lh={1.8} c="dimmed">
            By accessing or using the Nurture Nerve app, you agree to the terms
            of this Privacy Policy. If you do not agree, please discontinue
            using the app.
          </Text>

          {/* Section */}
          <Section
            title="1. Information We Collect"
            items={[
              {
                subtitle: "a) Personal Information",
                points: [
                  "Full Name",
                  "Email Address",
                  "Mobile Number",
                  "Educational Institution or Affiliation",
                  "Class/Grade or Course Information",
                  "Date of Birth (optional)",
                ],
              },
              {
                subtitle: "b) Usage and Device Information",
                points: [
                  "Device type, operating system, and version",
                  "App usage data and interaction logs",
                  "IP address and location data (if permission granted)",
                  "Quiz scores, performance analytics, and progress metrics",
                ],
              },
              {
                subtitle: "c) Optional Information",
                points: [
                  "Feedback, queries, or responses to surveys",
                  "Responses in mood trackers or wellness features (if used)",
                ],
              },
            ]}
          />

          <Section
            title="2. How We Use Your Information"
            points={[
              "Create and manage your user account",
              "Provide personalized learning content and quizzes",
              "Monitor learning progress and generate insights",
              "Communicate updates, results, or support information",
              "Improve app features, security, and functionality",
              "Send reminders, announcements, or promotional materials (with consent)",
            ]}
            note="We do not use your data for profiling or automated decision-making that significantly affects you without your consent."
          />

          <Section
            title="3. Sharing and Disclosure of Information"
            description="We do not sell, rent, or trade your personal information. We may share information in the following limited circumstances:"
            points={[
              "With trusted service providers for hosting, analytics, or support (under strict confidentiality agreements)",
              "With legal authorities if required by law, court order, or to protect our rights or safety",
              "With academic institutions or educational partners, with explicit consent from the user (or parent/guardian where applicable)",
            ]}
          />

          <Section
            title="4. Data Security"
            description="We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure. These include:"
            points={[
              "Encrypted communication (HTTPS)",
              "Secure server storage",
              "Limited internal access controls",
            ]}
            note="However, no system is completely secure. Users are encouraged to maintain the confidentiality of their login credentials."
          />

          <Section
            title="5. Data Retention"
            description="We retain personal data for as long as necessary to fulfill the purposes stated in this policy, or as required by law. Users may request deletion of their data at any time by contacting us."
          />

          <Section
            title="6. Children’s Privacy"
            description="Nurture Nerve is intended for users aged 13 years and above. If a user is under 13, parental or institutional supervision is advised. We do not knowingly collect data from children without verifiable consent."
          />

          <Section
            title="7. Your Rights and Choices"
            description="You have the right to:"
            points={[
              "Access, update, or delete your personal information",
              "Opt-out of marketing communications",
              "Withdraw consent (where processing is based on consent)",
            ]}
            note={
              <>
                To exercise these rights, email us at{" "}
                <Anchor href="mailto:nurturenerve@gmail.com" c="#b88341">
                  nurturenerve@gmail.com
                </Anchor>
                .
              </>
            }
          />

          <Section
            title="8. Changes to This Privacy Policy"
            description="We reserve the right to update this Privacy Policy at any time. Significant changes will be notified through the app or via email. Continued use of the app constitutes acceptance of the revised policy."
          />

          {/* Contact Us */}
          <Box>
            <Title order={3} c="#361101" mb="xs">
              9. Contact Us
            </Title>
            <Text size="md" lh={1.8}>
              If you have any questions or concerns about this Privacy Policy or
              data handling practices, please contact:
            </Text>
            <Text size="md" lh={1.8}>
              Nurture Nerve – Data Privacy Office
              <br />
              📧 Email:{" "}
              <Anchor href="mailto:nurturenerve@gmail.com" c="#b88341">
                nurturenerve@gmail.com
              </Anchor>
            </Text>
          </Box>

          <Divider my="xl" color="#e6d2b2" />

          {/* Footer */}
          <Text ta="center" size="sm" c="dimmed">
            © 2025 Nurture Nerve. All rights reserved.
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
}

/* -------------------------- Reusable Section Component -------------------------- */
const Section = ({
  title,
  description,
  subtitle,
  points,
  note,
  items,
}: {
  title: string;
  description?: string;
  subtitle?: string;
  points?: string[];
  note?: React.ReactNode;
  items?: {
    subtitle: string;
    points: string[];
  }[];
}) => (
  <Box>
    <Title order={3} c="#361101" mb="xs" style={{ fontWeight: 700 }}>
      {title}
    </Title>
    {description && (
      <Text size="md" lh={1.8} c="dimmed" mb="xs">
        {description}
      </Text>
    )}

    {items
      ? items.map((item, idx) => (
          <Box key={idx} mb="xs">
            <Text size="md" fw={600} c="#b88341" mt="sm">
              {item.subtitle}
            </Text>
            <Stack gap={4} pl="md">
              {item.points.map((point, i) => (
                <Text key={i} size="sm" lh={1.7} c="dimmed">
                  • {point}
                </Text>
              ))}
            </Stack>
          </Box>
        ))
      : points && (
          <Stack gap={4} pl="md">
            {points.map((point, i) => (
              <Text key={i} size="sm" lh={1.7} c="dimmed">
                • {point}
              </Text>
            ))}
          </Stack>
        )}

    {note && (
      <Text size="sm" lh={1.7} mt="sm" c="dimmed">
        {note}
      </Text>
    )}
  </Box>
);
