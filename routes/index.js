var express = require('express');
var router = express.Router();
var data = {
  meta: {
    company: 'Sitebuilder Inc.',
    established: '2018',
    founders: ['Mason Stedman', 'Rob Watt']
  },
  header: {
    title: 'Site Builder',
    text: 'Ultra-fast company websites for whoever needs \'em'
  },
  footer: {

  },
  sections: [{
      type: 'product',
      title: 'My First Product',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 29.99,
      currency: '$',
      image: '/images/dummy_product.jpg',
      button: {
        text: 'Buy Now',
        link: 'https://www.google.com'
      }
    },
    {
      type: 'reviews',
      title: 'Hear it from the source',
      text: 'Read real testimonials from real customers all over the world!',
      items: [{
          source: 'Amazon',
          text: 'Amazing! I don\'t think I\'ll ever use anything else!',
          rating: 5
        },
        {
          source: 'Apple Store',
          text: 'The user interface goes toe to toe with design giants like Apple',
          rating: 4.5
        }
      ]
    },
    {
      type: 'pricing',
      title: 'Flexible Pricing',
      text: 'Choose a tier that\'s right for your company',
      offers: [{
          price: 25,
          duration: 'month',
          features: [{
              name: 'API Access',
              active: true
            },
            {
              name: 'Unlimited users',
              active: false
            },
            {
              name: 'Unlimited data',
              active: false
            },
            {
              name: 'Premium Support',
              active: false
            },
            {
              name: 'Development Resources',
              active: false
            }
          ]
        },
        {
          price: 50,
          duration: 'month',
          features: [{
              name: 'API Access',
              active: true
            },
            {
              name: 'Unlimited users',
              active: true
            },
            {
              name: 'Unlimited data',
              active: true
            },
            {
              name: 'Premium Support',
              active: false
            },
            {
              name: 'Development Resources',
              active: false
            }
          ]
        },
        {
          price: 75,
          duration: 'month',
          features: [{
              name: 'API Access',
              active: true
            },
            {
              name: 'Unlimited users',
              active: true
            },
            {
              name: 'Unlimited data',
              active: true
            },
            {
              name: 'Premium Support',
              active: true
            },
            {
              name: 'Development Resources',
              active: false
            }
          ]
        },
        {
          title: 'Enterprise',
          features: [{
              name: 'API Access',
              active: true
            },
            {
              name: 'Unlimited users',
              active: true
            },
            {
              name: 'Unlimited data',
              active: true
            },
            {
              name: 'Premium Support',
              active: true
            },
            {
              name: 'Development Resources',
              active: true
            }
          ]
        }
      ]
    },
    {
      type: 'contact',
      title: 'Contact our team',
      items: [{
          type: 'email',
          value: 'support@sitebuilder.com'
        }, {
          type: 'tel',
          country: '+1',
          value: '(507) 213-8208'
        },
        {
          type: 'address',
          street1: '3135 Johnson St. NE',
          street2: null,
          city: 'Minneapolis',
          state: 'MN',
          zip: '55418'
        }
      ]
    }
  ]
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', data);
});

router.get('/privacy', (req, res) => {
  res.render('privacy', data)
})
router.get('/terms-and-conditions', (req, res) => {
  res.render('terms', data)
})
router.get('/general-data-protection-regulation', (req, res) => {
  res.render('gdpr', data)
})

module.exports = router;