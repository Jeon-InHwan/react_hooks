import { 
    BrowserRouter as Router
    , Switch
    , Route 
  } from "react-router-dom"
import UseAxios from "./UseAxios";
import UseBeforeLeave from "./UseBeforeLeave";
import UseClick from "./UseClick";
import UseConfirm from "./UseConfirm";
import UseFadeIn from "./UseFadeIn";
import UseFullscreen from "./UseFullscreen";
import UseHover from "./UseHover";
import UseNetwork from "./UseNetwork";
import UseNotification from "./UseNotification";
import UsePreventLeave from "./UsePreventLeave";
import UseRef from "./UseRef";
import UseScroll from "./UseScroll";



function App2() {

    return (
        <Router>
          <Switch>
            <Route path="/UseBeforeLeave">
              <UseBeforeLeave />
            </Route>
            <Route path="/UseClick">
              <UseClick />
            </Route>
            <Route path="/UseConfirm">
              <UseConfirm />
            </Route>
            <Route path="/UseFadeIn">
              <UseFadeIn />
            </Route>
            <Route path="/UseHover">
              <UseHover />
            </Route>
            <Route path="/UseNetwork">
              <UseNetwork />
            </Route>
            <Route path="/UsePreventLeave">
              <UsePreventLeave />
            </Route>
            <Route path="/UseRef">
              <UseRef />
            </Route>
            <Route path="/UseScroll">
              <UseScroll />
            </Route>
            <Route path="/UseFullscreen">
              <UseFullscreen />
            </Route>
            <Route path="/UseNotification">
              <UseNotification />
            </Route>
            <Route path="/UseAxios">
              <UseAxios />
            </Route>
          </Switch>
        </Router>
      );
      
}
    
export default App2;