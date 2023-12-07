import portfolioItems from './PortfolioItems.js';

function Card(prop) {
    const portfolio = portfolioItems().map((project) =>
        <img class="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
    );

    return (
        <>
        {portfolio}
        </>
    );
}

/*function Card(props) {
    const { image, description } = props;
    return (
            <img class="image" alt={image} src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
    );
}*/

export default Card;