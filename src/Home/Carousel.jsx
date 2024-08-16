export default function Carousel(){
    return(
        <>
        <Carousel
        infiniteLoop
        autoPlay
        usekeyboardArrows
        showArrows = {true}
        showStatus = {false}
        showThumbs = {false}
        dynamicHeight
        >
        <div>
            <img src="https://www.ibanez.com/images/index/mainSlide/top_SRD900F.jpg" alt="electric bass" />
        </div>
    
        <div>
            <img src="https://www.ibanez.com/images/index/mainSlide/top_AE2024.jpg" alt="acoustic ibanez" />
        </div>
    
        <div>
            <img src="https://www.ibanez.com/images/index/mainSlide/top_AZES2024.jpg" alt="electric stratocaster ibanez" />
        </div>
    
        <div>
            <img src="https://www.ibanez.com/images/index/mainSlide/top_sig.jpg" alt="overall ibanez guitars" />
        </div>
        </Carousel>
        </>
    )
}