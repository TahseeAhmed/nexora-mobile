import { useState } from 'react'
import { Snackbar, Alert } from '@mui/material'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import PromoBanner from './components/PromoBanner'
import WhyChooseUs from './components/WhyChooseUs'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  const [cart, setCart] = useState(0)
  const [wishlist, setWishlist] = useState([])
  const [toast, setToast] = useState({ open: false, msg: '' })
  const { scrollYProgress } = useScroll()
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  const show = (msg) => setToast({ open: true, msg })
  const addToCart = (p) => { setCart((c) => c + 1); show(`${p.name} added to cart`) }
  const toggleWish = (id) => setWishlist((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]))

  return (
    <>
      <motion.div style={{ scaleX: bar, transformOrigin: '0 50%', position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 2000, background: 'linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)' }} />
      <Navbar cartCount={cart} />
      <Hero />
      <Categories />
      <FeaturedProducts wishlist={wishlist} onToggleWish={toggleWish} onAdd={addToCart} />
      <PromoBanner />
      <WhyChooseUs />
      <Newsletter onSuccess={() => show('Thanks for subscribing to Nexora!')} />
      <Footer />
      <Snackbar open={toast.open} autoHideDuration={2500} onClose={() => setToast({ ...toast, open: false })} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" variant="filled" onClose={() => setToast({ ...toast, open: false })}>{toast.msg}</Alert>
      </Snackbar>
    </>
  )
}
