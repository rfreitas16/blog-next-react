'use server';

import { PublicPost } from '@/dto/post/dto';

type CreatePostActionState = {
  formState: PublicPost;
  errors: string[];
};
export async function createPostAction(
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  if (!(formData instanceof FormData)) {
    return { formState: prevState.formState, errors: ['Dados invalidos'] };
  }
const formDataToObj = Object.fromEntries(formData.entries());
console.log(formDataToObj)

  return {
    formState: prevState.formState,
    errors: [],
  };
}
