'useclient';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { Button } from '@/components/Button';
import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';
import { ImageUp } from 'lucide-react';
import { useRef, useState, useTransition } from 'react';
import { toast } from 'react-toastify';

type ImageUploaderProps = {
  disabled?: boolean;
};

export function ImageUploader({ disabled = false }: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState('');
  function handleChooseFile() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }
  function handleChange() {
    toast.dismiss();
    if (!fileInputRef.current) {
      setImgUrl('');
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) {
      setImgUrl('');
      return;
    }

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOAD_MAX_SIZE / 1024;
      toast.error(`imagem muito grande : ${readableMaxSize}KB`);

      fileInput.value = '';

      {
        setImgUrl('');
        return;
      }
    }
    const formData = new FormData();
    formData.append('file', file);
    //TODO: ver aqui action de upload
    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = '';
        setImgUrl('');
        return;
      }
      setImgUrl(result.url);
      toast.success('imagem enviada');
    });
    console.log(formData);
    fileInput.value = '';
  }

  return (
    <div className='flex flex-col gap-3 py-4'>
      <Button
        onClick={handleChooseFile}
        type='button'
        className='self-start'
        disabled={isUploading || disabled}
      >
        <ImageUp></ImageUp>
        Enviar uma imagem
      </Button>
      {!!imgUrl && (
        <div className='flex flex-col gap-4'>
          <p>
            <b>URL:</b> {imgUrl}
          </p>
          {/* eslint-disable-next-line */}
          <img className='rounded-lg' src={imgUrl} />
        </div>
      )}

      <input
        onChange={handleChange}
        ref={fileInputRef}
        className='hidden'
        name='file'
        type='file'
        accept='image/*'
        disabled={isUploading || disabled}
      />
    </div>
  );
}
