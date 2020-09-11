import {Navbar} from './Navbar';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

// type PropsType = {
//     friends: sidebarType
// }


let mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.sidebar
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer;