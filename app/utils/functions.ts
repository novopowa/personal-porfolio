export function jsxElementToString(jsx: React.JSX.Element): string {
  let object = jsx.props.children
  let result = ""
  if(typeof object === "string"){
    result += object
  }else{
    if(Array.isArray(object)){
      result += object.map((item: any)=>{
        if(typeof item === "string"){
          return item
        }else{
          return jsxElementToString(item)
        }
      }).join('')
    }else{
      return jsxElementToString(object)
    }
  }
  return result
}



export function calculateAge(birthyear: number): string {
  const currentDate: Date = new Date()
  const currentYear: number = currentDate.getFullYear()
  const age: number = currentYear-birthyear 
  return age.toString()
}