import React from 'react'
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonSpinner, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useTeacherByNameLazyQuery } from '../generated/graphql';

interface FindTeacherProps {
    setUserId: (userId: number) => void
}

const FindTeacher = (props: FindTeacherProps) => {
    const { setUserId } = props

    const [name, setName] = React.useState<string>('')

    const [getTeacher, { loading, error, data }] = useTeacherByNameLazyQuery()

    const onClick = () => {
        getTeacher({ variables: { name } })
    }

    if (loading) {
        return <IonSpinner />
    }

    if (data) {
        setUserId(data.teacherByName.id)
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
                        <IonText>Error finding your account: {error.message}</IonText>
                    </IonItem>
                )}
            </IonContent>
        </IonPage>
    );
}

export default FindTeacher