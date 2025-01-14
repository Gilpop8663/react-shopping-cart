import {
  CartInformation,
  ProductInformation,
  ServerCartInformation,
} from '@type/types';

interface UpdateCart {
  cart: CartInformation[];
  id: number;
  quantity: number;
}

export const changedQuantityCart = ({ cart, id, quantity }: UpdateCart) => {
  return cart.map((product) => {
    if (product.id === id) {
      return { ...product, quantity };
    }
    return product;
  });
};

export const createServerCartItem = ({
  id,
  name,
  price,
  imageUrl,
}: ProductInformation) => {
  const product: ServerCartInformation = {
    id,
    product: { name, price, imageUrl, id },
    quantity: 1,
  };

  return product;
};

export const createCartItem = ({
  id,
  name,
  price,
  imageUrl,
}: ProductInformation) => {
  const product: CartInformation = {
    id,
    product: { name, price, imageUrl, id },
    quantity: 1,
    isSelect: true,
  };

  return product;
};

export const removedItemCart = (cart: CartInformation[], id: number) => {
  return cart.filter((product) => id !== product.id);
};

export const toggleSelectCartItem = (cart: CartInformation[], id: number) => {
  return cart.map((cartItem) => {
    if (cartItem.id === id) {
      return { ...cartItem, isSelect: !cartItem.isSelect };
    }

    return cartItem;
  });
};

export const removeSelectedCartItem = (cart: CartInformation[]) => {
  return cart.filter((cartItem) => cartItem.isSelect === false);
};

export const allSelectCartItem = (
  cart: CartInformation[],
  isCheck: boolean
) => {
  return cart.map((cartItem) => {
    return { ...cartItem, isSelect: isCheck };
  });
};

export const calculateSelectCartTotalPrice = (cart: CartInformation[]) => {
  return cart.reduce((accumulator, currentValue) => {
    if (currentValue.isSelect) {
      return accumulator + currentValue.quantity * currentValue.product.price;
    }

    return accumulator;
  }, 0);
};

export const cartItemSelectedById = (cart: CartInformation[]) => {
  return cart
    .filter((cartItem) => cartItem.isSelect === true)
    .map((cartItem) => cartItem.id);
};

export const cartApiWrapper = (
  cart: ServerCartInformation[]
): CartInformation[] => {
  return cart.map((cartItem) => {
    return {
      id: cartItem.id,
      quantity: cartItem.quantity,
      product: {
        id: cartItem.product.id,
        name: cartItem.product.name,
        price: cartItem.product.price,
        imageUrl: cartItem.product.imageUrl,
      },
      isSelect: true,
    };
  });
};
