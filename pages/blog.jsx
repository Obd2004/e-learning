import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Blog.module.scss'
import style from '@/styles/BlogDetails.module.scss'
import blogIntro from 'assets/images/blog.png'
import blogList from 'assets/images/blog-list.png'

const Blog = () => {
  return (
    <>
      <Head>
        <title>TOTC-Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      </Head>
      <main>
        <section id='blog' className={styles.blog}>
          <div className='container'>
            <div className={styles.container}>
              <div className={styles.container__left}>
                <p className={styles.container__left__disc}>By Themadbrains in inspiration</p>
                <h2 className={styles.container__left__title}>Why Swift UI Should Be on the Radar of Every Mobile Developer</h2>
                <p className={styles.container__left__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <button className={styles.container__left__btn}>Start learning now</button>
              </div>
              <div className={styles.container__right}>
                <Image className={styles.container__right__img}
                  src={blogIntro}
                  alt='img-intro'
                  width={779}
                  height={526}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.blog_list}>
          <div className="container">
            <div className={styles.container}>
              <h2 className={styles.container__title}>Reading blog list</h2>
              <ul className={styles.container__list}>
                <button className={styles.container__list__item}>
                  <Image className={styles.container__list__item__img}
                    src={blogList}
                    alt='img-blog-list'
                    width={200}
                    height={200}
                  />
                  <p className={styles.container__list__item__title}>React</p>
                </button>
                <button className={styles.container__list__item}>
                  <Image className={styles.container__list__item__img}
                    src={blogList}
                    alt='img-blog-list'
                    width={200}
                    height={200}
                  />
                  <p className={styles.container__list__item__title}>React</p>
                </button>
                <button className={styles.container__list__item}>
                  <Image className={styles.container__list__item__img}
                    src={blogList}
                    alt='img-blog-list'
                    width={200}
                    height={200}
                  />
                  <p className={styles.container__list__item__title}>React</p>
                </button>
                <button className={styles.container__list__item}>
                  <Image className={styles.container__list__item__img}
                    src={blogList}
                    alt='img-blog-list'
                    width={200}
                    height={200}
                  />
                  <p className={styles.container__list__item__title}>React</p>
                </button>
              </ul>
            </div>
          </div>
        </section>
        <main className={style.blog__cards}>
          <div className={`${style.blog__cards__container} container`}>
            <div className={style.blog__cards__container__title}>
              <h4>Related Blog </h4>
              <Link href="/">
                <p>See all</p>
              </Link>
            </div>
            <ul>
              <li>
                <Image src='/image/opaxon.svg' alt='opaxon' width={400} height={350} />
                <span>
                  <h3>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                  <span>
                    <Image src='/image/qizaloq4.svg' alt='sdafs' width={100} height={100} />
                    <b>Lina</b>
                  </span>
                </span>
                <p className={style.text}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                <div>
                  <Link href='/blogDetail'>
                    <p>Read more</p>
                  </Link>
                  <span>
                    <i className="bi bi-eye-fill"></i>
                    <p className={style.text2}>251,232</p>
                  </span>
                </div>
              </li>
              <li>
                <Image src='/image/opaxon.svg' alt='opaxon' width={400} height={350} />
                <span>
                  <h3>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                  <span>
                    <Image src='/image/qizaloq4.svg' alt='sdafs' width={100} height={100} />
                    <b>Lina</b>
                  </span>
                </span>
                <p className={style.text}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                <div>
                  <Link href='/blogDetail'>
                    <p>Read more</p>
                  </Link>
                  <span>
                    <i className="bi bi-eye-fill"></i>
                    <p className={style.text2}>251,232</p>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </main>
        <section className={styles.marketing}>
          <div className="container">
            <div className={styles.container}>
              <ul className={styles.container__top}>
                <li>Marketing Articles</li>
                <Link href="/">
                  <p>See all</p>
                </Link>
              </ul>
              <ul className={styles.container__list}>
                <li className={styles.container__list__item}>
                  <Image
                    className={styles.container__list__item__img}
                    src="/image/blogMar.png"
                    alt="img"
                    // layout="fill"
                    width={180}
                    height={180}
                    placeholder="black"
                  />
                  <span className={styles.container__list__item__samp}>
                    <p className={styles.container__list__item__samp__items}>
                      <i className="bi bi-columns-gap"></i>
                      <b>Design</b>
                    </p>
                    <p className={styles.container__list__item__samp__items}>
                      <i className="bi bi-clock"></i>
                      <b>3 Month</b>
                    </p>
                  </span>
                  <h2 className={styles.container__list__item__title}>
                    AWS Certified solutions Architect
                  </h2>
                  <p className={styles.container__list__item__text}>
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed
                    do eiusmod tempor
                  </p>
                  <span className={styles.container__list__item__span}>
                    <p className={styles.container__list__item__span__items}>
                      <Image
                        src="/image/user.png"
                        alt="img"
                        // layout="fill"
                        width={50}
                        height={50}
                        placeholder="black"
                      />
                      <b
                        className={
                          styles.container__list__item__span__items__name
                        }
                      >
                        Jony
                      </b>
                    </p>
                    <p className={styles.container__list__item__span__items}>
                      <i
                        className={
                          styles.container__list__item__span__items__price
                        }
                      >
                        $100
                      </i>
                      <b
                        className={
                          styles.container__list__item__span__items__sale
                        }
                      >
                        $80
                      </b> 
                    </p>
                  </span>
                </li>
                <li className={styles.container__list__item}>
                  <Image
                    className={styles.container__list__item__img}
                    src="/image/blogMar.png"
                    alt="img"
                    // layout="fill"
                    width={180}
                    height={180}
                    placeholder="black"
                  />
                  <span className={styles.container__list__item__samp}>
                    <p className={styles.container__list__item__samp__items}>
                      <i className="bi bi-columns-gap"></i>
                      <b>Design</b>
                    </p>
                    <p className={styles.container__list__item__samp__items}>
                      <i className="bi bi-clock"></i>
                      <b>3 Month</b>
                    </p>
                  </span>
                  <h2 className={styles.container__list__item__title}>
                    AWS Certified solutions Architect
                  </h2>
                  <p className={styles.container__list__item__text}>
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed
                    do eiusmod tempor
                  </p>
                  <span className={styles.container__list__item__span}>
                    <p className={styles.container__list__item__span__items}>
                      <Image
                        src="/image/user.png"
                        alt="img"
                        // layout="fill"
                        width={50}
                        height={50}
                        placeholder="black"
                      />
                      <b
                        className={
                          styles.container__list__item__span__items__name
                        }
                      >
                        Jony
                      </b>
                    </p>
                    <p className={styles.container__list__item__span__items}>
                      <i
                        className={
                          styles.container__list__item__span__items__price
                        }
                      >
                        $100
                      </i>
                      <b
                        className={
                          styles.container__list__item__span__items__sale
                        }
                      >
                        $80
                      </b> 
                    </p>
                  </span>
                </li>
                <li className={styles.container__list__item}>
                  <Image
                    className={styles.container__list__item__img}
                    src="/image/blogMar.png"
                    alt="img"
                    // layout="fill"
                    width={180}
                    height={180}
                    placeholder="black"
                  />
                  <span className={styles.container__list__item__samp}>
                    <p className={styles.container__list__item__samp__items}>
                      <i className="bi bi-columns-gap"></i>
                      <b>Design</b>
                    </p>
                    <p className={styles.container__list__item__samp__items}>
                      <i className="bi bi-clock"></i>
                      <b>3 Month</b>
                    </p>
                  </span>
                  <h2 className={styles.container__list__item__title}>
                    AWS Certified solutions Architect
                  </h2>
                  <p className={styles.container__list__item__text}>
                    Lorem ipsum dolor sit amet, consectetur adipising elit, sed
                    do eiusmod tempor
                  </p>
                  <span className={styles.container__list__item__span}>
                    <p className={styles.container__list__item__span__items}>
                      <Image
                        src="/image/user.png"
                        alt="img"
                        // layout="fill"
                        width={50}
                        height={50}
                        placeholder="black"
                      />
                      <b
                        className={
                          styles.container__list__item__span__items__name
                        }
                      >
                        Jony
                      </b>
                    </p>
                    <p className={styles.container__list__item__span__items}>
                      <i
                        className={
                          styles.container__list__item__span__items__price
                        }
                      >
                        $100
                      </i>
                      <b
                        className={
                          styles.container__list__item__span__items__sale
                        }
                      >
                        $80
                      </b> 
                    </p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Blog;