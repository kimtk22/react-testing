const CounterTwo = ({ count, incrementHandle, decrementHandle }) => {
  return (
    <>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {incrementHandle && <button onClick={incrementHandle}>Increment</button>}
      {decrementHandle && <button onClick={decrementHandle}>Decrement</button>}
    </>
  );
};

export default CounterTwo;
