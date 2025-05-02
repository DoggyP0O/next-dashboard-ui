"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TableSearch = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`?search=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded"
        placeholder="Search..."
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Go
      </button>
    </form>
  );
};

export default TableSearch;
