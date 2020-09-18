const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/mongoosebaru', {
  useMongoClient: true
});

const Customer = require('./customer');

// Add Customer
const addCustomer = (customer) => {
  Customer.create(customer).then(customer => {
    console.info('New Customer Added');
    db.close();
  });
}

// Find Customer
const findCustomer = (name) => {
  // Make case insensitive
  const search = new RegExp(name, 'i');
  Customer.findOne({nama: search})
    .then(customer => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.close();
    });
}

// Update Customer
const updateCustomer = (_id, customer) => {
  Customer.updateOne({ _id }, customer)
    .then(customer => {
      console.info('Customer Updated');
      db.close();
    });
}

// Remove Customer
const removeCustomer = (_id) => {
  Customer.deleteOne({ _id })
    .then(customer => {
      console.info('Customer Removed');
      db.close();
    });
}

// List Customers
const listCustomers = () => {
  Customer.find()
    .then(customers => {
      console.log(customers);
      console.log(`${customers.length} customers`);
      db.close();
    });
}

// Export All Methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
}