const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  // order_id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  student: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  regNumber: {
    type: String,
  },
  tshirtType: {
    type: String,
    enum: ["polo", "round"],
    required: true,
  },
  tshirtSize: {
    type: String,
    enum: ["small", "medium", "large"],
    required: true,
  },
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    validate: {
      validator: (v) => /^([\w-.]+@([\w-]+.)+[\w-]{2,4}(\.\w+)*)?$/.test(v),
    },
    message: (props) => `${props.value} is not a valid email!`,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    default: null,
    validate: {
      validator: (phoneNumber) =>
        /^(?:(?:(?:\+254|0)[17])(?:\d{9}))$|^(?:(?:\+254|0)[17])(?:\d{8})$/.test(
          phoneNumber
        ),
    },
    message: (props) => `${props.value} is not a valid number!`,
  },
  pickUp: {
    type: String,
    enum: ["kenyatta-national-hospital", "chiromo-campus", "support"],
    required: true,
  },
});

// OrderSchema.pre('save', function(next) {
//   if (this.student === 'no') {
//     delete this.regNumber;
//   }
//   next();
// });

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
