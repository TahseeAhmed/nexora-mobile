const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`
export const IMG = {
  hero: U('photo-1511707171634-5f897ff02aa9'),
  promo: U('photo-1610945415295-d9bbf067e59c'),
  earbuds: U('photo-1606220588913-b3aacb4d2f46'),
  watch: U('photo-1523275335684-37898b6baf30'),
  accessories: U('photo-1583394838336-acd977736f90'),
}
export const products = [
  { id: 1, name: 'Nexora X Pro', spec: '6.7" OLED • 256GB • 50MP', price: 189999, old: 219999, rating: 4.8, tag: 'Sale', img: U('photo-1592750475338-74b7b21085ab') },
  { id: 2, name: 'Nexora Ultra 5G', spec: '6.9" AMOLED • 512GB • 200MP', price: 229999, old: null, rating: 4.9, tag: 'New', img: U('photo-1598327105666-5b89351aff97') },
  { id: 3, name: 'Nexora Lite', spec: '6.4" LCD • 128GB • 48MP', price: 89999, old: 104999, rating: 4.5, tag: 'Sale', img: U('photo-1585060544812-6b45742d762f') },
  { id: 4, name: 'Nexora Fold', spec: '7.6" Foldable • 512GB • 5G', price: 299999, old: null, rating: 4.7, tag: 'New', img: U('photo-1572569511254-d8f925fe2cbb') },
]
export const rs = (n) => 'Rs. ' + n.toLocaleString('en-US')
