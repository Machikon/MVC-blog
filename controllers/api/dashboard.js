// const router = require('express').Router();




// router.post('/', async (req, res) => {
//   try {
//     const newBlog = await Blog.create({
//       ...req.body,
//       userId: req.session.userId,
//     });

//     res.status(200).json(newBlog);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/', async (req, res)=> {
//   try{
//     const blogData = await Blog.findAll();
//     res.status(200).json(blogData);
//   }catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', async (req, res) => {
//   try{ 
//       const blogData = await Blog.findByPk(req.params.id);
//       if(!blogData) {
//           res.status(404).json({message: 'No blog with this id!'});
//           return;
//       }
//       const blog = blogData.get({ plain: true });
//       res.render('blog', blog);
//     } catch (err) {
//         res.status(500).json(err);
//     };     
// });


// router.delete('/:id', async (req, res) => {
//   try {
//     const blogData = await Blog.destroy({
//       where: {
//         id: req.params.id,
//         userId: req.session.userId,
//       },
//     });

//     if (!blogData) {
//       res.status(404).json({ message: 'No blog found with this id!' });
//       return;
//     }

//     res.status(200).json(blogData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
