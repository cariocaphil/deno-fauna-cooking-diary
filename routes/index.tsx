import PostList from "../islands/PostList.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <h1 class="my-6 text-3xl">
        Welcome to my cooking diary 🍋 !
      </h1>
      <p class="my-6">Cool stuff almost everyday</p>
      <PostList />
    </div>
  );
}
