"use client";

import Image from "next/image";
import { QRCode } from "react-qrcode-logo";
import { toPng } from "html-to-image";
import { useRef, useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");
  const [submittedLink, setSubmittedLink] = useState(null);
  const formRef = useRef(null);

  const handleGenerate = () => {
    if (link.trim() !== "") {
      setSubmittedLink(link);
    }
  };

  const handleDownload = async () => {
    if (formRef.current === null) return;
    const dataUrl = await toPng(formRef.current);
    const a = document.createElement("a");
    a.download = "form-with-qr.png";
    a.href = dataUrl;
    a.click();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">QR Code Form Generator</h2>
        <input
          type="text"
          placeholder="Enter information link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleGenerate}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mb-2"
        >
          Generate QR
        </button>
      </div>

      {submittedLink && (
        <div
          ref={formRef}
          className="mt-6 p-6 bg-white rounded-2xl shadow-lg w-full max-w-md text-center flex flex-col items-center"
        >
          <h3 className="text-lg font-semibold mb-4">Your Form</h3>
          <p className="mb-4">Scan the QR code to visit:</p>
          <QRCode value={submittedLink} size={200} />
          <p className="mt-4 break-words text-sm text-gray-500">{submittedLink}</p>
        </div>
      )}

      {submittedLink && (
        <button
          onClick={handleDownload}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
        >
          Download Form
        </button>
      )}
    </div>
  );
}

  // return (
  //   <div className={styles.page}>
  //     <main className={styles.main}>
  //       {/* <Image
  //         className={styles.logo}
  //         src="/next.svg"
  //         alt="Next.js logo"
  //         width={180}
  //         height={38}
  //         priority
  //       />
  //       <ol>
  //         <li>
  //           Get started by editing <code>src/app/page.js</code>.
  //         </li>
  //         <li>Save and see your changes instantly.</li>
  //       </ol>

  //       <div className={styles.ctas}>
  //         <a
  //           className={styles.primary}
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             className={styles.logo}
  //             src="/vercel.svg"
  //             alt="Vercel logomark"
  //             width={20}
  //             height={20}
  //           />
  //           Deploy now
  //         </a>
  //         <a
  //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className={styles.secondary}
  //         >
  //           Read our docs
  //         </a>
  //       </div> */}
  //     </main>
  //     <footer className={styles.footer}>
  //       {/* <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/file.svg"
  //           alt="File icon"
  //           width={16}
  //           height={16}
  //         />
  //         Learn
  //       </a>
  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/window.svg"
  //           alt="Window icon"
  //           width={16}
  //           height={16}
  //         />
  //         Examples
  //       </a>
  //       <a
  //         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/globe.svg"
  //           alt="Globe icon"
  //           width={16}
  //           height={16}
  //         />
  //         Go to nextjs.org →
  //       </a> */}
  //     </footer>
  //   </div>
  // );

