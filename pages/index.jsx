import Head from 'next/head'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>

      <Head>
        <title>Stipill Careers</title>
        <meta name="description" content="careers at stipill" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/stipill.png" />
      </Head>

      <main>

        <div className={styles.heroSection}>
            <h1 className={styles.heroTitle}>Build the future of creativity</h1>
            <p className={styles.heroPara}>Stipill is driving innovation at scale, by giving creators the tools and infrastructure they need so they can focus on what they do best.</p>
            <a href="#open-roles" className="btn btn-hero px-3">See Open Roles &rarr;</a>
        </div>


        <div className={styles.perksSection}>
            <div className="col-md-7 col-11 m-auto">

                <h2  className="sub-heading">Perks & Benefits</h2>
                <p className="text-center">We treat our employees as family.</p>
                
                <div className="row">

                    <div className="col-md-5 col-11 perk-card">
                        <i className="bi bi-calendar-week remote-icon"></i>
                        <h5 className="perk-card-title mt-2">Flexible Working Hours</h5>
                        <p>Say goodbye to the traditional 9 to 5 and hello to the freedom of flexible working hours.</p>
                    </div>

                    <div className="col-md-5 col-11 perk-card">
                        <i className="bi bi-book remote-icon"></i>
                        <h5 className="perk-card-title mt-2">Wellness Program</h5>
                        <p>Invest in your health and happiness with Stipill's wellness program, because when you feel your best, you can do your best.</p>
                    </div>

                    <div className="col-md-5 col-11 perk-card">
                        <i className="bi bi-people-fill remote-icon"></i>
                        <h5 className="perk-card-title mt-2">Access to Community</h5>
                        <p>Join our vibrant community of like-minded individuals and unlock endless possibilities for growth and connection.</p>
                    </div>

                    <div className="col-md-5 col-11 perk-card">
                        <i className="bi bi-youtube remote-icon"></i>
                        <h5 className="perk-card-title mt-2">Online Subscriptions</h5>
                        <p>Get access to Udemy, YouTube Premium, and Spotify Premium subscriptions.</p>
                    </div>

                </div>
            </div>
        </div>

        
        <div className="col-md-9 m-auto">
            <div className="card mb-5 remote-card">
                <div className="card-body text-center py-5">
                    <i className="bi bi-geo-alt remote-icon"></i>
                    <h2 className="mt-4 card-title remote-card-title">We're proud to be a fully remote company!</h2>
                    <p className="remote-card-para">At Stipill, we believe that work can be done from anywhere and at any time, as long as there is a good internet connection. We are dedicated to promoting the benefits of remote work, such as increased flexibility and improved work-life balance.</p>
                </div>
            </div>
        </div>


        <div className={styles.openRolesSection}>
          <div className='col-md-9 col-11 m-auto'>
            <div className="roles-section py-md-5" id="open-roles">
              <div className="col-md-8 col-11 m-auto">
                <h2 className="sub-heading">Open Roles</h2>
                <p className="text-center">Pick what you do best.</p>

                <nav className="mt-5">
                  <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-dev-tab" data-toggle="tab" href="#nav-dev" role="tab" aria-controls="nav-home" aria-selected="true">Engineering</a>
                    <a className="nav-item nav-link" id="nav-creatives-tab" data-toggle="tab" href="#nav-creatives" role="tab" aria-controls="nav-creatives" aria-selected="false">Creative</a>
                  </div>
                </nav>

                <div className="tab-content" id="nav-tabContent">                   
                  <div className="tab-pane fade show active py-4" id="nav-dev" role="tabpanel" aria-labelledby="nav-dev-tab">
                    <div className="card-deck">
                        <div className="card job-card">
                            <div className="card-body">
                                <small className="px-2 py-1 rounded job-tag">Remote</small>
                                <h5 className="card-title mt-2">Backend Developer Intern</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam distinctio nostrum, incidunt sapiente aut!</p>
                                <button className="btn btn-primary btn-sm px-3">Apply</button>
                            </div>
                        </div>
                        <div className="card job-card">
                            <div className="card-body">
                                <small className="px-2 py-1 rounded job-tag">Remote</small>
                                <h5 className="card-title mt-2">Frontend Developer Intern</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam distinctio nostrum, incidunt sapiente aut!</p>
                                <button className="btn btn-primary btn-sm px-3">Apply</button>
                            </div>
                        </div>
                    </div>
                  </div>

                  <div className="tab-pane fade py-4" id="nav-creatives" role="tabpanel" aria-labelledby="nav-creatives-tab">
                    <div className="card-deck">
                        <div className="card job-card">
                            <div className="card-body">
                                <small className="px-2 py-1 rounded job-tag">Remote</small>
                                <h5 className="card-title mt-2">Content Writer Intern</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam distinctio nostrum, incidunt sapiente aut!</p>
                                <button className="btn btn-primary btn-sm px-3">Apply</button>
                            </div>
                        </div>
    
                        <div className="card job-card">
                            <div className="card-body">
                                <small className="px-2 py-1 rounded job-tag">Remote</small>
                                <h5 className="card-title mt-2">Digital Marketing Intern</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam distinctio nostrum, incidunt sapiente aut!</p>
                                <button className="btn btn-primary btn-sm px-3">Apply</button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </main>
     
    </>
  )
}
