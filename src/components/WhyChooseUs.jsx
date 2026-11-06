import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material'
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import LockIcon from '@mui/icons-material/Lock'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const items = [
  { icon: <VerifiedIcon />, title: 'Authentic Products', text: '100% original smartphones and accessories.' },
  { icon: <LocalShippingIcon />, title: 'Fast Delivery', text: 'Reliable delivery across Pakistan.' },
  { icon: <LockIcon />, title: 'Secure Payments', text: 'Safe and secure checkout experience.' },
  { icon: <SupportAgentIcon />, title: 'Customer Support', text: 'Friendly support whenever you need assistance.' },
]

export default function WhyChooseUs() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#f5f7fb' }}>
      <Container maxWidth="lg">
        <SectionTitle>Why Shop With Nexora?</SectionTitle>
        <Grid container spacing={3}>
          {items.map((it, i) => (
            <Grid key={it.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6, scale: 1.02 }} style={{ height: '100%' }}>
                <Card sx={{ height: '100%', textAlign: 'center', borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,.06)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box component={motion.div} whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }} sx={{ width: 60, height: 60, mx: 'auto', mb: 2, borderRadius: '50%', display: 'grid', placeItems: 'center', color: '#fff', background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>{it.icon}</Box>
                    <Typography sx={{ fontWeight: 700, mb: 1 }}>{it.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{it.text}</Typography>
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
