import { useState } from 'react'
import { Box, Container, Typography, TextField, Button } from '@mui/material'
import { motion } from 'framer-motion'

export default function Newsletter({ onSuccess }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const submit = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Please enter a valid email address.')
    setError(''); setEmail(''); onSuccess()
  }
  return (
    <Box component="section" className="animated-bg" sx={{ py: { xs: 7, md: 10 }, color: '#fff', background: 'linear-gradient(135deg,#050816,#1b1450)' }}>
      <Container maxWidth="sm">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '1.9rem', md: '2.6rem' } }}>Stay Ahead of the Tech</Typography>
          <Typography sx={{ my: 2, color: 'rgba(255,255,255,.7)' }}>Get exclusive offers, product launches, and the latest smartphone updates.</Typography>
          <Box component="form" onSubmit={submit} noValidate sx={{ display: 'flex', gap: 1.5, flexDirection: { xs: 'column', sm: 'row' }, mt: 3 }}>
            <TextField fullWidth type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} error={!!error} helperText={error}
              sx={{ bgcolor: '#fff', borderRadius: 2, '& fieldset': { border: 'none' }, '& .MuiFormHelperText-root': { bgcolor: '#1b1450', m: 0, pt: 0.5, color: '#fda4af' } }} />
            <Button type="submit" variant="contained" sx={{ px: 4, py: 1.5, textTransform: 'none', fontWeight: 700, borderRadius: 2, alignSelf: 'flex-start', width: { xs: '100%', sm: 'auto' }, background: 'linear-gradient(90deg,#2563eb,#7c3aed)' }}>Subscribe</Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}
