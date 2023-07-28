export default function DeleteButton({ post }) {
  const deletePost = async () => {
    const response = await fetch(`/api/post/`, {
      headers: {
        "Authorization": `${localStorage.getItem("token")}`,
      },
      method: "DELETE",
      body: JSON.stringify({
        _id: post._id,
      }),
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      alert("Post deleted!");
      window.location.href = "/";
    }
  };

  return (
    <button
      onClick={deletePost}
      class="rounded-md mt-3 border-transparent bg-purple-200 px-4 py-2"
    >
      Delete
    </button>
  );
}
