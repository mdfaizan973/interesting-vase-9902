import React from "react";
import { AspectRatio, Image } from "@chakra-ui/react";
export default function AddCarousels() {
  return (
    <div>
      <AspectRatio maxW="600px" ratio={2}>
        <Image
          allowFullScreen
          src="https://wiki.scel-hawaii.org/lib/exe/fetch.php?cache=&media=weatherbox:dashboard_v2:graphsoftware:graph-clipart-animated-gif-8.gif"
        />
      </AspectRatio>
      <AspectRatio ratio={16 / 9}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
      </AspectRatio>

      <AspectRatio maxW="600px" ratio={2}>
        <Image
          allowFullScreen
          src="https://i.pinimg.com/originals/2e/e6/99/2ee6998e34c3e2eff7b894c66cfc5267.jpg"
        />
      </AspectRatio>
    </div>
  );
}

// img- <Image src="https://i.pinimg.com/originals/2e/e6/99/2ee6998e34c3e2eff7b894c66cfc5267.jpg" />
