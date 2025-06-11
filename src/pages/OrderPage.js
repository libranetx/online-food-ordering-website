import React from 'react';
import CartPage from '../pages/CartPage';
import FoodCard  from '../pages/FoodCard';

export default function OrderPage({ cart, onAddToCart }) {
  const menuItems = [
    {
      id: 1,
      name: 'Chicken Burger',
      description: ' Juicy grilled chicken patty served in a toasted bun with fresh veggies and sauces',
      price: 12.99,
      image: 'https://i.pinimg.com/736x/3b/03/1f/3b031f3a47a7dc7bb3220a683b895e3d.jpg',
    },
        {
      id: 1,
      name: 'Buffalo Chicken Wraps',
      description: 'Spicy buffalo-style chicken wrapped in a soft tortilla with lettuce and ranch. Price:',
      price: 10.99,
      image: 'https://i.pinimg.com/736x/86/9c/c6/869cc6b1d0fb2d383b533085a43a3aa0.jpg',
    }

    ,
        {
      id: 1,
      name: 'Cheeseburger',
      description: ' Classic beef patty topped with melted cheese, pickles, and ketchup in a sesame bun',
      price: 7.35,
      image: 'https://i.pinimg.com/736x/13/1f/fe/131ffe17fbaca82da95dd14dff884e17.jpg',
    }


    ,
        {
      id: 1,
      name: 'Veggie Burger',
      description: 'Plant-based patty with fresh vegetables and vegan mayo in a whole wheat bun.',
      price: 7.22,
      image: 'https://i.pinimg.com/736x/6e/4b/c7/6e4bc73834b74be9025011c90f4493c1.jpg',
    }


    ,
        {
      id: 1,
      name: 'Fried Chicken Bucket ',
      description: 'Crispy golden fried chicken pieces served in a sharable bucket',
      price: 11.10,
      image: 'https://i.pinimg.com/736x/5e/33/46/5e3346b46e58320cf234884924910290.jpg',
    }

    ,
        {
      id: 1,
      name: 'French Fries',
      description: 'Crispy golden potato fries seasoned with salt',
      price: 2.99,
      image: 'https://i.pinimg.com/736x/f4/5f/1b/f45f1b1288a4129c98bf306a3071293b.jpg',
    }

    ,
        {
      id: 1,
      name: 'Onion Rings',
      description: ' Crunchy battered onion rings fried to perfection',
      price: 3.99,
      image: 'https://i.pinimg.com/736x/64/1f/e3/641fe39f462c4cc035a3fd9a908ff3f2.jpg',
    }

    ,
        {
      id: 1,
      name: 'Pepperoni Pizza Slice',
      description: ' Classic slice loaded with pepperoni and mozzarella cheese.',
      price: 10.99,
      image: 'https://i.pinimg.com/736x/15/6e/fe/156efedb7111895e06631166bb8e3927.jpg',
    }


    ,
        {
      id: 1,
      name: 'BBQ Chicken Pizza',
      description: 'Pizza topped with BBQ sauce, grilled chicken, and red onions.',
      price: 9.99,
      image: 'https://i.pinimg.com/736x/da/fe/99/dafe997b7f1a7ec3f418d3e649dbefea.jpg',
    }


    ,
        {
      id: 1,
      name: 'Chicken Nuggets (10 pcs)',
      description: 'Tender, bite-sized fried chicken pieces with dipping sauce. ',
      price: 4.99,
      image: 'https://i.pinimg.com/736x/ff/c7/24/ffc724cbaddf325c40a70892ed99c1b7.jpg',
    }


    ,
        {
      id: 1,
      name: 'Hot Dog',
      description: 'Grilled sausage in a soft bun with ketchup and mustard.',
      price: 3.99,
      image: 'https://i.pinimg.com/736x/c4/c4/db/c4c4dbb9d0f9bab138fa48b96661c90f.jpg',
    }


    ,
        {
      id: 1,
      name: 'Taco Supreme',
      description: 'Crunchy taco shell filled with seasoned beef, cheese, lettuce, and sour cream.',
      price: 3.59,
      image: 'https://i.pinimg.com/736x/79/e8/8e/79e88e2b9b30e35875e8179cfaeb51b3.jpg',
    }


    ,
        {
      id: 1,
      name: 'Burrito',
      description: ' A warm tortilla stuffed with rice, beans, beef/chicken, and salsa.',
      price: 6.99,
      image: 'https://i.pinimg.com/736x/f8/74/05/f874058a9f980218a5668dd7cdf04ee9.jpg',
    }


    ,
        {
      id: 1,
      name: 'Mac & Cheese Bites',
      description: 'Deep-fried bites of creamy macaroni and cheese.',
      price: 3.99,
      image: 'https://i.pinimg.com/736x/ed/97/5d/ed975d5fedfb6587ac287c4427ad80a2.jpg',
    }

    ,
        {
      id: 1,
      name: 'Fish Sandwich',
      description: ' Crispy fish fillet in a bun with tartar sauce and lettuce',
      price: 3.99,
      image: 'https://i.pinimg.com/736x/54/25/79/542579e72fa94d8f17f9c8c43c3a9efa.jpg',
    }

    ,
        {
      id: 1,
      name: 'Chicken Tenders (5 pcs)',
      description: 'Breaded chicken strips served with your choice of dip.',
      price: 5.99,
      image: 'https://i.pinimg.com/736x/c2/6e/93/c26e930f6356a41fdcc6ea7efe8091df.jpg',
    }


    ,
        {
      id: 1,
      name: 'Mozzarella Sticks',
      description: 'Fried sticks of gooey mozzarella cheese.',
      price: 4.99,
      image: 'https://i.pinimg.com/736x/15/33/60/1533606cd3fbf6e70e5e08b5b10eb22e.jpg',
    }

    ,
        {
      id: 1,
      name: 'Sliders (3 pcs)',
      description: 'Mini beef burgers served on soft rolls.',
      price: 5.99,
      image: 'https://i.pinimg.com/736x/2c/3f/5f/2c3f5f00b4ca1504b13de93d904a0607.jpg',
    }

    ,
        {
      id: 1,
      name: 'Loaded Nachos ',
      description: 'Tortilla chips topped with melted cheese, jalapeños, and salsa..',
      price: 6.99,
      image: 'https://i.pinimg.com/736x/38/ae/bc/38aebc12e06d04b42ff6c54d013f0156.jpg',
    }

    ,
        {
      id: 1,
      name: 'Milkshake (16 oz)',
      description: 'Creamy milkshake available in chocolate, vanilla, or strawberry.',
      price: 3.99,
      image: 'https://i.pinimg.com/736x/62/7b/f0/627bf0277dd854e746675b0c8f5c5442.jpg',
    }
  ];

  return (
    <div className='order'>
    <div style={{ padding: '20px',fontFamily:'serif',fontSize:'1.4rem',textAlign:'center' ,}}>
      <h2>Order Your Favorite Food</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {menuItems.map((item) => (
          <FoodCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
      <CartPage cart={cart} />
    </div>

    </div>
  );
}