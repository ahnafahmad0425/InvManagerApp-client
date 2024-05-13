import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditItem = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [item, setItem] = useState({
    name: "",
    status: "",
    store: "",
    purchaseDate: "",
    price: "",
    soldPrice: "",
    profit: "",
    saleDate: "",
  });

  const {
    name,
    status,
    store,
    purchaseDate,
    price,
    soldPrice,
    profit,
    saleDate,
  } = item;

  useEffect(() => {
    loadItem();
  }, []);

  const loadItem = async () => {
    const res = await axios.get(`http://localhost:8080/Items/item/${id}`);
    setItem(res.data);
  };

  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const updateItem = async (e) => {
    e.preventDefault();

    const payload = {
      ...item,
      soldPrice: item.soldPrice || null, // Set to null if empty
      profit: item.profit || null, // Set to null if empty
      saleDate: item.saleDate || null, // Set to null if empty
    };

    try {
      await axios.put(`http://localhost:8080/Items/update/${id}`, payload);
      navigate("/view-items");
    } catch (error) {
      console.error("Error submitting item:", error.response.data);
    }
    //navigate("/view-items");
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <form onSubmit={(e) => updateItem(e)}>
        <div className="input-group mb-3">
          <label className="input-group-text col-3" htmlFor="name">
            Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text col-3" htmlFor="status">
            Status
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="status"
            id="status"
            required
            value={status}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text col-3" htmlFor="store">
            Store
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="store"
            id="store"
            required
            value={store}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text col-3" htmlFor="purchaseDate">
            Purchase Date
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="purchaseDate"
            id="purchaseDate"
            required
            value={purchaseDate}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text col-3" htmlFor="price">
            Price
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="price"
            id="price"
            required
            value={price}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text col-3" htmlFor="soldPrice">
            Sold Price
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="soldPrice"
            id="soldPrice"
            value={soldPrice}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text col-3" htmlFor="profit">
            Profit
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="profit"
            id="profit"
            value={profit}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text col-3" htmlFor="saleDate">
            Sale Date
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="saleDate"
            id="saleDate"
            value={saleDate}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-secondary btn-lg">
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/view-items"}
              type="submit"
              className="btn btn-outline-secondary btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditItem;
