import * as style from './card.style'

const Card = ({ product }: any) => {
  return (
    <div>
      {product?.products.map((product: any, index: number) => (
        <div key={index} style={{ ...style.card }}>
          <div style={{ ...style.head }}>
            <p>
              {product.product_name}
            </p>
            <p>
              {console.log(product.status.replace("_", " "))}
              {product.status}
            </p>
          </div>
          <div style={{ ...style.body }}>
            <p style={{ marginBottom: 12 }}><span style={{ ...style.miniTitle }}>Description: </span>{product.description}</p>
            <p><span style={{ ...style.miniTitle }}>Category: </span>{product.category_name}</p>
            <p><span style={{ ...style.miniTitle }}>Created At: </span>
              {console.log(product.created_at.trim().split("T")[0])}
              {product.created_at.trim().split("T")[0]}
            </p>
          </div>
          <div style={{ ...style.footer }}>
            <div style={{ marginRight: 10, ...style.icon }}>
              <a href="/">
                <img style={{ ...style.iconStyle, color: '#000' }} src="edit.png" alt="Edit" />
              </a>
            </div>
            <div style={{ ...style.icon }}>
              <a href="/">
                <img style={{ ...style.iconStyle }} src="delete.png" alt="Delete" />
              </a>
            </div>
          </div>
        </div >
      ))}
    </div>
  )
}

export { Card }