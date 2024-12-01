import React, { useState } from 'react';
import * as styles from './Form.module.scss';

// Типы данных для полей
type TalkType = 'main-stage' | 'work-shop'; // Тип доклада
type TShirt = 'xs' | 's' | 'm' | 'l'; // Размер футболки

// Интерфейс для состояния данных
interface IData {
  name: string;
  email: string;
  ['talk-type']: TalkType;
  ['t-shirt']: TShirt;
  abstract: string;
}

function Form() {
  // Состояние для формы
  const [data, setData] = useState<IData>({
    name: '',
    email: '',
    'talk-type': 'work-shop',
    't-shirt': 'm',
    abstract: '',
  });

  // Состояние для сохранения дополнительной информации (опционально)
  const [info, setInfo] = useState<string | null>(null);

  // Обработчик изменения имени
  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));
  }

  // Обработчик изменения email
  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
  }

  // Обработчик отправки формы
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    setInfo('Форма успешно отправлена!');
    console.log(data); // Отправляем данные на сервер или в консоль
  }

  return (
    <>
      <header className='speaker-form-header'>
        <h1>Speaker Submission</h1>
        <p>
          <em>Want to speak at our fake conference? Fill out this form.</em>
        </p>
        {info && <p>{info}</p>}
      </header>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label htmlFor='name'>Name</label>
          <input
            onChange={handleChangeName} // Обработчик ввода имени
            value={data.name} // Привязываем к состоянию
            placeholder='Name'
            id='name'
            type='text'
          ></input>
        </div>

        <div className={styles.formRow}>
          <label htmlFor='email'>Email</label>
          <input
            onChange={handleChangeEmail} // Обработчик ввода email
            value={data.email} // Привязываем к состоянию
            id='email'
            type='email'
            placeholder='joe@example.ru'
          ></input>
        </div>

        <fieldset className={styles.legacyFormRow}>
          <legend>Type of Talk</legend>
          <input
            type='radio'
            id='talk-type-1'
            name='talk-type'
            value='main-stage'
            onChange={() =>
              setData((prevData) => ({
                ...prevData,
                'talk-type': 'main-stage',
              }))
            }
            checked={data['talk-type'] === 'main-stage'}
          ></input>
          <label htmlFor='talk-type-1'>Main Stage</label>

          <input
            type='radio'
            id='talk-type-2'
            name='talk-type'
            value='work-shop'
            onChange={() =>
              setData((prevData) => ({ ...prevData, 'talk-type': 'work-shop' }))
            }
            checked={data['talk-type'] === 'work-shop'}
          ></input>
          <label htmlFor='talk-type-2'>WorkShop</label>
        </fieldset>

        <div className={styles.formRow}>
          <label htmlFor='t-shirt'>T-Shirt</label>
          <select
            id='t-shirt'
            name='t-shirt'
            value={data['t-shirt']}
            onChange={(e) =>
              setData((prevData) => ({
                ...prevData,
                't-shirt': e.target.value as TShirt,
              }))
            }
          >
            <option value='xs'>Extra Small</option>
            <option value='s'>Small</option>
            <option value='m'>Medium</option>
            <option value='l'>Large</option>
          </select>
        </div>

        <div className={styles.formRow}>
          <label htmlFor='abstract'>Abstract</label>
          <textarea
            style={{ resize: 'none', height: '200px' }}
            id='abstract'
            name='abstract'
            value={data.abstract}
            onChange={(e) =>
              setData((prevData) => ({ ...prevData, abstract: e.target.value }))
            }
          ></textarea>
          <div className='instructions'>
            Describe your talk in 500 words or less
          </div>
        </div>
        <div className={styles.formRow}>
          <button type='submit'>Submit</button>
        </div>
      </form>
      {info && <div className='info'>{info}</div>}
      {data && <p>{JSON.stringify(data)}</p>}
    </>
  );
}

export default Form;
