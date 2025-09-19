'use client';
import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox/InputCheckbox';
import { InputText } from '@/components/InputText/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';

export function ManagePostForm() {
  const [contentValue, setContentValue] = useState('');
  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-6'>
        <InputText labelText='nome' placeholder='Digite seu nome' />

        <InputText labelText='sobrenome' placeholder='Digite seu sobrenome' />
        <InputText
          disabled
          labelText='sobrenome'
          placeholder='Digite seu sobrenome'
        />
        <InputText disabled labelText='destivado' placeholder='desativado' />
        <InputText readOnly labelText='readonly' placeholder='readonly' />
        <InputCheckbox labelText='Publicado'></InputCheckbox>

        <div className='mt-4'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
      <MarkdownEditor
        labelText='conteudo'
        disabled={false}
        textAreaName='content'
        value={contentValue}
        setValue={setContentValue}
      ></MarkdownEditor>
    </form>
  );
}
