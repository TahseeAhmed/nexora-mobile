import { Box, Container, Typography, Button, Chip, Grid } from '@mui/material'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import BoltIcon from '@mui/icons-material/Bolt'
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { IMG } from '../data'

const float = (d = 0) => ({ animate: { y: [0, -14, 0] }, transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: d } })
const badge = { bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', fontWeight: 600 }
const list = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }
const word = { hidden: { opacity: 0, y: 50, rotateX: -60 }, show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const Words = ({ text, cls }) => text.split(' ').map((w) => (<motion.span key={w} variants={word} className={cls} style={{ display: 'inline-block', marginRight: '0.25em' }}>{w}</motion.span>))

export default function Hero() {
  const mx = useMotionValue(0), my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 15 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 15 })
  const { scrollY } = useScroll()
  const gy = useTransform(scrollY, [0, 600], [0, 160])
  const onMove = (e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5) }
  const reset = () => { mx.set(0); my.set(0) }

  return (
    <Box component="section" sx={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', pt: 10, pb: 8, color: '#fff', background: 'linear-gradient(160deg,#050816 0%,#0b1230 60%,#150f3a 100%)' }}>
      <motion.div className="glow" style={{ width: 380, height: 380, background: '#2563eb', top: '10%', right: '5%', y: gy }} animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity }} />
      <motion.div className="glow" style={{ width: 320, height: 320, background: '#7c3aed', bottom: '5%', left: '0%', y: gy }} animate={{ opacity: [0.25, 0.5, 0.25], scale: [1.1, 1, 1.1] }} transition={{ duration: 7, repeat: Infinity }} />
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span key={i} style={{ position: 'absolute', left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, width: 3 + (i % 3) * 2, height: 3 + (i % 3) * 2, borderRadius: '50%', background: i % 2 ? '#60a5fa' : '#a78bfa' }}
          animate={{ y: [0, -35, 0], opacity: [0.15, 0.8, 0.15] }} transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.3 }} />
      ))}
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', delay: 0.1 }}>
              <Chip label="Up to 30% OFF" icon={<BoltIcon sx={{ color: '#fff !important' }} />} sx={{ mb: 2, color: '#fff', fontWeight: 700, background: 'linear-gradient(90deg,#2563eb,#7c3aed)' }} />
            </motion.div>
            <Typography component={motion.h1} variants={list} initial="hidden" animate="show" sx={{ fontWeight: 800, lineHeight: 1.12, fontSize: { xs: '2.4rem', sm: '3.4rem', md: '4rem' }, perspective: 800 }}>
              <Words text="Your Next Phone." /><br /><Words text="Your Next Level." cls="grad-text" />
            </Typography>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.7 }}>
              <Typography sx={{ mt: 2.5, mb: 4, color: 'rgba(255,255,255,0.7)', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 520 }}>
                Discover the latest smartphones, powerful performance, and premium accessories — all in one place.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button className="shine-btn" component={motion.button} whileHover={{ scale: 1.07, y: -3 }} whileTap={{ scale: 0.95 }} variant="contained" size="large" sx={{ px: 4, py: 1.5, borderRadius: 8, textTransform: 'none', fontWeight: 700, background: 'linear-gradient(90deg,#2563eb,#7c3aed)', boxShadow: '0 8px 30px rgba(99,102,241,.45)' }}>Explore Smartphones</Button>
                <Button component={motion.button} whileHover={{ scale: 1.07, y: -3 }} whileTap={{ scale: 0.95 }} variant="outlined" size="large" sx={{ px: 4, py: 1.5, borderRadius: 8, textTransform: 'none', fontWeight: 700, color: '#fff', borderColor: 'rgba(255,255,255,0.4)', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' } }}>View Latest Deals</Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box onMouseMove={onMove} onMouseLeave={reset} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 3 }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', width: 'min(92%,500px)', aspectRatio: '1', borderRadius: '50%', border: '2px dashed rgba(96,165,250,.35)' }}>
                <span style={{ position: 'absolute', top: -7, left: '50%', width: 14, height: 14, borderRadius: '50%', background: '#60a5fa', boxShadow: '0 0 18px #60a5fa' }} />
              </motion.div>
              <motion.div {...float(0.5)} style={{ width: '100%', maxWidth: 420, perspective: 900 }}>
                <motion.img src={IMG.hero} alt="Flagship smartphone" initial={{ opacity: 0, scale: 0.7, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, type: 'spring' }}
                  style={{ rotateX: rx, rotateY: ry, width: '100%', height: 440, objectFit: 'cover', borderRadius: 32, boxShadow: '0 30px 80px rgba(59,130,246,.4)', display: 'block' }} />
              </motion.div>
              <motion.div {...float(0)} style={{ position: 'absolute', top: 20, left: 0 }}><Chip icon={<CameraAltIcon sx={{ color: '#fff !important' }} />} label="200MP Camera" sx={badge} /></motion.div>
              <motion.div {...float(1)} style={{ position: 'absolute', bottom: 70, right: 0 }}><Chip icon={<BatteryChargingFullIcon sx={{ color: '#fff !important' }} />} label="5000mAh • 120W" sx={badge} /></motion.div>
              <motion.div {...float(2)} style={{ position: 'absolute', bottom: 15, left: 10 }}><Chip label="5G Ready" sx={badge} /></motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <motion.div animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.8, repeat: Infinity }} style={{ position: 'absolute', bottom: 18, left: '50%', marginLeft: -11, width: 22, height: 36, border: '2px solid rgba(255,255,255,.5)', borderRadius: 12 }}>
        <span style={{ display: 'block', width: 4, height: 8, margin: '6px auto', borderRadius: 2, background: '#fff' }} />
      </motion.div>
    </Box>
  )
}
