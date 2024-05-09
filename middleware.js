// middleware.js
import { next } from '@vercel/edge';

export default async function middleware(request) {
  console.log(request);

  return next({
    status: 302,
    headers: {
      location: 'https://vercel.com',
    },
  });
}
