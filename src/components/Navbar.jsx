import { useState } from 'react'
import { AppBar, Toolbar, Container, Box, Button, IconButton, Badge, Drawer, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import MenuIcon from '@mui/icons-material/Menu'
import SmartphoneIcon from '@mui/icons-material/Smartphone'
import CloseIcon from '@mui/icons-material/Close'

const links = ['Home', 'Smartphones', 'Accessories', 'Deals']

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  return (
    <>
      <AppBar component={motion.header} initial={{ y: -90 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 90, damping: 14 }} position="fixed" elevation={0} sx={{ bgcolor: 'rgba(8,12,28,0.7)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <motion.span animate={{ rotate: [0, -12, 12, 0] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }} style={{ display: 'flex' }}><SmartphoneIcon sx={{ color: '#60a5fa' }} /></motion.span>
              <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 3 }}>NEXORA</Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {links.map((l) => (
                <Button key={l} color="inherit" onClick={() => setActive(l)} sx={{ position: 'relative', textTransform: 'none', fontWeight: 500, opacity: active === l ? 1 : 0.8, transition: '.25s', '&:hover': { opacity: 1, color: '#60a5fa', bgcolor: 'rgba(96,165,250,0.1)' } }}>
                  {l}
                  {active === l && <motion.span layoutId="nav-underline" style={{ position: 'absolute', left: 10, right: 10, bottom: 2, height: 2, borderRadius: 2, background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)' }} />}
                </Button>
              ))}
            </Box>
            <Box>
              <IconButton color="inherit" aria-label="search"><SearchIcon /></IconButton>
              <IconButton color="inherit" aria-label="cart">
                <Badge badgeContent={cartCount} color="secondary" showZero>
                  <motion.span key={cartCount} initial={{ scale: 1 }} animate={{ scale: [1, 1.5, 0.9, 1], rotate: [0, -15, 10, 0] }} transition={{ duration: 0.5 }} style={{ display: 'flex' }}><ShoppingCartIcon /></motion.span>
                </Badge>
              </IconButton>
              <IconButton color="inherit" aria-label="account" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}><PersonIcon /></IconButton>
              <IconButton color="inherit" aria-label="menu" onClick={() => setOpen(true)} sx={{ display: { md: 'none' } }}><MenuIcon /></IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 260, bgcolor: '#0b1022', color: '#fff' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography sx={{ fontWeight: 800, letterSpacing: 3 }}>NEXORA</Typography>
          <IconButton color="inherit" onClick={() => setOpen(false)}><CloseIcon /></IconButton>
        </Box>
        <List>
          <AnimatePresence>
            {open && links.map((l, i) => (
              <motion.div key={l} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} transition={{ delay: 0.1 + i * 0.08 }}>
                <ListItemButton onClick={() => { setActive(l); setOpen(false) }}><ListItemText primary={l} /></ListItemButton>
              </motion.div>
            ))}
          </AnimatePresence>
        </List>
      </Drawer>
    </>
  )
}
