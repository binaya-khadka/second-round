import { nanoid } from 'nanoid';
import * as styles from '../../preset-styles';
import * as style from './addproduct.style'
import { useForm, Controller } from "react-hook-form";
import { useEffect } from 'react';

const AddProduct = ({ addProduct, editData }: any) => {

  const inputField = {
    marginTop: '10px',
    padding: '5px 7px',
    fontSize: '1rem',
    marginBottom: '0.5rem'
  };

  const {
    handleSubmit,
    control,
    setValue
  } = useForm({
    defaultValues: {
      product_name: '',
      category_name: '',
      created_at: new Date(),
      created_by: '',
      description: '',
      status: '',
    },
  });

  useEffect(() => {
    setValue('product_name', editData?.product_name)
    setValue('category_name', editData?.category_name)
    setValue('created_at', editData?.created_at)
    setValue('created_by', editData?.created_by)
    setValue('description', editData?.description)
    setValue('status', editData?.status)
  }, [editData, setValue])

  const onSubmit = (data: any) => {
    addProduct({
      newProduct: { ...data, id: editData?.id || nanoid() },
      editing: !!editData,
    });
  };

  return (
    <div style={{ ...styles.pageContainer, ...style.lineHeight, ...style.containerStyle }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ ...style.centerDiv }}>
        <label htmlFor="product_name">Product Name</label>
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
        <label htmlFor="category_name">Category Name</label>
        <Controller
          name="category_name"
          control={control}
          render={({ field }) =>
            <>
              <input {...field} style={inputField} />
            </>}
        />
        <label htmlFor="created_by">Created By</label>
        <Controller
          name="created_by"
          control={control}
          render={({ field }) =>
            <>
              <input {...field} style={inputField} />
            </>}
        />
        <label htmlFor="description">Description</label>
        <Controller
          name="description"
          control={control}
          render={({ field }) =>
            <>
              <input {...field} style={inputField} />
            </>}
        />
        <label htmlFor="status">Status</label>
        <Controller
          name="status"
          control={control}
          render={({ field }) =>
            <>
              <select style={inputField} defaultValue={"out_off_stock"} {...field}>
                <option value="out_off_stock">Out off stock</option>
                <option value="limited_available">Limited available</option>
                <option value="in_stock">In stock</option>
              </select>
            </>}
        />
        <input type="submit" style={{ ...style.submitButton }} value="Submit" />
      </form>
    </div>
  )
}

export { AddProduct }