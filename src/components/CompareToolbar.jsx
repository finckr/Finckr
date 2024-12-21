"use client"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

const CompareToolbar = ({ selectedCards, onRemove }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {selectedCards.map(id => (
            <div
              key={id}
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full flex items-center"
            >
              <span>Card {id}</span>
              <button onClick={() => onRemove(id)} className="ml-2">
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
        <Button asChild disabled={selectedCards.length < 2}>
          <Link href={`/compare?ids=${selectedCards.join(",")}`}>
            Compare ({selectedCards.length})
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default CompareToolbar
