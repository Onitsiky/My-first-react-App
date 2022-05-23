import './App.css';
import { MyHead } from './MyHead';
import { MyLayoutSideNavN } from './MyLayoutSideNavN';
import { MyLine } from './MyLine';
import { MyNavBar } from './MyNavBar';
import { MyNavItem } from './MyNavItem';
import { MySearchBar } from './MySearchBar';
import { MySideBarItems } from './MySideBarItems';
import { MySideNavF } from './MySideNavF';
import { MySideNavH } from './MySideNavH';
import { MySideNavI } from './MySideNavI';
import { MyTBody } from './MyTBody';

function App() {
  return (
   <div>
    <MyNavBar label="StartBootstrap">
            <MySearchBar placeholder="Search for ..." idButton="btnNavbarSearch"/>
            <MyNavItem label1="Settings" label2="Activity Log" label3="Logout"/>
    </MyNavBar>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <MySideNavH label="Core"/>
                            <a class="nav-link" href="index.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <MySideNavH label="Interface"/>
                            <MySideBarItems label="Layouts" className="fas fa-columns"/>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <MySideBarItems label="Pages" className="fas fa-book-open"/>

                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="login.html">Login</a>
                                            <a class="nav-link" href="register.html">Register</a>
                                            <a class="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="401.html">401 Page</a>
                                            <a class="nav-link" href="404.html">404 Page</a>
                                            <a class="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <MySideNavH label="Addons"/>
                            <MySideNavI label="Charts" link="charts.html"/>
                            <MySideNavI label="Tables" link="tables.html"/>
                        </div>
                    </div>
                    <MySideNavF label="Logged in as:" userName="Start Bootstrap"/>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Tables</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Tables</li>
                        </ol>
                        <div class="card mb-4">
                            <div class="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                                .
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <div class="card-body">
                                <table id="datatablesSimple">
                                    <thead>
                                    <MyHead Name="Name" Position="Position" Office="Office" Age="Age" StartDate="Start date" Salary="Salary"/>
                                    </thead>
                                    <tfoot>
                                    <MyHead Name="Name" Position="Position" Office="Office" Age="Age" StartDate="Start date" Salary="Salary"/>
                                    </tfoot>
                                    <MyTBody>
                                    <MyLine Name="Tiger Nixon" Position="System Architect" Office="Edinburgh"  Age="61" StartDate="2011/04/25" Salary="$320,800"/>
                                    <MyLine Name="Garett Winters" Position="Accountant" Office="Tokyo" Age="63" StartDate="2011/07/25" Salary="$170,750"/>
                                    <MyLine Name="Ashton Cox" Position="Junior Technical Author" Office="San Francisco" Age="66" StartDate="2009/01/12" Salary="$86,000"/>
                                    <MyLine Name="Cedric Kelly" Position="Senior Javascript Developer" Office="Edinburgh" Age="22" StartDate="2012/03/29" Salary="$433,060"/>
                                    <MyLine Name="Airi Satou" Position="Accountant" Office="Tokyo" Age="33" StartDate="2008/11/28" Salary="$162,700"/>
                                    <MyLine Name="Brielle Williamson" Position="Integration Specialist" Office="New York" Age="61" StartDate="2012/12/02" Salary="$1372,00"/>
                                    <MyLine Name="Herrod Chadler" Position="Sales Assistant" Office="San Francisco" Age="59" StartDate="2012/08/06" Salary="$137,500"/>
                                    <MyLine Name="Rhona Davidson" Position="Integration Specialist" Office="Tokyo" Age="55" StartDate="2010/10/14" Salary="$327,900"/>
                                    <MyLine Name="Colleen Hurst" Position="Javascript Developer" Office="San Francisco" Age="39" StartDate="2009/09/15" Salary="$205,500"/>
                                    <MyLine Name="Sonia Frost" Position="Software Engineer" Office="Edinburgh" Age="23" StartDate="2008/12/13" Salary="$103,600"/>
                                    <MyLine Name="Jena Gaines" Position="Office Manager" Office="London" Age="30" StartDate="2008/12/19" Salary="$90,560"/>
                                    <MyLine Name="Quinn Flynn" Position="Support Lead" Office="Edinburgh" Age="22" StartDate="2013/03/03" Salary="$342,000"/>
                                    <MyLine Name="Charde Marshall" Position="Regionnal Director" Office="San Francisco" Age="36" StartDate="2008/10/16" Salary="$470,600"/>
                                    <MyLine Name="Haley Kennedy" Position="Senior Marketing Designer" Office="London" Age="43" StartDate="2012/12/18" Salary="$313,500"/>
                                    <MyLine Name="Tatyana Fitzpatrick" Position="Regional Director" Office="London" Age="19" StartDate="2010/03/17" Salary="$385,750"/>
                                    <MyLine Name="Michael Silva" Position="Marketing Designer" Office="London" Age="66" StartDate="2012/11/27" Salary="$198,500"/>
                                    <MyLine Name="Paul Byrd" Position="Chief Financial Officer (CFO)" Office="New York" Age="64" StartDate="2010/06/09" Salary="$725,000"/>
                                    <MyLine Name="Gloria Little" Position="Systems Administrator" Office="New York" Age="59" StartDate="2009/04/10" Salary="$237,500"/>
                                    <MyLine Name="Bradley Greer" Position="Software Engineer" Office="London" Age="41" StartDate="2012/10/13" Salary="$132,000"/>
                                    <MyLine Name="Dai Rios" Position="Personnel Lead" Office="Edingburgh" Age="35" StartDate="2012/09/26" Salary="$217,500"/>
                                    <MyLine Name="Jenette Caldwell" Position="Development Lead" Office="New York" Age="30" StartDate="2011/09/03" Salary="$345,000"/>
                                    <MyLine Name="Yuri Berry" Position="Chief Marketing Officer" Office="New York" Age="40" StartDate="2009/06/25" Salary="$675,000"/>
                                    <MyLine Name="Caesar Vance" Position="Pre-sales Support" Office="New York" Age="21" StartDate="2011/12/12" Salary="$106,450"/>
                                    <MyLine Name="Doris Wilder" Position="Sales Accountant" Office="Sidney" Age="23" StartDate="2010/09/20" Salary="$85,600"/>
                                    <MyLine Name="Angelica Ramos" Position="Chief Executive Officer(CEO)" Office="London" Age="47" StartDate="2009/10/09" Salary="$1,200,000"/>
                                    <MyLine Name="Gavin Joyce" Position="Developer" Office="Edinburgh" Age="42" StartDate="2010/12/22" Salary="$92,575"/>
                                    <MyLine Name="Jennifer Chang" Position="Regional Director" Office="Singapore" Age="28" StartDate="2010/11/14" Salary="$357,650"/>
                                    <MyLine Name="Brender Wagner" Position="Software Engineer" Office="San Francisco" Age="28" StartDate="2011/06/07" Salary="$206,850"/>
                                    <MyLine Name="Fiona Green" Position="Chief Operating Officer (CEO)" Office="San Francisco" Age="48" StartDate="2010/03/11" Salary="$850,000"/>
                                    <MyLine Name="Shou Itou" Position="Regionnal Marketing" Office="Tokyo" Age="20" StartDate="2011/08/14" Salary="$163,000"/>
                                    <MyLine Name="Michelle House" Position="Integration Specialist" Office="Sidney" Age="37" StartDate="2011/06/02" Salary="$95,400"/>
                                    <MyLine Name="Suki Burks" Position="Developer" Office="London" Age="53" StartDate="2009/10/22" Salary="$114,500"/>
                                    <MyLine Name="Prescott Bartlett" Position="Technical Author" Office="London" Age="27" StartDate="2011/05/07" Salary="$145,000"/>
                                    <MyLine Name="Gavin Cortez" Position="Team Leader" Office="San Francisco" Age="22" StartDate="2008/10/22" Salary="$235,500"/>
                                    <MyLine Name="Martena Mccray" Position="Post-Sales Support" Office="Edinburgh" Age="46" StartDate="2011/03/09" Salary="$324,050"/>
                                    <MyLine Name="Unity Butler" Position="Marketing Designer" Office="San Francisco" Age="47" StartDate="2009/12/09" Salary="$83,675"/>
                                    <MyLine Name="Howard Hatfield" Position="Office Manager" Office="San Francisco" Age="51" StartDate="2008/12/16" Salary="$164,500"/>
                                    <MyLine Name="Hope Fuentes" Position="Secretary" Office="San Francisco" Age="41" StartDate="2010/02/12" Salary="$109,850"/>
                                    <MyLine Name="vivian Harell" Position="Financial Controller" Office="San Francisco" Age="62" StartDate="2009/02/14" Salary="$452,500"/>
                                    <MyLine Name="Timothy Mooney" Position="Office Manager" Office="London" Age="37" StartDate="2008/12/11" Salary="$136,200"/>
                                    <MyLine Name="Jackson Bradshaw" Position="Director" Office="New York" Age="65" StartDate="2008/09/26" Salary="$645,750"/>
                                    <MyLine Name="Olivia Liang" Position="Support Engineer" Office="Singapore" Age="64" StartDate="2011/02/03" Salary="$234,500"/>
                                    <MyLine Name="Bruno Nash" Position="Software Engineer" Office="London" Age="38" StartDate="2011/05/03" Salary="$163,500"/>
                                    <MyLine Name="Sakura Yamamoto" Position="Support Engineer" Office="Tokyo" Age="37" StartDate="2009/08/19" Salary="$139,575"/>
                                    <MyLine Name="Thor Walton" Position="Developer" Office="New York" Age="61" StartDate="2013/08/11" Salary="$98,540"/>
                                    <MyLine Name="Finn Camacho" Position="Support Engineer" Office="San Francisco" Age="47" StartDate="2009/07/07" Salary="$87,500"/>
                                    <MyLine Name="Serge Baldwin" Position="Data Coordinator" Office="singapore" Age="64" StartDate="2012/04/09" Salary="$138,575"/>
                                    <MyLine Name="Zenaida Frank" Position="Software Engineer" Office="New York" Age="63" StartDate="2010/01/04" Salary="$125,250"/>
                                    <MyLine Name="Zorita Serrano" Position="Software Engineer" Office="San Francisco" Age="56" StartDate="2012/06/01" Salary="$115,000"/>
                                    <MyLine Name="Jennifer Acosta" Position="Junior Javascript Developer" Office="Edinburgh" Age="43" StartDate="2013/02/01" Salary="$75,650"/>
                                    <MyLine Name="Cara Stevens" Position="Sales Assistant" Office="New York" Age="46" StartDate="2011/12/06" Salary="$145,600"/>
                                    <MyLine Name="Hermione Butler" Position="Regional Director" Office="London" Age="47" StartDate="2011/03/21" Salary="$356,250"/>
                                    <MyLine Name="Lael Greer" Position="Systems Administrator" Office="London" Age="21" StartDate="2009/02/27" Salary="$103,500"/>
                                    <MyLine Name="Jonas Alexander" Position="Developer" Office="San Francisco" Age="30" StartDate="2010/07/14" Salary="$86,500"/>
                                    <MyLine Name="Shad Decker" Position="Regional Director" Office="Edinburgh" Age="51" StartDate="2008/11/13" Salary="$183,000"/>
                                    <MyLine Name="Donna Snider" Position="Customer Support" Office="New York" Age="27" StartDate="2011/01/25" Salary="$112,000"/>
                                    </MyTBody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
   </div>
  );
}

export default App;
