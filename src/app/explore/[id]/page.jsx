'use client';
import { useParams } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import ModernCreditCard from '@/components/ModernCreditCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Mock data for credit cards (expanded with more details)
const creditCards = [
  { 
    id: 1, 
    name: 'Cash Back Master', 
    cashback: '5%', 
    annualFee: 0, 
    creditScore: 'Excellent', 
    type: 'Cashback',
    bank: 'CreditBank',
    description: 'Earn top-tier cash back on all your purchases with no annual fee.',
    pros: ['High cashback rate', 'No annual fee', 'Welcome bonus available'],
    cons: ['Requires excellent credit', 'Foreign transaction fees apply'],
    imageUrl: '/placeholder.svg?height=300&width=500'
  },
  { 
    id: 2, 
    name: 'Travel Elite', 
    cashback: '3%', 
    annualFee: 95, 
    creditScore: 'Good', 
    type: 'Travel',
    bank: 'Voyager Financial',
    description: 'Unlock premium travel perks and earn miles on every purchase.',
    pros: ['Travel insurance included', 'Airport lounge access', 'No foreign transaction fees'],
    cons: ['Annual fee', 'Lower rewards on non-travel purchases'],
    imageUrl: '/placeholder.svg?height=300&width=500'
  },
  // ... add more detailed card data for the other cards
]

export default function CardDetailsPage() {
  const params = useParams()
  const cardId = parseInt(params.id)
  const card = creditCards.find(c => c.id === cardId)

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">{card.name}</CardTitle>
            <CardDescription>{card.type} Card | {card.creditScore} Credit Score</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div>
              <ModernCreditCard
                cardNumber={card.id.toString().padStart(16, '0')}
                cardholderName={card.name.toUpperCase()}
                expirationDate="12/25"
                bankName="Creditful"
                bankLogo="/placeholder.svg?height=32&width=96"
                cardType={card.type.toLowerCase()}
                bgColor={`bg-gradient-to-r from-${card.type === 'Cashback' ? 'purple-400 to-pink-600' : 
                           card.type === 'Travel' ? 'blue-400 to-teal-500' : 
                           card.type === 'Rewards' ? 'green-400 to-cyan-500' : 
                           card.type === 'Student' ? 'yellow-400 to-orange-500' : 
                           card.type === 'Business' ? 'indigo-400 to-purple-500' : 
                           'red-400 to-yellow-500'}`}
                textColor="white"
                pattern={card.type === 'Cashback' ? 'circles' : 
                          card.type === 'Travel' ? 'triangles' : 
                          card.type === 'Rewards' ? 'hexagons' : 
                          card.type === 'Student' ? 'waves' : 
                          card.type === 'Business' ? 'circles' : 
                          'triangles'} />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Card Details</h3>
                <p><strong>Cashback:</strong> {card.cashback}</p>
                <p><strong>Annual Fee:</strong> ${card.annualFee}</p>
                <p><strong>Issuing Bank:</strong> {card.bank}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p>{card.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pros</h3>
                <ul className="list-disc list-inside">
                  {card.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cons</h3>
                <ul className="list-disc list-inside">
                  {card.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
          <div className="flex justify-between mt-8">
            <Button asChild variant="outline">
              <Link href={`/compare?ids=${cardId}`}>Compare</Link>
            </Button>
            <Button>Apply Now</Button>
          </div>
        </Card>
      </main>
      <Footer />
    </div>)
  );
}

