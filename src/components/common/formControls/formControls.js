import classes from './formControls.module.css'

// Element = 'input'/'textarea'
// Use in code like
// const Input = FormControl("Input")
// to assign a form to component variable
// and then <Field component={Input}
export const FormControl = Element => ({input, meta: {touched, error}, element, ...props}) => {
    const hasError = touched && error

    return (
        <div className={classes.formControl + ' ' + (hasError && classes.error)}>
            <div>
                <Element {...props} {...input}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


