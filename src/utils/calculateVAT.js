import currency from 'currency.js';

export const VAT_TYPES = {
  VAT: 'VAT',
  INCL: 'INCL',
  EXCL: 'EXCL',
};

export default function calculateVAT(type, amount, rate) {
  if (type.length === 0) {
    console.warn("CalculateVAT: required 'type' not provided.");
    return;
  }
  if (amount === 0) {
    console.warn("CalculateVAT: required 'amount' cannot be 0.");
    return;
  }
  if (rate === 0) {
    console.warn("CalculateVAT: required 'rate' cannot be 0.");
    return;
  }

  switch (type) {
    case VAT_TYPES.VAT:
      return currency(amount).multiply(rate).value;
    case VAT_TYPES.INCL:
      return currency(amount).multiply(1 + rate).value;
    case VAT_TYPES.EXCL:
      return currency(amount).divide(1 + rate).value;
    default:
      console.warn("CalculateVAT: required 'type' not matched.");
      break;
  }
}
