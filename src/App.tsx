import { API } from "./lib/index"
import { QueryFunction, useQuery } from "react-query"
import * as styles from './preset-styles'
import { Table, TableMobile } from "./components"
import { useMediaQuery } from "react-responsive"
import { useCallback, useState } from "react"
import { AddProduct } from "./components"
import Popup from 'reactjs-popup'

export default function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });
  const [product, setProduct] = useState<any>(null)
  const [editData, setEditData] = useState<any>(null)

  const [popupShown, setPopupShown] = useState<boolean>(false);

  const addProduct = useCallback(
    ({ newProduct, editing }: { newProduct: any; editing: boolean }) => {
      setProduct((prevProduct: any) => ({
        ...prevProduct,
        products: editing
          ? prevProduct.products.map((product: any) =>
            product?.id !== newProduct?.id ? product : newProduct
          )
          : [...prevProduct.products, newProduct],
      }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [product]
  );

  const fetchProduct: QueryFunction<any, any> = async () => {
    return await API.get('/products')
  }

  const { isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProduct,
    onSuccess: (data) => {
      setProduct(data)
    }
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
      {/* <input type="button" value="Add Product" style={styles.triggerButton} onClick={() => {
        setPopupShown(true);
      }} />
      {popupShown ? (
        <AddProduct addProduct={addProduct} editData={editData} />
      ) : null} */}
      {/* <Popup trigger={<button style={{ ...styles.triggerButton, }}>Add Product</button>} position="right center"> */}
      <AddProduct addProduct={addProduct} editData={editData} />
      {/* </Popup> */}
      {isMobile ? <TableMobile setEditData={setEditData} product={product} deleteProduct={deleteProduct} /> : <Table setEditData={setEditData} data={product} deleteProduct={deleteProduct} />}
    </div>
  )
}