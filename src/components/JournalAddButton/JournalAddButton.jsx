import './JournalAddButton.css'
import CardButton from '../CardButton/CardButton'

function JournalAddButton() {

    return (
        <CardButton className="journal-add">
            <img className='logo' src="folder.svg" alt="vite" />
            Новое сообщение
        </CardButton>
    )
}

export default JournalAddButton