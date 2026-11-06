import { Box, Container, Typography, Grid, Link, IconButton, Divider } from '@mui/material'
import SmartphoneIcon from '@mui/icons-material/Smartphone'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

const col = (title, items) => (
  <>
    <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{title}</Typography>
    {items.map((t) => (<Link key={t} href="#" underline="none" sx={{ display: 'block', color: 'rgba(255,255,255,.6)', mb: 1, fontSize: 14, transition: '.2s', '&:hover': { color: '#60a5fa', pl: 0.5 } }}>{t}</Link>))}
  </>
)

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#050816', color: '#fff', pt: 7, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <SmartphoneIcon sx={{ color: '#60a5fa' }} /><Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 3 }}>NEXORA</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,.6)', maxWidth: 320, mb: 2 }}>Pakistan's premium destination for the latest smartphones and accessories.</Typography>
            {[FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon].map((Ic, i) => (
              <IconButton key={i} sx={{ color: '#fff', mr: 0.5, transition: '.25s', '&:hover': { color: '#60a5fa', transform: 'translateY(-3px)' } }}><Ic /></IconButton>
            ))}
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>{col('Quick Links', ['Home', 'Smartphones', 'Accessories', 'Deals'])}</Grid>
          <Grid size={{ xs: 6, md: 4 }}>{col('Customer Support', ['Help Center', 'Shipping & Returns', 'Warranty', 'Contact Us'])}</Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,.1)' }} />
        <Typography variant="body2" align="center" sx={{ color: 'rgba(255,255,255,.5)' }}>© 2026 Nexora Mobile. All rights reserved.</Typography>
      </Container>
    </Box>
  )
}
