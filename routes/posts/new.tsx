// ...routes/posts/new.tsx

import PostForm from "../../islands/PostForm.tsx";

//...

export default function NewPostPage(props: PageProps) {
  return (
    <Fragment>
      <div class="p-4 mx-auto max-w-screen-md">
        <PostForm />
      </div>
    </Fragment>
  )
}