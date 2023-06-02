import { API } from "./lib/index"
import { QueryFunction, useQuery } from "react-query"
import * as styles from './preset-styles'
import { Table, TableMobile } from "./components"
import { useMediaQuery } from "react-responsive"

export default function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' });
  const fetchProduct: QueryFunction<any, any> = async () => {
    return await API.get('/products')
  }

  const { isLoading, isError, data: product } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProduct
  }
  )

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
      {isMobile ? <TableMobile product={product} /> : <Table data={product} />}
    </div>
  )
}