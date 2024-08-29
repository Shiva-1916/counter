import { Component } from "react";
import axios from "axios";
import { FaPaw } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { CgAdd } from "react-icons/cg";
import { InstagramLoader } from "../contentLoader/instagramContentLoader";




export class DynamicTable extends Component {
  state = {
    products: [],
    newData: {},
    isLoading: false,
    contentVisibility: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const { status, data } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      const res = data.slice(0,2)
      if (status == 200) {
        this.setState({
          products: res,
          isLoading: !this.state.isLoading,
          newData: data.slice(0, 1),
        });
      }
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };

  clickHandler = () => {
    this.setState({
      contentVisibility: true,
    });
  };

  addItemHandler = () => {
    const updatedData = [...this.state.products, ...this.state.newData];
    this.setState({
      products: updatedData,
    });
  };

  render() {
    return (
      <>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "16px" }}
        >
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "24px",
              }}
            >
                 <span>
                <FaPaw />
              </span>
              <h4>shiva</h4>
              <span>
                <a href="">
                  <FaUserAlt />
                </a>
              </span>
            </div>
          </>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ width: "20vw" }}>
              <div style={{ display: "flex", flexDirection: "column"}}>
                <button
                  style={{
                    width: "50%",
                    backgroundColor: "transparent",
                    border: "none",
                    height: "25%",
                    marginBottom:"25px"
                  }}
                  onClick={this.clickHandler}
                >
                  Home
                </button>
                <button
                  style={{
                    width: "50%",
                    backgroundColor: "transparent",
                    border: "none",
                     marginBottom:"25px"
                  }}
                >
                  About
                </button>
                <button
                  style={{
                    width: "50%",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  Contact
                </button>
              </div>
            </div>

             <div>
            {this.state.contentVisibility ? (
              <div
                style={{ height: "85vh", overflowY: "auto", marginTop: "32px" }}
              >
                <button
                  onClick={this.addItemHandler}
                  style={{ position: "fixed", marginTop: "-32px" }}
                >
                  Add <CgAdd />
                </button>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Image</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.products.map((eachProduct) => {
                      return (
                        <tr key={eachProduct.id}>
                          <td>{eachProduct.id}</td>
                          <td>{eachProduct.title}</td>
                          <td>{eachProduct.description}</td>
                          <td>
                            <img
                              src={eachProduct.image}
                              width={100}
                              height={100}
                            />
                          </td>
                          <td> ${eachProduct.price} </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            ) : 
           <InstagramLoader/>
            }
              </div>
          </div>
        </div>
      </>
    );
  }
}