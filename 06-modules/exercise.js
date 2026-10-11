// 06-modules — your work goes in this file, and in one you create yourself.
//
// Read 06-modules/README.md first, then read catalog.js, then run:
//   node 06-modules/example.js
// Check your work with: npm test 06

import shopName, { products, formatEGP } from "./catalog.js";

/**
 * How many products the catalog has.
 */
export function productCount() {
  return products.length;
}

/**
 * A price tag for one product.
 */
export function priceTag(product) {
  return formatEGP(product.price);
}

/**
 * A heading for the catalog page.
 */
export function shopHeading() {
  return `${shopName} catalog`;
}