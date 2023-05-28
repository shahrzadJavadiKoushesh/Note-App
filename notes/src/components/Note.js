import {MdDeleteForever} from 'react-icons/md'
const Note = () => {
    return(
        <div className="note">
            <span>Hello THis is my first note</span>
            <div className="note-footer">
                <small>1400/3/7</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>

        </div>
    )
}

export default Note