import { useEffect, useState } from "react";
import VideoEmbed from "../components/VideoEmbed";
import SoundCloudEmbed from "../components/SoundCloudEmbed";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Link from 'next/link';
import { NextSeo } from 'next-seo';

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
                date: "April, 2021",
                url: "https://www.boxofficepro.com/coolidge-corner-theatre-science-on-screen-series/",
                title: "Coolidge Corner Theatre’s ‘Science on Screen’ Series Gives Reality a Voice in the Misinformation Age",
                image: "/images/media/theatre.jpg"
            },
            {
                date: "January, 2021",
                url: "https://www.sciencedaily.com/releases/2021/01/210127171840.htm#:~:text=Summary%3A,gaps'%20of%20missing%20visual%20cues.",
                title: "Hypnotic suggestions can make a complex task easy by helping vision fill in the blanks",
                image: "/images/media/mind.png"
            },
            {
                date: "December, 2020",
                url: "https://www.freethink.com/science/experiment-design",
                title: "Want better science? Learn how to lie (with magic).",
                image: "/images/media/design.png"
            },
            {
                date: "October, 2020",
                url: "https://news.chapman.edu/2020/10/15/brain-institute-researcher-finds-that-difficult-becomes-easy-thanks-to-hypnotic-suggestion/",
                title: "Brain Institute Researcher Finds That Difficult Becomes Easy Thanks to Hypnotic Suggestion",
                image: "/images/media/raz.jpg"
            },
            {
                date: "July, 2020",
                content: <VideoEmbed src="https://player.vimeo.com/video/436234481?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="The Body-Swap Illusion: Investigation at the Raz Lab" />,
                title: "The Body-Swap Illusion: Investigation at the Raz Lab"
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
                url: "https://www.bbc.co.uk/sounds/play/p069jncp",
                title: "What’s the difference between stage and clinical hypnosis?",
                image: "/images/media/clock.jpg"
            },
            {
                date: "April, 2017",
                content: <VideoEmbed src="https://player.vimeo.com/video/266510840?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="The Science of Magic Press Screener" />,
                title: "The Science of Magic Press Screener"
            },
            {
                date: "April, 2018",
                content: <SoundCloudEmbed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/437289192&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="Dr. Amir Raz discusses Placebos on CBC Radio" />,
                title: "Dr. Amir Raz Discusses Placebos on CBC Radio"
            },
            {
                date: "July, 2017",
                content: <VideoEmbed src="https://www.youtube.com/embed/3evqptjrGGs" title="Exploring the Power of Suggestion" />,
                title: "Exploring the Power of Suggestion"
            },
            {
                date: "June, 2017",
                content: <VideoEmbed src="https://player.vimeo.com/video/221348961" title="Vimeo Video" />,
                title: "Keynote Speech at Chapman University"
            },
            {
                date: "June, 2017",
                content: <VideoEmbed src="https://www.youtube.com/embed/XcUGHTEVgk0?si=oe_leeIvzR7iPwuN" title="When can deception be good for you? | Amir Raz | TEDxMontreal" />,
                title: "When can deception be good for you? | Amir Raz | TEDxMontreal",
            },
            {
                date: "June, 2017",
                content: <SoundCloudEmbed src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330276021&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="Hypnosis in medicine: no chickens involved" />,
                title: "Hypnosis in Medicine: No Chickens Involved"
            },
            {
                date: "May, 2017",
                content: <VideoEmbed src="https://player.vimeo.com/video/216925134?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="Raz Lab Neurofeedback Interview" />,
                title: "Raz Lab Neurofeedback Interview"
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
                date: "March, 2017",
                url: "https://www.mcgill.ca/oss/article/interviews-experts/under-hypnosis-dr-raz",
                title: "Under Hypnosis with Dr. Raz",
                image: "/images/media/text.jpg"
            },
            {
                date: "March, 2017",
                url: "https://www.tvo.org/video/placebo-effective",
                title: "Placebo Effective",
                image: "/images/media/effective.png"
            },
            {
                date: "December, 2016",
                content: <VideoEmbed src="https://player.vimeo.com/video/209325612?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="The Rubber Hand Illusion: Investigation at the Raz Lab" />,
                title: "The Rubber Hand Illusion: Investigation at the Raz Lab"
            },
            {
                date: "November, 2016",
                content: <VideoEmbed src="https://player.vimeo.com/video/190571359?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="RazLab Posture" />,
                title: "RazLab Posture"
            },
            {
                date: "September, 2016",
                url: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01358/full",
                title: "Frontiers in Psychology Article",
                image: "/images/media/psych.jpg"
            },
            {
                date: "June, 2016",
                url: "https://www.mcgill.ca/newsroom/fr/channels/news/neurofeedback-effet-placebo-261120",
                title: "Neurofeedback : effet placebo?",
                image: "/images/media/feedback.jpg"
            },
            {
                date: "May, 2016",
                url: "https://lareviewofbooks.org/article/eager-hear-placebo-speak/",
                title: "Why Are We So Eager to Hear “Placebo” Speak?",
                image: "/images/media/pills.png"
            },
            {
                date: "November, 2015",
                content: <VideoEmbed src="https://www.youtube.com/embed/pfvBNIRRsg4?si=cxI9DNZzKdt-fERm" title="McGill Talks Episode 7 Prescriptions and Placebos" />,
                title: "McGill Talks Episode 7 Prescriptions and Placebos"
            },
            {
                date: "January, 2015",
                content: <VideoEmbed src="https://www.youtube.com/embed/Nu32TFpcYOk?si=0fMN4eLXmS7mszqw" title="JGH TV - Doctors on wheels" />,
                title: "JGH TV - Doctors on wheels"
            },
            {
                date: "July, 2014",
                content: <VideoEmbed src="https://player.vimeo.com/video/117024196?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="The Raz Lab in Brain Magic: The Power of Placebo — CBC Documentary" />,
                title: "The Raz Lab in Brain Magic: The Power of Placebo — CBC Documentary"
            },
            {
                date: "May, 2014",
                url: "https://neurocritic.blogspot.com/2014/05/the-seductive-allure-of-spintronics.html",
                title: "The Seductive Allure of Spintronics™ Neuroimaging mock mind reading scanner",
                image: "/images/media/neuro.png"
            },
            {
                date: "October, 2013",
                url: "https://www.mcgill.ca/brain/research-discovery/brain-stories/prescribing-magic",
                title: "Prescribing Magic",
                image: "/images/media/magic.jpg"
            },
            {
                date: "July, 2013",
                content: <VideoEmbed src="https://player.vimeo.com/video/60670141?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="Brain Games - Hypnosis" />,
                title: "Brain Games - Hypnosis"
            },
            {
                date: "Jan, 2013",
                content: <VideoEmbed src="https://www.youtube.com/embed/vLAvoaln8oU" title="YouTube Video" />,
                title: "Neural Correlates of Altered Consciousness"
            },
            {
                date: "Jan, 2012",
                url: "https://medium.com/skeptikai/hypnosis-the-power-of-suggestion-and-the-science-of-hypnotherapy-429b187a12fb",
                title: "Hypnosis, the Power of Suggestion, and the Science of Hypnotherapy\n",
                image: "/images/media/glasses.jpg"
            },
            {
                date: "July, 2011",
                content: <VideoEmbed src="https://www.youtube.com/embed/5Q7CoqFud5s?si=f-CTsbUkc5mQ16yk" title="BBC - Alternative Therapies - Hypnotherapy" />,
                title: "BBC - Alternative Therapies - Hypnotherapy"
            },
            {
                date: "May, 2011",
                url: "https://www.bbc.com/mundo/noticias/2011/05/110513_placebos_efectivos_men#:~:text=Cada%20vez%20m%C3%A1s%20m%C3%A9dicos%20%2Dprincipalmente,que%20los%20placebos%20tienen%20beneficios.",
                title: "El \"sorprendente\" poder de los placebos",
                image: "/images/media/drug.jpg"
            },
            {
                date: "May, 2011",
                url: "https://www.theglobeandmail.com/life/health-and-fitness/one-in-five-mds-have-prescribed-placebos/article580390/",
                title: "One in five MDs have prescribed placebos",
                image: "/images/media/md.jpg"
            },
            {
                date: "October, 2008",
                url: "https://www.mcgilldaily.com/2008/10/haunted_minds/",
                title: "Haunted minds",
                image: "/images/media/Mcgilldaily.png"
            },
            {
                date: "May, 2007",
                url: "http://www.reporter-archive.mcgill.ca/39/18/profile/index.html",
                title: "Amir Raz: Waking up to potential of hypnosis",
                image: "/images/media/waking.jpg"
            },
            {
                date: "March, 2006",
                url: "https://www.apa.org/monitor/mar06/lab",
                title: "From the stage to the lab",
                image: "/images/media/APA.jpg"
            },
            {
                date: "August, 2005",
                url: "https://news.cornell.edu/stories/2005/08/hypnotic-suggestion-can-reduce-conflict-human-brain",
                title: "Hypnotic suggestion can reduce conflict in human brain",
                image: "/images/media/cornell.png"
            },
            {
                date: "June, 2005",
                url: "https://www.science.org/content/article/unblocking-mind",
                title: "Unblocking the Mind: Hypnosis can override automatic processes in the brain",
                image: "/images/media/unblocking.jpg"
            }
        ]);
    }, []);

    return (
        <div>
            <NextSeo
                title="Media - Amir Raz"
                description="Explore media appearances and publications featuring Amir Raz, including articles, videos, and interviews."
                openGraph={{
                    url: 'https://www.amirraz.com/media',
                    title: 'Media - Amir Raz',
                    description: 'Explore media appearances and publications featuring Amir Raz, including articles, videos, and interviews.',
                    images: [
                        {
                            url: 'https://www.amirraz.com/images/media/raz.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Media - Amir Raz',
                        },
                    ],
                    site_name: 'Amir Raz',
                }}
            />
            <Navbar />
            <main className="main-content media-page">
                <div className="media-grid">
                    {media.map((item, index) => (
                        <a key={index} href={item.url || item.video} target="_blank" rel="noopener noreferrer" className="media-item">
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