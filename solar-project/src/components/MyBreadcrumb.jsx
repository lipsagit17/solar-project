
const MyBreadcrumb = (props) => {
    const page = props.pagename ? props.pagename : "PAGE NAME";
    return (
        <div style={{
            "backgroundColor": "#01a0c7",
            "fontSize": "20px",
            "padding": "50px 0px"
        }}>
            <h1 className="text-center text-white">{page}</h1>
            <h4 className="text-center text-white">{props.mainlink}</h4>
        </div>
    );
}

export default MyBreadcrumb;