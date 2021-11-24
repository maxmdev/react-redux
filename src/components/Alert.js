export const Alert = (props) => {
    return (
        <div className={'alert alert-danger'}>
            { props.text }
        </div>
    )
}