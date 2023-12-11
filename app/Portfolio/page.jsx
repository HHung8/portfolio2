import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="px-9">
      <div className="w-full p-2">
        <h1 className="text-3xl text-center">ITを勉強してる</h1>
      </div>
      <div className="flex ">
        <div className="w-50">
          <Image
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={300}
            height={200}
          />
          <section className="mt-4">
            <section>
              <h2 class="text-2xl text-default-700">私のスキル</h2>
              <ul>
                <li>
                  <span class="font-semibold inline">Web developer</span>: HTML
                  ,CSS,JS
                </li>
                <hr />
                <li>
                  <span class="font-semibold inline">Other skills</span>:
                  仕事の考え方、年齢に比べて優れたチームワークスキル。
                </li>
              </ul>
            </section>
            <section className="mt-4">
              <h2 class="text-2xl text-default-700">歴史</h2>
              <ul>
                <li>
                  <span aria-hidden="true" className="w-px h-px block"></span>
                  <span class="font-semibold inline">2017-2019</span>: ホーム
                </li>
                <hr />
                <li>
                  <span aria-hidden="true" className="w-px h-px block"></span>
                  <span class="font-semibold inline">2019-2021</span>: ホーム
                </li>
                <hr />
                <li>
                  <span aria-hidden="true" class="w-px h-px block"></span>
                  <span class="font-semibold inline">2022-2023</span>: ホーム
                </li>
              </ul>
            </section>
          </section>
        </div>
        <div className="info-container flex flex-col w-full gap-4 aos-init aos-animate shadow-md p-6 mb-6 bg-rgba(0,0,0,0.1) rounded-md">
          <div className="w-full pt-4">
            <h2 className="text-2xl text-default-700 text-center">
              個人的なプロジェクト
            </h2>
          </div>
          <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
            <div className="p-2 aos-init aos-animate">
              <span className="text-xl font-semibold">
                プロジェクトポートフォリオ
              </span>
              <p class="text-md">
                プロジェクトポートフォリオ
                <br />
                プログラミングと学習に関する記事を掲載するソーシャル ブログ
                サイト
              </p>
              <div className="flex gap-4 py-2">
                <Link
                  href="https://portfolio-eight-green-12.vercel.app/"
                  target="_blank"
                  className="text-green-400"
                >
                  Demo
                </Link>
                <Link
                  href="https://github.com/HHung8"
                  target="_blank"
                  className="text-green-400"
                >
                  Code
                </Link>
              </div>
              <hr />
            </div>
            <div className="p-2 aos-init aos-animate">
              <span className="text-xl font-semibold">
                プロジェクトのコード スニペット
              </span>
              <p class="text-md">
                小さなプロジェクトは 1日です
                <br />
                コード スニペットを作成して共有できるシンプルな Web サイト
              </p>
              <div className="flex gap-4 py-2">
                <Link
                  href="https://game-react-five.vercel.app//"
                  target="_blank"
                  className="text-green-400"
                >
                  Demo
                </Link>
                <Link
                  href="https://github.com/HHung8"
                  target="_blank"
                  className="text-green-400"
                >
                  Code
                </Link>
              </div>
              <hr />
            </div>
            <div className="p-2 aos-init aos-animate">
              <span className="text-xl font-semibold">
                プロジェクトポートフォリオ
              </span>
              <p class="text-md">
                プロジェクトポートフォリオ
                <br />
                プログラミングと学習に関する記事を掲載するソーシャル ブログ
                サイト。
              </p>
              <div className="flex gap-4 py-2">
                <Link
                  href="https://email-f8.vercel.app/"
                  target="_blank"
                  className="text-green-400"
                >
                  Demo
                </Link>
                <Link
                  href="https://github.com/HHung8"
                  target="_blank"
                  className="text-green-400"
                >
                  Code
                </Link>
              </div>
              <hr />
            </div>
            <div>
              <h2 className="text-2xl text-center">私の趣味 </h2>
              <ul className="list-none">
                <li className="list-insid">
                  私の趣味は本を読んで友達と旅行してします
                </li>
                <li className="list-insid">
                  今新しいプログラミング言語と英語を学ぶ
                </li>
                <li className="list-insid">
                  毎日新しいテクノロジーを追い続けます
                </li>
              </ul>
            </div>
            <div className="mt-10 text-center text-green-500">
              © 2023 Nguyễn Hữu Hưng. ITを勉強してる
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
