import Header from './Header';
import Line from './Line';

function Layout(props) {
    const {children} = props;
    return(
        <section>
            <Line />
            <Header />
            
                <main>{children}</main>
        
        </section>
    )
}
export default Layout;