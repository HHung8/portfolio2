import Image from "next/image";
import React from "react";

// Component hiển thị chi tiết trang
const PageDetails = () => {
  return (
    <section>
      {/* Phần đầu tiên: Tiêu đề và đường kẻ ngang */}
      <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large flex-col">
        <h1>こんにちは私は Hung です</h1>
        <hr
          className="shrink-0 bg-divider border-none w-full h-divider"
          role="separator"
        />
        {/* Phần chứa hình ảnh và giới thiệu */}
        <div className="relative p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased w-full block">
          {/* Phần ảnh */}
          <div className="hidden md:inline w-[300px] lg:w-fit h-fit float-right mb-6 ml-4">
            <Image
              src="https://images.unsplash.com/photo-1682687219612-b12805df750d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5Nnx8fGVufDB8fHx8fA%3D%3D"
              width={400}
              height={300}
            />
          </div>
          {/* Phần giới thiệu */}
          <div className="p-2 -translate-y-[20px] w-full">
            <h2 className="text-green-400">少し紹介しましょう</h2>
            <p>私はHungと申します。今年は２１歳ですハーノイから来ました。</p>
          </div>
          <hr />
          {/* Phần "これは何ですか" */}
          <h2 className="text-green-400">これは何ですか</h2>
          <p>
            これは私の個人的なプロジェクトであり、next.js
            を使用して作成し、バックエンドも書きました。
          </p>
          <p>このプロジェクトで使用する</p>
          {/* Danh sách công nghệ */}
          <ul>
            <li>NextJS</li>
            <li>Theme (Tailwild, NextUI)</li>
            <li>ORM (Prisma)</li>
            <li>ORM (Prisma)</li>
            <li>この上　moment, highlight.js, markdown-it…</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageDetails;
