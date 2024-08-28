"use client";
import Image from "next/image"
import CustomButton from "./CustomButton"


const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Arrive in Style, Depart With Memories
            </h1>
            <p className="hero__subtitle">
                Unleash Your Drive, Elevate Your Style: Where Dreams Meet the Open Road!
            </p>

            <CustomButton
                title="Explore Cars"
                containerStyles="bg-red-800 text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src={"/hero-bmw.png"} alt="hero" fill className="object-contain"/>
            </div>
            <div className="hero__image-overlay" />
        </div>
    </div>
  )
}

export default Hero