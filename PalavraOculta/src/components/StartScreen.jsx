import './StartScreen.css';

const StartScreen = ({ startGame }) => {
  return (
    <div className='start'>
      <div className="logo">
        <h1>Palavra</h1>
        <h1>Ocu<span>l</span>ta</h1>
      </div>

      <button onClick={startGame}>Play</button>
    </div>
  );
};

export default StartScreen;