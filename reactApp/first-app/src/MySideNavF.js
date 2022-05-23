export function MySideNavF (props){
    const { label, userName } = props;
    return(
        <div class="sb-sidenav-footer">
                        <div class="small">{ label }</div>
                       { userName }
                    </div>
    )
}