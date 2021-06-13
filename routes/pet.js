<<<<<<< HEAD
const express = require('express');
=======
const express = require('express')
>>>>>>> 181aa7e73c47be3505980600f7697a2fb7d85351
const router = express.Router();
const petController = require('../controllers/petController')

router.post('/register', petController.register); //pet 등록
router.get('/:pet_id', petController.info) //pet 정보조회
router.put('/:id/edit', petController.edit) //pet 정보수정
router.delete('/:id/delete', petController.delete) //pet 삭제

module.exports = router;
