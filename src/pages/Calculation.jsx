import React from 'react';
import { useState } from "react";
import data from "../services/data";
 
const Calculation = () => {
  const [items, setItems]  = useState(data);

  const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = 7; // Fixed number of pages

    // Filter data based on the search term
    const filteredData = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate the current items based on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate totals for display
    const calculateTotals = () => {
        const totals = {};
        filteredData.forEach(item => {
            const firstWord = item.name.split(' ')[0];
            if (!totals[firstWord]) {
                totals[firstWord] = 0;
            }
            totals[firstWord] += item.money;
        });
        return totals;
    };

    const totalsByFirstWord = calculateTotals();
    const totalAmount = filteredData.reduce((acc, item) => acc + item.money, 0);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Total Amount by intials</h2>
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to the first page on search
                }}
            />
            <table className="table table-striped table-bordered">
                <thead className="table-light">
                    <tr>
                    <th>#</th> {/* Serial Number Column */}

                        <th>First Word</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(totalsByFirstWord).length > 0 ? (
                        Object.entries(totalsByFirstWord)
                            .slice(indexOfFirstItem, indexOfLastItem)
                            .map(([firstWord, total], index) => (
                                <tr key={firstWord}>
                                <td>{index + indexOfFirstItem + 1}</td> {/* Serial Number */}

                                    <td>{firstWord}</td>
                                    <td>{total}</td>
                                </tr>
                            ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="text-center">No results found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <h3 className="mt-4">Total Amount of Money: {totalAmount}</h3>

            {/* Pagination Controls */}
            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Calculation;
