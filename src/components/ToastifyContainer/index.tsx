'use client';
import { Bounce, ToastContainer } from 'react-toastify';

export function ToastifyContainer() {
  return (
    <ToastContainer
      position='top-center'
      autoClose={5000}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme='light'
      transition={Bounce}
    />
  );
}
