import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Blog API
        </Link>
        <div className="space-x-4">
          <Link href="/blogs">Blogs</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/signin">Sign In</Link>
        </div>
      </nav>
    </header>
  );
}