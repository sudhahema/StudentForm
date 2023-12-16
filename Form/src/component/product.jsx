import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import CustomizedDialogs from "./CartModal";
import HoverRating from "./Rating";

const products = [
  {
    id: 1,
    name: "Product 1",
    style: "T Shirt",
    sizes: ["S", "M", "L"],
    price: 10,
  },
  {
    id: 2,
    name: "Product 2",
    style: "T Shirt",
    sizes: ["M", "L"],
    price: 15,
  },
  {
    id: 3,
    name: "Product 3",
    style: "Women Shirt",
    sizes: ["S", "M", "L"],
    price: 10,
  },
  {
    id: 4,
    name: "Product 4",
    style: "Women Shirt",
    sizes: ["L"],
    price: 15,
  },
  {
    id: 5,
    name: "Product 5",
    style: "Women Shirt",
    sizes: ["L"],
    price: 10,
  },
  {
    id: 6,
    name: "Product 6",
    style: "Women Shirt",
    sizes: ["M", "L"],
    price: 15,
  },
  {
    id: 7,
    name: "Product 7",
    style: "Women Shirt",
    sizes: ["L"],
    price: 15,
  },
  {
    id: 8,
    name: "Product 8",
    style: "Women Shirt",
    sizes: ["M"],
    price: 15,
  },
];

function Product() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState(false);

  console.log("cart", cart);
  const addToCart = (id, name, price) => {
    const updatedCart = [...cart];
    let found = false;
    for (let item of updatedCart) {
      if (item.id === id) {
        console.log("Already Exit");
        item.count++;
        found = true;
        break;
      }
    }
    if (!found) {
      console.log("New one");
      updatedCart.push({ id, name, price, count: 1 });
    }
    console.log("update", updatedCart);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleClose = () => {
    setActiveTab(false);
  };
  const displayCart = () => {
    let count = 0;
    for (let item of cart) {
      count += item.count;
    }
    return count;
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const filteredProducts = products.filter((product) => {
    const hasMatchedStyle = !selectedStyle || product.style === selectedStyle;
    const hasMatchedSizes =
      selectedSizes.length === 0 ||
      selectedSizes.every((size) => product.sizes.includes(size));
    const hasMatchedSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return hasMatchedStyle && hasMatchedSizes && hasMatchedSearch;
  });

  return (
    <div>
      <div>
        <div className="cart-container">
          <h2>Product Section</h2>
          <button
            type="button"
            className="card-container-button"
            onClick={() => {
              setActiveTab(true);
            }}
          >
            {" "}
            <AddShoppingCartIcon />({displayCart()})
          </button>
        </div>
        <div className="cart-contents">
          <h4 className="text-change">Sort By Style</h4>
          <Select
            label="Style"
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
            size="small"
          >
            <MenuItem value="">All Styles</MenuItem>
            <MenuItem value="T Shirt">T Shirt</MenuItem>
            <MenuItem value="Women Shirt">Women Shirt</MenuItem>
            {/* Add more style options */}
          </Select>

          <div>
            Available Sizes:
            {["S", "M", "L"].map((size) => (
              <FormControlLabel
                key={size}
                control={
                  <Checkbox
                    checked={selectedSizes.includes(size)}
                    onChange={() => {
                      if (selectedSizes.includes(size)) {
                        setSelectedSizes(
                          selectedSizes.filter((s) => s !== size)
                        );
                      } else {
                        setSelectedSizes([...selectedSizes, size]);
                      }
                    }}
                  />
                }
                label={size}
              />
            ))}
          </div>
        </div>
      </div>
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={3} key={product.id}>
            <Card className="card-content">
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>Style : {product.style}</Typography>
                <Typography>
                  Available Sizes : {product.sizes.join(", ")}
                </Typography>
                <Typography color="primary">Price: ${product.price}</Typography>
                <HoverRating />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    addToCart(product.id, product.name, product.price)
                  }
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {activeTab && (
        <CustomizedDialogs
          cartItems={cart}
          clearCart={clearCart}
          totalCart={displayCart()}
          removeFromCart={removeFromCart}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}

export default Product;
