import { stripe } from "@/infra/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
  ProductLoadingContainer,
} from "@/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Stripe from "stripe";
import { formatPrice } from "../utils/formatPrice";
import { useRouter } from "next/router";
import { FadeLoader } from "react-spinners";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";

interface ProductProps {
  productDetail: {
    id: string;
    title: string;
    imageUrl: string;
    price: Stripe.Price;
    description: string;
    defaultPriceId: string;
  };
}
const ProductsPage = ({ productDetail }: ProductProps) => {
  const { isFallback } = useRouter();
  const [isLoadingState, setIsLoadingState] = useState(false);

  const handleBuyProduct = async () => {
    try {
      setIsLoadingState(true);
      const response = await axios.post("/api/checkout", {
        priceId: productDetail.defaultPriceId,
      });

      const { checkoutUrl } = response.data;
      window.open(checkoutUrl, "_blank");
    } catch (error) {
      setIsLoadingState(false);
      console.log(error);
    } finally {
      setIsLoadingState(false);
    }
  };

  return (
    <>
      <Head>
        <title>{productDetail?.title}</title>
      </Head>

      {isFallback ? (
        <ProductLoadingContainer>
          <FadeLoader color="#36d7b7" />
        </ProductLoadingContainer>
      ) : (
        <ProductContainer>
          <ImageContainer>
            <Image
              src={productDetail.imageUrl}
              width={520}
              height={480}
              alt="Imagem do produto"
            />
          </ImageContainer>

          <ProductDetails>
            <h1>{productDetail.title}</h1>
            <span>{formatPrice(productDetail.price.unit_amount)}</span>
            <p>{productDetail.description}</p>
            <button
              onClick={() => handleBuyProduct()}
              disabled={isLoadingState}
            >
              Comprar agora
            </button>
          </ProductDetails>
        </ProductContainer>
      )}
    </>
  );
};

export default ProductsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_NmJXtyM75JF27n" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // console.log(params);
  const productId = params?.id;
  const productResponse = await stripe.products.retrieve(productId as string, {
    expand: ["default_price"],
  });

  const defaultPriceId = productResponse.default_price as Stripe.Price;

  return {
    props: {
      productDetail: {
        id: productResponse.id,
        title: productResponse.name,
        imageUrl: productResponse.images[0],
        price: productResponse.default_price,
        description: productResponse.description,
        defaultPriceId: defaultPriceId.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
