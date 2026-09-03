const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const { spawn } = require('child_process')
const path = require('path')

const input = path.resolve(__dirname, '..', 'public', 'hero-event-16s.mov')
const output = path.resolve(__dirname, '..', 'public', 'hero-event-16s.mp4')

const args = [
  '-y',
  '-i', input,
  '-c:v', 'libx264',
  '-preset', 'fast',
  '-crf', '20',
  '-movflags', '+faststart',
  '-pix_fmt', 'yuv420p',
  '-c:a', 'aac',
  '-b:a', '128k',
  output,
]

console.log('Running:', ffmpegPath, args.join(' '))

const proc = spawn(ffmpegPath, args, { stdio: 'inherit' })

proc.on('close', (code) => {
  if (code === 0) {
    console.log('Conversion complete:', output)
    process.exit(0)
  }
  console.error('ffmpeg exited with code', code)
  process.exit(code || 1)
})
