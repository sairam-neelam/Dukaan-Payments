import React, { useState } from "react";
import "./Transactions.css";
import { TRANSACTION_DATA } from "./constants";

const Transactions = () => {
  const [filteredData, setFilteredData] = useState(TRANSACTION_DATA);
  const [isAscend, setAscend] = useState(true);

  const handleInputChange = (event) => {
    const filterData = TRANSACTION_DATA.filter((obj) =>
      String(obj.orderId).includes(event.target.value)
    );
    setFilteredData(filterData);
  };

  const sortOrderAmount = () => {
    if (isAscend) {
      filteredData.sort((a, b) => a.orderAmount - b.orderAmount);
    } else {
      filteredData.sort((a, b) => b.orderAmount - a.orderAmount);
    }
    setAscend(!isAscend);
    setFilteredData([...filteredData]);
  };

  return (
    <div className="transactions-container">
      <div className="d-flex justify-content-between mb-3">
        <div className="search-input-container search-bg">
          <i className="bi bi-search"></i>
          <input
            className="search-input"
            placeholder="Search by Order ID..."
            onChange={handleInputChange}
          />
        </div>
        <div className="d-flex">
          <div className="chip" onClick={sortOrderAmount}>
            Sort
            <i className="bi bi-arrow-down-up"></i>
          </div>
          <div className="chip">
            <i className="bi bi-download"></i>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between list-header">
        <span className="column-element">Order ID</span>
        <span className="column-element text-center">Order date</span>
        <span className="column-element text-end">Order amount</span>
        <span className="column-element text-end">
          Transaction fee <i className="bi bi-info-circle"></i>
        </span>
      </div>

      {filteredData.map((item, index) => (
        <div key={index} className="d-flex justify-content-between list-row">
          <span className="column-element list-ele order-id ">
            #{item.orderId}
          </span>
          <span className="column-element text-center list-ele">
            {item.orderDate}
          </span>
          <span className="column-element text-end list-ele">
            {item.orderAmount}
          </span>
          <span className="column-element text-end list-ele">{item.fee}</span>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
