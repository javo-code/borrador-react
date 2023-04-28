import '../cartWidget/cartWidget.css';

function Contador({ numClics }) {
  
  return (
    <div className='contador'>
      {numClics}
    </div>
  );   
}

export default Contador;