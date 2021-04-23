import { ApolloQueryResult } from '@apollo/client/core/types';
import { IonItem, IonLabel, IonIcon, IonModal, IonInput, IonButton } from '@ionic/react';
import { createOutline, trashOutline } from 'ionicons/icons';
import React from 'react'
import { Exact, Quiz, TeacherQuery, useDeleteQuizMutation, useUpdateQuizMutation } from '../generated/graphql';

interface QuizComponentProps {
    quiz: Quiz
    refetch: (variables?: Partial<Exact<{
        id: number;
    }>> | undefined) => Promise<ApolloQueryResult<TeacherQuery>>
}

const QuizComponent = (props: QuizComponentProps) => {
    const { quiz, refetch } = props

    const [updateQuiz] = useUpdateQuizMutation()
    const [deleteQuiz] = useDeleteQuizMutation()

    const [name, setName] = React.useState<string>('')
    const [showModal, setShowModal] = React.useState<boolean>(false)

    const onEditQuiz = async () => {
        await updateQuiz({ variables: { id: quiz.id, name } })
        await refetch()
        setShowModal(false)
    }

    const onDeleteQuiz = async () => {
        await deleteQuiz({ variables: { id: quiz.id } })
        await refetch()
        setShowModal(false)
    }

    return (
        <IonItem key={quiz.id}>
            <IonLabel>{quiz.name}</IonLabel>
            <IonIcon onClick={() => setShowModal(true)} icon={createOutline} />
            <IonModal isOpen={showModal}>
                <h1 style={{ textAlign: 'center' }}>Edit Quiz</h1>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
                    <IonItem>
                        <IonInput value={name} onIonChange={e => setName(e.detail.value!)} placeholder='Name' />
                    </IonItem>
                    <div style={{ marginTop: '25px' }}>
                        <IonButton onClick={onEditQuiz}>Edit Quiz</IonButton>
                    </div>
                </div>
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
            </IonModal>
            <IonIcon onClick={onDeleteQuiz} icon={trashOutline} />
        </IonItem>
    );
}

export default QuizComponent