import { styled } from "@stitches/react";

export const SucessContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  margin: "0 auto",

  h1: {
    color: "$white",
  },

  p: {
    marginTop: "2.5rem",
    width: "80%",
    color: "$white",
    fontWeight: 400,
    fontSize: "$font24",
    textAlign: "center",
    lineHeight: "2rem",
  },

  a: {
    marginTop: "5rem",
    border: "none",
    background: "transparent",
    color: "$green500",
    fontSize: "$font20",
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "none",
  },
});

export const ImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$container",
  width: "100%",
  maxWidth: "130px",
  height: "calc(155px - 0.5rem)",
  borderRadius: 8,
  marginTop: "4rem",

  img: {
    objectFit: "cover",
  },
});
