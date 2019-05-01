const router = require('koa-router')()

router.get('/', async ctx => {
  ctx.body = ctx
})

module.exports = router
