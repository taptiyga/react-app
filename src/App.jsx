import './App.css'
import CardButton from './components/CardButton/CardButton'
import Header from './components/Header/Header'
import JournalItem from './components/JournalItem/JournalItem'
import Body from './layouts/Body/Body'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'

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
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
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
        </JournalList>
      </LeftPanel>
      <Body>
        BODY
      </Body>
    </div>
  )
}

export default App
