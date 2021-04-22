import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['Float'];
  answer: Scalars['String'];
  isCorrect: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTeacher: Teacher;
  updateTeacher: Teacher;
  deleteTeacher: Scalars['Boolean'];
  createQuiz: Quiz;
  updateQuiz: Quiz;
  deleteQuiz: Scalars['Boolean'];
};


export type MutationCreateTeacherArgs = {
  name: Scalars['String'];
};


export type MutationUpdateTeacherArgs = {
  name: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteTeacherArgs = {
  id: Scalars['Int'];
};


export type MutationCreateQuizArgs = {
  input: QuizInput;
};


export type MutationUpdateQuizArgs = {
  name: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteQuizArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  teachers: Array<Teacher>;
  teacher: Teacher;
  teacherByName: Teacher;
  quizzes: Array<Quiz>;
  quiz: Quiz;
};


export type QueryTeacherArgs = {
  id: Scalars['Int'];
};


export type QueryTeacherByNameArgs = {
  name: Scalars['String'];
};


export type QueryQuizArgs = {
  id: Scalars['Int'];
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['Float'];
  question: Scalars['String'];
  answers: Array<Answer>;
};

export type Quiz = {
  __typename?: 'Quiz';
  id: Scalars['Float'];
  name: Scalars['String'];
  questions: Array<Question>;
};

export type QuizInput = {
  teacherId: Scalars['Float'];
  name: Scalars['String'];
};

export type Teacher = {
  __typename?: 'Teacher';
  id: Scalars['Float'];
  name: Scalars['String'];
  quizzes: Array<Quiz>;
};

export type CreateQuizMutationVariables = Exact<{
  input: QuizInput;
}>;


export type CreateQuizMutation = (
  { __typename?: 'Mutation' }
  & { createQuiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id' | 'name'>
  ) }
);

export type CreateTeacherMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateTeacherMutation = (
  { __typename?: 'Mutation' }
  & { createTeacher: (
    { __typename?: 'Teacher' }
    & Pick<Teacher, 'id' | 'name'>
  ) }
);

export type DeleteQuizMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteQuizMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteQuiz'>
);

export type UpdateQuizMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
}>;


export type UpdateQuizMutation = (
  { __typename?: 'Mutation' }
  & { updateQuiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id' | 'name'>
  ) }
);

export type UpdateTeacherMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
}>;


export type UpdateTeacherMutation = (
  { __typename?: 'Mutation' }
  & { updateTeacher: (
    { __typename?: 'Teacher' }
    & Pick<Teacher, 'id' | 'name'>
  ) }
);

export type TeacherQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type TeacherQuery = (
  { __typename?: 'Query' }
  & { teacher: (
    { __typename?: 'Teacher' }
    & Pick<Teacher, 'id' | 'name'>
    & { quizzes: Array<(
      { __typename?: 'Quiz' }
      & Pick<Quiz, 'id' | 'name'>
    )> }
  ) }
);

export type TeacherByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type TeacherByNameQuery = (
  { __typename?: 'Query' }
  & { teacherByName: (
    { __typename?: 'Teacher' }
    & Pick<Teacher, 'id' | 'name'>
    & { quizzes: Array<(
      { __typename?: 'Quiz' }
      & Pick<Quiz, 'id' | 'name'>
    )> }
  ) }
);

export type TeachersQueryVariables = Exact<{ [key: string]: never; }>;


export type TeachersQuery = (
  { __typename?: 'Query' }
  & { teachers: Array<(
    { __typename?: 'Teacher' }
    & Pick<Teacher, 'id' | 'name'>
  )> }
);


export const CreateQuizDocument = gql`
    mutation CreateQuiz($input: QuizInput!) {
  createQuiz(input: $input) {
    id
    name
  }
}
    `;
export type CreateQuizMutationFn = Apollo.MutationFunction<CreateQuizMutation, CreateQuizMutationVariables>;

/**
 * __useCreateQuizMutation__
 *
 * To run a mutation, you first call `useCreateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuizMutation, { data, loading, error }] = useCreateQuizMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateQuizMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuizMutation, CreateQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuizMutation, CreateQuizMutationVariables>(CreateQuizDocument, options);
      }
export type CreateQuizMutationHookResult = ReturnType<typeof useCreateQuizMutation>;
export type CreateQuizMutationResult = Apollo.MutationResult<CreateQuizMutation>;
export type CreateQuizMutationOptions = Apollo.BaseMutationOptions<CreateQuizMutation, CreateQuizMutationVariables>;
export const CreateTeacherDocument = gql`
    mutation CreateTeacher($name: String!) {
  createTeacher(name: $name) {
    id
    name
  }
}
    `;
export type CreateTeacherMutationFn = Apollo.MutationFunction<CreateTeacherMutation, CreateTeacherMutationVariables>;

/**
 * __useCreateTeacherMutation__
 *
 * To run a mutation, you first call `useCreateTeacherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeacherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeacherMutation, { data, loading, error }] = useCreateTeacherMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateTeacherMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeacherMutation, CreateTeacherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeacherMutation, CreateTeacherMutationVariables>(CreateTeacherDocument, options);
      }
export type CreateTeacherMutationHookResult = ReturnType<typeof useCreateTeacherMutation>;
export type CreateTeacherMutationResult = Apollo.MutationResult<CreateTeacherMutation>;
export type CreateTeacherMutationOptions = Apollo.BaseMutationOptions<CreateTeacherMutation, CreateTeacherMutationVariables>;
export const DeleteQuizDocument = gql`
    mutation DeleteQuiz($id: Int!) {
  deleteQuiz(id: $id)
}
    `;
export type DeleteQuizMutationFn = Apollo.MutationFunction<DeleteQuizMutation, DeleteQuizMutationVariables>;

/**
 * __useDeleteQuizMutation__
 *
 * To run a mutation, you first call `useDeleteQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuizMutation, { data, loading, error }] = useDeleteQuizMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuizMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuizMutation, DeleteQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuizMutation, DeleteQuizMutationVariables>(DeleteQuizDocument, options);
      }
export type DeleteQuizMutationHookResult = ReturnType<typeof useDeleteQuizMutation>;
export type DeleteQuizMutationResult = Apollo.MutationResult<DeleteQuizMutation>;
export type DeleteQuizMutationOptions = Apollo.BaseMutationOptions<DeleteQuizMutation, DeleteQuizMutationVariables>;
export const UpdateQuizDocument = gql`
    mutation UpdateQuiz($id: Int!, $name: String!) {
  updateQuiz(id: $id, name: $name) {
    id
    name
  }
}
    `;
export type UpdateQuizMutationFn = Apollo.MutationFunction<UpdateQuizMutation, UpdateQuizMutationVariables>;

/**
 * __useUpdateQuizMutation__
 *
 * To run a mutation, you first call `useUpdateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizMutation, { data, loading, error }] = useUpdateQuizMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateQuizMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuizMutation, UpdateQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuizMutation, UpdateQuizMutationVariables>(UpdateQuizDocument, options);
      }
export type UpdateQuizMutationHookResult = ReturnType<typeof useUpdateQuizMutation>;
export type UpdateQuizMutationResult = Apollo.MutationResult<UpdateQuizMutation>;
export type UpdateQuizMutationOptions = Apollo.BaseMutationOptions<UpdateQuizMutation, UpdateQuizMutationVariables>;
export const UpdateTeacherDocument = gql`
    mutation UpdateTeacher($id: Int!, $name: String!) {
  updateTeacher(id: $id, name: $name) {
    id
    name
  }
}
    `;
export type UpdateTeacherMutationFn = Apollo.MutationFunction<UpdateTeacherMutation, UpdateTeacherMutationVariables>;

/**
 * __useUpdateTeacherMutation__
 *
 * To run a mutation, you first call `useUpdateTeacherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTeacherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTeacherMutation, { data, loading, error }] = useUpdateTeacherMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateTeacherMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTeacherMutation, UpdateTeacherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTeacherMutation, UpdateTeacherMutationVariables>(UpdateTeacherDocument, options);
      }
export type UpdateTeacherMutationHookResult = ReturnType<typeof useUpdateTeacherMutation>;
export type UpdateTeacherMutationResult = Apollo.MutationResult<UpdateTeacherMutation>;
export type UpdateTeacherMutationOptions = Apollo.BaseMutationOptions<UpdateTeacherMutation, UpdateTeacherMutationVariables>;
export const TeacherDocument = gql`
    query Teacher($id: Int!) {
  teacher(id: $id) {
    id
    name
    quizzes {
      id
      name
    }
  }
}
    `;

/**
 * __useTeacherQuery__
 *
 * To run a query within a React component, call `useTeacherQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeacherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeacherQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTeacherQuery(baseOptions: Apollo.QueryHookOptions<TeacherQuery, TeacherQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeacherQuery, TeacherQueryVariables>(TeacherDocument, options);
      }
export function useTeacherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeacherQuery, TeacherQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeacherQuery, TeacherQueryVariables>(TeacherDocument, options);
        }
export type TeacherQueryHookResult = ReturnType<typeof useTeacherQuery>;
export type TeacherLazyQueryHookResult = ReturnType<typeof useTeacherLazyQuery>;
export type TeacherQueryResult = Apollo.QueryResult<TeacherQuery, TeacherQueryVariables>;
export const TeacherByNameDocument = gql`
    query TeacherByName($name: String!) {
  teacherByName(name: $name) {
    id
    name
    quizzes {
      id
      name
    }
  }
}
    `;

/**
 * __useTeacherByNameQuery__
 *
 * To run a query within a React component, call `useTeacherByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeacherByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeacherByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useTeacherByNameQuery(baseOptions: Apollo.QueryHookOptions<TeacherByNameQuery, TeacherByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeacherByNameQuery, TeacherByNameQueryVariables>(TeacherByNameDocument, options);
      }
export function useTeacherByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeacherByNameQuery, TeacherByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeacherByNameQuery, TeacherByNameQueryVariables>(TeacherByNameDocument, options);
        }
export type TeacherByNameQueryHookResult = ReturnType<typeof useTeacherByNameQuery>;
export type TeacherByNameLazyQueryHookResult = ReturnType<typeof useTeacherByNameLazyQuery>;
export type TeacherByNameQueryResult = Apollo.QueryResult<TeacherByNameQuery, TeacherByNameQueryVariables>;
export const TeachersDocument = gql`
    query Teachers {
  teachers {
    id
    name
  }
}
    `;

/**
 * __useTeachersQuery__
 *
 * To run a query within a React component, call `useTeachersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeachersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeachersQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeachersQuery(baseOptions?: Apollo.QueryHookOptions<TeachersQuery, TeachersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeachersQuery, TeachersQueryVariables>(TeachersDocument, options);
      }
export function useTeachersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeachersQuery, TeachersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeachersQuery, TeachersQueryVariables>(TeachersDocument, options);
        }
export type TeachersQueryHookResult = ReturnType<typeof useTeachersQuery>;
export type TeachersLazyQueryHookResult = ReturnType<typeof useTeachersLazyQuery>;
export type TeachersQueryResult = Apollo.QueryResult<TeachersQuery, TeachersQueryVariables>;