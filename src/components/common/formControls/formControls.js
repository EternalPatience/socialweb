import classes from './formControls.module.css'

//Element = 'input'/'textarea'
export const FormControl = Element => ({input, meta, element, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={classes.formControl + ' ' + (hasError && classes.error)}>
            <div>
                <Element {...props} {...input}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


