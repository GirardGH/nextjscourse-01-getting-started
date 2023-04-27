import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function ClientProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>ClientProjectPage</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
