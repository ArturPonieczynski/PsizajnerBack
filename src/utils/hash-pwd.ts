import * as crypto from 'crypto';
import { configuration } from '../../config/config';

export const hashPwd = (password: string): string => {
  const hmac = crypto.createHmac('sha512', `${configuration.hashSalt}`);
  hmac.update(password);
  return hmac.digest('hex');
};
