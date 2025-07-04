export // Price formatter utility
const formatPrice = (price: number): string => {
  return price.toLocaleString("vi-VN") + " ₫";
};
