import { useState } from "preact/hooks";
import { Handlers, PageProps } from "$fresh/server.ts";
import { faunaClient, q } from "../../../utils/db.ts";
import DeleteButton from "../../../islands/DeleteButton.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { id } = ctx.params;
    try {
      const post = await faunaClient.query(
        q.Get(q.Ref(q.Collection("Post"), id)),
      );
      return ctx.render({
        _id: post.ref.id,
        ...post.data,
      });
    } catch (error) {
      return Response.json({
        error: error.message,
      });
    }
  },
};

export default function PostPage(props: PageProps) {
  const [post, setPost] = useState<any>();
  setPost(props.data);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div class="p-4 mx-auto max-w-screen-md">
        <br></br>
        <br></br>

      <h1 class="text-xl pl-4">{post.title}</h1>
      <br></br>
      <p class="pl-4 text-left">{post.content}</p>
      <DeleteButton post={post} />
    </div>
  );
}
