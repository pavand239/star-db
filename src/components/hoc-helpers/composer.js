export const composer = (...func) => (comp) =>(
    func.reduceRight((wrapped,f)=>f(wrapped),comp)
)