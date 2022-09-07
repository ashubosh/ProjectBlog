const express = require('express');
const router = express.Router();


const authorController = require('../controller/authorController')
const blogController = require('../controller/blogController')

router.post('/authors', authorController.createAuthor)

router.post('/blogs',blogController.createBlog)

router.get('/blogs', blogController.getBlog)

router.put('/blogs/:blogId' , blogController.updateBlog)

router.delete('/blogs/:blogId', blogController.deleteBlogByPath)

router.delete('/blogs', blogController.deleteBlogByQuery)

// router.post('/login' , authorController.login)

module.exports = router;