import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={`/products/${1}`}>View details</Link>
    </div>
  );
};

export default page;
