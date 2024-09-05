// pages/Articles.js
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles([
            {
                year: 2024,
                content: `
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div><span><span>Achour, A., Knijnenburg, J., Koopmann, T., <strong>Raz, A</strong>., Tischkowitz, M.,<br>
        Coates, T.D., Baas, F. and Harteveld, C.L. (2024), Moderate–severe<br>
        beta-thalassemia intermedia phenotype caused by sextuplicated<br>
        alpha-globin gene allele in two beta-thalassemia carriers. Am J<br>
        Hematol, 99: 1655-1658. </span></span></div>
        <div><em><span>&nbsp;</span></em><strong><a href="https://doi.org/10.1002/ajh.27386">doi</a><span>&nbsp;</span>|</strong><span>&nbsp;</span><a href="https://onlinelibrary.wiley.com/doi/10.1002/ajh.27386?af=R" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
                `
            },
            {
                year: 2023,
                content: `
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Psychology of Consciousness: Theory, Research, and Practice 9 (2), 159</div>
        <div></div>
        <div><span><span>Landry, M., Da Silva Castanheira, J., Milton, D., &amp; <strong>Raz, A.</strong> (2022).<br>
        Suggestion alters Stroop automaticity: Hypnotic alexia through a<br>
        proactive lens. Psychology of Consciousness: Theory, Research, and<br>
        Practice, 9(2), 159–171.</span></span><strong></strong></div>
        <div></div>
        <div>
            <p><em><span>&nbsp;</span></em><strong><a href="https://doi.org/10.1037/cns0000268">doi</a><span>&nbsp;</span>|</strong><span>&nbsp;</span><a href="https://psycnet.apa.org/record/2021-46728-001" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></p>
        </div>
        <div>A lateralized alpha-band marker of the interference of exogenous attention over endogenous attention. Cerebral Cortex, 34(1).</div>
    </div>
</article>
                `
            },
            {
                year: 2022,
                content: `
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>The rubber hand illusion: Top-down attention modulates embodiment</div>
        <div><span> R Thériault, M Landry, <strong>A Raz</strong></span></div>
        <div></div>
        <div><span> Quarterly Journal of Experimental Psychology 75 (11), 2129-2148</span></div>
        <div><span> Suggestion alters Stroop automaticity: Hypnotic alexia through a proactive lens.</span></div>
        <div><span> M Landry, J Da Silva Castanheira, D Milton, <strong>A Raz</strong></span></div>
    </div>
</article>
                `
            },
            {
                year: 2021,
                content: `
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Landry, M., Da Silva Castanheira, J., Milton, D., &amp; <strong>Raz, A.</strong> (2021).<br>
        Suggestion alters Stroop automaticity: Hypnotic alexia through a proactive lens.<br>
        Psychology of Consciousness: Theory, Research, and Practice.<br>
        <strong><a href="#">doi</a><span>&nbsp;</span>|</strong><span>&nbsp;</span><a href="#" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Rémi Theriault, Jay Olson, Sonia Krol, <strong>Amir Raz</strong> (In Press).<br>
        Body Swapping with a Black Person Boosts Empathy: Using Virtual Reality to Embody Another.<br>
        Quarterly Journal of Experimental Psychology.</div>
    </div>
</article>
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div><span>Kaypak, A. C. and <strong>Raz, A.</strong> (2021).<br>
        Macrodosing to Microdosing with Psychedelics: Clinical, Social, and Cultural Perspectives.<br>
        (Under review)</span><span>&nbsp;</span><a href="#" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Olson JA, Lifshitz M, <strong>Raz A</strong> and Veissière SPL (2021).<br>
        Super Placebos: A Feasibility Study Combining Contextual Factors to Promote Placebo Effects.<br>
        Front. Psychiatry 12:644825.<br>
        <strong><a href="#">doi</a><span>&nbsp;</span>|</strong><span>&nbsp;</span><a href="#" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Landry, M., Castanheira, J. D. S., Sackur, J., &amp; <strong>Raz, A.</strong> (2021).<br>
        Investigating how the modularity of visuospatial attention shapes conscious perception using type I and type II signal detection theory.<br>
        Journal of Experimental psychology. Human Perception and Performance.<br>
        <strong><a href="#">doi</a><span>&nbsp;</span>|</strong><span>&nbsp;</span><a href="#" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
                `
            },
            {
                year: 2020,
                content: `
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Olson, J. A., Lifshitz, M., Raz, A., &amp; Veissière, S. P. L. (2020).<br>
        Super Placebos: A Feasibility Study Combining Contextual Factors to Promote Placebo Effects.<br>
        Front. Psychiatry 12:644825.<br>
        <strong><a href="https://doi.org/10.3389/fpsyt.2021.644825">doi</a><span>&nbsp;</span>|</strong><span>&nbsp;</span><a href="https://raz-lab.org/wp-content/uploads/2021/03/olson2021super.pdf" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Landry, M., Castanheira, J. D. S., Sackur, J., &amp; <strong>Raz, A.</strong> (2020).<br>
        Investigating how the modularity of visuospatial attention shapes conscious perception using type I and type II signal detection theory.<br>
        Journal of Experimental psychology. Human Perception and Performance.<br>
        <strong><a href="https://doi.apa.org/doiLanding?doi=10.1037%2Fxhp0000810">doi</a><span>&nbsp;</span>|</strong><span>&nbsp;</span><a href="https://raz-lab.org/wp-content/uploads/2023/09/Landry_DaSilva_Sackur_Raz_Manuscript_Revised.pdf" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Kaypak, A. C. and <strong>Raz, A.</strong> (2020).<br>
        Macrodosing to Microdosing with Psychedelics: Clinical, Social, and Cultural Perspectives.<br>
        (Under review)</span><span>&nbsp;</span><a href="https://raz-lab.org/wp-content/uploads/2021/04/Final-Version-Kaypak-C.-Raz.-A-2021-Macrodosing-to-Microdosing-with-Psychedelics-Clinical-Social-and-Cultural-Perspectives.docx" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Olson, J. A., Lifshitz, M., Raz, A., &amp; Veissière, S. P. L. (2020).<br>
        Super Placebos: A Feasibility Study Combining Contextual Factors to Promote Placebo Effects.<br>
        Front. Psychiatry 12:644825.<br>
        <strong><a href="https://doi.org/10.3389/fpsyt.2021.644825">doi</a><span>&nbsp;</span>|</strong><span>&nbsp;</span><a href="https://raz-lab.org/wp-content/uploads/2021/03/olson2021super.pdf" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
                `
            },
            {
                year: 2019,
                content: `
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Olson, J. A., Lifshitz, M., Raz, A., &amp; Veissière, S. P. L. (2019).<br>
        Super Placebos: A Feasibility Study Combining Contextual Factors to Promote Placebo Effects.<br>
        Front. Psychiatry 12:644825.<br>
        <strong><a href="https://doi.org/10.3389/fpsyt.2021.644825">doi</a><span>&nbsp;</span>|</strong><span>&nbsp;</span><a href="https://raz-lab.org/wp-content/uploads/2021/03/olson2021super.pdf" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Landry, M., Castanheira, J. D. S., Sackur, J., &amp; <strong>Raz, A.</strong> (2019).<br>
        Investigating how the modularity of visuospatial attention shapes conscious perception using type I and type II signal detection theory.<br>
        Journal of Experimental psychology. Human Perception and Performance.<br>
        <strong><a href="https://doi.apa.org/doiLanding?doi=10.1037%2Fxhp0000810">doi</a><span>&nbsp;</span>|</strong><span>&nbsp;</span><a href="https://raz-lab.org/wp-content/uploads/2023/09/Landry_DaSilva_Sackur_Raz_Manuscript_Revised.pdf" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
                `
            },
            {
                year: 2018,
                content: `
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Thibault, R. T., Lifshitz, M., Jones, J. M., &amp; <strong>Raz, A.</strong> (2018).<br>
        Neurofeedback with fMRI: A critical systematic review.<br>
        NeuroImage, 172, 786-807.<br>
        <strong><a href="https://doi.org/10.1016/j.neuroimage.2018.01.157">doi</a><span>&nbsp;</span>|</strong><span>&nbsp;</span><a href="https://raz-lab.org/wp-content/uploads/2023/09/1-s2.0-S105381001830157X-main.pdf" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
<article class="elementor-post elementor-grid-item post-696 post type-post status-publish format-standard hentry category-publications category-raz">
    <div class="elementor-post__text">
        <div>Thibault, R. T., Lifshitz, M., &amp; <strong>Raz, A.</strong> (2018).<br>
        The self-regulating brain and neurofeedback: Experimental science and clinical promise.<br>
        Cortex, 107, 93-104.<br>
        <strong><a href="https://doi.org/10.1016/j.cortex.2018.06.008">doi</a><span>&nbsp;</span>|</strong><span>&nbsp;</span><a href="https://raz-lab.org/wp-content/uploads/2023/09/1-s2.0-S001094521830197X-main.pdf" target="_blank" aria-label="undefined (opens in a new tab)" rel="noreferrer noopener"><strong>download</strong></a></div>
    </div>
</article>
                `
            },

        ]);
    }, []);

    return (
        <div>
            <Navbar />
            <main className="main-content">
                {articles.map((article, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: article.content }} />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default Articles;