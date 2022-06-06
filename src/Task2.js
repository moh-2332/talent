/* eslint-disable */

import { useEffect } from 'react';

const increment = (value, amount) => {
  value += amount;
  return value <= 0 ? 0 : value;
}

export function updateQuality(products) {
  return products.map(product => {
    if (product.type === "TICKETS") {
      product.quality = product.sellIn <= 1 ? 0 : product.sellIn < 10 ? increment(product.quality, 2) : increment(product.quality, 1);
    } else if (product.type === "NORMAL") {
      product.quality = (product.isSecondHand || product.sellIn <= 0) ? increment(product.quality, -2) : increment(product.quality, -1);
    }

    product.sellIn = increment(product.sellIn, -1);
    return product;
  })
}

export function Task2() {
  useEffect(() => {
    const products = [
      {
        name: 'concert a',
        type: 'TICKETS',
        quality: 30,
        sellIn: 12,
      },
      {
        name: 'concert b',
        type: 'TICKETS',
        quality: 30,
        sellIn: 8,
      },
      {
        name: 'concert c',
        type: 'TICKETS',
        quality: 30,
        sellIn: 1,
      },
      {
        name: 'macbook',
        type: 'NORMAL',
        quality: 30,
        sellIn: 0,
        isSecondHand: false,
      },
      {
        name: 'monitor',
        type: 'NORMAL',
        quality: 30,
        sellIn: 2,
        isSecondHand: false,
      },
      {
        name: 'keyboard',
        type: 'NORMAL',
        quality: 0,
        sellIn: 2,
        isSecondHand: false,
      },
      {
        name: 'mouse',
        type: 'NORMAL',
        quality: 20,
        sellIn: 5,
        isSecondHand: true,
      },
    ];

    const updated = updateQuality(products);
    console.log(updated);
  }, []);
  return null;
}
