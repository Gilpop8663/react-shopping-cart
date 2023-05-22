import { cartAtom } from '@recoil/atoms/cartAtom';
import { CartInformation, ProductInformation } from '@type/types';
import {
  createCartItem,
  removedItemCart,
  changedQuantityCart,
  toggleSelectCartItem,
  calculateSelectCartTotalPrice,
} from '@utils/cart';
import { CART_LIST_LOCAL_KEY } from '@constants/common';
import useAtomLocalStorage from './useAtomLocalStorage';
import useCartList from './useCartList';

const useControlCart = () => {
  const { updateCartItem, addItemToCart, removeItemFromCart } = useCartList();
  const [cart, setCart] = useAtomLocalStorage<CartInformation[]>(
    cartAtom,
    CART_LIST_LOCAL_KEY
  );

  const updateQuantityOfCartItem = (id: number, quantity: number) => {
    const updatedCart = changedQuantityCart({ quantity, id, cart });

    updateCartItem({ cartItemId: id, quantity });
    setCart(updatedCart);
  };

  const addProductToCart = ({
    name,
    id,
    price,
    imageUrl,
  }: ProductInformation) => {
    const cartItem = createCartItem({ id, name, price, imageUrl });

    addItemToCart({ productId: id });
    setCart([...cart, cartItem]);
  };

  const removeProductFromCart = (id: number) => {
    const updatedCart = removedItemCart(cart, id);

    removeItemFromCart({ cartItemId: id });
    setCart(updatedCart);
  };

  const toggleSelectItem = (id: number) => {
    const updatedCart = toggleSelectCartItem(cart, id);

    setCart(updatedCart);
  };

  const getSelectCartTotalPrice = () => {
    return calculateSelectCartTotalPrice(cart);
  };

  return {
    cart,
    addProductToCart,
    removeProductFromCart,
    updateQuantityOfCartItem,
    toggleSelectItem,
    getSelectCartTotalPrice,
  };
};

export default useControlCart;
