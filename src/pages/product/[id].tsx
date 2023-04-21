import { useRouter } from "next/router";

const ProductsPage = () => {
  const { query } = useRouter();

  return (
    <>
      <h1>Página dos produtos</h1>
      <h2>{JSON.stringify(query, null)}</h2>
    </>
  );
};

export default ProductsPage;
