import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = ( props ) => (
    <Aux>
        <Toolbar />
        {/* changing the css dynamically using props */}
        <SideDrawer height='80%' />
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>

        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;