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
                    <img src={img1} className="w-full" />
                    <div className="absolute flex items-center bg-gradient-to-t from-[#d59a07] to-[rgba(21,21,21,0)] h-full">
                        <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
                            <h2 className='text-6xl'>SUMMER CAMPS FOR KIDS & TEENS</h2>
                            <p>Unforgettable summertime adventures for young students aged 8-17</p>
                        </div>
                    </div>
                </div>

                <div className="keen-slider__slide number-slide2">
                <img src={img2} className="w-full " />
                    <div className="absolute flex items-center bg-gradient-to-t from-[#d59a07] to-[rgba(21,21,21,0)] h-full">
                        <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
                            <h2 className='text-6xl'>SUMMER CAMPS FOR KIDS & TEENS</h2>
                            <p>Unforgettable summertime adventures for young students aged 8-17</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide3">
                <img src={img3} className="w-full " />
                    <div className="absolute flex items-center bg-gradient-to-t from-[#d59a07] to-[rgba(21,21,21,0)] h-full">
                        <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
                            <h2 className='text-6xl'>SUMMER CAMPS FOR KIDS & TEENS</h2>
                            <p>Unforgettable summertime adventures for young students aged 8-17</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide4">
                <img src={img4} className="w-full " />
                    <div className="absolute flex items-center bg-gradient-to-t from-[#d59a07] to-[rgba(21,21,21,0)] h-full">
                        <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
                            <h2 className='text-6xl'>SUMMER CAMPS FOR KIDS & TEENS</h2>
                            <p>Unforgettable summertime adventures for young students aged 8-17</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide5">
                <img src={img5} className="w-full " />
                    <div className="absolute flex items-center bg-gradient-to-t from-[#d59a07] to-[rgba(21,21,21,0)] h-full">
                        <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
                            <h2 className='text-6xl'>SUMMER CAMPS FOR KIDS & TEENS</h2>
                            <p>Unforgettable summertime adventures for young students aged 8-17</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;