import { useState } from "react"
import * as styles from '../../preset-styles';
import * as style from './addproduct.style'
import { useForm, Controller } from "react-hook-form";

const AddProduct = ({ addProduct }: any) => {
  const inputField = {
    marginTop: '10px',
    padding: '5px 7px',
    fontSize: '1rem',
    marginBottom: '0.5rem'
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      id: Date.now(),
      product_name: '',
      category_name: '',
      created_at: '',
      created_by: '',
      description: '',
      status: '',
    },
  });

  const onSubmit = (data: any) => {
    addProduct(data);
  }


  return (
    <div style={{ ...styles.pageContainer, ...style.lineHeight }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ ...style.centerDiv }}>
        <label htmlFor="product_name">product_name</label>
        <Controller
          name="product_name"
          control={control}
          render={
            ({ field }) =>
              <>
                <input {...field} style={inputField} />
              </>}
        />
        <br />
        <label htmlFor="category_name">category_name</label>
        <Controller
          name="category_name"
          control={control}
          render={({ field }) =>
            <>
              <input {...field} style={inputField} />
            </>}
        />
        <label htmlFor="created_at">created_at</label>
        <Controller
          name="created_at"
          control={control}
          render={({ field }) =>
            <>
              <input {...field} style={inputField} />
            </>}
        />
        <label htmlFor="created_by">created_by</label>
        <Controller
          name="created_by"
          control={control}
          render={({ field }) =>
            <>
              <input {...field} style={inputField} />
            </>}
        />
        <label htmlFor="description">description</label>
        <Controller
          name="description"
          control={control}
          render={({ field }) =>
            <>
              <input {...field} style={inputField} />
            </>}
        />
        <label htmlFor="status">status</label>
        <Controller
          name="status"
          control={control}
          render={({ field }) =>
            <>
              <input {...field} style={inputField} />
            </>}
        />
        <input type="submit" style={{ ...style.submitButton }} value="Submit" />
      </form>
    </div>
  )
}

export { AddProduct }