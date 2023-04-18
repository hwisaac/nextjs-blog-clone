import CarouselPosts from '@/components/CarouselPosts';
import FeaturedPost from '@/components/FeaturedPost';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <section className=''>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPost />
      {/* @ts-expect-error Server Component */}
      <CarouselPosts />
    </section>
  );
}
