const sellerInfoModel = require('./../models/seller_verification');

module.exports = {
  getData: async (req, res) => {
    try {
        const data = await sellerInfoModel.find({},{ email:1, fullname:1, description: 1, isVerify: 1, store_name: 1, mobile: 1, role: 1, marketplace: 1, storeDtl: 1, sellerType: 1 });
        console.log(data);
        if (!data || data.length == 0)
          return res.send({ msg: "No data is found" });
        return res.send(data);
      }
    catch (err) {
      res.send(err);
    }
  },

  getFileData: async (req, res) => {
    let id = req.params.id;
    if(!id) return res.send("Id is required");
    try {
        const data = await sellerInfoModel.find({_id: id},{_id:1, gstImageUrl: 1, panImageUrl: 1, email:1, fullname:1, description: 1, isVerify: 1, store_name: 1, mobile: 1, role: 1, marketplace: 1, storeDtl: 1, sellerType: 1});
        if (!data || data.length == 0)
          return res.send({ msg: "No data is found" });
        return res.send(data);
      }
    catch (err) {
      res.send(err);
    }
  },

  updateData: async (req, res) => {
    let id = req.body.id;
    let status = req.body.status;
    console.log(status);
    if(!id) return res.send({msg: "Id is required"});
    if(status == null ) return res.send({msg: "status is required"});
    try{
      const data = await sellerInfoModel.updateOne({_id: id}, { isVerify: status })
      console.log(data);
      res.send({msg: "verification is done"});
    }catch(err){
      console.log("error is ",err);
      res.send(err);
    }
  },

  deleteData: async (req, res) => {
    let id = req.body.id;
    if(!id) return res.send({msg: "Id is required"});
    try{
      const data = await sellerInfoModel.deleteOne({_id: id});
      console.log(data);
      res.send({msg: "Data is deleted"});
    }catch(err){
      res.send(err);
    }
  }
}
