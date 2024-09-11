import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import { useRouter } from 'next/router';

const Publications = () => {
    const [publications, setPublications] = useState([]);
    const router = useRouter();

    useEffect(() => {
        setPublications([
            {
                year: 2024,
                title: "Moderate–severe beta-thalassemia intermedia phenotype caused by sextuplicated alpha-globin gene allele in two beta-thalassemia carriers",
                authors: "Ahlem Achour, Jeroen Knijnenburg, Tamara Koopmann, Amir Raz, Marc Tischkowitz, Thomas D. Coates, F. Baas, C. L. Harteveld",
                link: "https://doi.org/10.1002/ajh.27386"
            },
            {
                year: 2022,
                title: "Suggestion alters Stroop automaticity: Hypnotic alexia through a proactive lens.",
                authors: "Landry, M., Da Silva Castanheira, J., Milton, D., & Raz, A.",
                link: "https://psycnet.apa.org/doi/10.1037/cns0000268"
            },
            {
                year: 2022,
                title: "The Rubber Hand Illusion: Top-down attention modulates embodiment",
                authors: "Rémi Thériault, Mathieu Landry, Amir Raz",
                link: "https://pubmed.ncbi.nlm.nih.gov/35073801/"
            },
            {
                year: 2022,
                title: "Macrodosing to microdosing with psychedelics: Clinical, social, and cultural perspectives",
                authors: "Ayse Ceren Kaypak and Amir Raz ",
                link: "https://journals.sagepub.com/doi/10.1177/13634615221119386"
            },
            {
                year: 2021,
                title: "Body swapping with a Black person boosts empathy: Using virtual reality to embody another",
                authors: "Rémi Thériault, Jay A Olson, Sonia A Krol, and Amir Raz",
                link: "https://journals.sagepub.com/doi/10.1177/17470218211024826"
            },
            {
                year: 2021,
                title: "Super Placebos: A Feasibility Study Combining Contextual Factors to Promote Placebo Effects",
                authors: "Jay A. Olson, Michael Lifshitz, Amir Raz, and Samuel P. L. Veissière",
                link: "https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2021.644825/full"
            },
            {
                year: 2021,
                title: "Investigating how the modularity of visuospatial attention shapes conscious perception using type I and type II signal detection theory.",
                authors: "Landry, M., Da Silva Castanheira, J., Sackur, J., & Raz, A.",
                link: "https://psycnet.apa.org/doiLanding?doi=10.1037%2Fxhp0000810"
            },
            {
                year: 2020,
                title: "Applying insights from magic to improve deception in research: The Swiss cheese model",
                authors: "Jay A. Olson, Amir Raz",
                link: "https://www.sciencedirect.com/science/article/abs/pii/S0022103120303930?via%3Dihub"
            },
            {
                year: 2020,
                title: "Difficult Turned Easy: Suggestion Renders a Challenging Visual Task Simple",
                authors: "Mathieu Landry, Jason Da Silva Castanheira, Jérôme Sackur, and Amir Raz",
                link: "https://journals.sagepub.com/doi/10.1177/0956797620954856"
            },
            {
                year: 2020,
                title: "Tripping on nothing: placebo psychedelics and contextual factors",
                authors: "Jay A. Olson, Léah Suissa-Rocheleau, Michael Lifshitz, Amir Raz & Samuel P. L. Veissière",
                link: "https://link.springer.com/article/10.1007/s00213-020-05464-5"
            },
            {
                year: 2019,
                title: "Developing a light-based intervention to reduce fatigue and improve sleep in rapidly rotating shift workers",
                authors: "Jay A. Olson,Despina Z. Artenie,Mariève Cyr,Amir Raz & Virginia Lee",
                link: "https://www.tandfonline.com/doi/full/10.1080/07420528.2019.1698591"
            },
            {
                year: 2019,
                title: "Self-Concept Clarity and the Bodily Self: Malleability Across Modalities",
                authors: "Sonia A. Krol, Rémi Thériault, Jay A. Olson, Amir Raz, and Jennifer A. Bartz",
                link: "https://journals.sagepub.com/doi/10.1177/0146167219879126"
            },
            {
                year: 2018,
                title: "EEG-Neurofeedback and the Correction of Misleading Information: A Reply to Pigott and Colleagues",
                authors: "Robert T. Thibault, Samuel Veissière, Jay A. Olson, and Amir Raz",
                link: "https://journals.sagepub.com/doi/10.1177/1087054718808379"
            },
            {
                year: 2018,
                title: "Patterns of bronchial challenge testing in Canada",
                authors: "Thériault Rémi, Raz Amir",
                link: "https://cjrt.ca/article/81441-patterns-of-bronchial-challenge-testing-in-canada"
            },
            {
                year: 2018,
                title: "Implications of Placebo and Nocebo Effects for Clinical Practice: Expert Consensus",
                authors: "Amir Raz",
                link: "https://karger.com/pps/article/87/4/204/283069/Implications-of-Placebo-and-Nocebo-Effects-for"
            },
            {
                year: 2018,
                title: "Neurofeedback with fMRI: A critical systematic review",
                authors: "Robert T. Thibault, Amanda MacPherson, Michael Lifshitz, Raquel R. Roth, Amir Raz",
                link: "https://www.sciencedirect.com/science/article/abs/pii/S1053811917310959?via%3Dihub"
            },
            {
                year: 2018,
                title: "Treating ADHD With Suggestion: Neurofeedback and Placebo Therapeutics",
                authors: "Robert T. Thibault, Samuel Veissière, Jay A. Olson, and Amir Raz",
                link: "https://journals.sagepub.com/doi/10.1177/1087054718770012"
            },
            {
                year: 2018,
                title: "Hypnosis in palliative care: from clinical insights to the science of self-regulation",
                authors: "Mathieu Landry, Moriah Stendel, Michel Landry, Amir Raz",
                link: "https://apm.amegroups.org/article/view/18207/18509"
            },
            {
                year: 2017,
                title: "The climate of neurofeedback: scientific rigour and the perils of ideology",
                authors: "Robert T Thibault, Michael Lifshitz, Amir Raz",
                link: "https://academic.oup.com/brain/article/141/2/e11/4683985"
            },
            {
                year: 2017,
                title: "The psychology of neurofeedback: Clinical intervention even if applied placebo.",
                authors: "Thibault, Robert T.,Raz, Amir",
                link: "https://psycnet.apa.org/buy/2017-43854-005"
            },
            {
                year: 2017,
                title: "Ask the pendulum: personality predictors of ideomotor performance",
                authors: "Jay A Olson, Ewalina Jeyanesan, Amir Raz",
                link: "https://academic.oup.com/nc/article/2017/1/nix014/4060585"
            },
            {
                year: 2017,
                title: "Source localization of brain states associated with canonical neuroimaging postures",
                authors: "Jay A Olson, Ewalina Jeyanesan, Amir Raz",
                link: "https://academic.oup.com/nc/article/2017/1/nix014/4060585"
            },
                    {
                        "year": 2017,
                        "title": "Source localization of brain states associated with canonical neuroimaging postures",
                        "authors": "Jay A Olson, Ewalina Jeyanesan, Amir Raz",
                        "link": "https://academic.oup.com/nc/article/2017/1/nix014/4060585"
                    },
                    {
                        "year": 2017,
                        "title": "Neurofeedback or neuroplacebo?",
                        "authors": "R T Thibault, M Lifshitz, A Raz",
                        "link": "https://academic.oup.com/brain/article/140/4/862/3272051"
                    },
                    {
                        "year": 2017,
                        "title": "On suggestibility and Placebo: A follow-up study",
                        "authors": "M Lifshitz, E O Sheiner, J A Olson, R Thériault, A Raz",
                        "link": "https://www.tandfonline.com/doi/full/10.1080/00029157.2017.1285947"
                    },
                    {
                        "year": 2017,
                        "title": "Brain correlates of hypnosis: A systematic review and meta-analytic exploration",
                        "authors": "M Landry, M Lifshitz, A Raz",
                        "link": "https://www.sciencedirect.com/science/article/pii/S0149763416300707"
                    },
                    {
                        "year": 2017,
                        "title": "Hypnosis and top-down regulation of consciousness",
                        "authors": "D B Terhune, A Cleeremans, A Raz, S J Lynn",
                        "link": "https://www.sciencedirect.com/science/article/pii/S1364661316301982"
                    },
                    {
                        "year": 2016,
                        "title": "Neurofeedback: The power of psychosocial therapeutics",
                        "authors": "R T Thibault, A Raz",
                        "link": "https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(16)30356-0/fulltext"
                    },
                    {
                        "year": 2016,
                        "title": "Imaging posture veils neural signals",
                        "authors": "R T Thibault, A Raz",
                        "link": "https://www.frontiersin.org/articles/10.3389/fnhum.2016.00520/full"
                    },
                    {
                        "year": 2016,
                        "title": "Heightened States of Attention: From Mental Performance to Altered States of Consciousness and Contemplative Practices",
                        "authors": "M Landry, A Raz",
                        "link": "https://www.revues.org/28278"
                    },
                    {
                        "year": 2016,
                        "title": "When can neurofeedback join the clinical armamentarium",
                        "authors": "R T Thibault, A Raz",
                        "link": "https://www.thelancet.com/journals/lanpsy/article/PIIS2215-0366(16)30363-4/fulltext"
                    },
                    {
                        "year": 2016,
                        "title": "Simulated thought insertion: Influencing the sense of agency using deception and magic",
                        "authors": "J A Olson, K Appourchaux, A Raz",
                        "link": "https://www.sciencedirect.com/science/article/pii/S1053811916302391"
                    },
                    {
                        "year": 2016,
                        "title": "Neurophysiology of Hypnosis",
                        "authors": "M Landry, A Raz",
                        "link": "https://link.springer.com/chapter/10.1007/978-1-4939-3171-5_2"
                    },
                    {
                        "year": 2015,
                        "title": "The self-regulating brain and neurofeedback: experimental science and clinical promise",
                        "authors": "R T Thibault, M Lifshitz, N Birbaumer, A Raz",
                        "link": "https://www.karger.com/Article/FullText/375622"
                    },
                    {
                        "year": 2015,
                        "title": "Body position alters human resting-state: Insights from multi-postural magnetoencephalography",
                        "authors": "R T Thibault, M Lifshitz, J M Jones, A Raz",
                        "link": "https://link.springer.com/article/10.1007/s11682-014-9305-8"
                    },
                    {
                        "year": 2015,
                        "title": "Transcultural factors in hypnotizability scales: limits and prospects",
                        "authors": "C M Champigny, A Raz",
                        "link": "https://www.tandfonline.com/doi/full/10.1080/00029157.2015.1061473"
                    },
                    {
                        "year": 2015,
                        "title": "Neurofeedback, self-regulation, and brain imaging: clinical science and fad in the service of mental disorders",
                        "authors": "R T Thibault, M Lifshitz, N Birbaumer, A Raz",
                        "link": "https://www.karger.com/Article/FullText/375622"
                    },
                    {
                        "year": 2015,
                        "title": "Paying attention to a field in crisis: Psychiatry, neuroscience, and functional systems of the brain",
                        "authors": "A Raz, E B Macdonald",
                        "link": "https://www.cambridge.org/core/books/abs/revisioning-psychiatry/paying-attention-to-a-field-in-crisis/0E4F53B0BCF40C53B715F4A05"
                    },
                    {
                        "year": 2016,
                        "title": "Placebo response correlates with hypnotic suggestibility",
                        "authors": "E O Sheiner, M Lifshitz, A Raz",
                        "link": "https://www.tandfonline.com/doi/full/10.1080/21507740.2016.1146581"
                    },
                    {
                        "year": 2015,
                        "title": "Acupuncture for chronic pain? Clinical wisdom undecided despite over 4000 years of practice",
                        "authors": "C S Harris, M Lifshitz, A Raz",
                        "link": "https://www.amjmed.com/article/S0002-9343(15)00036-8/fulltext"
                    },
                    {
                        "year": 2015,
                        "title": "Hypnotic ability and baseline attention: fMRI findings from Stroop interference",
                        "authors": "M Lifshitz, A Raz",
                        "link": "https://psycnet.apa.org/doi/10.1037/pcon0000036"
                    },
                    {
                        "year": 2015,
                        "title": "Explanations of a magic trick across the life span",
                        "authors": "J A Olson, I Demacheva, A Raz",
                        "link": "https://www.frontiersin.org/articles/10.3389/fpsyg.2015.00219/full"
                    },
                    {
                        "year": 2015,
                        "title": "Influencing choice without awareness",
                        "authors": "J A Olson, A A Amlani, A Raz, R A Rensink",
                        "link": "https://www.sciencedirect.com/science/article/pii/S0010027715002899"
                    },
                    {
                        "year": 2015,
                        "title": "Hypnosis and imaging of the living human brain",
                        "authors": "M Landry, A Raz",
                        "link": "https://www.tandfonline.com/doi/full/10.1080/00029157.2015.1038361"
                    },
                    {
                        "year": 2015,
                        "title": "Correlates, stability and predictors of borderline personality disorder among previously suicidal youth",
                        "authors": "B Greenfield, M Henry, E Lis, J Slatkoff, J M Guilé, G Dougherty, … B L Mishara",
                        "link": "https://link.springer.com/article/10.1007/s00787-015-0707-2"
                    },
                    {
                        "year": 2014,
                        "title": "Elucidating unconscious processing with instrumental hypnosis",
                        "authors": "M Landry, K Appourchaux, A Raz",
                        "link": "https://www.frontiersin.org/articles/10.3389/fpsyg.2014.00785/full"
                    },
                    {
                        "year": 2014,
                        "title": "Posture alters human resting-state",
                        "authors": "R T Thibault, M Lifshitz, J M Jones, A Raz",
                        "link": "https://link.springer.com/article/10.1007/s11682-014-9305-8"
                    },
                    {
                        "year": 2014,
                        "title": "Empirical neuroenchantment: from reading minds to thinking critically",
                        "authors": "S S Ali, M Lifshitz, A Raz",
                        "link": "https://www.frontiersin.org/articles/10.3389/fnhum.2014.00320/full"
                    },
            {
                "year": 2014,
                "title": "The marginalization of phenomenological consciousness",
                "authors": "Macdonald, E. B., & Raz, A.",
                "link": "https://www.frontiersin.org/articles/10.3389/fnhum.2014.00306/full"
            },
            {
                "year": 2014,
                "title": "Harnessing psychoanalytical methods for a phenomenological neuroscience",
                "authors": "Cusumano, E. P., & Raz, A.",
                "link": "https://www.frontiersin.org/articles/10.3389/fpsyg.2014.00334/full"
            },
            {
                "year": 2010,
                "title": "From dynamic lesions to brain imaging of behavioral lesions: Alloying the gold of psychoanalysis with the copper of suggestion",
                "authors": "Raz, A., & Wolfson, J. B.",
                "link": "https://www.neuropsychoanalysis.org/journal/12/1/5"
            },
            {
                "year": 2014,
                "title": "Suggestion overrides automatic audiovisual integration",
                "authors": "Déry, C., Campbell, N. K., Lifshitz, M., & Raz, A.",
                "link": "https://www.sciencedirect.com/science/article/pii/S1053811913001168"
            },
            {
                "year": 2013,
                "title": "Computational modeling of the negative priming effect based on inhibition patterns and working memory",
                "authors": "Chung, D., Raz, A., Lee, J., & Jeong, J.",
                "link": "https://www.frontiersin.org/articles/10.3389/fcomp.2013.00166/full"
            },
            {
                "year": 2014,
                "title": "Meditation and hypnosis at the intersection between phenomenology and cognitive science",
                "authors": "Lifshitz, M., Cusumano, E. P., & Raz, A.",
                "link": "https://www.springer.com/gp/book/9789400743542"
            },
            {
                "year": 2013,
                "title": "Hypnosis as neurophenomenology",
                "authors": "Lifshitz, M., Cusumano, E. P., & Raz, A.",
                "link": "https://www.frontiersin.org/articles/10.3389/fnhum.2013.00469/full"
            },
            {
                "year": 2013,
                "title": "Paying Attention to Michael Posner",
                "authors": "Raz, A. & Oksenhendler, R.",
                "link": "https://www.apa.org/pubs/reports/psyccritiques"
            },
            {
                "year": 2012,
                "title": "Le rôle des facteurs développementaux dans la détermination de la responsabilité morale chez les jeunes: une étude pilote évaluant les opinions d’experts légaux et cliniques",
                "authors": "Demacheva, I., Aubert Bonn, N., Lucero, S., Ladouceur, M., & Raz, A.",
                "link": "https://www.erudit.org/fr/revues/criminologie/2012-v45-n2-criminologie/1007762/"
            },
            {
                "year": 2013,
                "title": "Psychosocial factors and chronic spontaneous urticaria: a systematic review",
                "authors": "Ben‐Shoshan, M., Blinderman, I., & Raz, A.",
                "link": "https://onlinelibrary.wiley.com/doi/full/10.1111/all.12075"
            },
            {
                "year": 2012,
                "title": "Lengthy and expensive? Why the future of diagnostic neuroimaging may be faster, cheaper, and more collaborative than we think",
                "authors": "Lifshitz, M., Margulies, D. S., & Raz, A.",
                "link": "https://doi.org/10.1080/21507740.2012.721466"
            },
            {
                "year": 2012,
                "title": "Translational attention: From experiments in the lab to helping the symptoms of individuals with Tourette’s syndrome",
                "authors": "Raz, A.",
                "link": "https://www.sciencedirect.com/science/article/pii/S1053811912001326"
            },
            {
                "year": 2012,
                "title": "Using suggestion to modulate automatic processes: From Stroop to McGurk and beyond",
                "authors": "Lifshitz, M., Bonn, N. A., Fischer, A., Kashem, I. F., & Raz, A.",
                "link": "https://www.sciencedirect.com/science/article/pii/S0010945212001785"
            },
            {
                "year": 2007,
                "title": "Elucidating Tourette’s syndrome: Perspectives from hypnosis, attention and self-regulation",
                "authors": "Raz, A., Keller, S., Norman, K., & Senechal, D.",
                "link": "https://www.tandfonline.com/doi/full/10.1080/00029157.2007.10401611"
            },
            {
                "year": 2012,
                "title": "Hypnosis and meditation: Vehicles of attention and suggestion",
                "authors": "Lifshitz, M., & Raz, A.",
                "link": "https://www.springer.com/gp/book/9781461408044"
            },
            {
                "year": 2012,
                "title": "Contemplative Practices and the Power of the Mind",
                "authors": "Raz, A.",
                "link": "https://www.springer.com/gp/book/9781461412585"
            },
            {
                "year": 2012,
                "title": "From dynamic to behavioural lesions: The relative merits and caveats of elucidating psychoanalysis with brain imaging",
                "authors": "Raz, A., & Wolfson, J. B.",
                "link": "https://global.oup.com/academic/product/9780198703287"
            },
            {
                "year": 2012,
                "title": "From neuroimaging to tea leaves in the bottom of a cup",
                "authors": "Raz, A.",
                "link": "https://www.springer.com/gp/book/9780367339076"
            },
            {
                "year": 2012,
                "title": "Subsidiary analysis of different Stroop-embedded negative priming trials",
                "authors": "Campbell, N. K., & Raz, A.",
                "link": "https://www.sciencedirect.com/science/article/pii/S1053811912001830"
            },
            {
                "year": 2012,
                "title": "Hypnosis as a lens to the development of attention",
                "authors": "Raz, A.",
                "link": "https://www.sciencedirect.com/science/article/pii/S1053811912001375"
            },
            {
                "year": 2012,
                "title": "Varieties of attention in hypnosis and meditation",
                "authors": "Lifshitz, M., Campbell, N. K., & Raz, A.",
                "link": "https://www.sciencedirect.com/science/article/pii/S1053811912001842"
            },
            {
                "year": 2012,
                "title": "Training the brain: Fact and fad in cognitive and behavioral remediation",
                "authors": "Rabipour, S., & Raz, A.",
                "link": "https://www.sciencedirect.com/science/article/pii/S0278262612001913"
            },
            {
                "year": 2012,
                "title": "Can expectation enhance response to suggestion? De-automatization illuminates a conundrum",
                "authors": "Lifshitz, M., Howells, C., & Raz, A.",
                "link": "https://www.sciencedirect.com/science/article/pii/S1053811912001767"
            },
            {
                "year": 2012,
                "title": "Deliberate use of placebos in clinical practice: what we really know",
                "authors": "Harris, C. S., & Raz, A.",
                "link": "https://jme.bmj.com/content/38/7/406"
            },
            {
                "year": 2012,
                "title": "The applied cognitive psychology of attention: a step closer to understanding magic tricks",
                "authors": "Demacheva, I., Ladouceur, M., Steinberg, E., Pogossova, G., & Raz, A.",
                "link": "https://onlinelibrary.wiley.com/doi/full/10.1002/acp.2871"
            },
            {
                "year": 2011,
                "title": "Hypnosis: A twilight zone of the top-down variety: Few have never heard of hypnosis but most know little about the potential of this mind–body regulation technique for advancing science",
                "authors": "Raz, A.",
                "link": "https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(11)00191-6"
            },
            {
                "year": 2007,
                "title": "Contextualizing specificity: Specific and non-specific effects of treatment",
                "authors": "Raz, A., & Michels, R.",
                "link": "https://www.tandfonline.com/doi/full/10.1080/00029157.2007.10401612"
            },
            {
                "year": 2007,
                "title": "Selective biasing of a specific bistable-figure percept involves fMRI signal changes in frontostriatal circuits: A step toward unlocking the neural correlates of top-down control and self-regulation",
                "authors": "Raz, A., Lamar, M., Buhle, J. T., Kane, M. J., & Peterson, B. S.",
                "link": "https://doi.org/10.1080/00029157.2007.10401611"
            },
            {
                "year": 2007,
                "title": "Hypnobo: perspectives on hypnosis and placebo",
                "authors": "Raz, A.",
                "link": "https://www.tandfonline.com/doi/full/10.1080/00029157.2007.10401613"
            },
            {
                "year": 2007,
                "title": "Suggestibility and hypnotizability: Mind the gap",
                "authors": "Raz, A.",
                "link": "https://www.tandfonline.com/doi/full/10.1080/00029157.2007.10401614"
            },
            {
                "year": 2007,
                "title": "A commentary on mumpsimus, sumpsimus and the mpemba effect",
                "authors": "Raz, A.",
                "link": "https://www.tandfonline.com/doi/full/10.1080/00029157.2007.10401615"
            },
            {
                "year": 2008,
                "title": "Hemihypnosis, hypnosis, and the importance of knowing right from trend",
                "authors": "Raz, A., Schwartzman, D., & Guindi, D.",
                "link": "https://www.tandfonline.com/doi/full/10.1080/00029157.2008.10401616"
            },
            {
                "year": 2011,
                "title": "Sub-Therapeutic doses in the treatment of depression: the implications of Starting low and going Slow",
                "authors": "de Jong, V., & Raz, A.",
                "link": "https://www.springer.com/gp/book/9781461412254"
            },
            {
                "year": 2011,
                "title": "Converging evidence for de-automatization as a function of suggestion",
                "authors": "Campbell, N. K., Blinderman, I. M., Lifshitz, M., & Raz, A.",
                "link": "https://www.sciencedirect.com/science/article/pii/S1053811912001793"
            },
            {
                "year": 2011,
                "title": "Does neuroimaging of suggestion elucidate hypnotic trance?",
                "authors": "Raz, A.",
                "link": "https://www.tandfonline.com/doi/full/10.1080/00207144.2011.596963"
            },
            {
                "year": 2011,
                "title": "Placebos in clinical practice: comparing attitudes, beliefs, and patterns of use between academic psychiatrists and nonpsychiatrists",
                "authors": "Raz, A., Campbell, N., Guindi, D., Holcroft, C., Déry, C., & Cukier, O.",
                "link": "https://journals.sagepub.com/doi/full/10.1177/070674371105600408"
            },
            {
                "year": 2007,
                "title": "Genetics and neuroimaging of attention and hypnotizability may elucidate placebo",
                "authors": "Raz, A.",
                "link": "https://www.tandfonline.com/doi/full/10.1080/00029157.2007.10401617"
            },
            {
                "year": 2004,
                "title": "See clearly: Suggestion, hypnosis, attention, and visual acuity",
                "authors": "Raz, A., Marinoff, G. P., Zephrani, Z. R., Schweizer, H. R., & Posner, M. I.",
                "link": "https://www.tandfonline.com/doi/full/10.1080/00029157.2004.10401454"
            }

        ]);
    }, []);

    const handleCardClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div>
            <Navbar />
            <main className="main-content publications-page">
                {publications.map((publication, index) => (
                    <div
                        key={index}
                        className="publication-item"
                        onClick={() => handleCardClick(publication.link)}
                    >
                        <div className="publication-title">{publication.title}</div>
                        <div className="publication-year">{publication.year}</div>
                        <div className="publication-authors">{publication.authors}</div>
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default Publications;