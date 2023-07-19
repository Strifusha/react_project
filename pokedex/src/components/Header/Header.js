import React, { useState, useEffect } from 'react';


function Header({ text }) {
 // Объявление переменной состояния, которую мы назовём "count"
 const [count, updateCount] = useState(0);

    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;

        return () => {
            console.log('@#@E@#E@')
        }

    }, [text]);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => {
        updateCount(count + 1)
      }}>
        Click
      </button>
    </div>
  );
}


export default Header;