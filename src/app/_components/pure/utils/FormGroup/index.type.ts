interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{ 
    label : JSX.Element | string;
    formField : JSX.Element;
    required? : boolean
    validationErrorMessage? : React.ReactNode | string
}

export default Props