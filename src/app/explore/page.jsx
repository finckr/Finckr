'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import ModernCreditCard from '@/components/ModernCreditCard'
import CompareToolbar from '@/components/CompareToolbar'

// Mock data for credit cards
const creditCards = [
  { id: 1, name: 'Cash Back Master', cashback: '5%', annualFee: 0, creditScore: 'Excellent', type: 'Cashback' },
  { id: 2, name: 'Travel Elite', cashback: '3%', annualFee: 95, creditScore: 'Good', type: 'Travel' },
  { id: 3, name: 'Rewards Plus', cashback: '2%', annualFee: 150, creditScore: 'Excellent', type: 'Rewards' },
  { id: 4, name: 'Student Starter', cashback: '1%', annualFee: 0, creditScore: 'Fair', type: 'Student' },
  { id: 5, name: 'Business Pro', cashback: '4%', annualFee: 125, creditScore: 'Good', type: 'Business' },
  { id: 6, name: 'Secured Builder', cashback: '1%', annualFee: 0, creditScore: 'Poor', type: 'Secured' },
]

export default function ExplorePage() {
  const [filters, setFilters] = useState({
    cashback: 0,
    annualFee: 200,
    creditScore: [],
    cardType: [],
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCards, setSelectedCards] = useState([])

  const filteredCards = creditCards.filter(card => {
    const matchesFilters = (
      parseFloat(card.cashback) >= filters.cashback &&
      card.annualFee <= filters.annualFee &&
      (filters.creditScore.length === 0 || filters.creditScore.includes(card.creditScore)) &&
      (filters.cardType.length === 0 || filters.cardType.includes(card.type))
    )
    const matchesSearch = card.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilters && matchesSearch
  })

  const toggleCardSelection = (id) => {
    setSelectedCards(prev => 
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id])
  }

  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Input
          type="text"
          placeholder="Search cards..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4" />
        <h1 className="text-4xl font-bold mb-8 text-center">Explore Credit Cards</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with filters */}
          <aside className="w-full md:w-1/4">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="cashback">Minimum Cashback</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="cashback"
                      min={0}
                      max={5}
                      step={0.5}
                      value={[filters.cashback]}
                      onValueChange={(value) => setFilters({ ...filters, cashback: value[0] })} />
                    <span>{filters.cashback}%</span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="annualFee">Maximum Annual Fee</Label>
                  <div className="flex items-center space-x-2">
                    <Slider
                      id="annualFee"
                      min={0}
                      max={500}
                      step={25}
                      value={[filters.annualFee]}
                      onValueChange={(value) => setFilters({ ...filters, annualFee: value[0] })} />
                    <span>${filters.annualFee}</span>
                  </div>
                </div>
                <div>
                  <Label className="mb-2 block">Credit Score</Label>
                  {['Excellent', 'Good', 'Fair', 'Poor'].map((score) => (
                    <div key={score} className="flex items-center space-x-2 mb-2">
                      <Checkbox
                        id={score}
                        checked={filters.creditScore.includes(score)}
                        onCheckedChange={(checked) => {
                          setFilters({
                            ...filters,
                            creditScore: checked
                              ? [...filters.creditScore, score]
                              : filters.creditScore.filter((s) => s !== score),
                          })
                        }} />
                      <Label htmlFor={score}>{score}</Label>
                    </div>
                  ))}
                </div>
                <div>
                  <Label className="mb-2 block">Card Type</Label>
                  {['Cashback', 'Travel', 'Rewards', 'Student', 'Business', 'Secured'].map((type) => (
                    <div key={type} className="flex items-center space-x-2 mb-2">
                      <Checkbox
                        id={type}
                        checked={filters.cardType.includes(type)}
                        onCheckedChange={(checked) => {
                          setFilters({
                            ...filters,
                            cardType: checked
                              ? [...filters.cardType, type]
                              : filters.cardType.filter((t) => t !== type),
                          })
                        }} />
                      <Label htmlFor={type}>{type}</Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main content with card list */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCards.map((card) => (
                <div key={card.id} className="flex flex-col items-center">
                  <div className="relative">
                    <ModernCreditCard
                      id={card.id}
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
                    <button
                      className={`absolute top-2 right-2 w-6 h-6 rounded-full ${
                        selectedCards.includes(card.id) ? 'bg-primary' : 'bg-secondary'
                      }`}
                      onClick={() => toggleCardSelection(card.id)} />
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{card.name}</h3>
                  <p className="text-muted-foreground text-center mt-2">Cashback: {card.cashback}</p>
                  <p className="text-muted-foreground text-center">Annual Fee: ${card.annualFee}</p>
                  <Button asChild className="mt-4">
                    <Link href={`/explore/${card.id}`}>Learn More</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {selectedCards.length > 0 && (
        <CompareToolbar
          selectedCards={selectedCards}
          onRemove={(id) => setSelectedCards((prev) => prev.filter((cardId) => cardId !== id))} />
      )}
    </div>)
  );
}

