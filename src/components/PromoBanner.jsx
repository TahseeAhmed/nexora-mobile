import { Box, Container, Typography, Button, Chip, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import { IMG } from '../data'

export default function PromoBanner() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 9 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <Box className="animated-bg" sx={{ borderRadius: 6, overflow: 'hidden', color: '#fff', p: { xs: 3, md: 7 }, background: 'linear-gradient(120deg,#0b1230 0%,#2b1a6b 55%,#2563eb 120%)', boxShadow: '0 25px 60px rgba(37,99,235,.3)' }}>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Chip label="Limited Offer • Save 25%" sx={{ mb: 2, bgcolor: '#f43f5e', color: '#fff', fontWeight: 700 }} />
                <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '2.8rem' } }}>Upgrade Your Experience</Typography>
                <Typography sx={{ my: 2.5, color: 'rgba(255,255,255,.75)' }}>Get exclusive deals on the latest smartphones and accessories.</Typography>
                <Button component={motion.button} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} variant="contained" size="large" sx={{ bgcolor: '#fff', color: '#0b1230', textTransform: 'none', fontWeight: 700, borderRadius: 8, px: 4, '&:hover': { bgcolor: '#e0e7ff' } }}>Shop the Deal</Button>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: 'center' }}>
                <motion.img src={IMG.promo} alt="Promotional smartphone" animate={{ rotate: [-3, 3, -3], y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ width: '100%', maxWidth: 380, height: 300, objectFit: 'cover', borderRadius: 28 }} />
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
