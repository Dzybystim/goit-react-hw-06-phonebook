import { useDispatch } from "react-redux"
import { setStatusFilter } from "../../redux/filterSlice"

export default function Filter({title, titleInput}) {

    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(setStatusFilter(event.target.value))
    }

    return <section>
    <h1>{title}</h1>
    <label> {titleInput}
        <input type='text' onChange={handleChange} />
    </label>
    </section>
}