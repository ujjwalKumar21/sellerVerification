# Documentation for Seller Verification API
Git Link: < https://github.com/srvpl/api-node-2/tree/seller_verification> 

## nstall Packages
```
yarn
```
or
```
npm i
```

## Launch Server
```
yarn dev
```

## Schema Model for seller_verification

```
{
    fullname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    store_name: {
        type: String
    },
    mobile: {
        type: String
    },
    role: {
        type: String,
        default: ROLES.SELLER,
        enum: [ROLES.SELLER]
    },
    sellerType: {
        type: String,
        default: "establishBusiness",
        enum: ["establishBusiness", "startUp"]
    },
    gst_number: {
        type: String
    },
    pan_number: {
        type: String
    },
    isVerify: {
        type: Boolean,
        default : false
    },
    gstImageUrl : {
        type : String,
    },
    panImageUrl : {
        type : String,
    },
    resetPasswordToken: 
    { type: String },
    resetPasswordExpires: 
    { type: Date },
    marketplace : {
        type :String
    },
    storeDtl : {
        type : String
    },
    replayToEmail : {
        type :String
    },
    description: { 
        type: String
    }
}
```

#### get seller info

```http
    GET localhost:3000/v1/verifySeller/getData
```

#### get attachments

```http
    GET localhost:3000/v1/verifySeller/viewAttachments/:id
```

| Parameter |	Type |	Description
| :---      | :---  | :---
|id	    | string	| Required

#### update isVerify

```http
    PUT localhost:3000/v1/verifySeller/isVerify
```
| Parameter |	Type |	Description
| :---      | :---  | :---
| id	    | string	| Required
| status    | Boolean    | Required

##### request body for update

```
{
    "id": "6468b74923c358934caf047c",
    "status: true
}
```

#### delete 

```http
    DELETE localhost:3000/v1/verifySeller/deleteData
```
| Parameter |	Type |	Description
| :---      | :---  | :---
| `id`	    | `string`	| Required

##### request body for update

```
{
    "id": "6468b74923c358934caf047c"
}
```
