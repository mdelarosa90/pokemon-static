import Link from 'next/link';
const fetchPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 60 } }).then((res) => res.json());
}

export default async function Post({ children, params }) {
  const { id } = params;
  const post = await fetchPost(id);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver Comentarios</Link>
      {children}
    </article>
  )
}