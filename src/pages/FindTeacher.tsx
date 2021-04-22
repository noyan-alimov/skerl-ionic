import React from 'react'
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonSpinner, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useTeacherByNameLazyQuery } from '../generated/graphql';
import { Redirect } from 'react-router-dom';

const FindTeacher: React.FC = () => {
    const [name, setName] = React.useState<string>('')

    const [getTeacher, { loading, error, data }] = useTeacherByNameLazyQuery()

    const onClick = (e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => {
        e.preventDefault()

        getTeacher({ variables: { name } })
        console.log(data)
    }

    if (loading) {
        return <IonSpinner />
    }

    if (data) {
        <Redirect to='/quizzes' />
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Find Existing Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Find Existing Account</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonInput
                        value={name}
                        onIonChange={e => setName(e.detail.value!)}
                        placeholder='Name'
                    >
                    </IonInput>
                </IonItem>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
                    <IonButton onClick={onClick} color='primary'>Find</IonButton>
                </div>
                {error && (
                    <IonItem>
                        <IonText>Error finding your account</IonText>
                    </IonItem>
                )}
            </IonContent>
        </IonPage>
    );
}

export default FindTeacher