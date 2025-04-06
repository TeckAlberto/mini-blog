import { BlogPost } from "../types/types";

interface PostProps {
  post: BlogPost;
  onReadMore: (post: BlogPost) => void;
}

export default function Post({ post, onReadMore }: PostProps) {
  const getExcerpt = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <li className="border rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow bg-gray-50">
     
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{post.title}</h2>
      <p className="text-gray-700 text-sm mb-3">{getExcerpt(post.body, 100)}</p>
      <button
        onClick={() => onReadMore(post)}
        className="text-blue-600 hover:underline text-sm cursor-pointer"
      >
        Read more →
      </button>
    </li>
  );
}
