const multer = require('multer');
const multerS3 = require('multer-s3')
const AWS = require("aws-sdk");
require("dotenv").config();


const s3 = new AWS.S3({ 
    accessKeyId: process.env.KEYID, //노출주의
    secretAccessKey: process.env.KEY, //노출주의
    region: process.env.REGION, //노출주의
});

const upload = multerS3({ 
    s3: s3,
    bucket: 'petguru-client',
    contentType: multerS3.AUTO_CONTENT_TYPE, 
    acl: 'public-read',
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname }) 
    },
    key: function (req, file, cb) { 
        cb(null, `uploads/${Date.now()}_${file.originalname}`)
    },
})

module.exports = { s3, upload };
