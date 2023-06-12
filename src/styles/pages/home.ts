import Link from "next/link";
import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  // gap: "3rem",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1200px)/2))",
  marginLeft: "auto",
  minHeight: "75vh",
});

export const Products = styled(Link, {
  background: "$container",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "32px 40px 32px 32px",
    background: "$gray900",
    gap: "8px",
    borderRadius: "6px",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",

    tranform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.3s ease-in-out",

    strong: {
      fontSize: "$font20",
    },

    span: {
      fontSize: "$font24",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
      color: "$gray100",
    },
  },
});
