'use server';

import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';
import { logColor } from '@/utils/log-color';

type UploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadImageActionResult> {
  logColor('ola da action uploadImage');
  const makeResult = ({ url = '', error = '' }) => ({ url, error });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: 'Dados invalidos' });
  }
  const file = formData.get('file');
  if (!(file instanceof File)) {
    return makeResult({ error: 'Arquivo invalidos' });
  }
  if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
    return makeResult({ error: 'arquivo muito grande' });
  }
  if(!file.type.startsWith('image/')){
    return makeResult({error: 'Imagem invalida'})
  }

  return makeResult({ url: 'URL' });
}
