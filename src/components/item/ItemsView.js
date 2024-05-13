import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ItemsView = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const res = await axios.get("http://localhost:8080/Items", {
      validateStatus: () => {
        return true;
      },
    });
    if (res.status === 302) {
      setItems(res.data);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/Items/delete/${id}`);
    loadItems();
  };
  return (
    <section>
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Store</th>
            <th>Purchase Date</th>
            <th>Price</th>
            <th>Sold Price</th>
            <th>Profit</th>
            <th>Sale Date</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>{item.store}</td>
              <td>{item.purchaseDate}</td>
              <td>{item.price}</td>
              <td>{item.soldPrice}</td>
              <td>{item.profit}</td>
              <td>{item.saleDate}</td>
              <td className="mx-2">
                <Link to={"/view-item/${item.id"} className="btn btn-secondary">
                  <FaEye />
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-item/${item.id}`}
                  className="btn btn-secondary"
                >
                  <FaEdit />
                </Link>
              </td>
              <td className="mx-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => handleDelete(item.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ItemsView;
