import { usePosts } from "../../hooks/usePosts";

export const PostsPage = () => {
  const { data, isLoading, error } = usePosts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
