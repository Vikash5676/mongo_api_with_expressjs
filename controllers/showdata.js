const User = require("../model/User");

const showdata = (req, res) => {
  User.find().then((response) => {
      //  console.log(response);
      // Will be querying the data
      res.json({
        message: "Success",
        data: response,
      });
    })
    .catch((err) => {
      res.json({
        message: err,
      });
    });
};
const editData = (req, res) => {
  const data = req.body;

  console.log(data);

  User.updateOne({ _id: data._id },{$set: { name: data.name, email: data.email } }
  )
    .then((result) => {
      res.json({
        message: "Update Success",
      });
    })
    .catch((err) => {
      res.json({
        message: "Failed",
      });
    });
};

const deleteData = (req, res) => {
  const id = req.params.id;
  User.deleteOne({ _id: id })
    .then((result) => {
      res.json({
        message: "SuccessFully Deleted",
      });
    })
    .catch((err) => {
      res.json({
        message: "Failed",
      });
    });
};

module.exports = {showdata,editData,deleteData};
