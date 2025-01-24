import getAllPost from "@/data/getAllPost";
import Link from "next/link";

const page = async () => {
  const posts = await getAllPost();

  return (
    <div className="min-h-screen md:px-6">
      <div className="max-w-6xl mx-auto  md:p-8">
        <h1 className="text-2xl font-bold  mb-6  bg-green-300 text-gray-700 text-center py-6">
          Blog Posts Title
        </h1>
        
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0,12).map((post, index) => (
            <li key={post.id} className="border rounded-lg p-6 ">
                <div className="flex">
                  <span className="text-xl font-bold mr-2">{index + 1}.</span>
                  <h2 className="text-lg">{post.title}</h2>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <button className="btn bg-gray-300 p-2 rounded"> See Dtails</button>
                </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
