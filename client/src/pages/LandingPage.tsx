import React from 'react'

const LandingPage = () => {
  return (
         <div className="bg-gradient-to-b from-blue-600 to-black text-white min-h-screen font-sans">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold">Availr</h1>
        <p className="mt-4 text-lg">Perfect CLI tool & minimal web server for availability scheduling</p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-900 font-semibold rounded-full">Get Started</button>
      </header>

        {/*sec1*/}

      <section className="px-4 py-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Tired of Chasing Confirmations?</h2>
        <p className="mb-8 bg-white/10 p-4 rounded-lg">
        Too many emails. Too many delays. One missed reply can throw everything off. Manual
        scheduling is like herding cats — slow, messy, and frustrating. Availr makes it smooth,
        smart, and stress-free — and it starts here.
        </p>

        {/*sec2*/}

        <h2 className=" text-2xl font-semibold mb-4">How Availr Helps?</h2>
        <p className="mb-4">One Tool. Total Control.</p>
        <ul className="list-disc list-inside space-y-4 bg-white/10 p-4 rounded-lg">
            <li>✅ <b>Email-Based Confirmation Workflow</b> – Send availability invites with ease</li>
          <li>✅ <b>CSV Import</b> – Upload attendee lists instantly</li>
          <li>✅ <b>Personalized Links</b> – One-click confirmations, no login needed</li>
          <li>✅ <b>Secure Hosted Pages</b> – Privacy-respecting and lightweight</li>
          <li>✅ <b>Auto Cleanup</b> – Keep your data tidy and up-to-date</li>
          <li>✅ <b>Multi-Tenant Ready</b> – Perfect for teams, bootcamps, and more</li>
        </ul>

        {/*sec3*/}

        <h2 className=" text-2xl font-semibold mt-10 mb-4">Here’s How Availr Works?</h2>
        <p className="mb-4">Visual Journey:</p>
        <ul className="list-disc list-inside space-y-4 bg-white/10 p-4 rounded-lg">
            <li>✅ <b> Upload CSV</b> –  Add your participant list in seconds</li>
          <li>✅ <b>Trigger Emails</b> – Instantly send smart invites</li>
          <li>✅ <b>Users Choose Slot</b> –  Attendees confirm with a single click</li>
          <li>✅ <b>View Confirmations</b> – Track responses in real time</li>
          <li>✅ <b>Clean Up Data</b> – Keep things neat with built-in cleanup tools</li>
        </ul>

        {/*sec4*/}

        <h2 className="text-2xl font-semibold mt-10 mb-4">Why Teams Love Availr?</h2>
        <p className="mb-4">What Sets Us Apart:</p>
        <ul className="list-disc list-inside space-y-2 bg-white/10 p-4 rounded-lg">
          <li>✅ No account or login needed for participants</li>
          <li>✅ CLI-first workflow — made for developers and organizers</li>
          <li>✅ Scales effortlessly — from 10 to 10,000 users</li>
          <li>✅ Built with privacy in mind — no unnecessary data collection</li>
        </ul>

        {/*sec5*/}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Built for Every Kind of Scheduling</h2>
        <p className="mb-4">Where Availr Shines:</p>
        <ul className="list-disc list-inside space-y-2 bg-white/10 p-4 rounded-lg">
          <li>💻 Tech Bootcamps</li>
          <li>📚 Workshops & Trainings</li>
          <li>🎤 Interviews</li>
          <li>👨‍💻 Hackathons & Developer Events</li>
        </ul>

      </section>

    </div>
  )
}

export default LandingPage