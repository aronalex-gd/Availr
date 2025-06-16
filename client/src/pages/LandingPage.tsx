
import Heading from '../components/heading'
import ProblemStatement from '../components/ps'
import Features from '../components/Features'
import Working from '../components/Working'
import Help from '../components/Help'
import Usage from '../components/Usage'

const LandingPage = () => {
  return (
         <div className="bg-gradient-to-b from-blue-600 to-black text-white min-h-screen font-sans">
      <Heading />
      <main className="px-4 py-12 max-w-3xl mx-auto">
        <ProblemStatement
                    title="Tired of Chasing Confirmations?"
                    description="Too many emails. Too many delays. One missed reply can throw everything off. Manual
                    scheduling is like herding cats — slow, messy, and frustrating. Availr makes it smooth,
                    smart, and stress-free — and it starts here."
                  />
        <Features
                    title="How Availr Helps?"
                    description="One Tool. Total Control."
                  />
        <Working
                title="Here’s How Availr Works?"
                description='Visual Journey:'
                />
        <Help
              title="Why Teams Love Availr?"
              description="What Sets Us Apart:"
            />
        <Usage
              title="Built for Every Kind of Scheduling"
              description="Where Availr Shines:"
              />
      </main>
    </div>
  )
}

export default LandingPage