
import './homepage.styles.scss'
import Directory from '../../components/directroy/directory.component';
import { Link } from 'react-router-dom';

const HomePage = (props) => (
    <div className="homepage">
        <Directory />
    </div>
)
export default HomePage;