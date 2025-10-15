"use client";
import { useState, useRef, useEffect } from "react";
import { Stack, Flex, Box, Text, rem } from "@mantine/core";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const faqData = [
  {
    question: "What is Nurture Nerve?",
    answer:
      "Nurture Nerve is an interactive learning platform designed to help students prepare for competitive exams through MCQs, topic-wise quiz, mock tests, and performance analytics.",
  },
  {
    question: "Who can use this app?",
    answer:
      "Anyone preparing for competitive entrance or professional exams can use the app.",
  },
  {
    question: "How do I register on the app?",
    answer:
      "Simply click on “Sign Up”, fill in your basic details (name, email, phone number, and password), and submit it. A verification mail will be sent to your email.",
  },
  {
    question: "I did not receive the verification email/OTP. What should I do?",
    answer:
      "Please check your spam/junk folder. If not found, try registering again or contact support via the Contact Us section.",
  },
  {
    question: "I forgot my password. How can I reset it?",
    answer:
      "Click on “Forgot Password” on the login screen and follow the instructions to reset it using your registered email.",
  },
  {
    question: "How can I purchase a plan?",
    answer:
      "Go to “Plans” in your profile, select a preferred plan, and complete payment through our secure gateway using UPI, debit/credit card, or net banking.",
  },
  {
    question: "How do I register for a quiz?",
    answer:
      "Navigate to the Quiz section, tap “Register” for the scheduled quiz. A mail will be sent to your registered email ID confirming your registration.",
  },
  {
    question: "When will I get my quiz results?",
    answer:
      "Individual results are available immediately or within 1 day after submitting the quiz while the overall scoreboard is displayed after evaluation.",
  },
  {
    question: "How can I track my progress?",
    answer:
      "Your “Nurture Journey” shows your scores, progress trends, weak areas, and topic-wise performance.",
  },
  {
    question: "Can I report an incorrect question or answer?",
    answer:
      "Yes. You can raise any question directly in our “Query” section. Our academic team will address and review the question and provide the answer appropriately.",
  },
  {
    question: "Is my personal data safe?",
    answer:
      "Absolutely. We follow strict data protection and encryption protocols to ensure your privacy and payment security.",
  },
  {
    question: "Can I delete my account?",
    answer:
      "Yes. You can request account deletion from the Account Settings section. Note that this action is irreversible and will remove all your data and progress.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAnswer = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <Box
      id="faqs"
      style={{
        maxWidth: rem(700),
        margin: "auto",
        padding: "40px 20px",
      }}
    >
      {/* Header */}
      <Box style={{ textAlign: "center", marginBottom: rem(32) }} my={20} >
        <Text
          style={{
            fontSize: rem(28),
            fontWeight: 700,
            color: "#361101",
            marginBottom: rem(8),
          }}
        >
          Frequently Asked Questions
        </Text>
        <Text size="sm" style={{ color: "gray" }}>
          Answers to the most common questions about Nurture Nerve.
        </Text>
      </Box>

      {/* FAQ List */}
      <Stack gap="md" mt={100}>
        {faqData.map((item, index) => (
          <SmoothFAQItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => toggleAnswer(index)}
          />
        ))}
      </Stack>
    </Box>
  );
}

// ✅ Smooth expand/collapse transition component
function SmoothFAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <Box
      style={{
        width: "100%",
        border: "1px solid #eee",
        borderRadius: rem(12),
        padding: rem(16),
        background: "white",
        borderLeft: "4px solid #361101",
        boxShadow: isOpen ? "0 2px 6px rgba(0,0,0,0.1)" : "none",
        transition: "box-shadow 0.3s ease, background 0.3s ease",
      }}
    >
      {/* Question Row */}
      <Flex
        align="center"
        justify="space-between"
        onClick={onToggle}
        style={{
          cursor: "pointer",
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "#361101",
            fontWeight: 600,
            fontSize: rem(18),
            flex: 1,
          }}
        >
          {question}
        </Text>

        <Box
          style={{
            border: "1px solid #361101",
            borderRadius: "50%",
            width: rem(26),
            height: rem(26),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          {isOpen ? (
            <IconMinus size={16} color="#361101" />
          ) : (
            <IconPlus size={16} color="#361101" />
          )}
        </Box>
      </Flex>

      {/* Smooth expandable answer */}
      <Box
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.5s ease, opacity 0.5s ease",
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? rem(8) : "0",
        }}
      >
        <div ref={contentRef}>
          <Text
            size="sm"
            style={{
              color: "#B88341",
              lineHeight: 1.6,
            }}
          >
            {answer}
          </Text>
        </div>
      </Box>
    </Box>
  );
}
