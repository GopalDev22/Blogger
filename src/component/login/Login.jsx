import React, { useState } from "react";
import "./login.css";
import { UserAuth } from "../../context/AuthContext";
import Accordion from "../accordian/Accordion";
import Order from "../orders/Order";
import PersonalInfo from "../personalInfo/personalInfo";
import ShippingAddress from "../shippingAddress/ShippingAddress";
import Wishlist from "../wishlist/Wishlist";
const initialValue = {
  Orders: false,
  PersonalInfo: false,
  ShippingAddress: false,
  Wishlist: false,
};
const Login = () => {
  const [toggle, setToggle] = useState(initialValue);
  const { user } = UserAuth();
  console.log(toggle);
  return (
    <section className="login-container">
      <div className="login-home">
        <div className="login-orders">
          <button onClick={() => setToggle({ Orders: true })}>Orders</button>
          <button onClick={() => setToggle({ PersonalInfo: true })}>
            Personal info
          </button>
          <button onClick={() => setToggle({ ShippingAddress: true })}>
            shipping address
          </button>
          <button onClick={() => setToggle({ Wishlist: true })}>
            wishlist
          </button>
        </div>
        {toggle.Orders ? (
          <Order />
        ) : toggle.PersonalInfo ? (
          <PersonalInfo />
        ) : toggle.ShippingAddress ? (
          <ShippingAddress />
        ) : toggle.Wishlist ? (
          <Wishlist />
        ) : (
          <div className="login-details">
            <h3>
              Hey! <span className="login-userName">{user?.displayName},</span>
            </h3>
            <h4>Welcome to T-shirt Factory!</h4>
            <p>Seems your cart is empty. Explore our exclusive collection.</p>
            <h3>Happy Shopping!!</h3>
          </div>
        )}
      </div>
      <div className="faq">
        <h1>FAQs</h1>
        <Accordion
          title="How can I place an order?"
          content="To place an order, simply browse our website, select the desired items, and add them to your shopping cart. Proceed to the checkout page, fill in your shipping and payment details, and confirm your order."
        />
        <Accordion
          title="What payment methods do you accept?"
          content="We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. At checkout, you can choose the payment option that suits you best."
        />
        <Accordion
          title="How long does shipping take?"
          content="Shipping times depend on your location and the shipping method selected. Typically, orders are processed within 1-2 business days, and delivery can take anywhere from 3-10 business days. You can track your order using the provided tracking number."
        />
        <Accordion
          title="Can I return or exchange a product if I'm not satisfied?"
          content="Yes, we have a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can return the item(s) within 30 days of receipt for a refund or exchange. Please review our return policy for more details and instructions."
        />
        <Accordion
          title="How can I track my order?"
          content="Once your order is shipped, you will receive a shipping confirmation email with a tracking number and instructions on how to track your package. You can use the tracking number on the carrier's website to monitor the progress of your delivery."
        />
        <Accordion
          title="Do you offer discounts or promotions?"
          content="Yes, we frequently run discounts and promotions. You can check our website's 'Offers' or 'Sale' section for current deals. Additionally, subscribing to our newsletter or following us on social media will keep you updated on exclusive offers and upcoming sales."
        />
        <Accordion
          title="How can I contact customer support?"
          content="Our customer support team is available to assist you. You can reach us through our contact page, email, or phone. We strive to respond to all inquiries within 24 hours and provide prompt assistance with any questions or concerns."
        />
      </div>
    </section>
  );
};

export default Login;
