import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import useCartList from '@hooks/useCartList';
import CartList from '@components/CartPage/CartList';
import EstimatedPayment from '@components/CartPage/EstimatedPayment';
import { CartAndSelectInformation } from '@type/types';
import { device, theme } from '@styles/theme';

const CartPage = () => {
  const { data, isLoading } = useCartList();
  const [selectCart, setSelectCart] = useState<CartAndSelectInformation[]>([]);

  const totalProductPrice = selectCart.reduce((acc, cur) => {
    return acc + cur.product.price * cur.quantity;
  }, 0);

  useEffect(() => {
    setSelectCart(
      data.map((item) => {
        return { ...item, isSelected: true };
      })
    );
  }, [data]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <Wrapper>
      <Title>장바구니</Title>
      <SubTitle>든든배송 상품 (3개)</SubTitle>
      <Main>
        <CartList cartList={selectCart} />
        <EstimatedPayment
          totalProductPrice={totalProductPrice}
          deliveryFee={3000}
        />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px 20%;

  border-bottom: 4px solid ${theme.colors.primaryBlack};
  @media ${device.mobileS} {
    padding: 61px 5%;
  }

  @media ${device.laptopL} {
    padding: 61px 10%;
  }
`;

const Title = styled.h3`
  padding: 60px 0 30px 0;
  border-bottom: 4px solid ${theme.colors.whiteGray3};

  font-weight: 700;
  font-size: 32px;

  text-align: center;
  letter-spacing: 0.5px;

  color: ${theme.colors.primaryBlack};
`;

const SubTitle = styled.h5`
  padding: 34px 0 16px 0;
  font-weight: 400;
  font-size: 20px;

  letter-spacing: 0.5px;

  color: ${theme.colors.primaryBlack};
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 5fr 2fr;

  justify-content: space-between;

  gap: 100px;

  @media ${device.laptopL} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default CartPage;
