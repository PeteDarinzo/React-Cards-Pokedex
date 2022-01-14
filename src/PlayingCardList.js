import React from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";
import { v4 as uuid } from "uuid";

const baseUrl = "https://deckofcardsapi.com/api/deck/new/draw/";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {

  const [cards, addCard, clearCards] = useAxios({ url: baseUrl, formatter: (data) => ({ image: data.cards[0].image, id: uuid() }) });

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button
          // @ts-ignore
          onClick={() => addCard()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
      <div>
        <button onClick={clearCards}>Remove cards</button>
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
