// ShoppingCart.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingCart from '../modules/ShoppingCart';

const mockCart = [
  {
    id: 1,
    title: 'Item A',
    price: '₹100',
    originalPrice: '₹150',
    quantity: 1,
    image: 'image.jpg',
  },
];

beforeEach(() => {
  localStorage.setItem('cart', JSON.stringify(mockCart));
});

afterEach(() => {
  localStorage.clear();
});

test('menambah jumlah item saat tombol "+" diklik', () => {
  render(<ShoppingCart />);
  const plusButton = screen.getByText('+');
  fireEvent.click(plusButton);
  const quantity = screen.getByDisplayValue('2');
  expect(quantity).toBeInTheDocument();
});

test('mengurangi jumlah item saat tombol "-" diklik', () => {
  localStorage.setItem(
    'cart',
    JSON.stringify([{ ...mockCart[0], quantity: 2 }]),
  );
  render(<ShoppingCart />);
  const minusButton = screen.getByText('-');
  fireEvent.click(minusButton);
  expect(screen.getByDisplayValue('1')).toBeInTheDocument();
});

test('tidak mengurangi quantity kurang dari 1', () => {
  render(<ShoppingCart />);
  const minusButton = screen.getByText('-');
  fireEvent.click(minusButton);
  expect(screen.getByDisplayValue('1')).toBeInTheDocument();
});

test('menghapus produk saat klik "REMOVE"', () => {
  render(<ShoppingCart />);
  const removeButton = screen.getByText('REMOVE');
  fireEvent.click(removeButton);
  expect(screen.getByText(/Cart is Empty/i)).toBeInTheDocument();
});
