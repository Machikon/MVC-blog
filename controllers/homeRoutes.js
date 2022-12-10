const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all blog data
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogs = blogData.map((blog) =>
      blog.get({ plain: true })
    );

    res.render('homepage', {
      blogs,
      logged_In: req.session.logged_In,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog

router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
            model: Comment,
            include:[User],
        },
      ],
    });

    const blog = blogData.get({ plain: true });
    res.render('blog', {blog, logged_In: req.session.logged_In });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get Dashboard

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
        attributes: {
            exclude:["password"]
        },
        include:[{model:Blog}],
    });
    const user = userData.get({plain:true});

    res.render('dashboard', {user, logged_in:true});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_In) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_In) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });


module.exports = router;
