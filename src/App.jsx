import './App.css'
import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import JournalItem from './components/JournalItem/JournalItem'

function App() {
  const data = [
    {
      title: 'Запись №1',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit, laudantium commodi est id beatae quo error, esse, libero voluptate accusantium voluptas nulla non velit nobis mollitia fuga sint magnam.',
      date: new Date()
    },
    {
      title: 'Запись №2',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit',
      date: new Date()
    },
  ]

  return (
    <>
      <h1>Заголовок</h1>
      <p>текст</p>
      <Button />
      <CardButton>
        <JournalItem
          title={data[0].title}
          text={data[0].text}
          date={data[0].date}
        />
      </CardButton>
      <CardButton>
        <JournalItem
          title={data[1].title}
          text={data[1].text}
          date={data[1].date}
        />
      </CardButton>

    </>
  )
}

export default App
