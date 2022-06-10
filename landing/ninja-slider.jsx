
const ninjas = [
  "img/5_1.png",
  "img/5_2.png",
  "img/5_3.png",
  "img/5_4.png",
]

const NinjaSlider = () => {
  return (
    // <div className="w-full">
    <div className="flex flex-col h-full mt-6 mobile sm:mt-12 md:mt-12 2xl:mt-32 xl:mt-32 lg:mt-12 relative 2xl:w-full xl:w-screen">
      <div className="grid sm:grid-cols-4 grid-cols-2 p-4 pt-6 sm:p-6 sm:pt-8 z-10 sm:ml-0" style={{backgroundImage: 'url("img/bgblack.png")', backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        {
          ninjas.map((ninja, i) => (
            <div key={i} className={`2xl:scale-110 xl:scale-75 lg:scale-50 lg:mt-0 p-0 m-0 p-3 sm:py-0 lg:p-4`}>
              <img src={ninja}  className="lg:w-1/2 xl:w-1/2 2xl:w-full " style={{width: '100%'}} alt="ninja"/>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default NinjaSlider