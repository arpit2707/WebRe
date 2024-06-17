import { render, screen, fireEvent } from '@testing-library/react';
import SignIn from '../Forms/Login';
import { login } from '../API/api';

jest.mock('../API/api');

describe('SignIn Page', () => {
  it('should log in successfully', async () => {
    (login as jest.Mock).mockResolvedValue({ token: 'fake-token' });

    render(<SignIn />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

   
    await screen.findByText(/dashboard/i);

    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
