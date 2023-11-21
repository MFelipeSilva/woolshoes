import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { ProductType } from "@/types/ProductType";

const CartContext = createContext<{
  cart: ProductType[];
  addProductToCart: (product: ProductType) => void;
  removeProductFromCart: (product: string) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
}>({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
});

export const useCart = () => useContext(CartContext);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(
      localStorage.getItem("@woolshoes/cart") || "[]"
    );

    if (storedCart && storedCart.length > 0) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@woolshoes/cart", JSON.stringify(cart));
  }, [cart]);

  const addProductToCart = (product: ProductType) => {
    const ProductIsAlreadyInTheCart = cart.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (ProductIsAlreadyInTheCart) {
      setCart((prevCart) =>
        prevCart.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity ? cartProduct.quantity + 1 : 1,
            };
          }
          return cartProduct;
        })
      );
      return;
    }
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  };

  const removeProductFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart.filter((cartProduct) => cartProduct.id !== productId)
    );
  };

  const decreaseProductQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity ? cartProduct.quantity - 1 : 1,
            };
          }
          return cartProduct;
        })
        .filter((cartProduct) =>
          cartProduct.quantity ? cartProduct.quantity > 0 : cartProduct.quantity
        )
    );
  };

  const increaseProductQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity ? cartProduct.quantity + 1 : 1,
          };
        }
        return cartProduct;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        decreaseProductQuantity,
        increaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
