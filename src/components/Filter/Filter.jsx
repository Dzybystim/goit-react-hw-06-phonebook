

export default function Filter({title, titleInput}) {
    return <section>
    <h1>{title}</h1>
    <label> {titleInput}
        <input type='text'/>
    </label>
    </section>
}