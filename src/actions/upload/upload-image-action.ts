'use server';

import { mkdir, writeFile } from 'fs/promises';
import { extname, resolve } from 'path';

type UploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadImageActionResult> {
  const makeResult = ({ url = '', error = '' }) => ({ url, error });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: 'Dados invalidos' });
  }
  const file = formData.get('file');
  if (!(file instanceof File)) {
    return makeResult({ error: 'Arquivo invalidos' });
  }
  const uploadMaxSize = Number(process.env.IMAGE_UPLOAD_MAX_SIZE) || 921600;
  if (file.size > uploadMaxSize) {
    return makeResult({ error: 'arquivo muito grande' });
  }
  if (!file.type.startsWith('image/')) {
    return makeResult({ error: 'Imagem invalida' });
  }
  const ImageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${ImageExtension}`;
  const uploadDir = process.env.IMAGE_UPLOAD_DIRECTORY || 'uploads';

  const uploadFullPath = resolve(process.cwd(), 'public', uploadDir);
  await mkdir(uploadFullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);
  const fileFullPath = resolve(uploadFullPath, uniqueImageName);
  await writeFile(fileFullPath, buffer);
  const imgServerUrl =
    process.env.IMAGE_SERVER_URL || 'http://localhost:3000/uploads';
  const url = `${imgServerUrl}/${uniqueImageName}`;

  return makeResult({ url });
}
