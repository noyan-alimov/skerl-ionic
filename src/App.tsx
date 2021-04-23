import React from 'react'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { informationCircle, personCircle } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import CreateTeacher from './pages/CreateTeacher';
import FindTeacher from './pages/FindTeacher';
import Quizzes from './pages/Quizzes';

const App: React.FC = () => {
  const [userId, setUserId] = React.useState<number | undefined>(undefined)

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/createTeacher">
              <CreateTeacher setUserId={setUserId} />
            </Route>
            <Route exact path="/findTeacher">
              <FindTeacher setUserId={setUserId} />
            </Route>
            <Route exact path="/quizzes">
              <Quizzes userId={userId} />
            </Route>
            <Route exact path="/">
              <Redirect to="/createTeacher" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="createTeacher" href="/createTeacher">
              <IonIcon icon={personCircle} />
              <IonLabel>Create Account</IonLabel>
            </IonTabButton>
            <IonTabButton tab="findTeacher" href="/findTeacher">
              <IonIcon icon={informationCircle} />
              <IonLabel>Find Existing Account</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

export default App;
