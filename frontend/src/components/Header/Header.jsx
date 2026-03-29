import React, { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {

    const images = [
        "/header_img.png",
        "/header_img1.jpg",
        "/header_img2.jpg"
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    // 🔥 FUNCTION ADD KIYA
    const handleScroll = () => {
        const section = document.getElementById("menu")
        if(section){
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div 
            className='header'
            style={{ backgroundImage: `url(${images[index]})` }}
        >
            <div className='header-contents'>
                <h2>Order your favourite food here</h2>
                <p>
                    Choose from a diverse menu featuring a delicious variety of dishes.
                </p>

                {/* 🔥 BUTTON FIX */}
                <button onClick={handleScroll}>
                    View Menu
                </button>

            </div>
        </div>
    )
}

export default Header