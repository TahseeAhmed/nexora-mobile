import { Box, Container, Typography, Card, CardMedia, CardContent, Button, Grid } from '@mui/material'
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'
import { IMG, products } from '../data'

const cats = [
  { name: 'Smartphones', desc: 'Flagship power and all-day battery.', img: products[0].img },
  { name: 'Wireless Earbuds', desc: 'Immersive sound with noise cancelling.', img: IMG.earbuds },
  { name: 'Smartwatches', desc: 'Stay connected and track your health.', img: IMG.watch },
  { name: 'Accessories', desc: 'Cases, chargers, and headphones.', img: IMG.accessories },
]

export default function Categories() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <SectionTitle>Explore Categories</SectionTitle>
        <Typography align="center" color="text.secondary" sx={{ mb: 5, mt: -3 }}>Everything you need, neatly organised.</Typography>
        <Grid container spacing={3}>
          {cats.map((c, i) => (
            <Grid key={c.name} size={{ xs: 6, md: 3 }}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -8 }} style={{ height: '100%' }}>
                <Card sx={{ height: '100%', borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,.08)', transition: 'box-shadow .3s', '&:hover': { boxShadow: '0 16px 40px rgba(59,130,246,.25)' } }}>
                  <CardMedia component="img" image={c.img} alt={c.name} sx={{ height: { xs: 120, md: 170 }, objectFit: 'cover' }} />
                  <CardContent>
                    <Typography sx={{ fontWeight: 700 }}>{c.name}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>{c.desc}</Typography>
                    <Button size="small" sx={{ textTransform: 'none', fontWeight: 700, p: 0 }}>Explore →</Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
