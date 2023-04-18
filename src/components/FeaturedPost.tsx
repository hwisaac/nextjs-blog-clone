import React from 'react';
import PostsGrid from './PostsGrid';
import { getAllPosts, getFeaturedPosts } from '@/service/posts';

export default async function FeaturedPost() {
  // 1. 모든 포스트 데이터 읽어오기
  const posts = await getFeaturedPosts();

  // 2. 모든 포스트 데이터 보여주기
  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold my-2'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
