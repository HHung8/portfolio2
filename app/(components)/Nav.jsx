import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>私のサイト</div>
        <div className="flex gap-10">
          <Link href="/">ホーム</Link>
          <Link href="/Public">公共</Link>
          <Link href="/Member">メンバー</Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">ログアウト</Link>
          ) : (
            <Link href="/api/auth/signin">ログイン</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
