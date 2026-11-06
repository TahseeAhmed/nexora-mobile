import { Typography, Box } from '@mui/material'
import { motion } from 'framer-motion'

export default function SectionTitle({ children }) {
  return (
    <Box sx={{ textAlign: 'center', mb: 5 }}>
      <Typography component={motion.h3} variant="h3" initial={{ opacity: 0, y: 30, letterSpacing: '0.2em' }} whileInView={{ opacity: 1, y: 0, letterSpacing: '0em' }} viewport={{ once: true }} transition={{ duration: 0.8 }} sx={{ fontWeight: 800, fontSize: { xs: '1.9rem', md: '2.6rem' } }}>{children}</Typography>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} style={{ height: 4, width: 80, margin: '12px auto 0', borderRadius: 4, background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)' }} />
    </Box>
  )
}
