import "./Form.scss";
function Form() {
    return (
        <form>
            <div className="form-group">
                <label>Input 1</label>
                <input
                    placeholder="Extend input"
                    className="form-input"
                    type="text"
                />
            </div>
            <div className="form-group">
                <label>Input 2</label>
                <input
                    placeholder="Extend input custom"
                    className="form-input custom"
                    type="text"
                />
            </div>
        </form>
    );
}

export default Form;
