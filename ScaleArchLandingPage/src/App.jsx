import Pradip from './Images/Pradip Chanda.jpeg';
import Rakesh from './Images/Rakesh.png';
import Viv from './Images/Viv.jpeg';
import './index.css';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
function App() {


  return (
    <>
      <link rel="stylesheet" href="/src/index.css"></link>
      <h1>ScaleArch</h1>
      <h2>From insight to impact</h2>
      <p class="desc">We help businesses achieve structured growth, transformation and market expansion</p>
      <hr />
      <h3>Helping businesses grow with clarity and structure</h3>
      <p class="shortnote">
        Businesses often reach a stage where growth creates new complexity —<br />across markets, processes,
        finance and leadership bandwidth.<br /><br />ScaleArch works with leadership teams to align strategy,
        execution and organisational<br />capability so that growth remains sustainable and scalable.
      </p>
      <p class="tag">Our work typically spans:</p>
      <ul class="sb">
        <li>
          Growth &<br />Business Strategy
          <p>
            Supporting businesses in defining practical<br />growth paths and expansion strategies<br />aligned with
            operational and financial realities.
          </p>
        </li>
        <li>
          Business Process &<br />Transformation
          <p>
            Strengthening operating processes and<br />preparing organisations for digitisation<br />and organisational
            scale.
          </p>
        </li>
        <li>
          Governance, Capability &<br />Market Expansion
          <p>Building organisational readiness for<br />sustained growth and supporting entry into<br />new markets.</p>
        </li>
      </ul>
      <hr />
      <h4>How we work</h4>
      <p class="highlight">Structure before scale</p>
      <p class="working">
        Most business challenges arise not from lack of ambition, but from misalignment between growth objectives and
        <br />organisational readiness.<br /><br />Our approach focuses on:
        <ul class="approach">
          <li><FaCheckCircle class="icon" />Understanding the real problem before recommending solutions</li>
          <li><FaCheckCircle class="icon" />Bringing business, financial, and operational perspectives together</li>
          <li><FaCheckCircle class="icon" />Translating strategy into practical execution frameworks</li>
          <li><FaCheckCircle class="icon" />Operational excellence through the strategic deployment of cost-effective technologies</li>
        </ul>
        This ensures decisions lead to outcomes, not just plans.
      </p>
      <hr />
      <h4>Who we work with</h4>
      <p class="working">We typically work with:
        <ul class="approach">
          <li><FaArrowRight class="icon" />Promoter-led and mid-sized businesses scaling operations</li>
          <li><FaArrowRight class="icon" />Organisations undergoing transformation or professionalization</li>
          <li><FaArrowRight class="icon" />Companies expanding into new markets</li>
          <li><FaArrowRight class="icon" />International businesses evaluating or entering India</li>
        </ul>
      </p>
      <hr />
      <h5>Founders</h5>
      <p class="highlight">Operator-led experience</p>
      <p class="working">
        ScaleArch is founded by senior business leaders with extensive experience in building and managing large-scale
        <br />operations across industries. The founding team brings complementary expertise across business leadership,
        finance<br />and governance and technology-led operations.
      </p>
      <hr class="founder-hr" />
      <div class="founder-info">
        <img src={Pradip} alt="Pradip Chanda" type="image/jpeg" />
        <p class="founder-name">
          Pradip Chanda<br /><br />
          <span class="founder-desc">
            Business leader with over three decades of experience in leading large-scale operations, P&L<br />management and distribution-led growth across telecom, consumer and retail-oriented businesses.<br />Former Circle COO and Business Head, with extensive experience in scaling organisations, driving<br />market expansion and leading transformation initiatives in complex and competitive environments. He<br />holds an MBA.<br />
            His work has focused on aligning growth ambition with operational execution, financial discipline and organisational capability, enabling businesses to scale in a structured and sustainable manner. He brings<br />an operator's perspective to business challenges, combining strategic clarity with hands-on execution<br />experience across diverse markets in India, along with exposure to international business environments.
          </span>
        </p>
      </div>
      <hr class="founder-hr" />
      <div class="founder-info">
        <img src={Rakesh} alt="Rakesh Kumar Singh" type="image/png" />
        <p class="founder-name">
          Rakesh Kumar Singh<br /><br />
          <span class="founder-desc">
            He is a Chartered Accountant and Company Secretary, with deep hands-on experience in building financial systems that support scale, governance maturity, and long-term sustainability. Led large, distributed finance and operations teams and worked closely with promoters, CEOs, CFOs and boards to support growth decisions, expansion programs and transformation initiatives. His work sits at the intersection of finance control, governance frameworks, capital allocation and operational execution. He brings a builder's mind-set to finance — strengthening financial control systems, improving decision quality through data and governance and enabling leadership teams to scale without losing control of cash flow, risk and execution discipline.
          </span>
        </p>
      </div>
      <hr class="founder-hr" />
      <div class="founder-info">
        <img src={Viv} alt="Vivaswan Bhattacharya" type="image/jpeg" />
        <p class="founder-name">
          Vivaswan Bhattacharya<br /><br />
          <span class="founder-desc">
            Senior technology and operations leader with 30+ years of experience across telecom, digital infrastructure and emerging technologies. Former senior executive responsible for large-scale, mission-critical operations, with a strong record of driving transformation, efficiency, and operational resilience.<br />
            Advises organisations on practical growth strategy, process improvement, governance, and market expansion aligned with real-world constraints. Brings a systems-level perspective that connects strategy with execution— helping leadership teams build scalable operating models, enhance organisational readiness, and achieve sustainable, long-term growth.
          </span>
        </p>
      </div>
      <hr />
      <h5>Start a conversation</h5>
      <p class="note">
        If you would like to discuss growth, transformation, or market expansion challenges, we would be glad to connect.<br /><br /><br />
        Email: <a href="mailto:contact@scalearch.com">contact@scalearch.com</a><br />
        LinkedIn: <a href="https://www.linkedin.com/company/scalearch/">https://www.linkedin.com/company/scalearch/</a><br /><br /><br />
      </p>
      <br /><br /><br /><br />
    </>

  )
}

export default App
