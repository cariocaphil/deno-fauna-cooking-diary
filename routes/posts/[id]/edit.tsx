import { Handlers, PageProps } from "$fresh/server.ts";
import PostForm from "../../../islands/PostForm.tsx";

export const handler: Handlers = {
  GET(_req, ctx) {
    const { id } = ctx.params;
    return ctx.render({
      data: { id },
    });
  },
};

export default function EditPostPage(props: PageProps) {
  return (
    <>
      <div class="p-4 mx-auto max-w-screen-md">
        <PostForm />
      </div>
    </>
  );
}
