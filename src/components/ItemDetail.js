import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelector";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

const ItemDetail = ({ product }) => {
  const { checkoutBtn, setCheckoutBtn } = useContext(CartContext);
  useEffect(() => {
    setCheckoutBtn(false);
  }, []); // eslint-disable-line
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        className="detail-card"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "300px" }}
          src={product.imgUrl}
          alt={product.name}
        />
        <Stack>
          <CardBody>
            <Heading size="2xl" py="3" px="4" className="capitalize">
              {product.name}
            </Heading>
            <Text py="5" fontSize="2xl" px="4">
              {product.detail}
            </Text>
            <Text color="black" fontSize="2xl" pt="5" px="4">
              ${product.price} x unidad -- Stock: {product.stock}
            </Text>
          </CardBody>
          <CardFooter>
            {product.stock > 0 &&
              (checkoutBtn ? (
                <Link to="/cart">
                  <button className="btn">Finalizar Compra</button>
                </Link>
              ) : (
                <ItemQuantitySelector product={product} />
              ))}
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default ItemDetail;
