import './index.css'
import Navbar from './Components/home/nav.tsx'
import LandingPage from './Components/home/landingpage.tsx'
import Search from './Components/home/search.tsx'
import products from './products.ts'
import Button from './Components/home/button.tsx'


import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/Components/ui/table" ;


function App() {
  return (
    <body className='mx-10'>
        <Navbar/>
        <LandingPage/>
        <Search/>


  <Table>
  <TableCaption>Click for more Items</TableCaption>

  <TableHeader>
    <TableRow>
      <TableHead>Product Image</TableHead>
      <TableHead>Cost</TableHead>
      <TableHead>Supplier</TableHead>
      <TableHead>Score</TableHead>
      <TableHead>Quantity</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>

    {products.map((product, index) => (

    <TableRow key={index}>
      <TableCell><img src={product.image} className="w-20 h-20 object-cover" /></TableCell>
      <TableCell>{product.cost}</TableCell>
      <TableCell>{product.supplier}</TableCell>
      <TableCell>{product.score}</TableCell>
      <TableCell>{product.quantity}</TableCell>
    </TableRow>

  ))}

  </TableBody>
  </Table>



        <div className='flex justify-end  '>       
          <Button className="" name="Add to cart"/>
        </div>

    </body>
  )
}

export default App
