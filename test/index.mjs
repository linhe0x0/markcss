import { readFile } from 'node:fs/promises'
import express from 'express'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const port = process.env.PORT || 3000
const example = new URL('./example.md', import.meta.url)

const app = express()

const viewDir = new URL('./views', import.meta.url).pathname
const staticDir = new URL('../dist', import.meta.url).pathname

app.set('views', viewDir)
app.set('view engine', 'ejs')

app.use(express.static(staticDir))

const transform = async () => {
  const content = await readFile(example)
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content)

  return result.toString()
}

app.get('/', (req, res) => {
  const { theme } = req.query

  transform().then((body) => {
    res.render('index', {
      body,
      theme,
    })
  })
})

app.listen(port, () => {
  console.log(`Open http://localhost:${port} in browser to preview.`)
})
