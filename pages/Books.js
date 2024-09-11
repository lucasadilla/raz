// pages/Books.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Books = () => {
    return (
        <div>
            <Navbar/>
            <main className="main-content">
                <div className="book-item">
                    <img className="book-image-bordered" src="/images/logos/3D cover.png" alt="The Suggestible Brain"/>
                    <div className="book-text">
                        <p className="book-description">The Suggestible Brain: The Science and Magic of How We Make Up
                            Our Minds</p>
                        <p className="book-additional-text">Suggestions will move you whether or not you notice or
                            believe them. By learning about the art and science of suggestion, you can empower and
                            protect yourself, change your reality, boost your immunity, alter your physiology, help
                            others, and create social impact.</p>
                        <p className="book-buy-link">Available for purchase at:</p>
                        <p className="book-buy-image"><a href="https://www.amazon.com/Suggestible-Brain-Science-Magic-Minds-ebook/dp/B0CV431V8X"><img src="/images/books/logos/amazon.png"
                                                                       alt="Buy Now"/></a></p>
                        <p className="book-buy-image"><a href="https://www.hachettebookgroup.com/titles/amir-raz-phd/the-suggestible-brain/9780306833434/?lens=hachette-go"><img src="/images/books/logos/hachette.png"
                                                                       alt="Buy Now"/></a></p>
                        <p className="book-buy-image"><a href="https://www.hachettespeakersbureau.com/titles/amir-raz-phd/the-suggestible-brain/9781668644799/"><img src="/images/books/logos/hachette-audio.png"
                                                                       alt="Buy Now"/></a></p>
                    </div>
                </div>
                <div className="book-item">
                    <img className="book-image-bordered" src="/images/books/casting-light-dark-side-imaging.png" alt="Casting Light on the Dark Side of Imaging"/>
                    <div className="book-text">
                        <p className="book-description">Casting Light on the Dark Side of Brain Imaging</p>
                        <p className="book-additional-text">Most people find colorful brain scans highly compelling—and yet, many experts don’t. This discrepancy begs the question: What can we learn from neuroimaging? Is brain information useful in fields such as psychiatry, law, or education? How do neuroscientists create brain activation maps and why do we admire them? Casting Light on The Dark Side of Brain Imaging tackles these questions through a critical and constructive lens—separating fruitful science from misleading neuro-babble.</p>
                        <p className="book-buy-link"><a href="https://books.google.ca/books/about/Casting_Light_on_the_Dark_Side_of_Brain.html?id=JlSIDwAAQBAJ&printsec=frontcover&source=kp_read_button&redir_esc=y#v=onepage&q&f=false">Buy the book</a></p>
                    </div>
                </div>
                <div className="book-item">
                    <img className="book-image-bordered" src="/images/books/how-not-to-train-your-brain.png" alt="How Not to Train Your Brain"/>
                    <div className="book-text">
                        <p className="book-description">How (not) to train the brain</p>
                        <p className="book-additional-text">How (not) to Train the Brain examines the field of cognitive fitness and scrutinizes the scientific evidence in support of brain training techniques. With the potential to affect millions this topic is important for scientists, practitioners, educators, and the general public. While many a consumer often marvels at this highly commercialized field, discerning fact from fad becomes a challenge given the abundance of products, publications, and contexts.</p>
                        <p className="book-buy-link"><a href="https://global.oup.com/academic/product/how-not-to-train-the-brain-9780198789673?cc=us&lang=en&">Buy the book</a></p>
                    </div>
                </div>
                <div className="book-item">
                    <img className="book-image-bordered" src="/images/books/hypnosis-and-meditation.jpeg" alt="Hypnosis and Meditation"/>
                    <div className="book-text">
                        <p className="book-description">Hypnosis and Meditation</p>
                        <p className="book-additional-text">Research over the past decade has helped to demystify hypnosis and meditation, bringing these practices into the scientific and clinical mainstream. Hypnosis and Meditation is a valuable resource to both specialists as well as interested lay readers, and paves the road to a more unified science of how attention influences states of brain, body, and consciousness.</p>
                        <p className="book-buy-link"><a href="https://global.oup.com/academic/product/hypnosis-and-meditation-9780198759102?cc=ca&lang=en">Buy the book</a></p>
                    </div>
                </div>
                <div className="book-item">
                    <img className="book-image-bordered" src="/images/books/placebo-talks.jpeg" alt="Placebo Talks"/>
                    <div className="book-text">
                        <p className="book-description">Placebo Talks</p>
                        <p className="book-additional-text">Why do red placebos stimulate whereas blue placebos calm? Why do more placebos work better than few? And why do more expensive placebos work better than cheaper ones? These are some of the key questions that often come to mind when we consider the slippery and counterintuitive field of placebo science. Placebo Talks invites readers to discover how placebos may speak to their own experiences across health, society, sustenance, and related aspects of contemporary life.</p>
                        <p className="book-buy-link"><a href="https://global.oup.com/academic/product/placebo-talks-9780199680702?cc=ca&lang=en">Buy the book</a></p>
                    </div>
                </div>
                <div className="book-item">
                    <img className="book-image-bordered" src="/images/books/psychology-of-magic.png" alt="The Psychology of Magic and The Magic of Psychology"/>
                    <div className="book-text">
                        <p className="book-description">The Psychology of Magic and The Magic of Psychology</p>
                        <p className="book-additional-text">Magicians have dazzled audiences for many centuries; however, few researchers have studied how, let alone why, most tricks work. The psychology of magic is a nascent field of research that examines the underlying mechanisms that conjurers use to achieve enchanting phenomena, including sensory illusions, misdirection of attention, and the appearance of mind-control and nuanced persuasion.</p>
                        <p className="book-buy-link"><a href="https://www.frontiersin.org/research-topics/2464/the-psychology-of-magic-and-the-magic-of-psychology">Read the book</a></p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Books;