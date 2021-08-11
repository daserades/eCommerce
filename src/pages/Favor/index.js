import React from "react";
import { useFavor } from "../../contexts/FavorContext";
import { Alert, Image, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Favor() {
  const { favors, removeFromFavor, myHearthSvg } = useFavor();

  return (
    <Box p="10" className="favorpagecontainer">
      <Box mb="1rem" textAlign="center">
        <Heading>Favorites</Heading>
      </Box>
      {favors.length < 1 && (
        <Alert status="warning">You have not any favors in your basket</Alert>
      )}
      {favors.length > 0 && (
        <>
          <ul className={styles.basketul}>
            {favors.map((item) => (
              <li key={item.id} className={styles.basketli}>
                <Link to={`/product/${item.id}`} className={styles.basketlink}>
                  <Image htmlWidth={100} src={item.image} alt="basket item" />
                  <p>{item.title}</p>
                  <p>{item.price} ₺</p>
                </Link>
                <button
                  className={styles.favorremovebtn}
                  onClick={() => removeFromFavor(item.id)}
                >
                  {myHearthSvg}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </Box>
  );
}

export default Favor;