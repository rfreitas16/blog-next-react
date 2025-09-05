import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);
const SIMULATE_WAIT_IN_MS = 5000;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsoncontent = await readFile(JSON_POSTS_FILE_PATH, 'utf8');
    const parsedJson = JSON.parse(jsoncontent);
    const { posts } = parsedJson;
    return posts;
  }
  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts;
  }
  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error('post nao encontrado');

    return post;
  }
}

// (async () => {
//   const posts = await postRepository.findAll();
//   posts.forEach(posts =>{
//     console.log(posts.id);
//   })
// })();
