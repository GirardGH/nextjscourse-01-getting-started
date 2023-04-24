import React from "react";
import { useRouter } from "next/router";

function ClientProjectPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

  return (
    <div>
      <h1>ClientProjectPage</h1>
    </div>
  );
}

export default ClientProjectPage;
