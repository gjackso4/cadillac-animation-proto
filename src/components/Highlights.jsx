

import { useGSAP } from "@gsap/react"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {

  
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights