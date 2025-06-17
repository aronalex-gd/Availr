import Heading from '../components/Heading'
import ProblemStatement from '../components/ps'
import Features from '../components/Features'
import Working from '../components/Working'
import Help from '../components/Help'
import Usage from '../components/Usage'
import People from '../components/People'
import FAQ from '../components/Faq'
import Prefooter from '../components/Prefooter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const LandingPage = () => {
  return (

    <div className="relative bg-gradient-to-b from-[#003897] to-black min-h-screen font-sans text-white overflow-x-hidden">
      <div className="absolute size-full z-0 pointer-events-none">
      <div className=" absolute w-[942px] h-[1200px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
          
        </div>
        <div className="bottom-0 absolute w-[942px] h-[1200px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
          </div>
         

        <div className="-right-96 bottom-0 absolute w-[942px] h-[1200px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
          </div>

          <div className="left-0 top-[28%] absolute w-[942px] h-[1200px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
          </div>

          <div className="-right-96 top-[28%]  absolute w-[942px] h-[1200px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
          </div>

          <div className="-right-96  absolute w-[942px] h-[1200px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
          </div>

          <div className="right-96 top-[55%]  absolute w-[400px] h-[400px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
          </div>

           <div className="right-96 top-[25%]  absolute w-[400px] h-[400px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
          </div>
          </div>
          
       <div className="z-10">
      <Navbar/>
      
         <div className="bg-gradient-to-b from-blue-600 to-black text-white min-h-screen font-sans">
      <Heading />
      <main className="px-4 py-12 w-full mx-auto">
        
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
              <People/>
              <FAQ/>
              <Prefooter/>
              <Footer/>

      </main>
    </div>
    </div>
    </div>
  )
}

export default LandingPage