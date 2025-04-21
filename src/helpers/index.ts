const formatCurrency = (quentity: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(quentity);
};

export { formatCurrency };
