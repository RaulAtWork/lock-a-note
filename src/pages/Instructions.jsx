function Instructions() {
  return (
    <>
      <h2>Side Menu</h2>
      <p>
        Clicking on the left side menu will create a card on the canvas. <br />
        Cards can be collapsed, move around, edited and deleted. Notice that
        there are different types of cards, for different purposes. <br />
        <span className="secondary-text">
          Don't worry your cards and content will be saved automatically in your
          browser storage!
        </span>
      </p>
      <br />
      <ul className="bullet-list">
        <li>
          <span>
            <b>Card Text</b>: where you can input long texts.
          </span>
        </li>
        <li>
          <span>
            <b>Link Card</b>: put any link and click on the button. A quick
            preview of the link will be generated.
          </span>
        </li>
        <li>
          <span>
            <b>Check List Card</b>: create your own todo list and complete
            tasks.
          </span>
        </li>
      </ul>
      <br />
      <p> All Cards can be resized using the bottom-right corner.</p>

      <br />
      <h2>Canvas Use</h2>
      <p>
        The canvas can be moved around. There is a menu on the bottom right
        where you can adjust he zoom level or return to the starting position.
      </p>
    </>
  );
}

export default Instructions;
