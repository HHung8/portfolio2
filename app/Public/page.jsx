import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const Public = () => {
  return (
    <div>
      <section className="flex justify-between gap-x-1 gap-y-2 flex-wrap p-6">
        <article className="w-full sm:w-[calc(50%-4px)] lg:w-[calc(33.33%-4px)] aos-init aos-animate">
          <div className="relative overflow-hidden height-auto text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none p-2 h-full flex flex-col justify-between shadow-xl rounded-xl ">
            <div className="flex p-2 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large aos-init aos-animate">
              <Link href="/PublicDetails">
                <h2 className="text-green-500 underline">テストする</h2>
              </Link>
            </div>
            <div className="relative w-full p-3 flex-auto place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased flex flex-col justify-end aos-init aos-animate">
              <div className="flex justify-center w-full aos-init aos-animate">
                <Link href="/PublicDetails">
                  <Image
                    src="https://images.unsplash.com/photo-1682685797406-97f364419b4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
                    width={300}
                    height={200}
                  />
                </Link>
              </div>
            </div>
            <div className="p-2">
              <h2>何が見れますか</h2>
              <p>
                はい！現在、クライアント側の機能を少しずつ完成させています。現在、バックエンドや管理者側も追加で作業中です。
              </p>
              <p>
                ただし、このプロジェクトをより良くするために、いくつかの記事を追加して機能をテストする必要があります...
              </p>
            </div>
            <div className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large justify-between mb-2 aos-init aos-animate">
              <span>2日前</span>
            </div>
          </div>
        </article>
      </section>
      <hr />
      <footer className="container mx-auto max-w-7xl px-6 flex-grow">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-default-400">© 2023 ホンポートフォリオ</p>
          <p className="text-sm text-default-500">
            こんにちは、私はハンです。これは私の個人ページです。
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Public;
