function MainSection () {
    return (
        <main className='body-content'>
            <div className='body-content1'>
                <h1>Your feet deserve the best</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btn-group">
                    <button className="shopping-btn">Shop now</button>
                    <button className="category-btn">Category</button>
                </div>
                <div className="shopping-section">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src='public/images/flipkart.png' alt='flipkart link'></img>
                        <img src="public/images/amazon.png" alt="amazon link" />
                    </div>
                </div>
            </div>
            <div className='body-content2'>
                <img src="/images/shoe_image.png" alt="shoe image" />
            </div>
        </main>
    );
}

export default MainSection;