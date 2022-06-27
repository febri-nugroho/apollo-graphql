import { useMutation } from "@apollo/client"
import { POST_SUBSCRIBE } from "./schema"

const InputSubscribe = () => {
    let input

    const [addToDo, {data, loading, error}] = useMutation(POST_SUBSCRIBE)
    if (loading) return 'Submitting...';
    if (error) return `Submission Error! ${error.message}`;
    console.log(data)

    return (
        <div>
            <h2>Input Subscribe</h2>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    addToDo({
                        variables: {
                            email: input.value
                        }
                    })
                    input.value = ''
                    // console.log(data)
                }}
            >
                <input 
                    ref={ node => {
                        input = node
                    }} placeholder="Email"
                />
                <button type="submit">Add TODO</button>
            </form>
        </div>
    )
}

export default InputSubscribe