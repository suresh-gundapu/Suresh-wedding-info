import React from "react";
import { useState } from "react";
import '../styles/paginate.css';
import data from "../services/data";
import Swal from 'sweetalert2';

let Home = ()=>{
  const [items, setItems]  = useState(data);

const [searchTerm, setSearchTerm] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 20; // Number of items per page

// Filtered data based on search term
const filteredData = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
);

// Get current items for pagination
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

// Change page
const paginate = pageNumber => setCurrentPage(pageNumber);

// Total number of pages
const totalPages = Math.ceil(filteredData.length / itemsPerPage);

// Reset to the first page if the search term changes
const handleSearchChange = e => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
};

return (
  
    <div className="container mt-4 table-responsive">
        <input
            type="text"
            className="form-control mb-3"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchChange} // Update search handler
        />
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Money</th>
                    <th>Address</th>

                </tr>
            </thead>
            <tbody>
                {currentItems.length > 0 ? (
                    currentItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.money}</td>
                            <td>{item.address}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3" className="text-center">No results found</td>
                    </tr>
                )}
            </tbody>
        </table>

        {/* Pagination */}
        <nav>
            <ul className="pagination justify-content-center">
                {[...Array(totalPages).keys()].map(number => (
                    <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                        <button
                            onClick={() => paginate(number + 1)}
                            className="page-link"
                        >
                            {number + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
);
};


export default Home;

