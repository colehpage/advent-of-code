import crypto from 'crypto';

export function md5Hash(input: string) {
	const hash = crypto.createHash('md5');
	hash.update(input.toString());
	return hash.digest('hex');
}
