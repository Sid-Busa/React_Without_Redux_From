import React,{Fragment} from 'react';
import { Grid } from 'semantic-ui-react';
import SettingNav from './SettingNav';
import { Route, Redirect, Switch } from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotoPage from './PhotoPage';
import AccountPage from './AccountPage';

const SettingDashboard = () => {
    return (
        <Fragment>
            <Grid>
                <Grid.Column width={10}>
                    <Switch>
                        <Redirect exact from="/settings" to="/settings/basic" />
                        <Route path="/settings/basic" component={BasicPage} />
                        <Route path="/settings/about" component={AboutPage} />
                        <Route path="/settings/photos" component={PhotoPage} />
                        <Route path="/settings/account" component={AccountPage} />
                    </Switch>
                </Grid.Column>
                <Grid.Column width={6}>
                    <SettingNav />
                </Grid.Column>
            </Grid>
        </Fragment>
    )
}
export default SettingDashboard