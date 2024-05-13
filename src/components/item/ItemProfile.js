import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ItemProfile = () => {
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

  useEffect(() => {
    loadItem();
  }, []);

  const loadItem = async () => {
    const res = await axios.get(`http://localhost:8080/Items/item/${id}`);
    setItem(res.data);
  };
  return (
    <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body">
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Name</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.name}</p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Status</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.status}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Store</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.store}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Purchase Date</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.purchaseDate}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Price</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.price}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Sold Price</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.soldPrice}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Profit</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.profit}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Sale Date</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{item.saleDate}</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemProfile;
