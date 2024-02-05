import React from 'react';

const Hobbies = ({ data }) => {
    return (
        <section id="hobbies" style={{ textAlign: 'center', color: 'white' }}>
            <div className="row">
                <div className="twelve columns">
                <br/>
                    <h1 style={{color: 'white'}}>Hobbies</h1>
                </div>
            </div>

            {/* Brazilian Jiu Jitsu Section */}
    <div className="row" >
    <div className="twelve columns">
        <h2 style={{ color: 'white' }}>Brazilian Jiu Jitsu</h2>
        <img src="/images/bjj.jpg" alt="Brazilian Jiu Jitsu" style={{ maxWidth: '30%' }} />
        <p>
            Enthusiastic about the art of Brazilian Jiu Jitsu, constantly learning and evolving on the mats. 
            It's not just a sport, but a lifestyle that teaches discipline, respect, and the importance of continuous improvement.
        </p>
    </div>
</div>


            {/* Comedy Section */}
            <div className="row">
                <div className="twelve columns">
                    <h2 style={{color: 'white'}}>Comedy</h2>
                    <div className="video-container" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
`                        <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/9ec59gz3bpU" 
                        title="YouTube video player"  
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        >
                        </iframe>
                        <p>
                        It started out as therapy for me, a way to navigate through the tougher times and find a light-hearted perspective on life's challenges. But over time, it blossomed into so much more than a coping mechanism. Comedy has become a deep-seated passion, a creative outlet that brings not only joy to myself but also to others. It's this magical process of turning everyday observations into moments of laughter that truly energizes me. Sharing a laugh, seeing the smiles, and feeling the room lighten up, there's nothing quite like it. Comedy, in its essence, has transformed into a significant part of who I am, a journey I cherish and continue to explore with enthusiasm.
        </p>
                    </div>
                </div>
            </div>
            <br/>
        </section>
    );
};

export default Hobbies;
