import React from 'react'
import { Stack, Text, Box, Title, Anchor, Divider } from '@mantine/core'

export default function Privacy() {
  return (
    <Box p="xl">
      <Stack >
        {/* Header Section */}
        <Box style={{ textta: 'center', marginBottom: '40px' }}>
          <Text ta="center" size="xl" style={{ color: '#361101', marginBottom: '10px', fontWeight: 700 }}>
            Privacy Policy
          </Text>
          <Text ta="center" size="md" style={{ color: '#555' }}>
            Effective as of August 2025
          </Text>
        </Box>

        {/* Privacy Description */}
        <Text size="md" lh={1.8}>
          Nurture Nerve ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our mobile application and services related to competitive exam preparation and student engagement.
        </Text>
        <Text size="md" lh={1.8}>
          By accessing or using the Nurture Nerve app, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the app.
        </Text>

        <Box my="lg" />

        {/* Information We Collect */}
        <Text size="lg" style={{ color: '#361101', fontWeight: 700 }}>
          1. Information We Collect
        </Text>
        <Text size="md" lh={1.8}>
          We collect the following types of information to provide and improve our services:
        </Text>

        {/* Personal Information */}
        <Text size="md" style={{ color: '#b88341', fontWeight: 700 }}>
          a) Personal Information
        </Text>
        <Stack gap={4} pl="20px">
          <Text size="md" lh={1.8}>Full Name</Text>
          <Text size="md" lh={1.8}>Email Address</Text>
          <Text size="md" lh={1.8}>Mobile Number</Text>
          <Text size="md" lh={1.8}>Educational Institution or Affiliation</Text>
          <Text size="md" lh={1.8}>Class/Grade or Course Information</Text>
          <Text size="md" lh={1.8}>Date of Birth (optional)</Text>
        </Stack>

        {/* Usage and Device Information */}
        <Text size="md" style={{ color: '#b88341', fontWeight: 700 }}>
          b) Usage and Device Information
        </Text>
        <Stack gap={4} pl="20px">
          <Text size="md" lh={1.8}>Device type, operating system, and version</Text>
          <Text size="md" lh={1.8}>App usage data and interaction logs</Text>
          <Text size="md" lh={1.8}>IP address and location data (if permission granted)</Text>
          <Text size="md" lh={1.8}>Quiz scores, performance analytics, and progress metrics</Text>
        </Stack>

        {/* Optional Information */}
        <Text size="md" style={{ color: '#b88341', fontWeight: 700 }}>
          c) Optional Information
        </Text>
        <Stack gap={4} pl="20px">
          <Text size="md" lh={1.8}>Feedback, queries, or responses to surveys</Text>
          <Text size="md" lh={1.8}>Responses in mood trackers or wellness features (if used)</Text>
        </Stack>

        <Box my="lg" />

        {/* How We Use Your Information */}
        <Text size="lg" style={{ color: '#361101', fontWeight: 700 }}>
          2. How We Use Your Information
        </Text>
        <Stack gap={4} pl="20px">
          <Text size="md" lh={1.8}>Create and manage your user account</Text>
          <Text size="md" lh={1.8}>Provide personalized learning content and quizzes</Text>
          <Text size="md" lh={1.8}>Monitor learning progress and generate insights</Text>
          <Text size="md" lh={1.8}>Communicate updates, results, or support information</Text>
          <Text size="md" lh={1.8}>Improve app features, security, and functionality</Text>
          <Text size="md" lh={1.8}>Send reminders, announcements, or promotional materials (with consent)</Text>
        </Stack>
        <Text size="md" lh={1.8}>
          We do not use your data for profiling or automated decision-making that significantly affects you without your consent.
        </Text>

        <Box my="lg" />

        {/* Sharing and Disclosure of Information */}
        <Text size="lg" style={{ color: '#361101', fontWeight: 700 }}>
          3. Sharing and Disclosure of Information
        </Text>
        <Text size="md" lh={1.8}>
          We do not sell, rent, or trade your personal information.
        </Text>
        <Text size="md" lh={1.8}>
          We may share information in the following limited circumstances:
        </Text>
        <Stack gap={4} pl="20px">
          <Text size="md" lh={1.8}>With trusted service providers for hosting, analytics, or support (under strict confidentiality agreements)</Text>
          <Text size="md" lh={1.8}>With legal authorities if required by law, court order, or to protect our rights or safety</Text>
          <Text size="md" lh={1.8}>With academic institutions or educational partners, with explicit consent from the user (or parent/guardian where applicable)</Text>
        </Stack>

        <Box my="lg" />

        {/* Data Security */}
        <Text size="lg" style={{ color: '#361101', fontWeight: 700 }}>
          4. Data Security
        </Text>
        <Text size="md" lh={1.8}>
          We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure. These include:
        </Text>
        <Stack gap={4} pl="20px">
          <Text size="md" lh={1.8}>Encrypted communication (HTTPS)</Text>
          <Text size="md" lh={1.8}>Secure server storage</Text>
          <Text size="md" lh={1.8}>Limited internal access controls</Text>
        </Stack>
        <Text size="md" lh={1.8}>
          However, no system is completely secure. Users are encouraged to maintain the confidentiality of their login credentials.
        </Text>

        <Box my="lg" />

        {/* Data Retention */}
        <Text size="lg" style={{ color: '#361101', fontWeight: 700 }}>
          5. Data Retention
        </Text>
        <Text size="md" lh={1.8}>
          We retain personal data for as long as necessary to fulfill the purposes stated in this policy, or as required by law. Users may request deletion of their data at any time by contacting us.
        </Text>

        <Box my="lg" />

        {/* Children's Privacy */}
        <Text size="lg" style={{ color: '#361101', fontWeight: 700 }}>
          6. Children’s Privacy
        </Text>
        <Text size="md" lh={1.8}>
          Nurture Nerve is intended for users aged 13 years and above. If a user is under 13, parental or institutional supervision is advised. We do not knowingly collect data from children without verifiable consent.
        </Text>

        <Box my="lg" />

        {/* Your Rights and Choices */}
        <Text size="lg" style={{ color: '#361101', fontWeight: 700 }}>
          7. Your Rights and Choices
        </Text>
        <Stack gap={4} pl="20px">
          <Text size="md" lh={1.8}>Access, update, or delete your personal information</Text>
          <Text size="md" lh={1.8}>Opt-out of marketing communications</Text>
          <Text size="md" lh={1.8}>Withdraw consent (where processing is based on consent)</Text>
        </Stack>
        <Text size="md" lh={1.8}>
          To exercise these rights, email us at:{' '}
          <Text component="a" href="mailto:nurturenerve@gmail.com" style={{ color: '#b88341' }}>
            nurturenerve@gmail.com
          </Text>
        </Text>

        <Box my="lg" />

        {/* Changes to the Privacy Policy */}
        <Text size="lg" style={{ color: '#361101', fontWeight: 700 }}>
          8. Changes to This Privacy Policy
        </Text>
        <Text size="md" lh={1.8}>
          We reserve the right to update this Privacy Policy at any time. Significant changes will be notified through the app or via email. Continued use of the app constitutes acceptance of the revised policy.
        </Text>

        <Box my="lg" />

        {/* Contact Us */}
          <Title order={2} style={{ color: '#361101' }}>
                9. Contact Us
              </Title>
              <Text size="md" lh={1.8}>
                If you have any questions or concerns about this Privacy Policy or data handling practices, please contact:
              </Text>
              <Text size="md" lh={1.8}>
                Nurture Nerve – Data Privacy Office<br />
                📧 Email:{' '}
                <Anchor href="mailto:nurturenerve@gmail.com" style={{ color: '#b88341' }}>
                  nurturenerve@gmail.com
                </Anchor>
              </Text>
      
              <Divider my="lg" />
      
              <div style={{ marginTop: '50px', textAlign: 'center', fontSize: '14px', color: '#aaa' }}>
                <Text>&copy; 2025 Nurture Nerve. All rights reserved.</Text>
              </div>

        </Stack>
        </Box>
  )
}
       
