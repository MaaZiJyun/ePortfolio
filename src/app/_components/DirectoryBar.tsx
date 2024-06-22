"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DirectoryBar = () => {
  const path = usePathname();
  const pathArray = path.split("/").filter((segment) => segment);

  const generatePath = (index: number) => {
    return "/" + pathArray.slice(0, index + 1).join("/");
  };

  return (
    <div className="lg:flex uppercase text-sm lg:text-base my-2">
      <Link href="/">
        <span className="italic hover:underline">Home</span>
      </Link>
      {pathArray.map((segment, index) => (
        <span key={index} className="flex items-center">
          <span className="mx-2">{">"}</span>
          <Link href={generatePath(index)}>
            <span className="italic hover:underline">{segment}</span>
          </Link>
        </span>
      ))}
    </div>
  );
};

export default DirectoryBar;
