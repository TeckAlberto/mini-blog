import { BlogPost } from "../types/types"
import { authors } from "../data/authors"

export default function getAuthor(id: BlogPost['id']) {

    return authors[id];
}