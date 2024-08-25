import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Blog API</h1>
      <div className="flex space-x-4">
        <Link href="/signin" className="btn">
          Sign In
        </Link>
        <Link href="/signup" className="btn">
          Sign Up
        </Link>
        <Link href="/blogs" className="btn">
          View Blogs
        </Link>
      </div>
    </div>
  );
}