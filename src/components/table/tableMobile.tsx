import { Card } from '../card/card'
import * as style from './tableMobile.style'

const TableMobile = ({ product }: any) => {
  return (
    <div style={{ ...style.wrapper }}>
      <h1>Table Data</h1>
      <Card product={product} />
    </div>
  )
}

export { TableMobile }