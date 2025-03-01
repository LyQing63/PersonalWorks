"use client"

import { motion } from 'framer-motion'

type TagColor = "blue" | "green" | "red" | "yellow" | "purple" | "cyan" | "pink" | "black"

interface AnimatedTagProps {
  label: string
  color?: TagColor
}

const colorVariants: Record<TagColor, { bg: string; text: string; border: string }> = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-800",
    border: "border-blue-200",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-800",
    border: "border-green-200",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-800",
    border: "border-red-200",
  },
  yellow: {
    bg: "bg-yellow-100",
    text: "text-yellow-800",
    border: "border-yellow-200",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-800",
    border: "border-purple-200",
  },
  cyan: {
    bg: "bg-cyan-100",
    text: "text-cyan-800",
    border: "border-cyan-200",
  },
  pink: {
    bg: "bg-pink-100",
    text: "text-pink-800",
    border: "border-pink-200",
  },
  black: {
    bg: "bg-gray-100",
    text: "text-gray-800",
    border: "border-gray-200",
  },
}

export function Tag({ label, color = "blue" }: AnimatedTagProps) {
  const colorClasses = colorVariants[color];

  return (
    <motion.div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      layout
    >
      {label}
    </motion.div>
  )
}

