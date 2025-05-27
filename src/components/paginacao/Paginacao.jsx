import React, { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, setPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
        ←
      </button>

      <span style={{ margin: "0 1rem" }}>
        Página {currentPage} de {totalPages}
      </span>

      <button onClick={() => setPage(currentPage + 1)} disabled={currentPage === totalPages}>
        →
      </button>
    </div>
  );
};

const Home = () => {
  const data = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(start, start + itemsPerPage);

 
};

export default Home;