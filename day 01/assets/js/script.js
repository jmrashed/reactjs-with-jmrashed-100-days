

const domContainer = document.querySelector("#root");

const Increment = () => {
    return (
        <div class="container">
            <h1  id="display">0</h1>
            <div>
                <button id="button" className="btn btn-primary" > + </button>
            </div>

        </div>
    );
};

ReactDOM.render(<Increment />, domContainer);
let number = 0;

button.addEventListener('click', () => {
    number++;
    display.textContent = number;
});