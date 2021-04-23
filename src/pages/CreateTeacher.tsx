import React from 'react'
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useCreateTeacherMutation } from '../generated/graphql';

interface CreateTeacherProps {
    setUserId: (userId: number) => void
}

const CreateTeacher = (props: CreateTeacherProps) => {
    const { setUserId } = props

    const [name, setName] = React.useState<string>('')

    const [createTeacher, { data }] = useCreateTeacherMutation()

    const onClick = async () => {
        await createTeacher({ variables: { name } })
    }

    if (data) {
        setUserId(data.createTeacher.id)
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