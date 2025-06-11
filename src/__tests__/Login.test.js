import '@testing-library/jest-dom'; // Untuk mendukung toBeInTheDocument
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../modules/Login'; // Sesuaikan dengan lokasi file Login.jsx
import { MemoryRouter, useNavigate } from 'react-router-dom';

// Mock `useNavigate` dari `react-router-dom`
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(), // Mock useNavigate
}));

test('renders login form and handles login', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );

  // Validasi form input
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });

  // Simulasikan pengisian form
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);

  // Verifikasi pesan error jika kredensial salah
  expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
});

test('displays error message when invalid credentials are provided', () => {
  const mockUser = { email: 'test@example.com', password: 'password123' };
  localStorage.setItem('user', JSON.stringify(mockUser));

  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );

  // Simulasikan input yang salah
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'wrong@example.com' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } });
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  // Pastikan pesan error ditampilkan
  expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
});

test('redirects to home page when credentials are correct', () => {
  const mockNavigate = jest.fn(); // Mock fungsi navigate
  useNavigate.mockReturnValue(mockNavigate); // Mock `useNavigate` untuk menggunakan mockNavigate

  const mockUser = { email: 'test@example.com', password: 'password123' };
  localStorage.setItem('user', JSON.stringify(mockUser));

  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );

  // Simulasikan input yang benar
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  // Verifikasi bahwa navigate dipanggil dengan '/'
  expect(mockNavigate).toHaveBeenCalledWith('/');
});
/* eslint-env jest */
// This code is a Jest test suite for the Login component in a React application.
// It tests the rendering of the login form, handling of login submissions, and validation of user credentials.