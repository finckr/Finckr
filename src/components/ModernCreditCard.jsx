"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { CreditCard } from "lucide-react"
import Link from "next/link"

const patterns = {
  circles:
    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  triangles:
    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M3 0v1.5L1.5 3H0v3h1.5L3 7.5V9h3V7.5L7.5 6H9V3H7.5L6 1.5V0H3zm16 0v1.5L17.5 3H16v3h1.5L19 7.5V9h3V7.5L23.5 6H25V3H23.5L22 1.5V0H19zm16 0v1.5L33.5 3H32v3h1.5L35 7.5V9h3V7.5L39.5 6H41V3H39.5L38 1.5V0H35zM3 16v1.5L1.5 19H0v3h1.5L3 23.5V25h3V23.5L7.5 22H9V19H7.5L6 17.5V16H3zm16 0v1.5L17.5 19H16v3h1.5L19 23.5V25h3V23.5L23.5 22H25V19H23.5L22 17.5V16H19zm16 0v1.5L33.5 19H32v3h1.5L35 23.5V25h3V23.5L39.5 22H41V19H39.5L38 17.5V16H35zM3 32v1.5L1.5 35H0v3h1.5L3 39.5V41h3V39.5L7.5 38H9V35H7.5L6 33.5V32H3zm16 0v1.5L17.5 35H16v3h1.5L19 39.5V41h3V39.5L23.5 38H25V35H23.5L22 33.5V32H19zm16 0v1.5L33.5 35H32v3h1.5L35 39.5V41h3V39.5L39.5 38H41V35H39.5L38 33.5V32H35zM3 48v1.5L1.5 51H0v3h1.5L3 55.5V57h3V55.5L7.5 54H9V51H7.5L6 49.5V48H3zm16 0v1.5L17.5 51H16v3h1.5L19 55.5V57h3V55.5L23.5 54H25V51H23.5L22 49.5V48H19zm16 0v1.5L33.5 51H32v3h1.5L35 55.5V57h3V55.5L39.5 54H41V51H39.5L38 49.5V48H35z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  hexagons:
    "url(\"data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 40L2 38V2L0 0h24v2L22 4v34l2 2H0zM0 0l2 2v36l-2 2V0zm24 0l-2 2v36l2 2V0zM2 2h20v36H2V2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  waves:
    "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")"
}

const ModernCreditCard = ({
  id,
  cardNumber,
  cardholderName,
  expirationDate,
  bankName,
  bankLogo,
  cardType,
  bgColor,
  textColor,
  pattern
}) => {
  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false })

  const formatCardNumber = number => {
    if (cardType === "amex") {
      return `${number.slice(0, 4)} ${number.slice(4, 10)} ${number.slice(
        10,
        15
      )}`
    }
    return `${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(
      8,
      12
    )} ${number.slice(12, 16)}`
  }

  const getCardTypeIcon = () => {
    switch (cardType) {
      case "visa":
        return (
          <svg className="w-12 h-8" viewBox="0 0 48 16" fill={textColor}>
            <path d="M44.89 16H37.94L42.49 0H49.44L44.89 16ZM34.72 0L28.02 11.11L26.06 2.19C25.74 0.86 24.74 0 23.61 0H13.69L13.5 0.86C15.33 1.27 17 1.95 18.5 2.88L23.29 16H30.36L40.35 0H34.72ZM0 0L0.05 0.51C4.69 1.59 9.09 3.39 13.09 5.87L11.26 16H18.37L23.25 0H0Z" />
          </svg>
        )
      case "mastercard":
        return (
          <svg className="w-12 h-8" viewBox="0 0 48 30" fill="none">
            <circle cx="15" cy="15" r="15" fill="#EB001B" />
            <circle cx="33" cy="15" r="15" fill="#F79E1B" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 27C28.4183 24.5359 31.5 19.6458 31.5 14C31.5 8.35416 28.4183 3.46411 24 1C19.5817 3.46411 16.5 8.35416 16.5 14C16.5 19.6458 19.5817 24.5359 24 27Z"
              fill="#FF5F00"
            />
          </svg>
        )
      case "amex":
        return (
          <svg className="w-12 h-8" viewBox="0 0 48 48" fill={textColor}>
            <path d="M48 36H0V12H48V36ZM2.52 33.48H45.48V14.52H2.52V33.48ZM14.16 18.24H11.76V24.72H7.2V18.24H4.8V28.56H7.2V26.16H11.76V28.56H14.16V18.24ZM16.68 28.56H19.08V21.12H22.08L24.48 28.56H27.12L24.48 20.76C25.92 20.16 26.76 19.08 26.76 17.64C26.76 15.48 25.2 14.4 22.8 14.4H16.68V28.56ZM19.08 16.68H22.2C23.4 16.68 24.12 17.04 24.12 18C24.12 18.96 23.4 19.32 22.2 19.32H19.08V16.68ZM29.16 28.56H31.56V25.2H35.04C37.44 25.2 39.24 23.76 39.24 21.36C39.24 18.96 37.44 17.52 35.04 17.52H29.16V28.56ZM31.56 19.8H34.44C35.64 19.8 36.6 20.28 36.6 21.36C36.6 22.44 35.64 22.92 34.44 22.92H31.56V19.8ZM41.28 28.56H43.68V17.52H41.28V28.56Z" />
          </svg>
        )
    }
  }

  const handleRipple = event => {
    const rect = event.currentTarget.getBoundingClientRect()
    setRipple({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      show: true
    })
    setTimeout(() => setRipple({ x: 0, y: 0, show: false }), 500)
  }

  return (
    <Link href={`/explore/${id}`}>
      <motion.div
        className={`w-96 h-56 rounded-xl relative text-${textColor} shadow-2xl perspective-1000 cursor-pointer overflow-hidden`}
        whileHover={{ rotateY: 15, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={handleRipple}
      >
        <motion.div
          className={`absolute inset-0 ${bgColor} rounded-xl opacity-80`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            backgroundImage: patterns[pattern],
            backgroundSize: "cover"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        {ripple.show && (
          <motion.div
            className="absolute rounded-full bg-white"
            initial={{
              width: 0,
              height: 0,
              x: ripple.x,
              y: ripple.y,
              opacity: 0.5
            }}
            animate={{
              width: 500,
              height: 500,
              x: ripple.x - 250,
              y: ripple.y - 250,
              opacity: 0
            }}
            transition={{ duration: 0.5 }}
          />
        )}
        <div className="relative w-full h-full flex flex-col justify-between backdrop-blur-sm rounded-xl p-6 overflow-hidden">
          <div className="flex justify-between items-start z-10">
            <motion.img
              src={bankLogo}
              alt={`${bankName} logo`}
              className="h-8 object-contain"
              whileHover={{ scale: 1.1 }}
            />
            <motion.div
              className="text-lg font-bold"
              whileHover={{ scale: 1.1 }}
            >
              {bankName}
            </motion.div>
          </div>

          <div className="space-y-4 z-10">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <CreditCard className="w-8 h-8" />
            </motion.div>

            <motion.div
              className="text-2xl font-bold tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {formatCardNumber(cardNumber)}
            </motion.div>

            <div className="flex justify-between items-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-xs opacity-75">Cardholder Name</div>
                <div className="font-semibold">{cardholderName}</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-xs opacity-75">Expires</div>
                <div className="font-semibold">{expirationDate}</div>
              </motion.div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {getCardTypeIcon()}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default ModernCreditCard
