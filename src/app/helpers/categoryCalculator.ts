import { coefs } from '../constants'

export const calculateCoefficient = (
  regularСustomers: number,
  profit: number
): string => ((regularСustomers * profit) / 100000).toFixed(2);

export const calculateCategory = (coefficient: number) =>
  coefs.indexOf(
    coefs.find((c) => c >= coefficient) || coefs.slice(-1)[0]
  ) + 1;
