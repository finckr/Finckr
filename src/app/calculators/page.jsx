import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CardCarousel from '@/components/CardCarousel'

export const runtime = 'edge';

const calculators = [
  { 
    name: 'Interest Calculator', 
    description: 'Calculate the interest you\'ll pay on your credit card balance.',
    link: '/calculators/interest-calculator'
  },
  { 
    name: 'Rewards Calculator', 
    description: 'Estimate your potential credit card rewards based on your spending.',
    link: '/calculators/rewards-calculator'
  },
  { 
    name: 'Balance Transfer Calculator', 
    description: 'Determine if a balance transfer could save you money on interest.',
    link: '/calculators/balance-transfer-calculator'
  },
]

export default function CalculatorsPage() {
  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Credit Card Calculators</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculators.map((calc, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{calc.name}</CardTitle>
                <CardDescription>{calc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={calc.link}>Use Calculator</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Credit Cards</h2>
          <CardCarousel
            cards={[
              { 
                id: 1,
                cardNumber: "4539148803436467",
                cardholderName: "JOHN DOE",
                expirationDate: "12/25",
                bankName: "Creditful",
                bankLogo: "/placeholder.svg?height=32&width=96",
                cardType: "visa",
                bgColor: "bg-gradient-to-r from-purple-400 to-pink-600",
                textColor: "white",
                pattern: "circles"
              },
              { 
                id: 2,
                cardNumber: "5412751234123456",
                cardholderName: "JANE SMITH",
                expirationDate: "06/24",
                bankName: "Creditful",
                bankLogo: "/placeholder.svg?height=32&width=96",
                cardType: "mastercard",
                bgColor: "bg-gradient-to-r from-blue-400 to-teal-500",
                textColor: "white",
                pattern: "triangles"
              },
              { 
                id: 3,
                cardNumber: "378282246310005",
                cardholderName: "ROBERT JOHNSON",
                expirationDate: "09/26",
                bankName: "Creditful",
                bankLogo: "/placeholder.svg?height=32&width=96",
                cardType: "amex",
                bgColor: "bg-gradient-to-r from-green-400 to-cyan-500",
                textColor: "white",
                pattern: "hexagons"
              }
            ]} />
        </section>
      </main>
      <Footer />
    </div>)
  );
}

