import './App.css'
import CardButton from './components/CardButton/CardButton'
import Header from './components/Header/Header'
import JournalItem from './components/JournalItem/JournalItem'
import Body from './layouts/Body/Body'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import { useState } from 'react'

const INITIAL_DATA = [
  {
    id: 1,
    title: 'Запись №1',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit, laudantium commodi est id beatae quo error, esse, libero voluptate accusantium voluptas nulla non velit nobis mollitia fuga sint magnam.',
    date: new Date()
  },
  {
    id: 2,
    title: 'Запись №2',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit',
    date: new Date()
  },
]

function App() {
  const [items, setItems] = useState(INITIAL_DATA)

  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: Math.max(...oldItems.map(i => i.id)) + 1
    }])
  }

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {items.sort(sortItems).map(el => (
            <CardButton key={el.id}>
              <JournalItem
                title={el.title}
                text={el.text}
                date={el.date}
              />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  )
}

export default App
