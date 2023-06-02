Layout
-- The designs were created to the following widths:
-- Mobile: 375px
-- Desktop: 1440px
Colors
-- Very Dark Gray: hsl(0, 0%, 17%)
-- Dark Gray: hsl(0, 0%, 59%)
Typography
-- Font size (text input): 18px
-- Font family: Rubik
-- Font weights: 400, 500, 700

```tsx
import axios from "axios";
import { useQuery } from "react-query";

const Api = () => {
  const fetchData = async () => {
    const res = await axios.get("https://product-fhqo.onrender.com/products");
    return res.data;
  };

  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  console.log(products);

  if (isError) {
    console.log(error);
    <div>An Error occured</div>;
  }

  return (
    <div>
      {isLoading ? (
        <div>The data is loading...</div>
      ) : (
        <div>
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Status</th>
            </tr>
            {products?.products.map((data: any) => (
              <tr>
                <td>{data.id}</td>
                <td>{data.product_name}</td>
                <td>{data.category_name}</td>
                <td>{data.description}</td>
                <td>{data.created_at}</td>
                <td>{data.status}</td>
                <td>
                  <button onClick={() => {}}>Edit</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};
export { Api };
```
