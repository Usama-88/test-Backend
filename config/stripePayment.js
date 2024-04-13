require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.payment = async (req, res) => {
  const { products } = req.body;

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
        price: product.price,
        category: product.category,
      },
      unit_amount: Math.round(product.price * 100),
    },
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "",
      cancel_url: "",
    });

    return res.status(200).json({
      sessionId: session.id,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
