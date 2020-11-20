import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Layout from 'layout';
import theme from 'utils/themes';
import palette from 'utils/themes/palette';
import { Route, Router, Switch } from 'react-router-dom';
import CompetitionCardsPage from 'components/views/competitionCard';
import UserPage from 'components/views/users';
import ParticipationInputs from 'components/views/participationInputs';
import Results from 'components/views/results';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '-8px',
        backgroundColor: palette.primary.light,
    },
  }));

const AdminApp = () => {
    const history = createBrowserHistory();
    return (
        <Router history={history}>
            <AppProvider>
                <Switch>
                    <Route exact path="/admin/cards" component={CompetitionCardsPage} />
                    <Route exact path="/admin/users" component={UserPage} />
                    <Route exact path="/admin/participants" component={ParticipationInputs} />
                    <Route exact path="/admin/results" component={Results} />
                </Switch>
            </AppProvider>
        </Router>
    )
}

const AppProvider = ({ children }) => {
    const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
            <Layout>
                <div className={classes.root}>
                    <div>{children}</div>
                </div>
            </Layout>
        </ThemeProvider>
    )
}

export default AdminApp;