export const calcDiscountedPrice = (price: number, discount: number) => {
  if (!discount) return price;
  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;
  return finalPrice.toFixed(2);
};
