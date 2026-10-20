// Fixtures for verify:image-input: deterministic image files in each accepted
// format, a corrupt file and an oversized one, plus parsing of the image parts
// an OpenAI-compatible request carries. Nothing here is inference.
import { deflateSync, crc32 } from 'node:zlib';
import { randomBytes } from 'node:crypto';

function chunk(type, data) {
  const length = Buffer.alloc(4); length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
}

// RGB PNG; `pixel(x, y)` returns [r, g, b]. Random noise does not compress, which
// makes the oversized fixture large without a large dimension count.
export function encodePng(width, height, pixel) {
  const rows = Buffer.alloc((width * 3 + 1) * height);
  for (let y = 0, offset = 0; y < height; y++) {
    rows[offset++] = 0;
    for (let x = 0; x < width; x++) { const [r, g, b] = pixel(x, y); rows[offset++] = r; rows[offset++] = g; rows[offset++] = b; }
  }
  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0); header.writeUInt32BE(height, 4); header.set([8, 2, 0, 0, 0], 8);
  return Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), chunk('IHDR', header),
    chunk('IDAT', deflateSync(rows)), chunk('IEND', Buffer.alloc(0))]);
}

// Smallest valid files for formats Node cannot encode without a library.
export const gif1x1 = Buffer.from('R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'base64');
export const webp1x1 = Buffer.from('UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==', 'base64');

export function imageFixtures() {
  const noise = randomBytes(2400 * 2400 * 3);
  return {
    'sample.png': encodePng(64, 48, (x, y) => [x * 4, y * 5, 128]),
    'sample.gif': gif1x1,
    'sample.webp': webp1x1,
    'oversize.png': encodePng(2400, 2400, (x, y) => { const at = (y * 2400 + x) * 3; return [noise[at], noise[at + 1], noise[at + 2]]; }),
    // A PNG signature followed by bytes that are not a valid image.
    'corrupt.png': Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), randomBytes(512)]),
  };
}

const signatures = [['image/png', [0x89, 0x50, 0x4e, 0x47]], ['image/jpeg', [0xff, 0xd8, 0xff]],
  ['image/gif', [0x47, 0x49, 0x46, 0x38]], ['image/webp', [0x52, 0x49, 0x46, 0x46]]];
export function sniff(bytes) {
  return signatures.find(([, magic]) => magic.every((value, index) => bytes[index] === value))?.[0] ?? 'unknown';
}

// Image parts of the latest user message and of the whole request.
export function imageParts(payload) {
  const parts = message => Array.isArray(message?.content) ? message.content.filter(part => part?.type === 'image_url') : [];
  const describe = part => {
    const url = part.image_url?.url ?? '';
    const match = /^data:([^;,]+);base64,(.*)$/s.exec(url);
    const bytes = match ? Buffer.from(match[2], 'base64') : Buffer.alloc(0);
    return { declared: match?.[1] ?? 'not-a-data-url', sniffed: sniff(bytes), bytes: bytes.length };
  };
  const messages = Array.isArray(payload?.messages) ? payload.messages : [];
  const lastUser = messages.findLast(message => message.role === 'user');
  return { latest: parts(lastUser).map(describe), total: messages.reduce((sum, message) => sum + parts(message).length, 0) };
}
