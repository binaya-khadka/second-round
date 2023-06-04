import { API } from "./lib/index"
import { QueryFunction, useQuery } from "react-query"
import * as styles from './preset-styles'
import { Table, TableMobile } from "./components"
import { useMediaQuery } from "react-responsive"
import { useCallback, useState } from "react"
import { AddProduct } from "./components"

export default function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });
  const [product, setProduct] = useState<any>(null)


  const addProduct = (products: any) => {
    // setProduct((product: any) => ({
    //   ...product,
    //   products
    // }))

    // setProduct((product: any) => ({
    //   ...product,
    //   [products?.id]: products, // Assuming `data.id` is a unique identifier for each product
    // }));
    console.log(product);


    // products.id = Date.now();
    // setProduct([...product, products])
  }

  const fetchProduct: QueryFunction<any, any> = async () => {
    return await API.get('/products')
  }

  const { isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProduct,
    onSuccess: (data) => setProduct(data)
  },)

  const deleteProduct = useCallback(({ productId }: { productId: string }) => {
    const newProducts = product?.products?.filter((product: any) => {
      return product.id !== productId
    });
    setProduct({ products: newProducts });
  }, [product]);

  if (isLoading) {
    return <div style={{
      display: 'flex',
      justifyContent: 'center' as 'center'
    }}>Loading....</div>
  }

  if (isError) {
    return <div>Error Occured......</div>
  }

  return (
    <div style={{ ...styles.pageContainer }}>
      <AddProduct addProduct={addProduct} />
      {isMobile ? <TableMobile product={product} deleteProduct={deleteProduct} /> : <Table data={product} deleteProduct={deleteProduct} />}
    </div>
  )
}