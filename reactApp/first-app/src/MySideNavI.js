export function MySideNavI (props){
    const { label,link } =props;
    return(
        <a class="nav-link" href={ link }>
            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
            { label }
        </a>
    )
}