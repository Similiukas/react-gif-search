import { useState } from 'react'
import { Form, Button, FormGroup, Search} from 'carbon-components-react'

const Input = ({ onSearch }) => {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault(); // Prevents page refresh

        if (!text) {    // Search is empty
            alert("Please put a keyword");
            return;
        }
        else if (text.search(/[^\w\s]/g) != -1){    // Search contains non-word (or whitespace) characters
            console.log(text.search(/[^\w\s]/g), text.match(new RegExp('[^\w\s]')));
            alert("Please put only words or numbers");
            return;
        }
        onSearch({ text });

        setText("");    // Resets input text
    };

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup legendText="">
                <Search 
                    className="search-input"
                    labelText="Search gif"
                    placeHolderText="Please enter your search here :)"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

            </FormGroup>

            <Button type="submit">
                Begin the journey
            </Button>
        </Form>
    )
}

export default Input
