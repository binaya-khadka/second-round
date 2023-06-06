import { Card } from '../card/card'
import * as style from './tableMobile.style'

const TableMobile = ({ product, deleteProduct, setEditData, popupMenu, searchData }: any) => {
  return (
    <div style={{ ...style.wrapper }}>
      <h1>Table Data</h1>
      <Card product={product} deleteProduct={deleteProduct} setEditData={setEditData} popupMenu={popupMenu} searchData={searchData} />
    </div>
  )
}

export { TableMobile }