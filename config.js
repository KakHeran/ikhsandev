/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6287846614391', 'IkhsanDev', true],
  ['6287846614391']
] // Nomor Owner

global.mods = ['6287846614391'] 
global.prems = ['6287846614391', '6287846614391', '6287846614391']

// Harus di isi
global.lann = 'Ikhsan01' // https://api.betabotz.org
global.btc = '9vPhL8vd' // https://api.botcahx.live

// Fitur dari https://api.betabotz.org (global.lann) : remini, toanime openai. mau request fitur? request aja nanti saya buatkan dari api itu

// Fitur dari https://api.botcahx.live (global.btc) : downloader douyin, cecan indo cina, asupan, dl twitter dll (contoh? cek video saya yang nero V3) mau request fitur? request aja nanti saya buatkan dari api itu

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'Ikhsan01'
}

// Watermark
global.nama = 'IkhsanDev' // nama owner
global.nomor = '6285880029379' // nomor owner
global.nans = 'IKHSAN-BOT' // nama bot 
global.thumb = 'https://i.ibb.co/w4KjD1z/20230813-230848.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/Dfa9rzgkur53QBUE3fSNR6' // link group yang ada di menu

// Sticker wm
global.packname = 'IKHSAN┃ᴮᴼᵀ' 
global.author = '@ikhsan_bruhh' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/ikhsan_bruhh\n'
global.fgsc = 'https://github.com/nanzone' 
global.fgyt = 'https://nansoffc.my.id/'
global.fgpyp = 'https://saweria.co/nansofficial'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})