
// Створити функцію, яка робить запити на апі та віддає результат свого запиту.
//     Тип відповіді визначається дженеріком функції.
//
//     Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт з якого чекаємо відповідь
//


async function foobar<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json() as Promise<T>;
}
//////////////////////////////////////////////////////////
interface User {
    id: number;
    name: string;
    email: string;
}

foobar<User[]>('https://jsonplaceholder.typicode.com/users')
    .then(users => console.log(users))
    .catch(error => console.error("Error:", error));