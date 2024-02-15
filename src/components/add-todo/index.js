import sytles from "./index.css";

function AddTodo() {
    return (
        <section className={sytles.addTodo}>
            <input placeholder="Start typing"/>
            <button>Create</button>

        </section>
    );
}

export default AddTodo;