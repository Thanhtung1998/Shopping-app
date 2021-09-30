export const getUniqueValues = (data: any, type: any) => {
  let unique = data.map((item: any) => item[type])
  if (type === 'ColorProduct') {
    unique = unique.flat()
  }

  const values: any = new Set(unique)

  return ['all', ...values]
}