'useclient';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { Button } from '@/components/Button';
import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';
import { ImageUp } from 'lucide-react';
import { useRef, useTransition } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  function handleChooseFile() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }
  function handleChange() {
    toast.dismiss();
    if (!fileInputRef.current) return;
    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];
    if (!file) return;
    console.log(file);
    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOAD_MAX_SIZE / 1024;
      toast.error(`imagem muito grande : ${readableMaxSize}KB`);

      fileInput.value = '';

      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    //TODO: ver aqui action de upload
    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = '';
        return;
      }

      toast.success(result.url);
    });
    console.log(formData);
    fileInput.value = '';
  }

  return (
    <div className='flex flex-col gap-3 py-4'>
      <Button onClick={handleChooseFile} type='button' className='self-start'>
        <ImageUp></ImageUp>
        Enviar uma imagem
      </Button>
      <input
        onChange={handleChange}
        ref={fileInputRef}
        className='hidden'
        name='file'
        type='file'
        accept='image/*'
      />
    </div>
  );
}
