import * as style from './card.style'

const Card = ({ product, deleteProduct, setEditData, popupMenu }: any) => {
  const onEditClick = (data: any) => {
    popupMenu(data)
  }
  return (
    <div>
      {product?.products.map((product: any, index: number) => (
        <div key={index} style={{ ...style.card }}>
          <div style={{ ...style.head }}>
            <p>
              {product.product_name}
            </p>
            <p>
              {(product?.status?.charAt(0).toUpperCase() + product?.status?.slice(1)).replaceAll("_", " ")}
            </p>
          </div>
          <div style={{ ...style.body }}>
            <p style={{ marginBottom: 12 }}><span style={{ ...style.miniTitle }}>Description: </span>{product.description}</p>
            <p><span style={{ ...style.miniTitle }}>Category: </span>{product.category_name}</p>
            {/* <p><span style={{ ...style.miniTitle }}>Created At: </span>
              {product.created_at.trim().split("T")[0]}
            </p> */}
          </div>
          <div style={{ ...style.footer }}>
            <div style={{ marginRight: 10, ...style.icon }} onClick={() => {
              setEditData(product);
              onEditClick(true);
            }}>
              <img style={{ ...style.iconStyle, color: '#000' }} src="edit.png" alt="Edit" />
            </div>
            <div style={{ ...style.icon }} onClick={() => deleteProduct({ productId: product.id })}>
              <img style={{ ...style.iconStyle }} src="delete.png" alt="Delete" />
            </div>
          </div>
        </div >
      ))}
    </div>
  )
}

export { Card }