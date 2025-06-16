interface BackgroundsectionProps{
    top?:number
  
}

const Backgroundsection = ({top}:BackgroundsectionProps) => {
  return (
    <div className={`relative w-full top-[${top??"0"}%] `}>
    <div className=" absolute size-[400px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
        </div>

        <div className="left-96 absolute size-[400px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
        </div>

        <div className="right-0 absolute size-[400px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
        </div>

        <div className="right-96 absolute size-[400px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
        </div>

        <div className="-left-48 top-72 absolute size-[400px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
        </div>

        <div className="left-48 top-72  absolute size-[400px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
        </div>

        <div className="-right-48 top-72  absolute size-[400px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
        </div>

        <div className="right-48 top-72  absolute size-[400px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
        </div>

        <div className="right-[38%] top-72 absolute size-[400px] ">
          <img
          src ="/Rectangle.png"
          className="size-full"/>
        </div>
        </div>

  )
}

export default Backgroundsection