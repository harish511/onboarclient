import React from "react";
import {Switch,Route} from 'react-router'
import Loader from "../components/loader";
import Transactions from '../pages/transactionsList'
import TransactionDetails from '../pages/transactionDetails'


const Status = ({ code, children }) => (
  <Route
    render={function({ staticContext }) {
      if (staticContext) staticContext.status = code;
      return children;
    }}
  />
);

//NOT-FOUND COMPONENT
const NotFound = () => (
  <Status code={404}>
    <div className="error-404">
      <h1>Not found</h1>
    </div>
  </Status>
);

//Code spliting
const WaitingComponent = Component => {
  return props => (
    <React.Suspense fallback={<Loader />}>
      <Component {...props} />
    </React.Suspense>
  );
};


//Setup router
const Router = () => (
    <Switch>
    <Route exact path="/" component={WaitingComponent(Transactions)}/>
    <Route exact path="/transactions" component={WaitingComponent(Transactions)} />
    <Route exact path="/transactions/:accNo" component={WaitingComponent(TransactionDetails)}/>
    <Route component={NotFound}/>
  </Switch>
);

export default Router;
