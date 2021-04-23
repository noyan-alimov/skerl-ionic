import React from 'react'
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonSpinner, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useCreateQuizMutation, useTeacherQuery } from '../generated/graphql';
import QuizComponent from '../components/Quiz';

interface QuizzesProps {
    userId: number | undefined
}

const Quizzes = (props: QuizzesProps) => {
    const { userId } = props

    const [name, setName] = React.useState<string>('')

    const { loading, error, data, refetch } = useTeacherQuery({ variables: { id: userId! }, fetchPolicy: 'no-cache' })
    const [createQuiz] = useCreateQuizMutation()

    const onAddQuiz = async () => {
        const input = { teacherId: userId!, name }
        await createQuiz({ variables: { input } })
        await refetch()
        setName('')
    }


    if (loading) {
        return <IonSpinner />
    }

    if (error) {
        return <IonText>Error loading quizzes: {error.message}</IonText>
    }

    if (data) {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{data.teacher.name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonList>
                        {data.teacher.quizzes.map(quiz => (
                            <QuizComponent key={quiz.id} quiz={quiz} refetch={refetch} />
                        ))}
                    </IonList>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
                        <IonItem>
                            <IonInput value={name} onIonChange={e => setName(e.detail.value!)} placeholder='Name' />
                        </IonItem>
                        <div style={{ marginTop: '25px' }}>
                            <IonButton onClick={onAddQuiz}>Add Quiz</IonButton>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        )
    }

    return <IonSpinner />
}

export default Quizzes