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
           return object.props.children
        }
    }
    return result
}
