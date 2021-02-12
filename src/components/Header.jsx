import Input from './Input'


// const onSubmitSearch = (task) => {
//     console.log("On click", task);
// }

const Header = ({ onSearch }) => {
    return (
        <div>
            <h1>Search for Gifs by a word or a phrase</h1>
            <Input onSearch={onSearch}/>
        </div>
    )
}

export default Header
 