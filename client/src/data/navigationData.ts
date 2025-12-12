export interface DropdownColumn {
  title: string;
  links: { name: string; href: string }[];
}

export interface FeaturedCard {
  image: string;
  title: string;
  href: string;
}

export interface NavItemWithDropdown {
  id:string
  name: string;
  href: string;
  badge?: string;
  dropdown?: {
    columns: DropdownColumn[];
    featured?: FeaturedCard[];
  };
}

export const topLinks = [
  { name: 'Contact Us', href: '#contact' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Coupons', href: '#coupons' },
  { name: 'Find A Derm', href: '#find-derm' },
  { name: 'For Health Care Providers', href: '#healthcare' },
];

export const mainLinks: NavItemWithDropdown[] = [
  {
    id: 'new-trending',
    name: 'New & Trending',
    href: '#new',
    dropdown: {
      columns: [
        {
          title: 'NEW PRODUCTS',
          links: [
            { name: 'All New Products', href: '#' },
            { name: 'Oil Control Balancing Shampoo', href: '#' },
            { name: 'Oil Control Balancing Conditioner', href: '#' },
            { name: 'Skin Renewing Brightening Lotion SPF 30', href: '#' },
            { name: 'Intensive Moisturizing Cream', href: '#' },
            { name: 'Blemish Barrier Patches', href: '#' },
            { name: 'Balancing Air Foam Facial Cleanser', href: '#' },
          ],
        },
        {
          title: 'BEST SELLERS',
          links: [
            { name: 'All Best Sellers', href: '#' },
            { name: 'AM Facial Moisturizing Lotion SPF 50', href: '#' },
            { name: 'PM Facial Moisturizing Lotion', href: '#' },
            { name: 'Acne Control Cleanser', href: '#' },
            { name: 'Moisturizing Cream', href: '#' },
          ],
        },
      ],
      featured: [
        {
          image: '/placeholder.svg',
          title: 'Give The Gift Of Healthy Skin',
          href: '#',
        },
        {
          image: '/placeholder.svg',
          title: 'Celebrating Years Of Skin Barrier Science',
          href: '#',
        },
      ],
    },
  },
  {
    id:'skincare',
    name: 'Skincare',
    href: '#skincare',
    dropdown: {
      columns: [
        {
          title: 'FACE & BODY',
          links: [
            { name: 'All Skincare', href: '#' },
            { name: 'Facial Cleansers', href: '#' },
            { name: 'Facial Serums', href: '#' },
            { name: 'Facial Moisturizers', href: '#' },
            { name: 'Body Cleansers', href: '#' },
            { name: 'Body Moisturizers', href: '#' },
            { name: 'Eye Creams', href: '#' },
            { name: 'Makeup Removers', href: '#' },
            { name: 'Sunscreens', href: '#' },
            { name: 'Moisturizers with SPF', href: '#' },
            { name: 'For Baby', href: '#' },
            { name: 'Ointment', href: '#' },
          ],
        },
        {
          title: 'BY CONCERN',
          links: [
            { name: 'Acne', href: '#' },
            { name: 'Anti-aging', href: '#' },
            { name: 'Cracked, Chafed Skin', href: '#' },
            { name: 'Diabetic Skin', href: '#' },
            { name: 'Eczema', href: '#' },
            { name: 'Itchy Skin', href: '#' },
            { name: 'Psoriasis', href: '#' },
            { name: 'Rough and Bumpy', href: '#' },
          ],
        },
        {
          title: 'BY SKIN TYPE',
          links: [
            { name: 'Combination Skin', href: '#' },
            { name: 'Dry Skin', href: '#' },
            { name: 'Normal Skin', href: '#' },
            { name: 'Oily Skin', href: '#' },
            { name: 'Sensitive Skin', href: '#' },
          ],
        },
        {
          title: 'BY KEY INGREDIENT',
          links: [
            { name: 'Benzoyl Peroxide', href: '#' },
            { name: 'Hyaluronic Acid', href: '#' },
            { name: 'Niacinamide', href: '#' },
            { name: 'Retinol', href: '#' },
            { name: 'Salicylic Acid', href: '#' },
            { name: 'Vitamin C', href: '#' },
          ],
        },
      ],
    },
  },
  {
    id:'haircare',
    name: 'Haircare',
    href: '#haircare',
    badge: 'NEW',
    dropdown: {
      columns: [
        {
          title: 'HAIRCARE PRODUCTS',
          links: [
            { name: 'All Haircare', href: '#' },
            { name: 'Shampoo', href: '#' },
            { name: 'Conditioner', href: '#' },
            { name: 'Anti-Dandruff', href: '#' },
            { name: 'Gentle', href: '#' },
            { name: 'Oil Control', href: '#' },
          ],
        },
      ],
      featured: [
        {
          image: '/placeholder.svg',
          title: 'What Causes Dandruff and How to Manage It',
          href: '#',
        },
        {
          image: '/placeholder.svg',
          title: 'How Often Should You Wash Your Hair',
          href: '#',
        },
      ],
    },
  },
  {
    id:'education',
    name: 'Education',
    href: '#education',
    dropdown: {
      columns: [
        {
          title: '',
          links: [
            { name: 'Education Home', href: '#' },
            { name: 'Skincare Tips & Advice', href: '#' },
            { name: 'Skincare Routines', href: '#' },
            { name: 'Hair & Scalp Expertise', href: '#' },
            { name: 'Skincare For Babies', href: '#' },
            { name: 'Strength of Ceramides', href: '#' },
            { name: 'Ingredient Glossary', href: '#' },
            { name: 'Skincare Quizzes', href: '#' },
          ],
        },
        {
          title: 'SKIN CONCERNS 101',
          links: [
            { name: 'Acne', href: '#' },
            { name: 'Diabetic Skin', href: '#' },
            { name: 'Dry Skin', href: '#' },
            { name: 'Eczema', href: '#' },
            { name: 'Itchy Skin', href: '#' },
            { name: 'Psoriasis', href: '#' },
            { name: 'Rough & Bumpy Skin', href: '#' },
            { name: 'Sensitive Skin', href: '#' },
            { name: 'Sun Protection', href: '#' },
            { name: 'Tween & Teen Skincare', href: '#' },
          ],
        },
      ],
      featured: [
        {
          image: '/placeholder.svg',
          title: 'How To Identify Your Skin Type',
          href: '#',
        },
        {
          image: '/placeholder.svg',
          title: 'Finding The Best Cleanser For Oily Skin',
          href: '#',
        },
      ],
    },
  },
  {
    id:'about lyraderma',
    name: 'About Lyra',
    href: '#about',
    dropdown: {
      columns: [
        {
          title: '',
          links: [
            { name: 'The LyraDermaCosmetics Difference', href: '#' },
            { name: 'Developed With Dermatologists', href: '#' },
            { name: 'Our Authors', href: '#' },
            { name: 'The Ceramides Difference', href: '#' },
            { name: 'Celebrating Years', href: '#' },
          ],
        },
      ],
      featured: [
        {
          image: '/placeholder.svg',
          title: 'Learn About Our Ingredients',
          href: '#',
        },
        {
          image: '/placeholder.svg',
          title: 'Discover Haircare',
          href: '#',
        },
        {
          image: '/placeholder.svg',
          title: 'Discover Skincare',
          href: '#',
        },
      ],
    },
  },
  {
    id:'find my routine',
    name: 'Find My Routine',
    href: '#routine',
    dropdown: {
      columns: [
        {
          title: '',
          links: [
            { name: 'Acne Quiz', href: '#' },
            { name: 'Facial Cleanser Quiz', href: '#' },
            { name: 'Facial Moisturizer Quiz', href: '#' },
            { name: 'Body Moisturizer Quiz', href: '#' },
            { name: 'Skincare Routine Quiz', href: '#' },
          ],
        },
      ],
      featured: [
        {
          image: '/placeholder.svg',
          title: "Men's Facial Skincare Routine",
          href: '#',
        },
        {
          image: '/placeholder.svg',
          title: 'Body Care Routine For Dry Skin',
          href: '#',
        },
        {
          image: '/placeholder.svg',
          title: 'Skincare Routine For Oily Skin',
          href: '#',
        },
      ],
    },
  },
];