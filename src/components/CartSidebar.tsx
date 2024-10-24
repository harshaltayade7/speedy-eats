import React from "react";
import { Offcanvas } from "react-bootstrap";
import { toggleCartSidebar } from "../store/slices/navbarSlice";
import { useAppDispatch, useAppSelector } from "../store";

const CartSidebar: React.FC = () => {
  const { cartSidebarOpen } = useAppSelector((state) => state.navbar);
  const dispatch = useAppDispatch();

  return (
    <Offcanvas
      show={cartSidebarOpen}
      onHide={() => dispatch(toggleCartSidebar())}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>Your cart is currently empty.</p>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartSidebar;
