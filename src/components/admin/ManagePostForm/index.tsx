'use client';
import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox/InputCheckbox';
import { InputText } from '@/components/InputText/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';
import { ImageUploader } from '../ImageUploader';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('');
  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='ID'
          name='id'
          placeholder='ID gerado automaticamente'
          type='text'
          readOnly
          defaultValue={''}
        />

        <InputText
          labelText='Slug'
          name='slug'
          placeholder='Slug gerado automaticamente'
          type='text'
          readOnly
          defaultValue={''}
        />
        <InputText
          labelText='Autor'
          name='author'
          placeholder='digite o nome do autor'
          type='text'
          readOnly
          defaultValue={''}
        />

        <InputText
          labelText='Titulo'
          name='title'
          placeholder='Digite o titulo'
          type='text'
          defaultValue={''}
        />
        <InputText
          labelText='Excerto'
          name='excerpt'
          placeholder='Digite o resumo'
          type='text'
          defaultValue={''}
        />
        <MarkdownEditor
          labelText='Conteudo'
          disabled={false}
          textAreaName='content'
          value={contentValue}
          setValue={setContentValue}
        ></MarkdownEditor>
        <ImageUploader />
        <InputText
          labelText='URL  da sua imagem de capa'
          name='coverImageUrl'
          placeholder='Digite o URL da imagem'
          type='text'
          defaultValue={''}
        />

        <InputCheckbox
          name='published'
          type='checkbox'
          labelText='Publicar?'
        ></InputCheckbox>

        <div className='mt-4'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  );
}
