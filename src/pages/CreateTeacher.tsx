import React from 'react'
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useCreateTeacherMutation } from '../generated/graphql';
import { Redirect } from 'react-router-dom';

const CreateTeacher: React.FC = () => {
    const [name, setName] = React.useState<string>('')

    const [createTeacher, { data }] = useCreateTeacherMutation()

    const onClick = (e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => {
        e.preventDefault()

        createTeacher({ variables: { name } })
        console.log(data?.createTeacher.name)
    }

    if (data) {
        <Redirect to='/quizzes' />
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Create Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Create Account</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonInput
                        value={name}
                        onIonChange={e => setName(e.detail.value!)}
                        placeholder='Name'>
                    </IonInput>
                </IonItem>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
                    <IonButton color='primary' onClick={onClick}>Create</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default CreateTeacher