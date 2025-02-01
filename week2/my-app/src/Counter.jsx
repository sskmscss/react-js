// Counter.jsx

export default function Counter(props) {
    const { onCounterChange } = props;

    const handleClick = (type) => {
        let newCount = props.count;
        if (type === 'increment') {
            newCount += 1;
        } else if (type === 'decrement') {
            newCount -= 1;
        }
        onCounterChange(newCount);
    };

    return (
        <div>
            <h1>Counter: {props.count}</h1>
            <button onClick={() => handleClick('increment')}>Increment</button>
            <button onClick={() => handleClick('decrement')}>Decrement</button>
        </div>
    );
};
