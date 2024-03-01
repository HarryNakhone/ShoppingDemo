import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ContextCart } from "../context/Context";
import { useContext, useState } from "react";
import Cart from "./Cart";
const Header = () => {
  const { cartItem, searchItem, Queries } = useContext(ContextCart);

  const handleSearchChange = (e) => {
    searchItem(e.target.value);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/"> Shopping IT</Link>
        </Navbar.Brand>

        <Navbar.Text>
          <FormControl
            placeholder="Search the item"
            style={{ width: 500 }}
            value={Queries}
            onChange={handleSearchChange}
          />
        </Navbar.Text>

        <Nav>
          <Dropdown style={{ marginRight: "30px" }}>
            <Dropdown.Toggle variant="success">
              <RiShoppingCartFill color="white" fontSize="25px" />
              {cartItem.length > 0 && (
                <div className="number_on_cart">{cartItem.length}</div>
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                minWidth: 200,
                right: " 20px",
                backgroundColor: "white",
                border: "1px solid black",
                maxHeight: 300,
                overflowY: "auto",
                maskImage: "linear-gradient(to top, transparent 1%, white 20%)",
              }}
            >
              {cartItem.length === 0 ? (
                <h5 style={{ fontSize: "16px", color: "black" }}>
                  {" "}
                  No Item in Cart
                </h5>
              ) : (
                <ul className="unorderlist">
                  {cartItem.map((item) => (
                    <Cart key={item._id} product={item} />
                  ))}
                </ul>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
