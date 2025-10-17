/**
 * Formats a number into a currency string based on the specified locale and currency type.
 * @param amount - The numeric amount to be formatted.
 * @param locale - The locale string (e.g., 'en-US') to format the currency.
 * @param currency - The currency code (e.g., 'USD') to format the amount.
 * @returns The formatted currency string.
 */
export const toCurrency = (
  amount: number,
  locale = 'en-US',
  currency = 'USD',
): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    maximumFractionDigits: 2,
    currency,
  }).format(amount)
