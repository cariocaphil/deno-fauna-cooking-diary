import PostForm from "../../islands/PostForm.tsx";
import { PageProps } from "$fresh/server.ts";

export default function NewPostPage(props: PageProps) {
  return (
    <>
      <div class="p-4 mx-auto max-w-screen-md">
        <PostForm />
      </div>
    </>
  );
}
