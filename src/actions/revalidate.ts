'user server'

import { revalidateTag } from "next/cache"

export async function revalidateExampleAction(formData: FormData){
  const path = formData.get('path') || ''
  console.log('estou em uma SERVER ACTIOIN', path)

  revalidateTag('posts')
  revalidateTag('post-')
}