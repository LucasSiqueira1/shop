import { ImageContainer, SucessContainer } from "@/styles/pages/success";
import Shirt from "@/assets/shirts/1.png";
import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "@/infra/stripe";
import Head from "next/head";

interface SuccessProps {
  dataProduct: {
    id: string;
    image: string;
    title: string;
  }[];

  userName: string;
}

const SucessPage = ({ dataProduct, userName }: SuccessProps) => {
  return (
    <>
      {dataProduct?.map((product) => (
        <SucessContainer key={product.id}>
          <Head>
            <title>{product?.title}</title>
            <meta name="robots" content="noindex" />
          </Head>

          <h1>Compra efetuada!</h1>
          <ImageContainer>
            <Image src={product.image} alt="" width={124} height={112} />
          </ImageContainer>

          <p>
            Uhuul <strong>{userName}</strong>, sua{" "}
            <strong>{product.title}</strong> já está a caminho da sua casa.
          </p>
          <Link href="/">Voltar ao catálogo</Link>
        </SucessContainer>
      ))}
    </>
  );
};

export default SucessPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { session_id } = query;

  if (!session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const response = await stripe.checkout.sessions.retrieve(
    session_id as string,
    {
      expand: ["line_items", "line_items.data.price.product"],
    }
  );

  const customerName = response?.customer_details?.name;

  const dataSucessProduct = response?.line_items?.data.map((item: any) => ({
    id: item.price?.id,
    image: item.price?.product.images[0],
    title: item.price?.product?.name,
  }));

  return {
    props: {
      dataProduct: dataSucessProduct,
      userName: customerName,
    },
  };
};
