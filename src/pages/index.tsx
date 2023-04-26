import { HomeContainer, Products } from "@/styles/pages/home";
import { GetServerSideProps } from "next";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";
import { stripe } from "@/infra/stripe";
import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";

interface HomeProps {
  productList: {
    id: string;
    title: string;
    imageUrl: string;
    price: Stripe.Price;
  }[];
}

export default function Home({ productList }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {productList.map((products, index: number) => {
        return (
          <>
            <Products className="keen-slider__slide" key={products.id}>
              <Image
                src={products.imageUrl}
                width={520}
                height={480}
                alt={`Imagem ${index + 1}`}
              />
              <footer>
                <strong>{products.title}</strong>
                <span>{products.price.unit_amount}</span>
              </footer>
            </Products>
          </>
        );
      })}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await Promise.resolve(
    stripe.products.list({
      expand: ["data.default_price"],
    })
  );
  const products = response.data.map((product) => {
    return {
      id: product.id,
      title: product.name,
      imageUrl: product.images[0],
      price: product.default_price,
    };
  });

  return {
    props: {
      productList: products,
    },
  };
};
