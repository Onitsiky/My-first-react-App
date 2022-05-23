export function MyNavItem (props){
    const { label1,label2,label3 } = props;
    return(
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#!">{ label1 }</a></li>
                <li><a class="dropdown-item" href="#!">{ label2 }</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#!">{ label3 }</a></li>
            </ul>
        </li>
    </ul>
    );
}