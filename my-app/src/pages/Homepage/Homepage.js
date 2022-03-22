import React from "react";
import "./home.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="profile">
        <img src="sachin.jpeg" alt="Pic of Sachin" />
        <div>
          <h1>Sachin Tendulkar</h1>
          <h2>Indian Cricketer</h2>
          <h2>Personal Information</h2>
          <div className="parent">
            <h2>Born:</h2> <h3>24 April 1973 (age 48) Bombay, Maharashtra, India</h3>
          </div>
          <div className="parent">
            <h2>Nickname:</h2> <h3>Little Master, Master Blaster</h3>
          </div>
          <div className="parent">
            <h2>Height:</h2> <h3>5 ft 5 in (1.65 m)</h3>
          </div>
          <div className="parent">
            <h2>Batting:</h2> <h3>Right-Handed</h3>
          </div>
          <div className="parent">
            <h2>Bowling:</h2> <h3>Right-arm leg-break/off-break</h3>
          </div>
          <div className="parent">
            <h2>National side:</h2> <h3>India (1989–2013)</h3>
          </div>
          <div className="parent">
            <h2>Test Debut:</h2> <h3>15 November 1989 v Pakistan</h3>
          </div>
          <div className="parent">
            <h2>ODI Debut:</h2> <h3>18 December 1989 v Pakistan</h3>
          </div>
          <div className="parent">
            <h2>Career Teams:</h2> <h3>India, Asia XI, Mumbai, Mumbai Indians,
            Marylebone Cricket Club, Sachin Blasters, India Legends</h3>
          </div>
        </div>
      </div>
      <p>
        Sachin Ramesh Tendulkar, born 24 April 1973 is an Indian former
        international cricketer who captained the Indian national team. He is
        regarded as one of the greatest batsmen in the history of cricket. He is
        the highest run scorer of all time in international cricket, and the
        only player to have scored one hundred international centuries, the
        first batsman to score a double century in a One Day International
        (ODI), the holder of the record for the most runs in both Test and ODI
        cricket, and as of 2021 the only player to score more than 30,000 runs
        in international cricket. He was the only Indian cricketer included in
        an all-time Test World XI compiled in 2013 to mark the 150th anniversary
        of Wisden Cricketers' Almanack. He is affectionately known as "Little
        Master" or "Master Blaster".
      </p>
      <p>
        {" "}
        Tendulkar received the Arjuna Award in 1994 for his outstanding sporting
        achievements, the Khel Ratna Award, India's highest sporting honour, in
        1997, and the Padma Shri and Padma Vibhushan awards in 1999 and 2008,
        respectively, two of India's highest civilian awards. A few hours after
        the end of his last match in November 2013, the Prime Minister's Office
        announced the decision to award him the Bharat Ratna, India's highest
        civilian award. As of 2021, he is the youngest recipient to date and was
        the first sportsperson to receive the award. In 2012, Tendulkar was
        nominated to the Rajya Sabha, the upper house of the Parliament of
        India. In 2010, Time magazine included Tendulkar in its annual Time 100
        list as one of the most influential people in the world. Tendulkar was
        awarded the Sir Garfield Sobers Trophy for cricketer of the year at the
        2010 ICC Awards. Having retired from ODI cricket in 2012, he retired
        from all forms of cricket in November 2013 after playing his 200th Test
        match. Tendulkar played 664 international cricket matches in total,
        scoring 34,357 runs. In 2019 he was inducted into the ICC Cricket Hall
        of Fame.
      </p>
    </div>
  );
};

export default HomePage;
