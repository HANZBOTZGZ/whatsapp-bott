import path from 'path'

const timeZone = 'Asia/Jakarta'

const tempName = 'temp'
global.tempDir = path.resolve(new URL('.', import.meta.url).pathname, tempName)

const owner = [
    ['6285215603320', 'LoraaX'],
    ['6288227515514']
]

const defaultPrefix = ['/', '!', '#', '.', '-', '🗿']

const EmojiSw = ["🖤", "🤎", "💜", "💙", "💚", "💛", "🧡", "❤️", "🤍"];

export { timeZone, owner, defaultPrefix, EmojiSw }
