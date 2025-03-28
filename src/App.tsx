import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="p-8">
      <nav className="flex gap-4 mb-6">
        <Button asChild variant="ghost">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/about">About</Link>
        </Button>
      </nav>
      {/* Pages render here */}
    </div>
  )
}