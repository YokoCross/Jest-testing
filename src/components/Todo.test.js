import React from 'react'
import { fireEvent, render, waitForElement } from '@testing-library/react'
import Todo from './Todo'

describe('Tests for Todo component', () => {
    it('Should add new task when form has been submitted', async () => {
        // rederizar componente
        const { getByTestId, getByText } = render(<Todo />)

        // buscar input
        const fieldNode = await waitForElement(
            () => getByTestId('form-field')
        )

        // digitar no input
        const newTask = 'testing'
        fireEvent.change(
            fieldNode,
            { target: { value: newTask } })
        expect(fieldNode.value).toEqual(newTask)

        // buscar botão
        const btnNode = await waitForElement(
            () => getByTestId('form-btn')
        )

        // clicar no botão
        fireEvent.click(btnNode)

        // verificar se a tarefa foi adicionada na tabela
        const tdNode = await waitForElement(
            () => getByText(newTask)
        )

        expect(tdNode).toBeDefined()
        
    })
})