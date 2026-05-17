/**
 * Converts a number of bytes to a human-readable file size string
 * @param bytes - The number of bytes to convert
 * @returns A formatted string representing the file size (e.g., "2.5 MB")
 */
export function formatSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const byteValue = 1024;
  const index = Math.floor(Math.log(bytes) / Math.log(byteValue));

  const size = bytes / Math.pow(byteValue, index);
  const roundedSize = Math.round(size * 100) / 100; // Round to 2 decimal places

  return `${roundedSize} ${units[index]}`;
}

export const generateUUID = (): string => crypto.randomUUID();
