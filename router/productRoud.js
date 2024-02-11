
const router = new Router()
router.get('/products',(req,res)=>{
    req.send(products)
})
router.post('/product',(req,res)=>{
const {title,price,id}= req.body;
    res.json(title)
})
export default router