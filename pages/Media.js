import { useEffect, useState } from "react";
import VideoEmbed from "../components/VideoEmbed";
import SoundCloudEmbed from "../components/SoundCloudEmbed";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Media = () => {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        setMedia([
            {
                date: "October, 2022",
                url: "https://www.msch.us/education/2022-rosenthal-with-amir-raz/",
                title: "Rosenthal with Amir Raz",
                image: "/images/media/raz.jpg"
            },
            {
                date: "December, 2021",
                url: "https://news.chapman.edu/2021/12/15/chapmans-brain-institute-applies-modern-tools-of-neuroscience-to-answer-age-old-questions-of-free-will/",
                title: "Chapman's Brain Institute Applies Modern Tools of Neuroscience to Answer Age-Old Questions of Free Will",
                image: "/images/media/chapman.jpg"
            },
            {
                date: "August, 2021",
                content: <VideoEmbed src="https://www.youtube.com/embed/vg540H9uHuA" title="YouTube Video" />,
                title: "Finding Your Soul Podcast"
            },
            {
                date: "July, 2021",
                url: "https://www.afarinesh.org/bbc-6-minute-2021-podcast-26/",
                title: "BBC 6 Minute Podcast",
                image: "/images/media/bbc.jpg"
            },
            {
                date: "October, 2020",
                url: "https://news.chapman.edu/2020/10/15/brain-institute-researcher-finds-that-difficult-becomes-easy-thanks-to-hypnotic-suggestion/",
                title: "Brain Institute Researcher Finds That Difficult Becomes Easy Thanks to Hypnotic Suggestion",
                image: "/images/media/raz.jpg"
            },
            {
                date: "February, 2020",
                url: "https://orangereview.com/article/267/amir-raz-phd",
                title: "Amir Raz PhD",
                image: "/images/media/chapraz.png"
            },
            {
                date: "March, 2019",
                url: "https://news.chapman.edu/2019/03/05/brain-institute-receives-over-7-million-for-research-on-neurophilosophy-of-free-will/",
                title: "Brain Institute Receives Over $7 Million for Research on Neurophilosophy of Free Will",
                image: "/images/media/brain.jpg"
            },
            {
                date: "June, 2018",
                url: "https://www.bbc.co.uk/programmes/p069jncp",
                title: "BBC Program",
                image: "/images/media/clock.jpg"
            },
            {
                date: "April, 2018",
                content: <SoundCloudEmbed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/437289192&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="Dr. Amir Raz discusses Placebos on CBC Radio" />,
                title: "Dr. Amir Raz Discusses Placebos on CBC Radio"
            },
            {
                date: "July, 2017",
                content: <VideoEmbed src="https://www.youtube.com/embed/3evqptjrGGs" title="YouTube Video" />,
                title: "YouTube Video"
            },
            {
                date: "June, 2017",
                content: <VideoEmbed src="https://player.vimeo.com/video/221348961" title="Vimeo Video" />,
                title: "Vimeo Video"
            },
            {
                date: "June, 2017",
                content: <SoundCloudEmbed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330276021&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="Hypnosis in medicine: no chickens involved" />,
                title: "Hypnosis in Medicine: No Chickens Involved"
            },
            {
                date: "May, 2017",
                content: <SoundCloudEmbed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/320768877&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="Hypnosis" />,
                title: "Hypnosis"
            },
            {
                date: "April, 2017",
                content: <SoundCloudEmbed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319279259&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="CBC AM: Dr. Amir Raz discusses the therapeutic effects of Hypnosis." />,
                title: "CBC AM Dr. Amir Raz Discusses"
            },
            {
                date: "April, 2017",
                content: <SoundCloudEmbed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319279256&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="Please Explain: Hypnosis" />,
                title: "The Current Placebo Medication"
            },
            {
                date: "April, 2017",
                content: <SoundCloudEmbed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319279252&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="The Current: Placebo Medication" />,
                title: "Please Explain Hypnosis"
            },
            {
                date: "April, 2017",
                content: <SoundCloudEmbed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319279246&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="CBC RADIO NOON: Hypnosis" />,
                title: "CBC AM Dr. Amir Raz Discusses"
            },
            {
                date: "September, 2016",
                url: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01358/full",
                title: "Frontiers in Psychology Article",
                image: "/images/media/psych.jpg"
            },
            {
                date: "October, 2013",
                url: "https://www.mcgill.ca/brain/research-discovery/brain-stories/prescribing-magic",
                title: "Prescribing Magic",
                image: "/images/media/magic.jpg"
            },
            {
                date: "October, 2013",
                content: <VideoEmbed src="https://player.vimeo.com/video/117024196?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="Vimeo Video" />,
                title: "Vimeo Video"
            },
            {
                date: "July, 2013",
                content: <VideoEmbed src="https://www.youtube.com/embed/vLAvoaln8oU" title="YouTube Video" />,
                title: "YouTube Video"
            }
        ]);
    }, []);

    return (
        <div>
            <Navbar />
            <main className="main-content media-page">
                <div className="media-grid">
                    {media.map((item, index) => (
                        <a key={index} href={item.url || item.video} target="_blank" rel="noopener noreferrer"
                           className="media-item">
                            <h3>{item.title}</h3>
                            {item.image && <img src={item.image} alt={item.title}/>}
                            {item.content}
                            <p>{item.date}</p>
                        </a>
                    ))}
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Media;