const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1Mbi29BhHapIlC7iaZuTJ4f6' },
        ],
        line_items: req.body.map((item) => {
          const image = item.image[0].asset._ref
            .replace('image-', 'https://cdn.sanity.io/images/z274g8fe/production/')
            .replace('-webp', '.webp')
            .replace('-jpg', '.jpg')
            .replace('-jpeg', '.jpeg')
            .replace('-png', '.png')
            .replace('-svg', '.svg')

          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                description: `size: ${item.size}`,
                images: [image],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.json({ url: session.url }) // res.redirect(303, session.url); CORS error

    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}