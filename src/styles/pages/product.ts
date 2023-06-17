import { FadeLoader } from "react-spinners";
import { styled } from "..";

export const ProductContainer = styled("main", {
  //minha implementação
  // display: "flex",
  // width: "100%",

  //2 colunas iguais da para usar o grid
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch", //estiquem para ter o msm tamanho na vertical
  gap: "4rem", //espaçamento entre as colunas
  margin: "0 auto",
  maxWidth: 1200,
  width: "100%",
});

export const ImageContainer = styled("div", {
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  // width: "576px",
  // height: "656px",
  // background: "$container",
  // marginLeft: "calc(50% - 576px/2 - 296px)",
  width: "100%",
  maxWidth: 576,
  minHeight: "75vh",
  background: "$container",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  span: {
    marginTop: "1.5rem",
    fontSize: "$font32",
    fontWeight: 400,
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$font18",
    textAlign: "justify",
    lineHeight: "1.5rem",
    color: "$withe",
  },

  button: {
    marginTop: "auto",
    background: "$green500",
    padding: "20px 32px",
    borderRadius: 8,
    width: "100%",
    border: "none",
    cursor: "pointer",

    color: "$white",
    fontWeight: 700,
    fontSize: "18px",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      background: "$green300",
      transition: "0.4s",
    },
  },
});

export const ProductLoadingContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "fixed",
  top: "50%",
  left: "50%",
  width: "100%",
  transform: "translate(-50%, -50%)",
});
