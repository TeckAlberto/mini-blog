import { useEffect, useState } from "react";
import getBlogs from "./data/blogs";
import { BlogPost } from "./types/types";
import Post from "./components/Post";
import ModalPost from "./components/ModalPost";
import getAuthor from "./utils/functions";

function App() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    getBlogs().then(setPosts).catch(console.error);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Mini Blog</h1>

      <div className="bg-white shadow-md rounded-xl p-6">
        {posts ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Post key={post.id} post={post} onReadMore={setSelectedPost} />
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 py-10">Loading...</p>
        )}
      </div>

      {selectedPost && (
        <ModalPost onClose={() => setSelectedPost(null)}>
           <h1 className="text-3xl font-bold text-indigo-400">{getAuthor(selectedPost.userId)}</h1>
          <h2 className="text-2xl font-semibold mb-4">{selectedPost.title}</h2>
          <p className="text-gray-700">{selectedPost.body}</p>
        </ModalPost>
      )}
    </main>
  );
}

export default App;
