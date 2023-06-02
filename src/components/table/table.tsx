import * as style from './table.style'
import * as styles from '../../preset-styles'

const Table = ({ data }: any) => {
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
              <td style={{ ...style.tableData }}>{item.created_at}</td>
              <td style={{ ...style.tableData }}>{item.status}</td>
              <td style={{ ...style.inlineElement, ...style.tableData }}>
                <input type="button" style={{ ...style.editButton }} value="Edit" />
                <input type="button" style={{ ...style.deleteButton }} value="Delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { Table }