const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

const products = [
  {
    id: 1,
    name: 'تیشرت هری پاتر',
    price: 569.000,
    image: 'logo/3-min.jpg'
  },
  {
    id: 2,
    name: 'تیشرت سفید فرندز',
    price: 569.000,
    image: 'logo/vt3-min.jpg'
  },
  {
    id: 3,
    name: 'تیشرت قرمز ددپول',
    price: 569.000,
    image: 'logo/vt1-min.jpg'
  },
  {
    id: 4,
    name: 'تیشرت قرمز روباه',
    price: 569.000,
    image: 'logo/vt2-min.jpg'
  }
]

let cart = {
  items: [],
  total: 0
}

const renderProducts = () => {
  const boxDiv = document.querySelector('.box-c')
  boxDiv.innerHTML = ''

  products.forEach((item, index) => {
    boxDiv.innerHTML +=
      `
    <div class="box-b">
            <div class="box">
               <a href=""> <img src=${item.image} width="100%" height="70%" />
                <p>${item.name}</p>
                <p>${item.price} تومان</p></a>
                <button type="submit" onclick="addTocart(${index})">افزودن به سبد خرید</button>
            </div>
        </div>
    `
  })
}

const rendercartitem = () => {
  const cartdiv = document.querySelector('.add_sabad')
  cartdiv.innerHTML = ''

  const jamdiv = document.querySelector('.jam')
  let totalorice = 0
  if (cart.items.length === 0) {
    cartdiv.innerHTML = 'سبد خرید خالی هست'
  }
  cart.items.forEach((item) => {
    totalorice += item.total

    cartdiv.innerHTML +=
      `
      <div class="item">
                               <div class="sabad_img"> <img src=${item.image} width="100%" height="70%"/></div>
                                    <p>${item.name}</p>
                                    <p>${item.price} تومان</p></a>
                                    <button type="submit" onclick="removeitem('${item.name}')">حذف</button>
                            </div>
    `
  })


}

const addTocart = (productsindex) => {
  const product = products[productsindex]

  let exin = false

  let newcart = cart.items.reduce((state, item) => {
    if (item.name === product.name) {
      exin = true

      const nEwItem = {
        ...item,
        qty: item.qty + 1,
        total: (item.qty = 1) * item.price
      }
      return [...state, nEwItem]
    }
    return [...state, item]
  }, [])
  if (!exin) {
    newcart.push({
      ...product,
      qty: 1,
      totala: product.price
    })
  }

  cart = {
    ...cart,
    items: newcart,
  }
  rendercartitem()
}

renderProducts()
rendercartitem()