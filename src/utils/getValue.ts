export const getUniqueValues = (data: any, type: any) => {
  let unique = data.map((item: any) => item[type])

  if (type === 'ColorProduct') {
    unique = unique.flat() //là phẳng mảng sâu normal = 1 flat(number)

  }
  if (type === 'Categories') {
    unique = unique.flat()
  }

  const values: any = new Set(unique) // Set Mảng hoặc Chuỗi cac phần tử là duy nhất
  // console.log(values);

  return ['all', ...values] // Spread loại bỏ {} hoặc []
}