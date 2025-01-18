import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BlogSection } from '@/components/blog-section'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Shield, TrendingUp, Calculator } from 'lucide-react'
import CardCarousel from '@/components/CardCarousel'


export default function Home() {
  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Unlock Your Financial Potential</h1>
            <p className="text-xl mb-8">Discover credit cards tailored to your lifestyle and goals.</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/explore">Start Exploring <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        {/* Featured Cards Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
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
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Creditful</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-secondary rounded-lg">
                <Zap className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Smart Recommendations</h3>
                <p className="text-muted-foreground">Get card suggestions tailored to your spending habits and credit profile.</p>
              </div>
              <div className="text-center p-6 bg-secondary rounded-lg">
                <Shield className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Secure Comparisons</h3>
                <p className="text-muted-foreground">Compare cards side-by-side with our secure and unbiased platform.</p>
              </div>
              <div className="text-center p-6 bg-secondary rounded-lg">
                <TrendingUp className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Financial Growth</h3>
                <p className="text-muted-foreground">Learn how to maximize rewards and improve your credit score.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculators Section */}
        <section id="calculators" className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Credit Card Calculators</h2>
            <div className="text-center">
              <p className="text-xl mb-8">Use our calculators to make informed decisions about your credit cards.</p>
              <Button asChild size="lg">
                <Link href="/calculators">
                  <Calculator className="mr-2 h-4 w-4" />
                  Explore Calculators
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection />
      </main>
      <Footer />
    </div>)
  );
}

