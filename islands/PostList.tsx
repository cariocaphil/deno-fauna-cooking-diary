import { useEffect, useState } from "preact/hooks";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/post");
        const remotePosts = await response.json();
        setPosts(remotePosts.data);
      } catch (error) {
        console.error(error);
        alert("Something went wrong!");
      }
    };
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div>
      <h1>Things I cooked up for myself and ate:</h1>
      {posts.map((post: any) => <PostItem post={post} id={post._id} />)}
    </div>
  );
}

function PostItem({ post, id }: { post: any; id: string }) {
  return (
    <div>
        <br></br>
      <br></br>
      <a class="border mt-1 p-2 cursor:pointer" href={`/posts/${id}`}>{post.title}</a>
      <br></br>
    </div>
  );
}
