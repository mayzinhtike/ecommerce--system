const categories = [
  {
    id: 1,
    name: 'Electronics',
    description: 'Devices and gadgets for everyday use.',
    image: 'https://www.pngitem.com/pimgs/m/247-2474633_transparent-electronics-items-png-png-download.png',
  },
  {
    id: 2,
    name: 'Books',
    description: 'A wide range of books from various genres.',
    image: 'https://img.freepik.com/premium-photo/various-books-from-different-genres-library-shelf_802668-10911.jpg',
  },
  {
    id: 3,
    name: 'Clothing',
    description: 'Fashionable clothing for men, women, and children.',
    image: 'https://i.pinimg.com/originals/11/9f/98/119f989800024268cfc85cc1b67dea60.jpg',
  },
  {
    id: 4,
    name: 'Home & Kitchen',
    description: 'Appliances and essentials for your home and kitchen.',
    image: 'https://th.bing.com/th/id/OIP.34eY1oQ4VHXiSVaZr1jACwHaEO?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
  }
];

const categoryContainer = document.getElementById('category-container');

categories.forEach((category) => {
  
  categoryContainer.innerHTML += 
        `<a id="category-4" href="#beauty" class="group rounded-xl overflow-hidden bg-gray-50
          hover:shadow-lg transition duration-300">

          <div class="overflow-hidden">
            <img src="${category.image}" alt="${category.name}" class="w-full h-40 sm:h-52 object-cover
                               group-hover:scale-110 transition duration-500">
          </div>

          <div class="p-4 text-center">
            <h3 class="font-semibold text-gray-900 text-lg">
              ${category.name}
            </h3>
            <p class="text-sm text-gray-500 mt-1">
              ${category.description}
            </p>
          </div>

        </a>`;

});