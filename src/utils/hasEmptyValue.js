export default function hasEmptyValue(value) {
  switch (typeof value) {
    case 'number':
      return value === 0;
    case 'string':
      return value.length === 0;
    case 'object':
      return Object.values(value).length === 0;
    default:
      break;
  }
}
