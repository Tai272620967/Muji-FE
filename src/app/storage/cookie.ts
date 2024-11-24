import { addDays } from 'date-fns';
import Cookies from 'universal-cookie';

const cookiesInstance = new Cookies();

const defaultExpires = (days: number): Date => {
  const currentTime = new Date();

  return addDays(currentTime, days);
};

const set = (key: string, value: string, expires: Date = defaultExpires(1)) => {
  const name = process.env.NODE_ENV === 'production' ? `__Host-${key}` : key;
  cookiesInstance.set(name, value, {
    path: '/',
    expires,
    secure: true,
    sameSite: 'strict',
  });
};

const get = (key: string) => {
  const name = process.env.NODE_ENV === 'production' ? `__Host-${key}` : key;
  return cookiesInstance.get(name);
};

const remove = (key: string) => {
  const name = process.env.NODE_ENV === 'production' ? `__Host-${key}` : key;
  return cookiesInstance.remove(name);
};

const clearCookieData = (key: string) => {
  const name = process.env.NODE_ENV === 'production' ? `__Host-${key}` : key;
  cookiesInstance.remove(name, { path: '/', secure: true, expires: new Date(0) });
};

const Cookie = {
  set,
  get,
  remove,
  clearCookieData,
};

export default Cookie;
