// pages/Media.js
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoEmbed from "../components/VideoEmbed";

const Media = () => {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        setMedia([
            {
                date: "October 8, 2022",
                content: `<a href="https://www.msch.us/education/2022-rosenthal-with-amir-raz/" target="_blank" rel="noreferrer noopener">Rosenthal with Amir Raz</a>`
            },
            {
                date: "December 15, 2021",
                content: `<a href="https://news.chapman.edu/2021/12/15/chapmans-brain-institute-applies-modern-tools-of-neuroscience-to-answer-age-old-questions-of-free-will/" target="_blank" rel="noreferrer noopener">Chapman's Brain Institute Applies Modern Tools of Neuroscience to Answer Age-Old Questions of Free Will</a>`
            },
            {
                date: "August 20, 2021",
                content: <VideoEmbed src="https://www.youtube.com/embed/vg540H9uHuA" title="YouTube Video" />
            },
            {
                date: "August 18, 2021",
                content: `<a href="https://www.listennotes.com/podcasts/finding-your-soul/brain-science-the-magic-and-cUv8T1WdQjp/" target="_blank" rel="noreferrer noopener">Finding Your Soul Podcast</a>`
            },
            {
                date: "July 10, 2021",
                content: `<a href="https://www.afarinesh.org/bbc-6-minute-2021-podcast-26/" target="_blank" rel="noreferrer noopener">BBC 6 Minute Podcast</a>`
            },
            {
                date: "October 15, 2020",
                content: `<a href="https://news.chapman.edu/2020/10/15/brain-institute-researcher-finds-that-difficult-becomes-easy-thanks-to-hypnotic-suggestion/" target="_blank" rel="noreferrer noopener">Brain Institute Researcher Finds That Difficult Becomes Easy Thanks to Hypnotic Suggestion</a>`
            },
            {
                date: "February 2020",
                content: `<a href="https://orangereview.com/article/267/amir-raz-phd" target="_blank" rel="noreferrer noopener">Amir Raz PhD</a>`
            },
            {
                date: "March 31, 2019",
                content: `<a href="https://www.ocbj.com/news/weekly-news/chapmans-brain-institute-gets-7m-funding/" target="_blank" rel="noreferrer noopener">Chapman's Brain Institute Gets $7M Funding</a>`
            },
            {
                date: "March 5, 2019",
                content: `<a href="https://news.chapman.edu/2019/03/05/brain-institute-receives-over-7-million-for-research-on-neurophilosophy-of-free-will/" target="_blank" rel="noreferrer noopener">Brain Institute Receives Over $7 Million for Research on Neurophilosophy of Free Will</a>`
            },
            {
                date: "June 8, 2018",
                content: `<a href="https://www.bbc.co.uk/programmes/p069jncp" target="_blank" rel="noreferrer noopener">BBC Program</a>`
            },
            {
                date: "April 30, 2018",
                content: `<a href="https://soundcloud.com/razlab/dr-amir-raz-discusses-placebos-on-cbc-radio" target="_blank" rel="noreferrer noopener">Dr. Amir Raz Discusses Placebos on CBC Radio</a>`
            },
            {
                date: "July 17-26, 2017",
                content: <VideoEmbed src="https://www.youtube.com/embed/3evqptjrGGs" title="YouTube Video" />
            },
            {
                date: "June 12, 2017",
                content: <VideoEmbed src="https://player.vimeo.com/video/221348961" title="Vimeo Video" />
            },
            {
                date: "May 3, 2017",
                content: `<a href="https://soundcloud.com/razlab/hypnosis" target="_blank" rel="noreferrer noopener">Hypnosis</a>`
            },
            {
                date: "June 26, 2017",
                content: `<a href="https://soundcloud.com/razlab/hypnosis-in-medicine-no-chickens-involved" target="_blank" rel="noreferrer noopener">Hypnosis in Medicine: No Chickens Involved</a>`
            },
            {
                date: "April 24, 2017",
                content: `<a href="https://soundcloud.com/razlab/cbc-radio-noon-hypnosis" target="_blank" rel="noreferrer noopener">CBC Radio Noon Hypnosis</a>`
            },
            {
                date: "April 24, 2017",
                content: `<a href="https://soundcloud.com/razlab/the-current-placebo-medication" target="_blank" rel="noreferrer noopener">The Current Placebo Medication</a>`
            },
            {
                date: "April 24, 2017",
                content: `<a href="https://soundcloud.com/razlab/please-explain-hypnosis" target="_blank" rel="noreferrer noopener">Please Explain Hypnosis</a>`
            },
            {
                date: "April 24, 2017",
                content: `<a href="https://soundcloud.com/razlab/cbc-am-dr-amir-raz-discusses" target="_blank" rel="noreferrer noopener">CBC AM Dr. Amir Raz Discusses</a>`
            },
            {
                date: "September 16, 2016",
                content: `<a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01358/full" target="_blank" rel="noreferrer noopener">Frontiers in Psychology Article</a>`
            },
            {
                date: "October 24, 2013",
                content: `<a href="https://www.mcgill.ca/brain/research-discovery/brain-stories/prescribing-magic" target="_blank" rel="noreferrer noopener">Prescribing Magic</a>`
            },
            {
                date: "October 24, 2013",
                content: <VideoEmbed src="https://player.vimeo.com/video/117024196?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="Vimeo Video" />
            },
            {
                date: "July 24, 2013",
                content: <VideoEmbed src="https://www.youtube.com/embed/vLAvoaln8oU" title="YouTube Video" />
            }
        ]);
    }, []);

    return (
        <div>
            <Navbar />
            <main className="main-content">
                {media.map((item, index) => (
                    <div key={index} className="media-item">
                        <p>{item.date}</p>
                        {typeof item.content === 'string' ? (
                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                        ) : (
                            item.content
                        )}
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default Media;