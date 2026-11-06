import { Box, Container, Typography, Card, CardMedia, CardContent, CardActions, Button, Chip, IconButton, Rating, Grid } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import SectionTitle from './SectionTitle'
import { products, rs } from '../data'

export default function FeaturedProducts({ wishlist, onToggleWish, onAdd }) {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#f5f7fb' }}>
      <Container maxWidth="lg">
        <SectionTitle>Trending Smartphones</SectionTitle>
        <Grid container spacing={{ xs: 1.5, md: 3 }}>
          {products.map((p, i) => {
            const liked = wishlist.includes(p.id)
            return (
              <Grid key={p.id} size={{ xs: 6, md: 3 }}>
                <motion.div initial={{ opacity: 0, y: 60, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6, type: 'spring' }} whileHover="hover" variants={{ hover: { y: -10 } }} style={{ height: '100%' }}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,.08)', transition: 'box-shadow .3s', '&:hover': { boxShadow: '0 20px 45px rgba(99,102,241,.28)' } }}>
                    <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} style={{ position: 'absolute', top: 10, left: 10, zIndex: 2 }}>
                      <Chip label={p.tag} size="small" color={p.tag === 'Sale' ? 'error' : 'primary'} sx={{ fontWeight: 700 }} />
                    </motion.div>
                    <IconButton onClick={() => onToggleWish(p.id)} aria-label="wishlist" sx={{ position: 'absolute', top: 6, right: 6, zIndex: 2, bgcolor: 'rgba(255,255,255,.9)', '&:hover': { bgcolor: '#fff' } }}>
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span key={liked ? 'on' : 'off'} initial={{ scale: 0, rotate: -90 }} animate={{ scale: [0, 1.4, 1], rotate: 0 }} exit={{ scale: 0 }} transition={{ duration: 0.3 }} style={{ display: 'flex' }}>
                          {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                        </motion.span>
                      </AnimatePresence>
                    </IconButton>
                    <Box sx={{ overflow: 'hidden' }}>
                      <motion.div variants={{ hover: { scale: 1.1, rotate: 1.5 } }} transition={{ duration: 0.5 }}>
                        <CardMedia component="img" image={p.img} alt={p.name} sx={{ height: { xs: 160, md: 220 }, objectFit: 'cover' }} />
                      </motion.div>
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography sx={{ fontWeight: 700 }}>{p.name}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{p.spec}</Typography>
                      <Rating value={p.rating} precision={0.1} readOnly size="small" />
                      <Typography sx={{ fontWeight: 800, color: '#2563eb', mt: 0.5 }}>{rs(p.price)}</Typography>
                      {p.old && <Typography variant="caption" color="text.secondary" sx={{ textDecoration: 'line-through' }}>{rs(p.old)}</Typography>}
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button className="shine-btn" component={motion.button} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.92 }} fullWidth variant="contained" startIcon={<AddShoppingCartIcon />} onClick={() => onAdd(p)} sx={{ textTransform: 'none', fontWeight: 700, borderRadius: 3, background: 'linear-gradient(90deg,#2563eb,#7c3aed)', '&:hover': { boxShadow: '0 8px 20px rgba(99,102,241,.4)' } }}>Add to Cart</Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
