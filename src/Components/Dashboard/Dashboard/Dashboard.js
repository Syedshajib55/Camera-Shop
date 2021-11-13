import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import ManageServices from '../../ManageServices/ManageServices'
import AdminRoute from '../AdminRoute/AdminRoute';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth/useAuth';
import Pay from './Pay/Pay';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders'
import DashboardReview from '../DashboardReview/DashboardReview';
import AddServiceAdmin from '../AddServiceAdmin.js/AddServiceAdmin';
import ManageOrders from '../../ManageOrders/ManageOrders';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/home"><Button color="inherit">Homepage</Button></Link><Divider />
            <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link><Divider />
           {!admin && <Box>
            <Link to={`${url}/manageservices`}><Button color="inherit">Manage My Orders</Button></Link>
            <Divider />
            <Link to={`${url}/pay`}><Button color="inherit">Pay</Button></Link><Divider />
            <Link to={`${url}/reviews`}><Button color="inherit">Review</Button></Link><Divider />
           </Box>
           }
            {admin && <Box>
                <Link to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link><Divider />
                <Link to={`${url}/addservice`}><Button color="inherit">Add a Product</Button></Link><Divider />
                <Link to={`${url}/manageallorders`}><Button color="inherit">Manage All Orders</Button></Link><Divider />
                <Link to={`${url}/manageorders`}><Button color="inherit">Manage Orders</Button></Link><Divider />
            </Box>}
            <Button onClick={logout} color="inherit">Logout</Button><Divider/>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
          
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
           
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <DashboardReview></DashboardReview>
                    </Route>
                    <Route path={`${path}/manageservices`}>
                        <ManageServices></ManageServices>
                    </Route>
                    <AdminRoute path={`${path}/manageallorders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageorders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addservice`}>
                        <AddServiceAdmin></AddServiceAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;