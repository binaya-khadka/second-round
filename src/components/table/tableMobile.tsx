import { Card } from '../card/card'
import * as style from './tableMobile.style'

const TableMobile = ({ product, deleteProduct }: any) => {
  return (
    <div style={{ ...style.wrapper }}>
      <h1>Table Data</h1>
      <Card product={product} deleteProduct={deleteProduct} />
    </div>
  )
}

export { TableMobile }