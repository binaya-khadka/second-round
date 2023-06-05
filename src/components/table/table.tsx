import * as style from './table.style'
import * as styles from '../../preset-styles'

const Table = ({ data, deleteProduct, setEditData, editData }: any) => {
  return (
    <div style={{ ...styles.pageContainer, ...style.wrapper }}>
      <table style={{ ...style.table }}>
        <thead style={{}}>
          <tr>
            <th style={{ ...style.tableHead }}>Name</th>
            <th style={{ ...style.tableHead }}>Category</th>
            <th style={{ ...style.tableHead }}>Description</th>
            <th style={{ ...style.tableHead }}>Created At</th>
            <th style={{ ...style.tableHead }}>Status</th>
            <th style={{ ...style.tableHead }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((item: any) => (
            <tr key={item.id}>
              <td style={{ ...style.tableData }}>{item.product_name}</td>
              <td style={{ ...style.tableData }}>{item.category_name}</td>
              <td style={{ ...style.tableData }}>{item.description}</td>
              <td style={{ ...style.tableData }}>{item.created_at.split("T")[0]}</td>
              <td style={{ ...style.tableData }}>{(item?.status?.charAt(0).toUpperCase() + item?.status?.slice(1)).replaceAll("_", " ")}</td>
              <td style={{ ...style.inlineElement, ...style.tableData }}>
                <input type="button" style={{ ...style.editButton }} value="Edit" onClick={() => {
                  setEditData(item)
                  // editData({ productId: item.id })
                }} />
                <input type="button" style={{ ...style.deleteButton }} value="Delete" onClick={() => deleteProduct({ productId: item.id })} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { Table }