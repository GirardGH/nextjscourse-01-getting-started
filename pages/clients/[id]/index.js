import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function ClientProjectPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>ClientProjectPage</h1>
      <ul>
        {clients.map((client) => (client => <li key={client.id}>
          <Link href={`/clients/${client.id}`}>{client.name}</Link>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientProjectPage;
