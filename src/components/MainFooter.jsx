const MainFooter = (props) => {

    return (
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div className="col mb-3 ps-5">
                <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                    <img src="/img/logo.png" alt="" width="150px" />
                </a>
                <p className="text-body-secondary">&copy; 2024</p>
            </div>

            <div className="col mb-3">

            </div>

            <div className="col mb-3">
                <h5>Popular Brands</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Damits Solar</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">RIMS Solar</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Padmanav Solar</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">RIT Solar</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">NIT Super Solar</a></li>
                </ul>
            </div>

            <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
            </div>

            <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
            </div>
        </footer>
    );
};
export default MainFooter;