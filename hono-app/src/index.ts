import { Hono } from 'hono'

const app = new Hono()

app.post('/', (c) => {
  const body = c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.json({message : 'Hello Hono!'})
})

export default app
