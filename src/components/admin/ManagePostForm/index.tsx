'use client';
import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox/InputCheckbox';
import { InputText } from '@/components/InputText/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useActionState, useEffect, useState } from 'react';
import { ImageUploader } from '../ImageUploader';
import { makePartialPublicPost, PublicPost } from '@/dto/post/dto';
import { createPostAction } from '@/actions/post/create-post-action';
import { toast } from 'react-toastify';

type ManagePostFOrmProps = {
  publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFOrmProps) {
  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };
  const [state, action, isPending] = useActionState(
    createPostAction,
    initialState,
  );
  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();
      state.errors.forEach(error => toast.error(error));
    }
  }, [state.errors]);

  const { formState } = state;
  const [contentValue, setContentValue] = useState(publicPost?.content || '');

  return (
    <form action={action} className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText
          labelText='ID'
          name='id'
          placeholder='ID gerado automaticamente'
          type='text'
          readOnly
          defaultValue={formState.id}
        />

        <InputText
          labelText='Slug'
          name='slug'
          placeholder='Slug gerado automaticamente'
          type='text'
          readOnly
          defaultValue={formState.slug}
        />
        <InputText
          labelText='Autor'
          name='author'
          placeholder='digite o nome do autor'
          type='text'
          defaultValue={formState.author}
        />

        <InputText
          labelText='Titulo'
          name='title'
          placeholder='Digite o titulo'
          type='text'
          defaultValue={formState.title}
        />
        <InputText
          labelText='Excerto'
          name='excerpt'
          placeholder='Digite o resumo'
          type='text'
          defaultValue={formState.excerpt}
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
          defaultValue={formState.coverImageUrl}
        />

        <InputCheckbox
          name='published'
          type='checkbox'
          labelText='Publicar?'
          defaultChecked={formState.published}
        ></InputCheckbox>

        <div className='mt-4'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  );
}
