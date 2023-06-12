import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
import img1 from '../../../assets/home/banner/(1).jpg'
import img2 from '../../../assets/home/banner/(2).jpg'
import img3 from '../../../assets/home/banner/(3).jpg'
import img4 from '../../../assets/home/banner/(4).jpg'
import img5 from '../../../assets/home/banner/(5).jpg'

const Banner = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <img src={img1} className="w-full h-full object-cover" />
                    <div className="absolute w-full flex items-center justify-center text-center bg-gradient-to-t from-[#a87902] to-[rgba(21,21,21,0)] h-full">
                        <div className='text-white font-bold space-y-7 md:w-1/2'>
                            <h2 className=' text-4xl md:text-6xl'>Unlock a World of Language Learning</h2>
                            <p>Immerse Yourself in the Beauty of Multilingual Communication</p>
                        </div>
                    </div>
                </div>

                <div className="keen-slider__slide number-slide2">
                    <img src={img2} className="w-full h-full object-cover" />
                    <div className="absolute w-full flex items-center justify-center text-center bg-gradient-to-t from-[#a87902] to-[rgba(21,21,21,0)] h-full">
                        <div className='text-white font-bold space-y-7 md:w-1/2'>
                            <h2 className=' text-4xl md:text-6xl'>Discover the Power of Language</h2>
                            <p>Open New Doors and Expand Your Horizons through Language Education</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide3">
                    <img src={img3} className="w-full h-full object-cover" />
                    <div className="absolute w-full flex items-center justify-center text-center bg-gradient-to-t from-[#a87902] to-[rgba(21,21,21,0)] h-full">
                        <div className='text-white font-bold space-y-7 md:w-1/2'>
                            <h2 className=' text-4xl md:text-6xl'>Experience Language Adventure</h2>
                            <p>Embark on a Journey of Cultural Discovery and Linguistic Exploration</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide4">
                    <img src={img4} className="w-full h-full object-cover" />
                    <div className="absolute w-full flex items-center justify-center text-center bg-gradient-to-t from-[#a87902] to-[rgba(21,21,21,0)] h-full">
                        <div className='text-white font-bold space-y-7 md:w-1/2'>
                            <h2 className=' text-4xl md:text-6xl'>Ignite Your Passion for Languages</h2>
                            <p>Fuel Your Curiosity and Learn Languages in an Engaging Environment</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide5">
                    <img src={img5} className="w-full h-full object-cover" />
                    <div className="absolute w-full flex items-center justify-center text-center bg-gradient-to-t from-[#a87902] to-[rgba(21,21,21,0)] h-full">
                        <div className='text-white font-bold space-y-7 md:w-1/2'>
                            <h2 className=' text-4xl md:text-6xl'>Connect Globally, Communicate Fluently</h2>
                            <p>Bridge Cultures and Build Lifelong Language Skills</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;