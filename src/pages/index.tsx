import { HomeContainer, Products } from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import shirtOne from "@/assets/shirts/1.png";
import shirtTwo from "@/assets/shirts/2.png";
import shirtTree from "@/assets/shirts/3.png";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Products className="keen-slider__slide">
        <Image src={shirtOne} width={520} height={480} alt="Imagem 01" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79, 90</span>
        </footer>
      </Products>
      <Products className="keen-slider__slide">
        <Image src={shirtTwo} width={520} height={480} alt="Imagem 02" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79, 90</span>
        </footer>
      </Products>
      <Products className="keen-slider__slide">
        <Image src={shirtTree} width={520} height={480} alt="Imagem 03" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>
      <Products className="keen-slider__slide">
        <Image src={shirtTree} width={520} height={480} alt="Imagem 03" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>
    </HomeContainer>
  );
}
