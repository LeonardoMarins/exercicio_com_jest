import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test("deve fazer a inserção de 2 comentarios", () => {
        render(<PostComment/>);
        const comentario = screen.getByTestId('coment-post') as HTMLInputElement;// document igual do javascript
        fireEvent.change(comentario,{ target: { value: 'Testando primeiro comentário' } });
        expect(comentario.value).toBe('Testando primeiro comentário');
        fireEvent.change(comentario,{ target: { value: 'Testando segundo comentário' } });
        expect(comentario.value).toBe('Testando segundo comentário');

    })
});