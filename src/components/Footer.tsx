const Footer = () => {
    return (
        <footer className="container flex flex-col justify-center md:w-[85%] mx-auto px-10 py-8 md:py-12 text-center gap-8">
            <div className="flex gap-4 justify-around">
                <button>About</button>
                <button>Buy</button>
                <button>Sell</button>
                <div className=" flex gap-4">
                <i className="fi fi-brands-twitter"></i>
                <i className="fi fi-brands-facebook"></i>
                </div>
            </div>
            <div className=" flex gap-4 justify-around">
                <button>Faq</button>
                <button>Help</button>
                <button>Contact</button>
                <i className="fi fi-brands-instagram"></i>
            </div>
            <div>
                <p>@2022 Codestam</p>
            </div>
        </footer>
    )
}

export default Footer