const generateProductCode = () => {
  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let productCode: string = '';
  const length = 6;
  const date = new Date();
  const getYear = date.getFullYear().toString().slice(2);
  const getMonth = date.getMonth().toString();
  for (let i = 1; i <= length; i++) {
    const randomIndex: number = Math.floor(Math.random() * characters.length);
    productCode += characters[randomIndex];
  }
  productCode =
    getYear +
    `${getMonth.length < 2 ? '0' + getMonth : getMonth}` +
    productCode;
  return productCode;
};

export default generateProductCode;
