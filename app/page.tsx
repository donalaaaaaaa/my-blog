const posts = [
  { date: "2026.09.08", tag: "Research", title: "有限高斯预算下，致密化策略该如何做选择？", excerpt: "把 residual、coverage 和 optimization response 放进同一条证据链，重新审视 Gaussian densification。", accent: "lavender" },
  { date: "2026.09.02", tag: "Engineering", title: "把一次复现做成一条可复用的实验流水线", excerpt: "从显存边界、watchdog 到 checkpoint，把“跑通”变成可以交接的工程资产。", accent: "peach" },
  { date: "2026.08.27", tag: "Notes", title: "一个人做长期项目时，我会保留哪些中间结果", excerpt: "失败的实验、模糊的判断和还没有结论的想法，都值得被好好保存。", accent: "mint" },
];

const nav = ["首页", "文章", "项目", "关于"];

export default function Home() {
  return (
    <main>
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />

      <nav className="nav shell">
        <a className="brand" href="/">aba<span>·</span>notes</a>
        <div className="navLinks">
          {nav.map((item, index) => (
            <a className={index === 0 ? "active" : ""} href={index === 0 ? "/" : "#"} key={item}>{item}</a>
          ))}
        </div>
        <a className="navAction" href="#about">认识我 <span>↗</span></a>
      </nav>

      <section className="hero shell">
        <div className="heroCopy">
          <p className="eyebrow"><span className="eyebrowDot" />正在记录 · 2026</p>
          <h1>把复杂的事，<br /><em>讲得更清楚。</em></h1>
          <p className="heroText">这里是我的个人空间，记录研究、工程实践，以及那些值得慢慢想明白的问题。</p>
          <div className="heroCta">
            <a className="primaryButton" href="#writing">阅读最新文章 <span>↓</span></a>
            <a className="textButton" href="#about">关于这个空间 <span>↗</span></a>
          </div>
        </div>
        <div className="heroOrb" aria-hidden="true">
          <div className="orbRing ringOne" />
          <div className="orbRing ringTwo" />
          <div className="orbCore"><span>思考<br />·<br />构建</span></div>
        </div>
      </section>

      <section className="signal shell">
        <div><span className="signalLabel">CURRENTLY</span><strong>在做 3DGS / 视觉系统研究</strong></div>
        <div><span className="signalLabel">BASED IN</span><strong>Tokyo · UTC+9</strong></div>
        <div><span className="signalLabel">OPEN TO</span><strong>有趣的问题与认真合作</strong></div>
      </section>

      <section className="writing shell" id="writing">
        <div className="sectionHead">
          <div><p className="eyebrow">精选记录</p><h2>最近写下的东西</h2></div>
          <a className="textButton" href="#">查看全部 <span>↗</span></a>
        </div>
        <div className="postGrid">
          {posts.map((post) => (
            <article className="postCard" key={post.title}>
              <div className={`cardVisual ${post.accent}`}><span>{post.tag}</span><div className="visualGlyph">✦</div></div>
              <div className="postMeta"><span>{post.date}</span><span className="metaLine" /> <span>{post.tag}</span></div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a className="readMore" href="#">继续阅读 <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="aboutMark">A</div>
        <div><p className="eyebrow">ABOUT THIS SPACE</p><h2>认真生活，认真做东西。</h2><p>我喜欢把研究做深，也喜欢把界面做得有温度。这个博客是实验室、工作台和客厅的混合体。</p></div>
        <a className="primaryButton" href="#">认识更多 <span>↗</span></a>
      </section>

      <footer className="footer shell"><span>© 2026 aba notes</span><span>Designed with care · Built with Next.js</span><span>回到顶部 ↑</span></footer>
    </main>
  );
}