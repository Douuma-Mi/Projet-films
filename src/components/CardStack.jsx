import React, { useEffect, useRef } from 'react';
import "./CardStack.css"
import { Link } from 'react-router-dom';
function CardStack() {
  const stackRef = useRef(null);

  useEffect(() => {
    const stack = stackRef.current;
    const cards = Array.from(stack.children)
      .reverse()
      .filter((child) => child.classList.contains('card'));

    cards.forEach((card) => stack.appendChild(card));

    function moveCard() {
      const lastCard = stack.lastElementChild;
      if (lastCard.classList.contains('card')) {
        lastCard.classList.add('swap');

        setTimeout(() => {
          lastCard.classList.remove('swap');
          stack.insertBefore(lastCard, stack.firstElementChild);
        }, 1200);
      }
    }

    const autoplayInterval = setInterval(moveCard, 4000);

    stack.addEventListener('click', function (e) {
      const card = e.target.closest('.card');
      if (card && card === stack.lastElementChild) {
        card.classList.add('swap');

        setTimeout(() => {
          card.classList.remove('swap');
          stack.insertBefore(card, stack.firstElementChild);
        }, 1200);
      }
    });

    return () => clearInterval(autoplayInterval); // Clean up interval on unmount
  }, []);

  return (
    <main>
      <div className="content">
        <h1>Afleem</h1>
        <p>
        Welcome to Afleem, where you'll find a world full of unique movies that will take you on new adventures. At Afleem, we offer a diverse selection of movies to suit all tastes, from thrillers to drama and comedy. If you're a movie buff or looking for an exceptional viewing experience, you've come to the right place. Enjoy every moment with our movies that will make every minute unforgettable.
        </p>
        <Link className="btn" to="/login">Register</Link>
      </div>

      <div className="stack" ref={stackRef}>
        <div className="card">
          <img
            src="https://media.senscritique.com/media/000018762557/300/the_dark_knight_le_chevalier_noir.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="https://fr.web.img2.acsta.net/img/f5/f2/f5f2447c4246e42eb3e69040605d7cf1.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1rtlbWPwTupm9HDKAh7lanEj9I_4ptBzrw&s"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/M/MV5BOGE2Mjg4YzEtOTBhMy00ZjI4LTk0NmYtMzUzMDljNTdjZjAyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="https://fr.web.img4.acsta.net/c_310_420/pictures/21/08/02/16/08/1706767.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="https://fr.web.img6.acsta.net/c_310_420/img/e8/6e/e86ef7d1219d05746cf6c363359d970b.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

export default CardStack;