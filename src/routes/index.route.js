const productRouter = require("./product.route");
const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const categoryRouter = require("./category.route");
const brandRouter = require("./brand.route");
const orderRouter = require("./order.route");
const paymentRouter = require("./payment.route");

function route(app) {
  app.use(`/products`, productRouter);
  app.use("/auths", authRouter);
  app.use("/users", userRouter);
  app.use("/categories", categoryRouter);
  app.use("/brands", brandRouter);
  app.use("/orders", orderRouter);
  app.use("/payments", paymentRouter);

  app.get("/", (req, res) => {
    res.send("Weather Forecast App!!");
  });
}

module.exports = route;
